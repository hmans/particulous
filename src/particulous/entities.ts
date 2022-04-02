import { World } from "miniplex"
import {
  acceleration,
  AccelerationComponent,
  ParticleComponent,
  transform,
  TransformComponent,
  velocity,
  VelocityComponent
} from "./components"
import { EmitterComponent } from "./components/emitter"
import { lifetime, LifetimeComponent } from "./components/lifetime"

type RequiredComponents = LifetimeComponent &
  TransformComponent &
  VelocityComponent &
  AccelerationComponent

type OptionalComponents = ParticleComponent & EmitterComponent

export type Entity = RequiredComponents & Partial<OptionalComponents>

export type ParticleWorld = World<Entity>

export const defaultEntity = (): Entity => ({
  ...lifetime(),
  ...transform(),
  ...velocity(),
  ...acceleration()
})
