import { extend, useFrame } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { Effect } from "./particulous/Effect"
import { ParticleMaterial } from "./particulous/ParticleMaterial"
import { color, defaultParticle, transform } from "./particulous/particles"

extend({ ParticleMaterial })

export function TestParticles() {
  const [effect] = useState(() => new Effect())
  const [material] = useState(() => new ParticleMaterial())

  useEffect(() => {
    effect.world.createEntity(defaultParticle(), color("red"))
  }, [effect])

  useFrame((_, dt) => effect.update(dt))

  return <primitive object={effect} material={material} />
}
