import { extend, useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { ParticleEffect } from "./particulous/ParticleEffect"
import { ParticleMaterial } from "./particulous/ParticleMaterial"
import { color, defaultParticle } from "./particulous/particles"

extend({ ParticleMaterial, ParticleEffect })

export function TestParticles() {
  const effect = useRef<ParticleEffect>(null!)

  useEffect(() => {
    effect.current.world.createEntity(defaultParticle(), color("red"))
  }, [effect])

  useFrame((_, dt) => effect.current.update(dt))

  return (
    <particleEffect ref={effect}>
      <particleMaterial />
    </particleEffect>
  )
}
