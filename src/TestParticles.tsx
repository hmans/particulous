import { extend, useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Effect } from "./particulous/Effect"
import { ParticleMaterial } from "./particulous/ParticleMaterial"

extend({ ParticleMaterial })

export function TestParticles() {
  const [effect] = useState(() => new Effect())
  const [material] = useState(() => new ParticleMaterial())

  useFrame((_, dt) => effect.update(dt))

  return <primitive object={effect} material={material} />
}
