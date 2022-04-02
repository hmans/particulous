import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { TestParticles } from "./TestParticles"

function App() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight />

      <TestParticles />

      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
    </Canvas>
  )
}

export default App
