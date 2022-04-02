import { Vector3 } from "three"

export type VelocityComponentData = Vector3

export type VelocityComponent = {
  velocity: VelocityComponentData
}

export const velocity = (x = 0, y = 0, z = 0): VelocityComponent => ({
  velocity: new Vector3(x, y, z)
})
