import { Vector3 } from "three"

type EmitterComponentData = {
  lifetimeFactory?: () => number
}

export type EmitterComponent = {
  emitter: EmitterComponentData
}

export const emitter = (data: EmitterComponentData = {}): EmitterComponent => ({
  emitter: data
})
