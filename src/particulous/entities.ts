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
import { lifetime, LifetimeComponent } from "./components/lifetime"

type RequiredComponents = LifetimeComponent &
  TransformComponent &
  VelocityComponent &
  AccelerationComponent

type OptionalComponents = ParticleComponent

export type Entity = RequiredComponents & Partial<OptionalComponents>

export type ParticleWorld = World<Entity>

export const defaultEntity = (): Entity => ({
  ...lifetime(),
  ...transform(),
  ...velocity(),
  ...acceleration()
})
