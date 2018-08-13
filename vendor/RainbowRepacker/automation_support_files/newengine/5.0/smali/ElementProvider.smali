.class public Lcom/boyaa/autotest/ElementProvider;
.super Landroid/content/ContentProvider;
.source "ElementProvider.java"


# static fields
.field private static final AUTHORITY:Ljava/lang/String; = "com.boyaa.test.providers.element"

.field private static final ELEMENTS:I = 0x1

.field private static final GET_HIERARCHY:I = 0x0

.field public static final TESTSUPPORT_TAG:Ljava/lang/String; = "testsupport"

.field private static _getElements:I

.field private static _getHierarchy:I

.field private static _getNodesByXPath:I

.field private static _setElementText:I

.field public static isback:Ljava/lang/Boolean;

.field private static final matcher:Landroid/content/UriMatcher;

.field static returnCursor:Landroid/database/MatrixCursor;

.field public static returnInt:I


# direct methods
.method static constructor <clinit>()V
    .locals 4

    .prologue
    const/4 v3, 0x0

    .line 44
    const/4 v0, 0x0

    sput-object v0, Lcom/boyaa/autotest/ElementProvider;->returnCursor:Landroid/database/MatrixCursor;

    .line 45
    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    sput-object v0, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    .line 46
    sput v3, Lcom/boyaa/autotest/ElementProvider;->returnInt:I

    .line 52
    new-instance v0, Landroid/content/UriMatcher;

    const/4 v1, -0x1

    invoke-direct {v0, v1}, Landroid/content/UriMatcher;-><init>(I)V

    sput-object v0, Lcom/boyaa/autotest/ElementProvider;->matcher:Landroid/content/UriMatcher;

    .line 54
    sget-object v0, Lcom/boyaa/autotest/ElementProvider;->matcher:Landroid/content/UriMatcher;

    const-string v1, "com.boyaa.test.providers.element"

    const-string v2, "getHierarchy"

    invoke-virtual {v0, v1, v2, v3}, Landroid/content/UriMatcher;->addURI(Ljava/lang/String;Ljava/lang/String;I)V

    .line 55
    sget-object v0, Lcom/boyaa/autotest/ElementProvider;->matcher:Landroid/content/UriMatcher;

    const-string v1, "com.boyaa.test.providers.element"

    const-string v2, "elements"

    const/4 v3, 0x1

    invoke-virtual {v0, v1, v2, v3}, Landroid/content/UriMatcher;->addURI(Ljava/lang/String;Ljava/lang/String;I)V

    .line 56
    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .prologue
    .line 29
    invoke-direct {p0}, Landroid/content/ContentProvider;-><init>()V

    return-void
.end method

.method static synthetic access$0()I
    .locals 1

    .prologue
    .line 39
    sget v0, Lcom/boyaa/autotest/ElementProvider;->_getHierarchy:I

    return v0
.end method

.method static synthetic access$1()I
    .locals 1

    .prologue
    .line 40
    sget v0, Lcom/boyaa/autotest/ElementProvider;->_getNodesByXPath:I

    return v0
.end method

.method static synthetic access$2()I
    .locals 1

    .prologue
    .line 41
    sget v0, Lcom/boyaa/autotest/ElementProvider;->_getElements:I

    return v0
.end method

.method static synthetic access$3()I
    .locals 1

    .prologue
    .line 42
    sget v0, Lcom/boyaa/autotest/ElementProvider;->_setElementText:I

    return v0
.end method

