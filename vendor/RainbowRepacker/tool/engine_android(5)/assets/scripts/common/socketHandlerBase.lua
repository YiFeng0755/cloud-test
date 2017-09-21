require("core/object");
require("common/socketHandlersStack");

-----------------------------------------------------------------------------
SocketHandlerBase = class();

SocketHandlerBase.s_socketCmdFuncMap = {
    
};

SocketHandlerBase.ctor = function(self)
    self.m_hasDestroyed = false;
    self:_addSocketHandler();
end

SocketHandlerBase.dtor = function(self)
    self.m_hasDestroyed = true;     
    self:_removeSocketHandler();
end

SocketHandlerBase.onReceivePacket = function(self, cmd, ...)
    if self.m_hasDestroyed then
        --��������Ѿ����ͷţ����ٽ�����Ϣ
        return;
    end

   local func = nil;
    local curObj = self;
    while curObj do
        func = curObj.s_socketCmdFuncMap[cmd];
        if func then
            break;
        else
            curObj = curObj.super;
        end
    end
    
    if type(func) == "function" then
        return true,func(self,...);

    elseif type(func) == "string" then
        local funcSelf = nil;
        local curObj = self;
        while curObj do
            funcSelf = curObj[func];
            if funcSelf then
                break;
            else
                curObj = curObj.super;
            end
        end
        if funcSelf then
            return true,funcSelf(self,...);
        end
    end

    return;
end

SocketHandlerBase._addSocketHandler = function(self)
    SocketHandlersStack.getInstance():add(self,self.onReceivePacket);
end

--�����п��ܲ��������Ӷ������ͷŵ�
SocketHandlerBase._removeSocketHandler = function(self)
    SocketHandlersStack.getInstance():remove(self);
end