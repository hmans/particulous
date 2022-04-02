import { extend, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { ParticleEffect } from "./particulous/ParticleEffect"
import { ParticleMaterial } from "./particulous/ParticleMaterial"
import { color, defaultParticle, size } from "./particulous/particles"

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
    effect.current.world.createEntity(defaultParticle(), color("red"), size(10))
  }, [])

  useFrame((_, dt) => effect.current.update(dt))

  return (
    <particleEffect ref={effect}>
      <particleMaterial />
    </particleEffect>
  )
}
