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

type RequiredComponents = TransformComponent &
  VelocityComponent &
  AccelerationComponent

type OptionalComponents = ParticleComponent

export type Entity = RequiredComponents & Partial<OptionalComponents>

export type ParticleWorld = World<Entity>

export const defaultEntity = () => ({
  ...transform(),
  ...velocity(),
  ...acceleration()
})