.method public static getElementsCallBack(Ljava/lang/String;)V
    .locals 4
    .param p0, "result"    # Ljava/lang/String;

    .prologue
    const/4 v3, 0x1

    .line 249
    if-nez p0, :cond_0

    .line 250
    const-string v1, "testsupport"

    const-string v2, "getElements1"

    invoke-static {v1, v2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 258
    :goto_0
    const-string v1, "testsupport"

    const-string v2, "getElementsCallBack"

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 259
    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    sput-object v1, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    .line 260
    return-void

    .line 253
    :cond_0
    const-string v1, "testsupport"

    const-string v2, "getElements2"

    invoke-static {v1, v2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 254
    const-string v1, "testsupport"

    invoke-static {v1, p0}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 255
    new-array v0, v3, [Ljava/lang/String;

    const/4 v1, 0x0

    aput-object p0, v0, v1

    .line 256
    .local v0, "tableCursor1":[Ljava/lang/String;
    new-instance v1, Landroid/database/MatrixCursor;

    invoke-direct {v1, v0}, Landroid/database/MatrixCursor;-><init>([Ljava/lang/String;)V

    sput-object v1, Lcom/boyaa/autotest/ElementProvider;->returnCursor:Landroid/database/MatrixCursor;

    goto :goto_0
.end method

.method public static getHierarchyCallBack(Ljava/lang/String;)V
    .locals 4
    .param p0, "result"    # Ljava/lang/String;

    .prologue
    const/4 v3, 0x1

    .line 222
    if-nez p0, :cond_0

    .line 223
    const-string v1, "testsupport"

    const-string v2, "GET_HIERARCHY1"

    invoke-static {v1, v2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 231
    :goto_0
    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    sput-object v1, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    .line 232
    return-void

    .line 226
    :cond_0
    const-string v1, "testsupport"

    const-string v2, "GET_HIERARCHY2"

    invoke-static {v1, v2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 227
    const-string v1, "testsupport"

    invoke-static {v1, p0}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 228
    new-array v0, v3, [Ljava/lang/String;

    const/4 v1, 0x0

    aput-object p0, v0, v1

    .line 229
    .local v0, "tableCursor1":[Ljava/lang/String;
    new-instance v1, Landroid/database/MatrixCursor;

    invoke-direct {v1, v0}, Landroid/database/MatrixCursor;-><init>([Ljava/lang/String;)V

    sput-object v1, Lcom/boyaa/autotest/ElementProvider;->returnCursor:Landroid/database/MatrixCursor;

    goto :goto_0
.end method

.method public static getNodesByXPathCallBack(Ljava/lang/String;)V
    .locals 4
    .param p0, "result"    # Ljava/lang/String;

    .prologue
    const/4 v3, 0x1

    .line 235
    if-nez p0, :cond_0

    .line 236
    const-string v1, "testsupport"

    const-string v2, "getNodesByXPath1"

    invoke-static {v1, v2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 244
    :goto_0
    const-string v1, "testsupport"

    const-string v2, "getNodesByXPathCallBack"

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 245
    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    sput-object v1, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    .line 246
    return-void

    .line 239
    :cond_0
    const-string v1, "testsupport"

    const-string v2, "getNodesByXPath2"

    invoke-static {v1, v2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 240
    const-string v1, "testsupport"

    invoke-static {v1, p0}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 241
    new-array v0, v3, [Ljava/lang/String;

    const/4 v1, 0x0

    aput-object p0, v0, v1

    .line 242
    .local v0, "tableCursor1":[Ljava/lang/String;
    new-instance v1, Landroid/database/MatrixCursor;

    invoke-direct {v1, v0}, Landroid/database/MatrixCursor;-><init>([Ljava/lang/String;)V

    sput-object v1, Lcom/boyaa/autotest/ElementProvider;->returnCursor:Landroid/database/MatrixCursor;

    goto :goto_0
.end method

.method public static initAutoTest(IIII)V
    .locals 3
    .param p0, "getHierarchy"    # I
    .param p1, "getNodesByXPath"    # I
    .param p2, "getElements"    # I
    .param p3, "setElementText"    # I

    .prologue
    .line 59
    const-string v1, "testsupport"

    const-string v2, "init auto test method"

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 60
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    .line 61
    .local v0, "t":Ljava/lang/Thread;
    const-string v1, "zl_thread_id_lua_call"

    invoke-virtual {v0}, Ljava/lang/Thread;->getName()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 62
    sput p0, Lcom/boyaa/autotest/ElementProvider;->_getHierarchy:I

    .line 63
    sput p1, Lcom/boyaa/autotest/ElementProvider;->_getNodesByXPath:I

    .line 64
    sput p2, Lcom/boyaa/autotest/ElementProvider;->_getElements:I

    .line 65
    sput p3, Lcom/boyaa/autotest/ElementProvider;->_setElementText:I

    .line 66
    sget v1, Lcom/boyaa/autotest/ElementProvider;->_getHierarchy:I

    invoke-static {v1}, Lcom/boyaa/engine/made/GhostLib;->retainLuaId(I)I

    .line 67
    sget v1, Lcom/boyaa/autotest/ElementProvider;->_getNodesByXPath:I

    invoke-static {v1}, Lcom/boyaa/engine/made/GhostLib;->retainLuaId(I)I

    .line 68
    sget v1, Lcom/boyaa/autotest/ElementProvider;->_getElements:I

    invoke-static {v1}, Lcom/boyaa/engine/made/GhostLib;->retainLuaId(I)I

    .line 69
    sget v1, Lcom/boyaa/autotest/ElementProvider;->_setElementText:I

    invoke-static {v1}, Lcom/boyaa/engine/made/GhostLib;->retainLuaId(I)I

    .line 70
    return-void
.end method

.method public static setElementTextCallBack(Ljava/lang/String;)V
    .locals 5
    .param p0, "result"    # Ljava/lang/String;

    .prologue
    const/4 v4, 0x1

    .line 263
    new-instance v0, Ljava/lang/String;

    invoke-direct {v0, p0}, Ljava/lang/String;-><init>(Ljava/lang/String;)V

    .line 264
    .local v0, "result1":Ljava/lang/String;
    const-string v1, "testsupport"

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "returnInt:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 265
    invoke-virtual {p0}, Ljava/lang/String;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v2, "true"

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 266
    const-string v1, "testsupport"

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "returnInt0:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 267
    const/4 v1, 0x0

    sput v1, Lcom/boyaa/autotest/ElementProvider;->returnInt:I

    .line 272
    :goto_0
    const-string v1, "testsupport"

    const-string v2, "setElementTextCallBack"

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 273
    invoke-static {v4}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    sput-object v1, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    .line 274
    return-void

    .line 269
    :cond_0
    sput v4, Lcom/boyaa/autotest/ElementProvider;->returnInt:I

    .line 270
    const-string v1, "testsupport"

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "returnInt1:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0
.end method


# virtual methods
.method public delete(Landroid/net/Uri;Ljava/lang/String;[Ljava/lang/String;)I
    .locals 1
    .param p1, "uri"    # Landroid/net/Uri;
    .param p2, "selection"    # Ljava/lang/String;
    .param p3, "selectionArgs"    # [Ljava/lang/String;

    .prologue
    .line 217
    sget-object v0, Lcom/boyaa/autotest/ElementProvider;->returnCursor:Landroid/database/MatrixCursor;

    invoke-virtual {v0}, Landroid/database/MatrixCursor;->close()V

    .line 218
    const/4 v0, 0x0

    return v0
.end method

.method public getType(Landroid/net/Uri;)Ljava/lang/String;
    .locals 1
    .param p1, "uri"    # Landroid/net/Uri;

    .prologue
    .line 207
    const/4 v0, 0x0

    return-object v0
.end method

.method public insert(Landroid/net/Uri;Landroid/content/ContentValues;)Landroid/net/Uri;
    .locals 1
    .param p1, "uri"    # Landroid/net/Uri;
    .param p2, "values"    # Landroid/content/ContentValues;

    .prologue
    .line 212
    const/4 v0, 0x0

    return-object v0
.end method

.method public onCreate()Z
    .locals 1

    .prologue
    .line 76
    const/4 v0, 0x1

    return v0
.end method

.method public query(Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;
    .locals 7
    .param p1, "uri"    # Landroid/net/Uri;
    .param p2, "projection"    # [Ljava/lang/String;
    .param p3, "selection"    # Ljava/lang/String;
    .param p4, "selectionArgs"    # [Ljava/lang/String;
    .param p5, "sortOrder"    # Ljava/lang/String;

    .prologue
    .line 85
    sget-object v4, Lcom/boyaa/autotest/ElementProvider;->matcher:Landroid/content/UriMatcher;

    invoke-virtual {v4, p1}, Landroid/content/UriMatcher;->match(Landroid/net/Uri;)I

    move-result v3

    .line 87
    .local v3, "match":I
    const-string v4, "testsupport"

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 89
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 91
    .local v1, "jsonObject":Lorg/json/JSONObject;
    packed-switch v3, :pswitch_data_0

    .line 149
    new-instance v4, Ljava/lang/IllegalArgumentException;

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "Unknown URI: "

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v5, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-direct {v4, v5}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v4

    .line 93
    :pswitch_0
    const-string v4, "testsupport"

    const-string v5, "start GET_HIERARCHY"

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 95
    :try_start_0
    const-string v4, "class"

    const-string v5, "com/boyaa/autotest/ElementProvider"

    invoke-virtual {v1, v4, v5}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 96
    const-string v4, "method"

    const-string v5, "getHierarchyCallBack"

    invoke-virtual {v1, v4, v5}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 100
    :goto_0
    const-string v4, "testsupport"

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "jsonObject : "

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 101
    invoke-static {}, Lcom/boyaa/engine/made/AppActivity;->getInstance()Lcom/boyaa/engine/made/AppActivity;

    move-result-object v4

    new-instance v5, Lcom/boyaa/autotest/ElementProvider$1;

    invoke-direct {v5, p0, v1}, Lcom/boyaa/autotest/ElementProvider$1;-><init>(Lcom/boyaa/autotest/ElementProvider;Lorg/json/JSONObject;)V

    invoke-virtual {v4, v5}, Lcom/boyaa/engine/made/AppActivity;->runOnLuaThread(Ljava/lang/Runnable;)V

    .line 151
    :goto_1
    sget-object v4, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    invoke-virtual {v4}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v4

    if-eqz v4, :cond_1

    .line 160
    sget-object v4, Lcom/boyaa/autotest/ElementProvider;->returnCursor:Landroid/database/MatrixCursor;

    if-nez v4, :cond_2

    .line 161
    const-string v4, "testsupport"

    const-string v5, "returnCursor4: null"

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 166
    :goto_2
    const/4 v4, 0x0

    invoke-static {v4}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v4

    sput-object v4, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    .line 167
    sget-object v4, Lcom/boyaa/autotest/ElementProvider;->returnCursor:Landroid/database/MatrixCursor;

    return-object v4

    .line 97
    :catch_0
    move-exception v0

    .line 98
    .local v0, "e":Lorg/json/JSONException;
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    goto :goto_0

    .line 109
    .end local v0    # "e":Lorg/json/JSONException;
    :pswitch_1
    const-string v4, "testsupport"

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "selection elements:"

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v5, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 111
    :try_start_1
    new-instance v2, Lorg/json/JSONObject;

    invoke-direct {v2, p3}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 112
    .local v2, "jsonObject2":Lorg/json/JSONObject;
    const-string v4, "xpath"

    invoke-virtual {v2, v4}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_1

    move-result v4

    if-eqz v4, :cond_0

    .line 114
    :try_start_2
    const-string v4, "arg"

    invoke-virtual {v1, v4, p3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 115
    const-string v4, "class"

    const-string v5, "com/boyaa/autotest/ElementProvider"

    invoke-virtual {v1, v4, v5}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 116
    const-string v4, "method"

    const-string v5, "getNodesByXPathCallBack"

    invoke-virtual {v1, v4, v5}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_2
    .catch Lorg/json/JSONException; {:try_start_2 .. :try_end_2} :catch_2

    .line 120
    :goto_3
    :try_start_3
    const-string v4, "testsupport"

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "jsonObject : "

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 121
    invoke-static {}, Lcom/boyaa/engine/made/AppActivity;->getInstance()Lcom/boyaa/engine/made/AppActivity;

    move-result-object v4

    new-instance v5, Lcom/boyaa/autotest/ElementProvider$2;

    invoke-direct {v5, p0, v1}, Lcom/boyaa/autotest/ElementProvider$2;-><init>(Lcom/boyaa/autotest/ElementProvider;Lorg/json/JSONObject;)V

    invoke-virtual {v4, v5}, Lcom/boyaa/engine/made/AppActivity;->runOnLuaThread(Ljava/lang/Runnable;)V
    :try_end_3
    .catch Lorg/json/JSONException; {:try_start_3 .. :try_end_3} :catch_1

    goto :goto_1

    .line 144
    .end local v2    # "jsonObject2":Lorg/json/JSONObject;
    :catch_1
    move-exception v0

    .line 145
    .restart local v0    # "e":Lorg/json/JSONException;
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    goto :goto_1

    .line 117
    .end local v0    # "e":Lorg/json/JSONException;
    .restart local v2    # "jsonObject2":Lorg/json/JSONObject;
    :catch_2
    move-exception v0

    .line 118
    .restart local v0    # "e":Lorg/json/JSONException;
    :try_start_4
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V
    :try_end_4
    .catch Lorg/json/JSONException; {:try_start_4 .. :try_end_4} :catch_1

    goto :goto_3

    .line 130
    .end local v0    # "e":Lorg/json/JSONException;
    :cond_0
    :try_start_5
    const-string v4, "arg"

    invoke-virtual {v1, v4, p3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 131
    const-string v4, "class"

    const-string v5, "com/boyaa/autotest/ElementProvider"

    invoke-virtual {v1, v4, v5}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 132
    const-string v4, "method"

    const-string v5, "getElementsCallBack"

    invoke-virtual {v1, v4, v5}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_5
    .catch Lorg/json/JSONException; {:try_start_5 .. :try_end_5} :catch_3

    .line 136
    :goto_4
    :try_start_6
    const-string v4, "testsupport"

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "jsonObject : "

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 137
    invoke-static {}, Lcom/boyaa/engine/made/AppActivity;->getInstance()Lcom/boyaa/engine/made/AppActivity;

    move-result-object v4

    new-instance v5, Lcom/boyaa/autotest/ElementProvider$3;

    invoke-direct {v5, p0, v1}, Lcom/boyaa/autotest/ElementProvider$3;-><init>(Lcom/boyaa/autotest/ElementProvider;Lorg/json/JSONObject;)V

    invoke-virtual {v4, v5}, Lcom/boyaa/engine/made/AppActivity;->runOnLuaThread(Ljava/lang/Runnable;)V

    goto/16 :goto_1

    .line 133
    :catch_3
    move-exception v0

    .line 134
    .restart local v0    # "e":Lorg/json/JSONException;
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V
    :try_end_6
    .catch Lorg/json/JSONException; {:try_start_6 .. :try_end_6} :catch_1

    goto :goto_4

    .line 153
    .end local v0    # "e":Lorg/json/JSONException;
    .end local v2    # "jsonObject2":Lorg/json/JSONObject;
    :cond_1
    const-wide/16 v4, 0x1f4

    :try_start_7
    invoke-static {v4, v5}, Ljava/lang/Thread;->sleep(J)V

    .line 154
    const-string v4, "testsupport"

    const-string v5, "bbb"

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_7
    .catch Ljava/lang/InterruptedException; {:try_start_7 .. :try_end_7} :catch_4

    goto/16 :goto_1

    .line 155
    :catch_4
    move-exception v0

    .line 156
    .local v0, "e":Ljava/lang/InterruptedException;
    invoke-virtual {v0}, Ljava/lang/InterruptedException;->printStackTrace()V

    goto/16 :goto_1

    .line 164
    .end local v0    # "e":Ljava/lang/InterruptedException;
    :cond_2
    const-string v4, "testsupport"

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "returnCursor4:"

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-object v6, Lcom/boyaa/autotest/ElementProvider;->returnCursor:Landroid/database/MatrixCursor;

    invoke-virtual {v6}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto/16 :goto_2

    .line 91
    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_0
        :pswitch_1
    .end packed-switch
.end method

.method public update(Landroid/net/Uri;Landroid/content/ContentValues;Ljava/lang/String;[Ljava/lang/String;)I
    .locals 5
    .param p1, "uri"    # Landroid/net/Uri;
    .param p2, "values"    # Landroid/content/ContentValues;
    .param p3, "selection"    # Ljava/lang/String;
    .param p4, "selectionArgs"    # [Ljava/lang/String;

    .prologue
    .line 174
    const-string v2, "testsupport"

    const-string v3, "start set element"

    invoke-static {v2, v3}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 175
    const-string v2, "testsupport"

    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "selection in LuaGetObj function:"

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 177
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 179
    .local v1, "jsonObject":Lorg/json/JSONObject;
    :try_start_0
    const-string v2, "arg"

    invoke-virtual {v1, v2, p3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 180
    const-string v2, "class"

    const-string v3, "com/boyaa/autotest/ElementProvider"

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 181
    const-string v2, "method"

    const-string v3, "setElementTextCallBack"

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 185
    :goto_0
    invoke-static {}, Lcom/boyaa/engine/made/AppActivity;->getInstance()Lcom/boyaa/engine/made/AppActivity;

    move-result-object v2

    new-instance v3, Lcom/boyaa/autotest/ElementProvider$4;

    invoke-direct {v3, p0, v1}, Lcom/boyaa/autotest/ElementProvider$4;-><init>(Lcom/boyaa/autotest/ElementProvider;Lorg/json/JSONObject;)V

    invoke-virtual {v2, v3}, Lcom/boyaa/engine/made/AppActivity;->runOnLuaThread(Ljava/lang/Runnable;)V

    .line 191
    :goto_1
    sget-object v2, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v2

    if-eqz v2, :cond_0

    .line 200
    const/4 v2, 0x0

    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    sput-object v2, Lcom/boyaa/autotest/ElementProvider;->isback:Ljava/lang/Boolean;

    .line 201
    const-string v2, "testsupport"

    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "returnInt:"

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget v4, Lcom/boyaa/autotest/ElementProvider;->returnInt:I

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 202
    sget v2, Lcom/boyaa/autotest/ElementProvider;->returnInt:I

    return v2

    .line 182
    :catch_0
    move-exception v0

    .line 183
    .local v0, "e":Lorg/json/JSONException;
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    goto :goto_0

    .line 193
    .end local v0    # "e":Lorg/json/JSONException;
    :cond_0
    const-wide/16 v2, 0xc8

    :try_start_1
    invoke-static {v2, v3}, Ljava/lang/Thread;->sleep(J)V

    .line 194
    const-string v2, "testsupport"

    const-string v3, "setElementText ing"

    invoke-static {v2, v3}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catch Ljava/lang/InterruptedException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_1

    .line 195
    :catch_1
    move-exception v0

    .line 196
    .local v0, "e":Ljava/lang/InterruptedException;
    invoke-virtual {v0}, Ljava/lang/InterruptedException;->printStackTrace()V

    goto :goto_1
.end method
