import { Canvas } from '@react-three/fiber'
import {Center, OrbitControls, OrthographicCamera, Preload, PresentationControls} from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      <hemisphereLight intensity={0.75} />
        {children}
      <Preload all />
      <PresentationControls polar={1/2 * Math.PI} />
      <OrbitControls />
    </Canvas>
  )
}
