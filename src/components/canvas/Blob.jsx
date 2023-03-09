import { useState } from 'react'
import { useRouter } from 'next/router'
import {useCursor, MeshDistortMaterial, useGLTF} from '@react-three/drei'

export default function Blob({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  const GLTF = useGLTF('/assets/3d/Villa_4.gltf', true)
  useCursor(hovered)

  console.log(GLTF)
  return (
    <primitive object={GLTF.scene}/>
  )
}
