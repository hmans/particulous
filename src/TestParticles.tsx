import { extend, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { particle } from "./particulous/components"
import { ParticleEffect } from "./particulous/ParticleEffect"
import { ParticleMaterial } from "./particulous/ParticleMaterial"
import { defaultEntity } from "./particulous/entities"
import { emitter } from "./particulous/components/emitter"

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
    effect.current.world.createEntity(
      defaultEntity(),
      emitter({ lifetimeFactory: () => 1 + Math.random() * 0.3 })
    )

    // for (let i = 0; i < 100; i++) {
    //   const entity = effect.current.world.createEntity(
    //     defaultEntity(),
    //     particle("red")
    //   )

    //   entity.particle!.size = 1 + Math.random() * 3

    //   entity.particle!.alpha = Math.random()

    //   entity.transform.position
    //     .randomDirection()
    //     .multiplyScalar(Math.random() * 5)
    // }
  }, [])

  useFrame((_, dt) => effect.current.update(dt))

  return (
    <particleEffect ref={effect}>
      <particleMaterial />
    </particleEffect>
  )
}
