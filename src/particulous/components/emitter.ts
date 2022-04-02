import { LifetimeComponentData } from "./lifetime"
import { VelocityComponentData } from "./velocity"

type EmitterComponentData = {
  lifetimeFactory?: () => LifetimeComponentData
  velocityFactory?: () => VelocityComponentData
}

export type EmitterComponent = {
  emitter: EmitterComponentData
}

export const emitter = (data: EmitterComponentData = {}): EmitterComponent => ({
  emitter: data
})
