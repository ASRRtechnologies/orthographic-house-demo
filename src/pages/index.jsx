import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import {Villa} from "../components/canvas/Villa";
import {Center, Environment, Sky} from "@react-three/drei";

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

// Dom components go here
export default function Page(props) {
  return (
    <Instructions>
      This is a minimal starter for Nextjs + React-three-fiber and Threejs. Click on the{' '}
      <span className='text-cyan-200'>atoms nucleus</span> to navigate to the{' '}
      <span className='text-green-200'>/blob</span> page. OrbitControls are enabled by default.
    </Instructions>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) =><>
  <Environment preset="sunset"/>
  <Sky/>

  <Center>
    <Villa/>
  </Center>
</>

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
