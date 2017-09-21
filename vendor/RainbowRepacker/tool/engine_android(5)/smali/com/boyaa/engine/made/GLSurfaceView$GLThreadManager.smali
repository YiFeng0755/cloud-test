.class Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;
.super Ljava/lang/Object;
.source "GLSurfaceView.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/boyaa/engine/made/GLSurfaceView;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "GLThreadManager"
.end annotation


# static fields
.field private static TAG:Ljava/lang/String; = null

.field private static final kGLES_20:I = 0x20000

.field private static final kMSM7K_RENDERER_PREFIX:Ljava/lang/String; = "Q3Dimension MSM7500 "


# instance fields
.field private mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

.field private mGLESDriverCheckComplete:Z

.field private mGLESVersion:I

.field private mGLESVersionCheckComplete:Z

.field private mLimitedGLESContexts:Z

.field private mMultipleGLESContextsAllowed:Z


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .prologue
    .line 1815
    const-string v0, "GLThreadManager"

    sput-object v0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->TAG:Ljava/lang/String;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .prologue
    .line 1814
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method synthetic constructor <init>(Lcom/boyaa/engine/made/GLSurfaceView$1;)V
    .locals 0
    .param p1, "x0"    # Lcom/boyaa/engine/made/GLSurfaceView$1;

    .prologue
    .line 1814
    invoke-direct {p0}, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;-><init>()V

    return-void
.end method

.method private checkGLESVersion()V
    .locals 3

    .prologue
    const/high16 v2, 0x20000

    const/4 v1, 0x1

    .line 1898
    iget-boolean v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mGLESVersionCheckComplete:Z

    if-nez v0, :cond_1

    .line 1902
    iput v2, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mGLESVersion:I

    .line 1903
    iget v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mGLESVersion:I

    if-lt v0, v2, :cond_0

    .line 1904
    iput-boolean v1, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mMultipleGLESContextsAllowed:Z

    .line 1910
    :cond_0
    iput-boolean v1, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mGLESVersionCheckComplete:Z

    .line 1912
    :cond_1
    return-void
.end method


# virtual methods
.method public declared-synchronized checkGLDriver(Ljavax/microedition/khronos/opengles/GL10;)V
    .locals 5
    .param p1, "gl"    # Ljavax/microedition/khronos/opengles/GL10;

    .prologue
    const/4 v2, 0x0

    const/4 v1, 0x1

    .line 1879
    monitor-enter p0

    :try_start_0
    iget-boolean v3, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mGLESDriverCheckComplete:Z

    if-nez v3, :cond_1

    .line 1880
    invoke-direct {p0}, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->checkGLESVersion()V

    .line 1881
    const/16 v3, 0x1f01

    invoke-interface {p1, v3}, Ljavax/microedition/khronos/opengles/GL10;->glGetString(I)Ljava/lang/String;

    move-result-object v0

    .line 1882
    .local v0, "renderer":Ljava/lang/String;
    iget v3, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mGLESVersion:I

    const/high16 v4, 0x20000

    if-ge v3, v4, :cond_0

    .line 1883
    const-string v3, "Q3Dimension MSM7500 "

    invoke-virtual {v0, v3}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v3

    if-nez v3, :cond_2

    move v3, v1

    :goto_0
    iput-boolean v3, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mMultipleGLESContextsAllowed:Z

    .line 1885
    invoke-virtual {p0}, Ljava/lang/Object;->notifyAll()V

    .line 1887
    :cond_0
    iget-boolean v3, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mMultipleGLESContextsAllowed:Z

    if-nez v3, :cond_3

    :goto_1
    iput-boolean v1, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mLimitedGLESContexts:Z

    .line 1893
    const/4 v1, 0x1

    iput-boolean v1, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mGLESDriverCheckComplete:Z
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 1895
    .end local v0    # "renderer":Ljava/lang/String;
    :cond_1
    monitor-exit p0

    return-void

    .restart local v0    # "renderer":Ljava/lang/String;
    :cond_2
    move v3, v2

    .line 1883
    goto :goto_0

    :cond_3
    move v1, v2

    .line 1887
    goto :goto_1

    .line 1879
    .end local v0    # "renderer":Ljava/lang/String;
    :catchall_0
    move-exception v1

    monitor-exit p0

    throw v1
