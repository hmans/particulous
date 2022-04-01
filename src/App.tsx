import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { TestParticles } from "./TestParticles"

function App() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight />

      <TestParticles />

      <OrbitControls />
    </Canvas>
  )
}

export default App
