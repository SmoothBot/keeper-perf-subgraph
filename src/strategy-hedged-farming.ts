import { BigInt } from "@graphprotocol/graph-ts"
import {
  StrategyHedgedFarming,
  CollatRebalance,
  DebtRebalance,
  EmergencyExitEnabled,
  Harvested,
  SetDoHealthCheck,
  SetHealthCheck,
  UpdatedDebtThreshold,
  UpdatedKeeper,
  UpdatedMaxReportDelay,
  UpdatedMetadataURI,
  UpdatedMinReportDelay,
  UpdatedProfitFactor,
  UpdatedRewards,
  UpdatedStrategist
} from "../generated/StrategyHedgedFarming/StrategyHedgedFarming"
import { ExampleEntity } from "../generated/schema"

export function handleCollatRebalance(event: CollatRebalance): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.collatRatio = event.params.collatRatio
  entity.adjAmount = event.params.adjAmount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.apiVersion(...)
  // - contract.balanceDebt(...)
  // - contract.balanceDebtInShort(...)
  // - contract.balanceDebtOracle(...)
  // - contract.balanceDeployed(...)
  // - contract.balanceLend(...)
  // - contract.balanceLp(...)
  // - contract.balanceLpInShort(...)
  // - contract.balanceOfWant(...)
  // - contract.balancePendingHarvest(...)
  // - contract.balanceShort(...)
  // - contract.balanceShortWantEq(...)
  // - contract.calcCollateral(...)
  // - contract.calcDebtRatio(...)
  // - contract.collatLimit(...)
  // - contract.collatLower(...)
  // - contract.collatTarget(...)
  // - contract.collatUpper(...)
  // - contract.collateralCapReached(...)
  // - contract.debtLower(...)
  // - contract.debtThreshold(...)
  // - contract.debtUpper(...)
  // - contract.delegatedAssets(...)
  // - contract.doHealthCheck(...)
  // - contract.doPriceCheck(...)
  // - contract.emergencyExit(...)
  // - contract.estimatedTotalAssets(...)
  // - contract.ethToWant(...)
  // - contract.getLpPrice(...)
  // - contract.getLpReserves(...)
  // - contract.getOraclePrice(...)
  // - contract.harvestTrigger(...)
  // - contract.healthCheck(...)
  // - contract.insurance(...)
  // - contract.isActive(...)
  // - contract.isPaused(...)
  // - contract.keeper(...)
  // - contract.maxReportDelay(...)
  // - contract.metadataURI(...)
  // - contract.minDeploy(...)
  // - contract.minReportDelay(...)
  // - contract.name(...)
  // - contract.oracle(...)
  // - contract.priceSourceDiffKeeper(...)
  // - contract.priceSourceDiffUser(...)
  // - contract.profitFactor(...)
  // - contract.rebalancePercent(...)
  // - contract.rewards(...)
  // - contract.short(...)
  // - contract.slippageAdj(...)
  // - contract.strategist(...)
  // - contract.tendTrigger(...)
  // - contract.vault(...)
  // - contract.want(...)
  // - contract.withdraw(...)
}

export function handleDebtRebalance(event: DebtRebalance): void {}

export function handleEmergencyExitEnabled(event: EmergencyExitEnabled): void {}

export function handleHarvested(event: Harvested): void {}

export function handleSetDoHealthCheck(event: SetDoHealthCheck): void {}

export function handleSetHealthCheck(event: SetHealthCheck): void {}

export function handleUpdatedDebtThreshold(event: UpdatedDebtThreshold): void {}

export function handleUpdatedKeeper(event: UpdatedKeeper): void {}

export function handleUpdatedMaxReportDelay(
  event: UpdatedMaxReportDelay
): void {}

export function handleUpdatedMetadataURI(event: UpdatedMetadataURI): void {}

export function handleUpdatedMinReportDelay(
  event: UpdatedMinReportDelay
): void {}

export function handleUpdatedProfitFactor(event: UpdatedProfitFactor): void {}

export function handleUpdatedRewards(event: UpdatedRewards): void {}

export function handleUpdatedStrategist(event: UpdatedStrategist): void {}
