import { useState } from "react"
import { Effect } from "./particulous/Effect"

export function TestParticles() {
  const [effect] = useState(() => new Effect())

  return <primitive object={effect} />
}
