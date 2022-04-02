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
import {
  InterpolateLinear,
  InterpolationModes,
  LinearInterpolant,
  NumberKeyframeTrack,
  Vector3
} from "three"

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

    const kt = new NumberKeyframeTrack("alpha", [0, 1], [1, 0])
    kt.setInterpolation(InterpolateLinear)

    particleEffect.create(
      emitter({
        factory: () => ({
          ...defaultEntity(),
          ...particle(),
          ...velocity(
            new Vector3().randomDirection().multiplyScalar(Math.random())
          ),
          ...lifetime(2 + Math.random() * 0.5),
          ...alphaOverLifetime(kt)
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
