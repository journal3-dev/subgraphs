// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Skill extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Skill entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Skill must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Skill", id.toString(), this);
    }
  }

  static load(id: string): Skill | null {
    return changetype<Skill | null>(store.get("Skill", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get totalMinted(): BigInt {
    let value = this.get("totalMinted");
    return value!.toBigInt();
  }

  set totalMinted(value: BigInt) {
    this.set("totalMinted", Value.fromBigInt(value));
  }

  get URI(): Bytes {
    let value = this.get("URI");
    return value!.toBytes();
  }

  set URI(value: Bytes) {
    this.set("URI", Value.fromBytes(value));
  }
}
