import { Vector3 } from "three"

export type VelocityComponent = {
  velocity: Vector3
}

export const velocity = (x = 0, y = 0, z = 0): VelocityComponent => ({
  velocity: new Vector3(x, y, z)
})