.end method

.method public releaseEglContextLocked(Lcom/boyaa/engine/made/GLSurfaceView$GLThread;)V
    .locals 1
    .param p1, "thread"    # Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    .prologue
    .line 1860
    iget-object v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    if-ne v0, p1, :cond_0

    .line 1861
    const/4 v0, 0x0

    iput-object v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    .line 1863
    :cond_0
    invoke-virtual {p0}, Ljava/lang/Object;->notifyAll()V

    .line 1864
    return-void
.end method

.method public declared-synchronized shouldReleaseEGLContextWhenPausing()Z
    .locals 1

    .prologue
    .line 1870
    monitor-enter p0

    :try_start_0
    iget-boolean v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mLimitedGLESContexts:Z
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    monitor-exit p0

    return v0

    :catchall_0
    move-exception v0

    monitor-exit p0

    throw v0
.end method

.method public declared-synchronized shouldTerminateEGLWhenPausing()Z
    .locals 1

    .prologue
    .line 1874
    monitor-enter p0

    :try_start_0
    invoke-direct {p0}, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->checkGLESVersion()V

    .line 1875
    iget-boolean v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mMultipleGLESContextsAllowed:Z
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v0, :cond_0

    const/4 v0, 0x1

    :goto_0
    monitor-exit p0

    return v0

    :cond_0
    const/4 v0, 0x0

    goto :goto_0

    .line 1874
    :catchall_0
    move-exception v0

    monitor-exit p0

    throw v0
.end method

.method public declared-synchronized threadExiting(Lcom/boyaa/engine/made/GLSurfaceView$GLThread;)V
    .locals 1
    .param p1, "thread"    # Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    .prologue
    .line 1821
    monitor-enter p0

    const/4 v0, 0x1

    :try_start_0
    # setter for: Lcom/boyaa/engine/made/GLSurfaceView$GLThread;->mExited:Z
    invoke-static {p1, v0}, Lcom/boyaa/engine/made/GLSurfaceView$GLThread;->access$1102(Lcom/boyaa/engine/made/GLSurfaceView$GLThread;Z)Z

    .line 1822
    iget-object v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    if-ne v0, p1, :cond_0

    .line 1823
    const/4 v0, 0x0

    iput-object v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    .line 1825
    :cond_0
    invoke-virtual {p0}, Ljava/lang/Object;->notifyAll()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 1826
    monitor-exit p0

    return-void

    .line 1821
    :catchall_0
    move-exception v0

    monitor-exit p0

    throw v0
.end method

.method public tryAcquireEglContextLocked(Lcom/boyaa/engine/made/GLSurfaceView$GLThread;)Z
    .locals 2
    .param p1, "thread"    # Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    .prologue
    const/4 v0, 0x1

    .line 1836
    iget-object v1, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    if-eq v1, p1, :cond_0

    iget-object v1, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    if-nez v1, :cond_2

    .line 1837
    :cond_0
    iput-object p1, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    .line 1838
    invoke-virtual {p0}, Ljava/lang/Object;->notifyAll()V

    .line 1852
    :cond_1
    :goto_0
    return v0

    .line 1841
    :cond_2
    invoke-direct {p0}, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->checkGLESVersion()V

    .line 1842
    iget-boolean v1, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mMultipleGLESContextsAllowed:Z

    if-nez v1, :cond_1

    .line 1849
    iget-object v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    if-eqz v0, :cond_3

    .line 1850
    iget-object v0, p0, Lcom/boyaa/engine/made/GLSurfaceView$GLThreadManager;->mEglOwner:Lcom/boyaa/engine/made/GLSurfaceView$GLThread;

    invoke-virtual {v0}, Lcom/boyaa/engine/made/GLSurfaceView$GLThread;->requestReleaseEglContextLocked()V

    .line 1852
    :cond_3
    const/4 v0, 0x0

    goto :goto_0
.end method
