.class public final Lcom/google/protobuf/UnknownFieldSet$Builder;
.super Ljava/lang/Object;
.source "UnknownFieldSet.java"

# interfaces
.implements Lcom/google/protobuf/MessageLite$Builder;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/google/protobuf/UnknownFieldSet;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Builder"
.end annotation


# instance fields
.field private fields:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map",
            "<",
            "Ljava/lang/Integer;",
            "Lcom/google/protobuf/UnknownFieldSet$Field;",
            ">;"
        }
    .end annotation
.end field

.field private lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

.field private lastFieldNumber:I


# direct methods
.method private constructor <init>()V
    .locals 0

    .prologue
    .line 283
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000()Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 1

    .prologue
    .line 281
    invoke-static {}, Lcom/google/protobuf/UnknownFieldSet$Builder;->create()Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method private static create()Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 1

    .prologue
    .line 294
    new-instance v0, Lcom/google/protobuf/UnknownFieldSet$Builder;

    invoke-direct {v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;-><init>()V

    .line 295
    .local v0, "builder":Lcom/google/protobuf/UnknownFieldSet$Builder;
    invoke-direct {v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->reinitialize()V

    .line 296
    return-object v0
.end method

.method private getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;
    .locals 3
    .param p1, "number"    # I

    .prologue
    .line 304
    iget-object v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    if-eqz v1, :cond_1

    .line 305
    iget v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    if-ne p1, v1, :cond_0

    .line 306
    iget-object v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 320
    :goto_0
    return-object v1

    .line 309
    :cond_0
    iget v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    iget-object v2, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    invoke-virtual {v2}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->build()Lcom/google/protobuf/UnknownFieldSet$Field;

    move-result-object v2

    invoke-virtual {p0, v1, v2}, Lcom/google/protobuf/UnknownFieldSet$Builder;->addField(ILcom/google/protobuf/UnknownFieldSet$Field;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    .line 311
    :cond_1
    if-nez p1, :cond_2

    .line 312
    const/4 v1, 0x0

    goto :goto_0

    .line 314
    :cond_2
    iget-object v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-interface {v1, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/google/protobuf/UnknownFieldSet$Field;

    .line 315
    .local v0, "existing":Lcom/google/protobuf/UnknownFieldSet$Field;
    iput p1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    .line 316
    invoke-static {}, Lcom/google/protobuf/UnknownFieldSet$Field;->newBuilder()Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v1

    iput-object v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 317
    if-eqz v0, :cond_3

    .line 318
    iget-object v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    invoke-virtual {v1, v0}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->mergeFrom(Lcom/google/protobuf/UnknownFieldSet$Field;)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 320
    :cond_3
    iget-object v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    goto :goto_0
.end method

.method private reinitialize()V
    .locals 1

    .prologue
    .line 361
    invoke-static {}, Ljava/util/Collections;->emptyMap()Ljava/util/Map;

    move-result-object v0

    iput-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    .line 362
    const/4 v0, 0x0

    iput v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    .line 363
    const/4 v0, 0x0

    iput-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 364
    return-void
.end method


# virtual methods
.method public addField(ILcom/google/protobuf/UnknownFieldSet$Field;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 2
    .param p1, "number"    # I
    .param p2, "field"    # Lcom/google/protobuf/UnknownFieldSet$Field;

    .prologue
    .line 462
    if-nez p1, :cond_0

    .line 463
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Zero is not a valid field number."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 465
    :cond_0
    iget-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    if-eqz v0, :cond_1

    iget v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    if-ne v0, p1, :cond_1

    .line 467
    const/4 v0, 0x0

    iput-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 468
    const/4 v0, 0x0

    iput v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    .line 470
    :cond_1
    iget-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 471
    new-instance v0, Ljava/util/TreeMap;

    invoke-direct {v0}, Ljava/util/TreeMap;-><init>()V

    iput-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    .line 473
    :cond_2
    iget-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1, p2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 474
    return-object p0
.end method

.method public asMap()Ljava/util/Map;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map",
            "<",
            "Ljava/lang/Integer;",
            "Lcom/google/protobuf/UnknownFieldSet$Field;",
            ">;"
        }
    .end annotation

    .prologue
    .line 482
    const/4 v0, 0x0

    invoke-direct {p0, v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 483
    iget-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-static {v0}, Ljava/util/Collections;->unmodifiableMap(Ljava/util/Map;)Ljava/util/Map;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic build()Lcom/google/protobuf/MessageLite;
    .locals 1

    .prologue
    .line 281
    invoke-virtual {p0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->build()Lcom/google/protobuf/UnknownFieldSet;

    move-result-object v0

    return-object v0
.end method

.method public build()Lcom/google/protobuf/UnknownFieldSet;
    .locals 3

    .prologue
    const/4 v2, 0x0

    .line 333
    const/4 v1, 0x0

    invoke-direct {p0, v1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 335
    iget-object v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-interface {v1}, Ljava/util/Map;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_0

    .line 336
    invoke-static {}, Lcom/google/protobuf/UnknownFieldSet;->getDefaultInstance()Lcom/google/protobuf/UnknownFieldSet;

    move-result-object v0

    .line 340
    .local v0, "result":Lcom/google/protobuf/UnknownFieldSet;
    :goto_0
    iput-object v2, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    .line 341
    return-object v0

    .line 338
    .end local v0    # "result":Lcom/google/protobuf/UnknownFieldSet;
    :cond_0
    new-instance v0, Lcom/google/protobuf/UnknownFieldSet;

    iget-object v1, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-static {v1}, Ljava/util/Collections;->unmodifiableMap(Ljava/util/Map;)Ljava/util/Map;

    move-result-object v1

    invoke-direct {v0, v1, v2}, Lcom/google/protobuf/UnknownFieldSet;-><init>(Ljava/util/Map;Lcom/google/protobuf/UnknownFieldSet$1;)V

    .restart local v0    # "result":Lcom/google/protobuf/UnknownFieldSet;
    goto :goto_0
.end method

.method public bridge synthetic buildPartial()Lcom/google/protobuf/MessageLite;
    .locals 1

    .prologue
    .line 281
    invoke-virtual {p0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->buildPartial()Lcom/google/protobuf/UnknownFieldSet;

    move-result-object v0

    return-object v0
.end method

.method public buildPartial()Lcom/google/protobuf/UnknownFieldSet;
    .locals 1

    .prologue
    .line 346
    invoke-virtual {p0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->build()Lcom/google/protobuf/UnknownFieldSet;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic clear()Lcom/google/protobuf/MessageLite$Builder;
    .locals 1

    .prologue
    .line 281
    invoke-virtual {p0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->clear()Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public clear()Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 0

    .prologue
    .line 368
    invoke-direct {p0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->reinitialize()V

    .line 369
    return-object p0
.end method

.method public clearField(I)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 2
    .param p1, "number"    # I

    .prologue
    .line 374
    if-nez p1, :cond_0

    .line 375
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Zero is not a valid field number."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 377
    :cond_0
    iget-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    if-eqz v0, :cond_1

    iget v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    if-ne v0, p1, :cond_1

    .line 379
    const/4 v0, 0x0

    iput-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastField:Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 380
    const/4 v0, 0x0

    iput v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    .line 382
    :cond_1
    iget-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 383
    iget-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 385
    :cond_2
    return-object p0
.end method

.method public bridge synthetic clone()Lcom/google/protobuf/MessageLite$Builder;
    .locals 1

    .prologue
    .line 281
    invoke-virtual {p0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->clone()Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public clone()Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 4

    .prologue
    .line 351
    const/4 v0, 0x0

    invoke-direct {p0, v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 352
    invoke-static {}, Lcom/google/protobuf/UnknownFieldSet;->newBuilder()Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    new-instance v1, Lcom/google/protobuf/UnknownFieldSet;

    iget-object v2, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    const/4 v3, 0x0

    invoke-direct {v1, v2, v3}, Lcom/google/protobuf/UnknownFieldSet;-><init>(Ljava/util/Map;Lcom/google/protobuf/UnknownFieldSet$1;)V

    invoke-virtual {v0, v1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/UnknownFieldSet;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic clone()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/CloneNotSupportedException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->clone()Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic getDefaultInstanceForType()Lcom/google/protobuf/MessageLite;
    .locals 1

    .prologue
    .line 281
    invoke-virtual {p0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getDefaultInstanceForType()Lcom/google/protobuf/UnknownFieldSet;

    move-result-object v0

    return-object v0
.end method

.method public getDefaultInstanceForType()Lcom/google/protobuf/UnknownFieldSet;
    .locals 1

    .prologue
    .line 357
    invoke-static {}, Lcom/google/protobuf/UnknownFieldSet;->getDefaultInstance()Lcom/google/protobuf/UnknownFieldSet;

    move-result-object v0

    return-object v0
.end method

.method public hasField(I)Z
    .locals 2
    .param p1, "number"    # I

    .prologue
    .line 451
    if-nez p1, :cond_0

    .line 452
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Zero is not a valid field number."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 454
    :cond_0
    iget v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->lastFieldNumber:I

    if-eq p1, v0, :cond_1

    iget-object v0, p0, Lcom/google/protobuf/UnknownFieldSet$Builder;->fields:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    :cond_1
    const/4 v0, 0x1

    :goto_0
    return v0

    :cond_2
    const/4 v0, 0x0

    goto :goto_0
.end method

.method public isInitialized()Z
    .locals 1

    .prologue
    .line 665
    const/4 v0, 0x1

    return v0
.end method

.method public mergeDelimitedFrom(Ljava/io/InputStream;)Z
    .locals 4
    .param p1, "input"    # Ljava/io/InputStream;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 590
    invoke-virtual {p1}, Ljava/io/InputStream;->read()I

    move-result v0

    .line 591
    .local v0, "firstByte":I
    const/4 v3, -0x1

    if-ne v0, v3, :cond_0

    .line 592
    const/4 v3, 0x0

    .line 597
    :goto_0
    return v3

    .line 594
    :cond_0
    invoke-static {v0, p1}, Lcom/google/protobuf/CodedInputStream;->readRawVarint32(ILjava/io/InputStream;)I

    move-result v2

    .line 595
    .local v2, "size":I
    new-instance v1, Lcom/google/protobuf/AbstractMessageLite$Builder$LimitedInputStream;

    invoke-direct {v1, p1, v2}, Lcom/google/protobuf/AbstractMessageLite$Builder$LimitedInputStream;-><init>(Ljava/io/InputStream;I)V

    .line 596
    .local v1, "limitedInput":Ljava/io/InputStream;
    invoke-virtual {p0, v1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Ljava/io/InputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    .line 597
    const/4 v3, 0x1

    goto :goto_0
.end method

.method public mergeDelimitedFrom(Ljava/io/InputStream;Lcom/google/protobuf/ExtensionRegistryLite;)Z
    .locals 1
    .param p1, "input"    # Ljava/io/InputStream;
    .param p2, "extensionRegistry"    # Lcom/google/protobuf/ExtensionRegistryLite;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 604
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeDelimitedFrom(Ljava/io/InputStream;)Z

    move-result v0

    return v0
.end method

.method public mergeField(ILcom/google/protobuf/UnknownFieldSet$Field;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 2
    .param p1, "number"    # I
    .param p2, "field"    # Lcom/google/protobuf/UnknownFieldSet$Field;

    .prologue
    .line 407
    if-nez p1, :cond_0

    .line 408
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Zero is not a valid field number."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 410
    :cond_0
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->hasField(I)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 411
    invoke-direct {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v0

    invoke-virtual {v0, p2}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->mergeFrom(Lcom/google/protobuf/UnknownFieldSet$Field;)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 418
    :goto_0
    return-object p0

    .line 416
    :cond_1
    invoke-virtual {p0, p1, p2}, Lcom/google/protobuf/UnknownFieldSet$Builder;->addField(ILcom/google/protobuf/UnknownFieldSet$Field;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    goto :goto_0
.end method

.method public mergeFieldFrom(ILcom/google/protobuf/CodedInputStream;)Z
    .locals 6
    .param p1, "tag"    # I
    .param p2, "input"    # Lcom/google/protobuf/CodedInputStream;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    const/4 v2, 0x1

    .line 507
    invoke-static {p1}, Lcom/google/protobuf/WireFormat;->getTagFieldNumber(I)I

    move-result v0

    .line 508
    .local v0, "number":I
    invoke-static {p1}, Lcom/google/protobuf/WireFormat;->getTagWireType(I)I

    move-result v3

    packed-switch v3, :pswitch_data_0

    .line 530
    invoke-static {}, Lcom/google/protobuf/InvalidProtocolBufferException;->invalidWireType()Lcom/google/protobuf/InvalidProtocolBufferException;

    move-result-object v2

    throw v2

    .line 510
    :pswitch_0
    invoke-direct {p0, v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v3

    invoke-virtual {p2}, Lcom/google/protobuf/CodedInputStream;->readInt64()J

    move-result-wide v4

    invoke-virtual {v3, v4, v5}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->addVarint(J)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 528
    :goto_0
    return v2

    .line 513
    :pswitch_1
    invoke-direct {p0, v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v3

    invoke-virtual {p2}, Lcom/google/protobuf/CodedInputStream;->readFixed64()J

    move-result-wide v4

    invoke-virtual {v3, v4, v5}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->addFixed64(J)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    goto :goto_0

    .line 516
    :pswitch_2
    invoke-direct {p0, v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v3

    invoke-virtual {p2}, Lcom/google/protobuf/CodedInputStream;->readBytes()Lcom/google/protobuf/ByteString;

    move-result-object v4

    invoke-virtual {v3, v4}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->addLengthDelimited(Lcom/google/protobuf/ByteString;)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    goto :goto_0

    .line 519
    :pswitch_3
    invoke-static {}, Lcom/google/protobuf/UnknownFieldSet;->newBuilder()Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v1

    .line 521
    .local v1, "subBuilder":Lcom/google/protobuf/UnknownFieldSet$Builder;
    invoke-static {}, Lcom/google/protobuf/ExtensionRegistry;->getEmptyRegistry()Lcom/google/protobuf/ExtensionRegistry;

    move-result-object v3

    .line 520
    invoke-virtual {p2, v0, v1, v3}, Lcom/google/protobuf/CodedInputStream;->readGroup(ILcom/google/protobuf/MessageLite$Builder;Lcom/google/protobuf/ExtensionRegistryLite;)V

    .line 522
    invoke-direct {p0, v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v3

    invoke-virtual {v1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->build()Lcom/google/protobuf/UnknownFieldSet;

    move-result-object v4

    invoke-virtual {v3, v4}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->addGroup(Lcom/google/protobuf/UnknownFieldSet;)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    goto :goto_0

    .line 525
    .end local v1    # "subBuilder":Lcom/google/protobuf/UnknownFieldSet$Builder;
    :pswitch_4
    const/4 v2, 0x0

    goto :goto_0

    .line 527
    :pswitch_5
    invoke-direct {p0, v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v3

    invoke-virtual {p2}, Lcom/google/protobuf/CodedInputStream;->readFixed32()I

    move-result v4

    invoke-virtual {v3, v4}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->addFixed32(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    goto :goto_0

    .line 508
    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_0
        :pswitch_1
        :pswitch_2
        :pswitch_3
        :pswitch_4
        :pswitch_5
    .end packed-switch
.end method

.method public bridge synthetic mergeFrom(Lcom/google/protobuf/ByteString;)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/ByteString;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom(Lcom/google/protobuf/ByteString;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1, p2}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/ByteString;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom(Lcom/google/protobuf/CodedInputStream;)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/CodedInputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom(Lcom/google/protobuf/CodedInputStream;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1, p2}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/CodedInputStream;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom(Ljava/io/InputStream;)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Ljava/io/InputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom(Ljava/io/InputStream;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1, p2}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Ljava/io/InputStream;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom([B)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom([B)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom([BII)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1, p2, p3}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom([BII)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom([BIILcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1, p2, p3, p4}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom([BIILcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic mergeFrom([BLcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/MessageLite$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 281
    invoke-virtual {p0, p1, p2}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom([BLcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public mergeFrom(Lcom/google/protobuf/ByteString;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 4
    .param p1, "data"    # Lcom/google/protobuf/ByteString;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 542
    :try_start_0
    invoke-virtual {p1}, Lcom/google/protobuf/ByteString;->newCodedInput()Lcom/google/protobuf/CodedInputStream;

    move-result-object v1

    .line 543
    .local v1, "input":Lcom/google/protobuf/CodedInputStream;
    invoke-virtual {p0, v1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/CodedInputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    .line 544
    const/4 v2, 0x0

    invoke-virtual {v1, v2}, Lcom/google/protobuf/CodedInputStream;->checkLastTagWas(I)V
    :try_end_0
    .catch Lcom/google/protobuf/InvalidProtocolBufferException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1

    .line 545
    return-object p0

    .line 546
    .end local v1    # "input":Lcom/google/protobuf/CodedInputStream;
    :catch_0
    move-exception v0

    .line 547
    .local v0, "e":Lcom/google/protobuf/InvalidProtocolBufferException;
    throw v0

    .line 548
    .end local v0    # "e":Lcom/google/protobuf/InvalidProtocolBufferException;
    :catch_1
    move-exception v0

    .line 549
    .local v0, "e":Ljava/io/IOException;
    new-instance v2, Ljava/lang/RuntimeException;

    const-string v3, "Reading from a ByteString threw an IOException (should never happen)."

    invoke-direct {v2, v3, v0}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;Ljava/lang/Throwable;)V

    throw v2
.end method

.method public mergeFrom(Lcom/google/protobuf/ByteString;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 1
    .param p1, "data"    # Lcom/google/protobuf/ByteString;
    .param p2, "extensionRegistry"    # Lcom/google/protobuf/ExtensionRegistryLite;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 619
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/ByteString;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public mergeFrom(Lcom/google/protobuf/CodedInputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 2
    .param p1, "input"    # Lcom/google/protobuf/CodedInputStream;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 492
    :cond_0
    invoke-virtual {p1}, Lcom/google/protobuf/CodedInputStream;->readTag()I

    move-result v0

    .line 493
    .local v0, "tag":I
    if-eqz v0, :cond_1

    invoke-virtual {p0, v0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFieldFrom(ILcom/google/protobuf/CodedInputStream;)Z

    move-result v1

    if-nez v1, :cond_0

    .line 497
    :cond_1
    return-object p0
.end method

.method public mergeFrom(Lcom/google/protobuf/CodedInputStream;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 1
    .param p1, "input"    # Lcom/google/protobuf/CodedInputStream;
    .param p2, "extensionRegistry"    # Lcom/google/protobuf/ExtensionRegistryLite;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 611
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/CodedInputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public mergeFrom(Lcom/google/protobuf/UnknownFieldSet;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 4
    .param p1, "other"    # Lcom/google/protobuf/UnknownFieldSet;

    .prologue
    .line 394
    invoke-static {}, Lcom/google/protobuf/UnknownFieldSet;->getDefaultInstance()Lcom/google/protobuf/UnknownFieldSet;

    move-result-object v1

    if-eq p1, v1, :cond_0

    .line 395
    # getter for: Lcom/google/protobuf/UnknownFieldSet;->fields:Ljava/util/Map;
    invoke-static {p1}, Lcom/google/protobuf/UnknownFieldSet;->access$200(Lcom/google/protobuf/UnknownFieldSet;)Ljava/util/Map;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v2

    :goto_0
    invoke-interface {v2}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/Map$Entry;

    .line 396
    .local v0, "entry":Ljava/util/Map$Entry;, "Ljava/util/Map$Entry<Ljava/lang/Integer;Lcom/google/protobuf/UnknownFieldSet$Field;>;"
    invoke-interface {v0}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v3

    invoke-interface {v0}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/google/protobuf/UnknownFieldSet$Field;

    invoke-virtual {p0, v3, v1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeField(ILcom/google/protobuf/UnknownFieldSet$Field;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    goto :goto_0

    .line 399
    .end local v0    # "entry":Ljava/util/Map$Entry;, "Ljava/util/Map$Entry<Ljava/lang/Integer;Lcom/google/protobuf/UnknownFieldSet$Field;>;"
    :cond_0
    return-object p0
.end method

.method public mergeFrom(Ljava/io/InputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 2
    .param p1, "input"    # Ljava/io/InputStream;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 582
    invoke-static {p1}, Lcom/google/protobuf/CodedInputStream;->newInstance(Ljava/io/InputStream;)Lcom/google/protobuf/CodedInputStream;

    move-result-object v0

    .line 583
    .local v0, "codedInput":Lcom/google/protobuf/CodedInputStream;
    invoke-virtual {p0, v0}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/CodedInputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    .line 584
    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lcom/google/protobuf/CodedInputStream;->checkLastTagWas(I)V

    .line 585
    return-object p0
.end method

.method public mergeFrom(Ljava/io/InputStream;Lcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 1
    .param p1, "input"    # Ljava/io/InputStream;
    .param p2, "extensionRegistry"    # Lcom/google/protobuf/ExtensionRegistryLite;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .prologue
    .line 659
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Ljava/io/InputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public mergeFrom([B)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 4
    .param p1, "data"    # [B
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 563
    :try_start_0
    invoke-static {p1}, Lcom/google/protobuf/CodedInputStream;->newInstance([B)Lcom/google/protobuf/CodedInputStream;

    move-result-object v1

    .line 564
    .local v1, "input":Lcom/google/protobuf/CodedInputStream;
    invoke-virtual {p0, v1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/CodedInputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    .line 565
    const/4 v2, 0x0

    invoke-virtual {v1, v2}, Lcom/google/protobuf/CodedInputStream;->checkLastTagWas(I)V
    :try_end_0
    .catch Lcom/google/protobuf/InvalidProtocolBufferException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1

    .line 566
    return-object p0

    .line 567
    .end local v1    # "input":Lcom/google/protobuf/CodedInputStream;
    :catch_0
    move-exception v0

    .line 568
    .local v0, "e":Lcom/google/protobuf/InvalidProtocolBufferException;
    throw v0

    .line 569
    .end local v0    # "e":Lcom/google/protobuf/InvalidProtocolBufferException;
    :catch_1
    move-exception v0

    .line 570
    .local v0, "e":Ljava/io/IOException;
    new-instance v2, Ljava/lang/RuntimeException;

    const-string v3, "Reading from a byte array threw an IOException (should never happen)."

    invoke-direct {v2, v3, v0}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;Ljava/lang/Throwable;)V

    throw v2
.end method

.method public mergeFrom([BII)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 4
    .param p1, "data"    # [B
    .param p2, "off"    # I
    .param p3, "len"    # I
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 625
    .line 626
    :try_start_0
    invoke-static {p1, p2, p3}, Lcom/google/protobuf/CodedInputStream;->newInstance([BII)Lcom/google/protobuf/CodedInputStream;

    move-result-object v1

    .line 627
    .local v1, "input":Lcom/google/protobuf/CodedInputStream;
    invoke-virtual {p0, v1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom(Lcom/google/protobuf/CodedInputStream;)Lcom/google/protobuf/UnknownFieldSet$Builder;

    .line 628
    const/4 v2, 0x0

    invoke-virtual {v1, v2}, Lcom/google/protobuf/CodedInputStream;->checkLastTagWas(I)V
    :try_end_0
    .catch Lcom/google/protobuf/InvalidProtocolBufferException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1

    .line 629
    return-object p0

    .line 630
    .end local v1    # "input":Lcom/google/protobuf/CodedInputStream;
    :catch_0
    move-exception v0

    .line 631
    .local v0, "e":Lcom/google/protobuf/InvalidProtocolBufferException;
    throw v0

    .line 632
    .end local v0    # "e":Lcom/google/protobuf/InvalidProtocolBufferException;
    :catch_1
    move-exception v0

    .line 633
    .local v0, "e":Ljava/io/IOException;
    new-instance v2, Ljava/lang/RuntimeException;

    const-string v3, "Reading from a byte array threw an IOException (should never happen)."

    invoke-direct {v2, v3, v0}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;Ljava/lang/Throwable;)V

    throw v2
.end method

.method public mergeFrom([BIILcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 1
    .param p1, "data"    # [B
    .param p2, "off"    # I
    .param p3, "len"    # I
    .param p4, "extensionRegistry"    # Lcom/google/protobuf/ExtensionRegistryLite;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 652
    invoke-virtual {p0, p1, p2, p3}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom([BII)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public mergeFrom([BLcom/google/protobuf/ExtensionRegistryLite;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 1
    .param p1, "data"    # [B
    .param p2, "extensionRegistry"    # Lcom/google/protobuf/ExtensionRegistryLite;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/protobuf/InvalidProtocolBufferException;
        }
    .end annotation

    .prologue
    .line 644
    invoke-virtual {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->mergeFrom([B)Lcom/google/protobuf/UnknownFieldSet$Builder;

    move-result-object v0

    return-object v0
.end method

.method public mergeLengthDelimitedField(ILcom/google/protobuf/ByteString;)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 2
    .param p1, "number"    # I
    .param p2, "value"    # Lcom/google/protobuf/ByteString;

    .prologue
    .line 442
    if-nez p1, :cond_0

    .line 443
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Zero is not a valid field number."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 445
    :cond_0
    invoke-direct {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v0

    invoke-virtual {v0, p2}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->addLengthDelimited(Lcom/google/protobuf/ByteString;)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 446
    return-object p0
.end method

.method public mergeVarintField(II)Lcom/google/protobuf/UnknownFieldSet$Builder;
    .locals 3
    .param p1, "number"    # I
    .param p2, "value"    # I

    .prologue
    .line 427
    if-nez p1, :cond_0

    .line 428
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Zero is not a valid field number."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 430
    :cond_0
    invoke-direct {p0, p1}, Lcom/google/protobuf/UnknownFieldSet$Builder;->getFieldBuilder(I)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    move-result-object v0

    int-to-long v1, p2

    invoke-virtual {v0, v1, v2}, Lcom/google/protobuf/UnknownFieldSet$Field$Builder;->addVarint(J)Lcom/google/protobuf/UnknownFieldSet$Field$Builder;

    .line 431
    return-object p0
.end method
