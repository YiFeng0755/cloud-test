.class Lcom/boyaa/autotest/ElementProvider$1;
.super Ljava/lang/Object;
.source "ElementProvider.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/boyaa/autotest/ElementProvider;->query(Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/boyaa/autotest/ElementProvider;

.field private final synthetic val$jsonObject:Lorg/json/JSONObject;


# direct methods
.method constructor <init>(Lcom/boyaa/autotest/ElementProvider;Lorg/json/JSONObject;)V
    .locals 0

    .prologue
    .line 1
    iput-object p1, p0, Lcom/boyaa/autotest/ElementProvider$1;->this$0:Lcom/boyaa/autotest/ElementProvider;

    iput-object p2, p0, Lcom/boyaa/autotest/ElementProvider$1;->val$jsonObject:Lorg/json/JSONObject;

    .line 101
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .prologue
    .line 104
    # getter for: Lcom/boyaa/autotest/ElementProvider;->_getHierarchy:I
    invoke-static {}, Lcom/boyaa/autotest/ElementProvider;->access$0()I

    move-result v0

    iget-object v1, p0, Lcom/boyaa/autotest/ElementProvider$1;->val$jsonObject:Lorg/json/JSONObject;

    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/boyaa/engine/made/GhostLib;->callLuaIdWithArgs(ILjava/lang/String;)I

    .line 105
    return-void
.end method
