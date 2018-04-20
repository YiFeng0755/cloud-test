local UI = require('byui.ui')

local function decode_json(args)
    local ret_args = nil
    xpcall(function()
        ret_args = cjson.decode(args)
    end, function() print_string(debug.traceback()) end)
    return ret_args
end

local function string_trim(s)
    return (string.gsub(s, "^%s*(.-)%s*$", "%1"))
end

local function string_split(str, pat)
    assert(type(str) == 'string', debug.traceback())
    local t = {}
    local fpat = "(.-)" .. pat
    local last_end = 1
    local s , e , cap = str:find(fpat, 1)
    while s do
        if s ~= 1 or cap ~= "" then
            t[#t+1] = cap
        end
        last_end = e+1
        s , e , cap = str:find(fpat, last_end)
    end
    if last_end <= #str then
        cap = str:sub(last_end)
        t[#t+1] = cap
    end
    return t
end

local function insertToTable(nodes, node, selection)
    table.insert(nodes, node)
end

local function get_attr_name_value(expr)
    local operations = { '>=' , '<=' , '!=' , '>' , '<' , '=' }
    for _ , op in ipairs(operations) do
        local pattern = string.format('(.+)%s(.+)', op)
        local attr_name , attr_value = expr:match(pattern)
        if attr_name ~= nil and attr_value ~= nil then
            return string_trim(attr_name) , string_trim(attr_value) , op
        end
    end
end

local function eval_predicate(node, expression)
    assert(type(expression) == 'string', debug.traceback())
    local expression_parts = string_split(expression, ' and ')

    for _ , expr in ipairs(expression_parts) do
        if expr == '*' then
        else
            local attr_name , attr_value , op = get_attr_name_value(expr)
            if attr_name ~= nil then
                if op == '>=' then
                    if node[attr_name] < tonumber(attr_value) then
                        return false
                    end
                elseif op == '<=' then
                    if node[attr_name] > tonumber(attr_value) then
                        return false
                    end
                elseif op == '!=' then
                    if tostring(node[attr_name]) == attr_value then
                        return false
                    end
                elseif op == '>' then
                    if node[attr_name] <= tonumber(attr_value) then
                        return false
                    end
                elseif op == '<' then
                    if node[attr_name] >= tonumber(attr_value) then
                        return false
                    end
                else
                    if tostring(node[attr_name]) ~= attr_value then
                        return false
                    end
                end
            else
            end
        end
    end

    return true
end

local function match(node, tag_name, expression)
    local node_name = node.name
    if not node_name or node_name == "" then
        node_name = 'element'
    else
        node_name = tostring(node_name)
    end

    if tag_name ~= node_name and tag_name ~= '*' then
        return false
    end

    if expression == nil then
        return true
    end

    return eval_predicate(node, expression)
end

local function parseNodes(xmlNode, segments, idx, nodes, selection)
    if idx > #segments then return {} end

    local segment = segments[idx]
    if segment.tag == '..' then --or segment.tag == "parent::node()" then
        return { idx+1 } -- return next idx to continue from at parent
    end

    local positions = {}
    local parent_positions = {}

    if segment.tag == "." then --or segment.tag == "self::node()"
        local pos_t = parseNodes(xmlNode, segments, idx+1, nodes, selection)
        for i=1 , #pos_t do
            local pos = pos_t[i]
            positions[#positions+1] = pos
        end
        pos_t = nil
    end

    if segment.tag == " " then --or segment.tag == "descendant-or-self::node()"
        local pos_t = parseNodes(xmlNode, segments, idx+1, nodes, selection)
        for i=1 , #pos_t do
            parent_positions[#parent_positions+1] = pos_t[i]
        end
        pos_t = nil

        for _ , node in ipairs(xmlNode.children) do
            local pos_t = parseNodes(node, segments, idx, nodes, selection)
            for i=1 , #pos_t do
                positions[#positions+1] = pos_t[i]
            end
            pos_t = nil
        end
    end

    local function node_children_lua31()
        for _ , node in ipairs(xmlNode.children) do
            local found = match(node, segment.tag, segment.expression)
            if found then
                segment.cur_index = segment.cur_index+1

                local insert = true
                if segment.index then
                    --print("index: " .. segment.index .. ", cur_index: " .. segment.cur_index)
                    if segment.cur_index == segment.index then
                        insert = true
                    else
                        insert = false
                    end
                end

                if insert then
                    if #segments == idx then
                        insertToTable(nodes, node, selection)
                    else
                        local pos_t = parseNodes(node, segments, idx+1, nodes, selection)
                        for i=1 , #pos_t do
                            local pos = pos_t[i]
                            positions[#positions+1] = pos
                        end
                        pos_t = nil
                    end
                end
            end
        end
    end

    node_children_lua31()

    for i=1 , #positions do
        local cur_pos = positions[i]

        if cur_pos > #segments then
            insertToTable(nodes, xmlNode, selection)

        elseif segments[cur_pos] == '..' then
            parent_positions[#parent_positions+1] = cur_pos+1

        else
            local pos_t = parseNodes(xmlNode, segments, cur_pos, nodes, selection)
            for i=1 , #pos_t do
                parent_positions[#parent_positions+1] = pos_t[i]
            end
            pos_t = nil
        end
    end

    return parent_positions
end

local function select_nodes(widget, query, nodes)
    -- invalid queries
    if query:find("///") ~= nil or query:find("//%.%.") ~= nil then return end

    local query = string_trim(query)
    if string.len(query) == 0 then return end

    query = string.gsub(query, "//", "/ /")
    local segments = string_split(query, '/')

    local last_tag = segments[#segments]
    local selection = nil

    if last_tag:find("@") == 1 or last_tag:find("text()") == 1 then
        selection = last_tag
        segments[#segments] = nil
    end

    local query_segments = {}
    for _ , segment in ipairs(segments) do
        local pred_start = segment:find("[[]") or 0
        local pred_end = segment:find("[]]")

        local tag = segment:sub(1, pred_start-1)

        local expression = nil
        local index = nil

        if pred_start > 0 and pred_end then
            expression = segment:sub(pred_start+1, pred_end-1)

            if pred_end < #segment then
                local idx_start = segment:find("[[]", pred_end+1)
                local idx_end = segment:find("[]]", pred_end+1)
                if idx_start and idx_end then
                    index = segment:sub(idx_start+1, idx_end-1)
                end
            elseif tonumber(expression) then
                index = expression
                expression = nil
            end
        end

        query_segments[#query_segments+1] = {
            ['tag'] = tag ,
            ['expression'] = expression ,
            ['index'] = tonumber(index) ,
            ['cur_index'] = 0 ,
        }
    end

    parseNodes(widget, query_segments, 1, nodes, selection)
end

local function get_nodes_by_xpath(xpath)
    if xpath == nil then return end

    local queries = {}
    if xpath:find('|') ~= nil then
        queries = string_split(xpath, '|')
    else
        queries = { xpath }
    end

    local nodes = {}
    for _ , q in ipairs(queries) do
        select_nodes(UI.root, q, nodes)
    end

    return nodes
end

local function is_label(o)
    return typeof(o, UI.Label)
end

local function get_hierarchy_scale(o)
    local root = UI.root
    local scale = {x=1,y=1}
    if o == root then
        return scale
    end

    local o = o.parent
    while o do
        scale.x = scale.x * o.scale.x
        scale.y = scale.y * o.scale.y
        if o == root then
            break
        end
        o = o.parent
    end

    return scale
end

local function dump_widget_info(o, dump_children, xpath , scale)
    scale = scale or get_hierarchy_scale(o)

    local self_scale = {x = scale.x * o.scale.x,
                        y = scale.y * o.scale.y}

    local pos = o:convert_to_root({0, 0})
    local r = {
        name = o.name,
        size = {width=o.size.x, height=o.size.y},
        position = {x=pos.x, y=pos.y},
        scale = self_scale,
        xpath = xpath,
        type = 'View',
    }
    if typeof(o, UI.Label) then
        r.text = o.text
        r.type = 'Text'
    elseif typeof(o, UI.Checkbox) then
        r.selected = o.on
        r.type = 'Checkbox'
    elseif typeof(o, UI.Switch) then
        r.selected = o.on
        r.type = 'Switch'
    elseif typeof(o, UI.Button) then
        r.type = 'Button'
    elseif typeof(o, UI.Slider) then
        r.type = 'Slider'
    elseif typeof(o, UI.InputView) then
        r.type = 'InputView'
    end
    if dump_children and #o.children > 0 then
        local c_name_index = {}
        r.children = {}
        for i, c in ipairs(o.children) do
            local c_xpath
            if xpath then
                local n_name = c.name
                if not n_name or n_name == "" then
                    n_name = 'element'
                else
                    n_name = tostring(n_name)
                end

                if not c_name_index[n_name] then c_name_index[n_name] = 0 end
                c_name_index[n_name] = c_name_index[n_name] + 1

                c_xpath = xpath .. '/' .. n_name
            end
            r.children[i] = dump_widget_info(c, dump_children, c_xpath,self_scale)
            r.children[i].index = c_name_index[n_name]
        end
    end
    return r
end

function getHierarchy(args)
    dict_set_string('Elements', 'getHierarchy', '')
    local root = UI.root
    local result = cjson.encode(dump_widget_info(root, true, '/'))

    dict_set_string('Elements', 'getHierarchy', result)
end

function getNodesByXPath(args)
    dict_set_string('Elements', 'getNodesByXPath', "")

    local args = decode_json(args)
    if args == nil then return end

    local nodes = get_nodes_by_xpath(args.xpath)

    local v = {}
    for i , node in ipairs(nodes or {}) do
        v[i] = dump_widget_info(node, false)
    end

    local result = cjson.encode(v)
    dict_set_string('Elements', 'getNodesByXPath', result)
    return result
end

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
local function get_element_by_name(w, name, elements)
    w = w or UI.root

    if name == nil then return end
    if not w.visible then return end

    --
    for _ , c in ipairs(w.children) do
        if c.visible and c.name == name then
            table.insert(elements, c)
        end

        get_element_by_name(c, name, elements)
    end
end

local function get_element_by_text(w, text, elements)
    if text == nil then return end

    w = w or UI.root
    if not w.visible then return end

    --
    for _ , c in ipairs(w.children) do
        if c.___type == 'class<Label>' then
            local data = c:get_data()
            for index , v in pairs(data) do
                if v['text'] == text then
                    table.insert(elements, c)
                end
            end
        end

        get_element_by_text(c, text, elements)
    end
end

function getElements(args)
    dict_set_string('Elements', 'getElements', "")
    local args = decode_json(args)
    if args == nil then return end

    -----------------------------------------------------------------------------------------------
    -- get parent elements by args.parent_name from root node
    local root_parents = {}
    get_element_by_name(nil, args.parent_name, root_parents)

    if #root_parents == 0 then root_parents[#root_parents+1] = UI.root end

    -----------------------------------------------------------------------------------------------
    -- get elements by args.name from parent elements
    local c_name_elements = {}
    if args.name then
        for _ , root in ipairs(root_parents) do
            get_element_by_name(root, args.name, c_name_elements)
        end
    end

    -----------------------------------------------------------------------------------------------
    -- get elements by args.text from parent elements
    local c_text_elements = {}
    if args.text then
        for _ , root in ipairs(root_parents) do
            get_element_by_text(root, args.text, c_text_elements)
        end
    end

    -- operation : 1 and / 2 or / 3 absolute
    local operation = tostring(args.operation)

    local result = {}
    local index = 1
    if operation == "1" then
        local function has_element(w)
            for _ , text_element in ipairs(c_text_elements) do
                if w == text_element then return true end
            end

            return false
        end

        for _ , name_element in ipairs(c_name_elements) do
            if has_element(name_element) then
                if result[index] == nil then result[index] = {} end
                result[index] = dump_widget_info(name_element, false)
                index = index + 1
            end
        end
    elseif operation == "2" then
        for _ , name_element in ipairs(c_name_elements) do
            if result[index] == nil then result[index] = {} end
            result[index] = dump_widget_info(name_element, false)
            index = index + 1
        end
        for _ , text_element in ipairs(c_text_elements) do
            if result[index] == nil then result[index] = {} end
            result[index] = dump_widget_info(text_element, false)
            index = index + 1
        end
    else
        if args.name then
            result.name_element = {}
            for _ , name_element in ipairs(c_name_elements) do
                if result.name_element[index] == nil then result.name_element[index] = {} end
                result.name_element[index] = dump_widget_info(name_element, false)
                index = index + 1
            end
        end

        if args.text then
            result.text_element = {}
            index = 1
            for _ , text_element in ipairs(c_text_elements) do
                if result.text_element[index] == nil then result.text_element[index] = {} end
                result.text_element[index] = dump_widget_info(text_element, false)
                index = index + 1
            end
        end
    end

    local result = cjson.encode(result)

    dict_set_string('Elements', 'getElements', result)

    return result
end

function setElementText(args)
    local args = decode_json(args)
    if args == nil then return dict_set_string('Elements', 'setElementText', 'false') end

    local nodes = {}
    if args.xpath then
        nodes = get_nodes_by_xpath(args.xpath)
    else
        get_element_by_name(nil, args.name, nodes)
    end

    local result = 'false'

    for i , node in ipairs(nodes or {}) do
        if typeof(node, UI.InputView) then
            node:resign_focus()
            node.text = args.text or ""
            result = 'true'
        end
    end

    dict_set_string('Elements', 'setElementText', result)
end
