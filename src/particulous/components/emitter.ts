import { Entity } from "../entities"

type EmitterComponentData = {
  factory: () => Entity
}

export type EmitterComponent = {
  emitter: EmitterComponentData
}

export const emitter = (emitter: EmitterComponentData): EmitterComponent => ({
  emitter
})
