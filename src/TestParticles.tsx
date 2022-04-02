import { extend, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import {
  alphaOverLifetime,
  lifetime,
  particle,
  velocity
} from "./particulous/components"
import { ParticleEffect } from "./particulous/ParticleEffect"
import { ParticleMaterial } from "./particulous/ParticleMaterial"
import { defaultEntity } from "./particulous/entities"
import { emitter } from "./particulous/components/emitter"
import { Vector3 } from "three"

extend({ ParticleMaterial, ParticleEffect })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      particleEffect: any
      particleMaterial: any
    }
  }
}

export function TestParticles() {
  const effect = useRef<ParticleEffect>(null!)

  useEffect(() => {
    const particleEffect = effect.current

    particleEffect.create(
      emitter({
        factory: () => ({
          ...defaultEntity(),
          ...particle(),
          ...velocity(
            new Vector3().randomDirection().multiplyScalar(Math.random())
          ),
          ...lifetime(2 + Math.random() * 0.5),
          ...alphaOverLifetime((t) => 1 - t)
        })
      })
    )
  }, [])

  useFrame((_, dt) => effect.current.update(dt))

  return (
    <particleEffect ref={effect}>
      <particleMaterial />
    </particleEffect>
  )
}
