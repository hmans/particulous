import { World } from "miniplex"
import { Color, ColorRepresentation, Object3D, Vector3 } from "three"

export type TransformComponent = {
  transform: Object3D
}

export type ColorComponent = {
  color: Color
}

export type SizeComponent = {
  size: number
}

export type VelocityComponent = {
  velocity: Vector3
}

export type AccelerationComponent = {
  acceleration: Vector3
}

export type ParticleEntity = TransformComponent &
  ColorComponent &
  SizeComponent &
  VelocityComponent &
  AccelerationComponent

export type ParticleWorld = World<ParticleEntity>

export const transform = (): TransformComponent => ({
  transform: new Object3D()
})

export const velocity = (x = 0, y = 0, z = 0): VelocityComponent => ({
  velocity: new Vector3(x, y, z)
})

export const acceleration = (): AccelerationComponent => ({
  acceleration: new Vector3()
})

export const size = (size = 1): SizeComponent => ({
  size
})

export const color = (color: ColorRepresentation = "#fff"): ColorComponent => ({
  color: new Color(color)
})

export const defaultParticle = () => ({
  ...transform(),
  ...color(),
  ...size(),
  ...velocity(),
  ...acceleration()
})
