.class Lcom/boyaa/downloader/service/DownloadService$3;
.super Ljava/lang/Object;
.source "DownloadService.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/boyaa/downloader/service/DownloadService;->updateLocalVersion(Ljava/lang/String;Ljava/io/File;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/boyaa/downloader/service/DownloadService;


# direct methods
.method constructor <init>(Lcom/boyaa/downloader/service/DownloadService;)V
    .locals 0

    .prologue
    .line 1
    iput-object p1, p0, Lcom/boyaa/downloader/service/DownloadService$3;->this$0:Lcom/boyaa/downloader/service/DownloadService;

    .line 260
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .prologue
    .line 264
    invoke-static {}, Lcom/boyaa/app/core/HandlerManager;->getHandlerManager()Lcom/boyaa/app/core/HandlerManager;

    move-result-object v0

    const-string v1, "updateAPK"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lcom/boyaa/app/core/HandlerManager;->luaCallEvent(Ljava/lang/String;Ljava/lang/String;)V

    .line 265
    return-void
.end method
