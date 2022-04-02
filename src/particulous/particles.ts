import { World } from "miniplex"
import {
  acceleration,
  AccelerationComponent,
  color,
  ColorComponent,
  size,
  SizeComponent,
  transform,
  TransformComponent,
  velocity,
  VelocityComponent
} from "./components"

export type ParticleEntity = TransformComponent &
  ColorComponent &
  SizeComponent &
  VelocityComponent &
  AccelerationComponent

export type ParticleWorld = World<ParticleEntity>

export const defaultParticle = () => ({
  ...transform(),
  ...color(),
  ...size(),
  ...velocity(),
  ...acceleration()
})
