.class public Lcom/boyaa/videodemo/utils/ThreadUtils$ThreadChecker;
.super Ljava/lang/Object;
.source "ThreadUtils.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/boyaa/videodemo/utils/ThreadUtils;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "ThreadChecker"
.end annotation


# instance fields
.field private thread:Ljava/lang/Thread;


# direct methods
.method public constructor <init>()V
    .locals 1

    .prologue
    .line 15
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 16
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    iput-object v0, p0, Lcom/boyaa/videodemo/utils/ThreadUtils$ThreadChecker;->thread:Ljava/lang/Thread;

    .line 15
    return-void
.end method


# virtual methods
.method public checkIsOnValidThread()V
    .locals 2

    .prologue
    .line 19
    iget-object v0, p0, Lcom/boyaa/videodemo/utils/ThreadUtils$ThreadChecker;->thread:Ljava/lang/Thread;

    if-nez v0, :cond_0

    .line 20
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    iput-object v0, p0, Lcom/boyaa/videodemo/utils/ThreadUtils$ThreadChecker;->thread:Ljava/lang/Thread;

    .line 22
    :cond_0
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    iget-object v1, p0, Lcom/boyaa/videodemo/utils/ThreadUtils$ThreadChecker;->thread:Ljava/lang/Thread;

    if-eq v0, v1, :cond_1

    .line 23
    new-instance v0, Ljava/lang/IllegalStateException;

    const-string v1, "Wrong thread"

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 25
    :cond_1
    return-void
.end method

.method public detachThread()V
    .locals 1

    .prologue
    .line 28
    const/4 v0, 0x0

    iput-object v0, p0, Lcom/boyaa/videodemo/utils/ThreadUtils$ThreadChecker;->thread:Ljava/lang/Thread;

    .line 29
    return-void
.end method
