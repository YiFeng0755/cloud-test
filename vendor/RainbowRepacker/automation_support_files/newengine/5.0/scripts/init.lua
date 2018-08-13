--[[--ldoc desc
@module init
@author YuchengMo

Date   2018-05-07 11:02:42
Last Modified by   LensarZhang
Last Modified time 2018-07-19 11:20:50
]]
cjson       = import("babe/encoding/json");
local LuaBridge = import("babe/luabridge")

require("element_helper")
local init = {};


init.getHierarchy = getHierarchy;
init.getNodesByXPath = getNodesByXPath;
init.getElements = getElements;
init.setElementText = setElementText;


init._getHierarchy = function (args)
	args = cjson.decode(args)
	local result = getHierarchy(args.arg)
	LuaBridge.call_java(args.class,args.method,'(Ljava/lang/String;)V',{result})
end

init._getNodesByXPath = function (args)
	args = cjson.decode(args)
	local result = getNodesByXPath(args.arg)
	LuaBridge.call_java(args.class,args.method,'(Ljava/lang/String;)V',{result})
end

init._getElements = function (args)
	args = cjson.decode(args)
	local result = getElements(args.arg)
	LuaBridge.call_java(args.class,args.method,'(Ljava/lang/String;)V',{result})
end

init._setElementText = function (args)
	args = cjson.decode(args)
	local result = setElementText(args.arg)
	LuaBridge.call_java(args.class,args.method,'(Ljava/lang/String;)V',{result})
end


-- init.init = function( ... )
-- 	local args = {init._getHierarchy, init._getNodesByXPath , init._getElements, init._setElementText}

-- 	local success, result = LuaBridge.call_java(
-- 	    'com/boyaa/autotest',
-- 	    'initAutoTest',
-- 	    '(IIII)V',
-- 	    args)
-- end


-- android调用
local app = import("babe.application").Application
if app.instance().platform == 2 then
	local args = {init._getHierarchy, init._getNodesByXPath , init._getElements, init._setElementText}

	local success, result = LuaBridge.call_java(
	    'com/boyaa/autotest/ElementProvider',
	    'initAutoTest',
	    '(IIII)V',
	    args)
end

return init;