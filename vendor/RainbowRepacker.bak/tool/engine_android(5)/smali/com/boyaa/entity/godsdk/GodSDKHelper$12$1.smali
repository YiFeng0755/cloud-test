.class Lcom/boyaa/entity/godsdk/GodSDKHelper$12$1;
.super Ljava/lang/Object;
.source "GodSDKHelper.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/boyaa/entity/godsdk/GodSDKHelper$12;->onCallSuccess(Lcom/boyaa/godsdk/callback/CallbackStatus;Ljava/util/Map;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/boyaa/entity/godsdk/GodSDKHelper$12;

.field private final synthetic val$map:Ljava/util/Map;


# direct methods
.method constructor <init>(Lcom/boyaa/entity/godsdk/GodSDKHelper$12;Ljava/util/Map;)V
    .locals 0

    .prologue
    .line 1
    iput-object p1, p0, Lcom/boyaa/entity/godsdk/GodSDKHelper$12$1;->this$1:Lcom/boyaa/entity/godsdk/GodSDKHelper$12;

    iput-object p2, p0, Lcom/boyaa/entity/godsdk/GodSDKHelper$12$1;->val$map:Ljava/util/Map;

    .line 555
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .prologue
    .line 559
    invoke-static {}, Lcom/boyaa/app/core/HandlerManager;->getHandlerManager()Lcom/boyaa/app/core/HandlerManager;

    move-result-object v0

    const-string v1, "godsdkSDKSpecialMethodCall"

    new-instance v2, Lcom/boyaa/util/JsonUtil;

    iget-object v3, p0, Lcom/boyaa/entity/godsdk/GodSDKHelper$12$1;->val$map:Ljava/util/Map;

    invoke-direct {v2, v3}, Lcom/boyaa/util/JsonUtil;-><init>(Ljava/util/Map;)V

    invoke-virtual {v2}, Lcom/boyaa/util/JsonUtil;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/boyaa/app/core/HandlerManager;->luaCallEvent(Ljava/lang/String;Ljava/lang/String;)V

    .line 560
    return-void
.end method