import { BigInt } from "@graphprotocol/graph-ts";
import {
  SkillsRepo,
  ApprovalForAll,
  SkillCreate,
  SkillMint,
  TransferBatch,
  TransferSingle,
  URI,
} from "../generated/SkillsRepo/SkillsRepo";
import { Skill } from "../generated/schema";

export function handleApprovalForAll(event: ApprovalForAll): void {
  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())
  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())
  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }
  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)
  // // Entity fields can be set based on event parameters
  // entity.account = event.params.account
  // entity.operator = event.params.operator
  // // Entities can be written to the store with `.save()`
  // entity.save()
  // // Note: If a handler doesn't require existing field values, it is faster
  // // _not_ to load the entity from the store. Instead, create it fresh with
  // // `new Entity(...)`, set the fields that should be updated and save the
  // // entity back to the store. Fields that were not set or unset remain
  // // unchanged, allowing for partial updates to be applied.
  // // It is also possible to access smart contracts from mappings. For
  // // example, the contract that has emitted the event can be connected to
  // // with:
  // //
  // // let contract = Contract.bind(event.address)
  // //
  // // The following functions can then be called on this contract to access
  // // state variables and other data:
  // //
  // // - contract.create_skill(...)
  // // - contract.balanceOf(...)
  // // - contract.balanceOfBatch(...)
  // // - contract.get_creator_token_id_map(...)
  // // - contract.get_oracle_data_src(...)
  // // - contract.isApprovedForAll(...)
  // // - contract.supportsInterface(...)
  // // - contract.uri(...)
}

export function handleSkillCreate(event: SkillCreate): void {
  let entity = new Skill(event.params.skillId.toString());
  entity.creator = event.params._creator;
  entity.totalMinted = new BigInt(0);
  entity.save();
}

export function handleSkillMint(event: SkillMint): void {
  let entity = Skill.load(event.params.skillId.toString());
  if (entity == null) {
    return;
  }
  entity.totalMinted = entity.totalMinted.plus(new BigInt(1));
  entity.save();
}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleURI(event: URI): void {}
