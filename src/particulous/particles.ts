import { Color, ColorRepresentation, Object3D, Vector3 } from "three"

type Triple<T> = [T, T, T]

export type TransformComponent = {
  transform: Object3D
}

export type ColorComponent = {
  color: Color
}

export type VelocityComponent = {
  velocity: Vector3
}

export type ParticleEntity = TransformComponent &
  ColorComponent &
  VelocityComponent

export const transform = (): TransformComponent => ({
  transform: new Object3D()
})

export const velocity = (
  initial: Triple<number> = [0, 0, 0]
): VelocityComponent => ({ velocity: new Vector3(...initial) })

export const color = (color: ColorRepresentation = "#fff"): ColorComponent => ({
  color: new Color(color)
})

export const defaultParticle = () => ({
  ...transform(),
  ...color(),
  ...velocity()
})
