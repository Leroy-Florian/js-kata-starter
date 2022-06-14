import { ComputedOrder } from "../Order/type";

export type machineInput = machineInputWithSugar |  machineInputWithoutSugar | machineInputMessage

type machineInputWithSugar = `${string}:${number}:${number}`
type machineInputWithoutSugar = `${string}:${''}:${''}`
type machineInputMessage = `${string}:${string}`

export type MachineInstruction = ComputedOrder | Message

export type Message = string

