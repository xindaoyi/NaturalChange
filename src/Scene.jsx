import React from "react";
export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1}/>
      <directionalLight color="white" intensity={ 0.2 } position={ [0, 0, 5] }/>
      <mesh
        rotation={[0.3, 0.6, 0.3]}
      >
        <boxGeometry args={ [2, 5, 1]}></boxGeometry>
        <meshStandardMaterial color={ '#333333' } opacity={0.5} transparent={true}>

        </meshStandardMaterial>
      </mesh>
    </>
  )
}

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default App;
