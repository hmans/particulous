import { Color, Object3D } from "three"

export type TransformComponent = {
  transform: Object3D
}

export type ColorComponent = {
  color: Color
}

export type ParticleEntity = TransformComponent & ColorComponent

export const transform = (): TransformComponent => ({
  transform: new Object3D()
})

export const color = (): ColorComponent => ({ color: new Color() })

export const defaultParticle = () => ({ ...transform(), ...color() })
