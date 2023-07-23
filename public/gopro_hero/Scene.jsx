import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0.534, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[111.01, 108.486, 133.212]}>
          <group name="14663a4592924d1b8b3158fc591f1f63fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="CINEMA_4D_Editor" position={[8.334, 0.859, 8.409]} rotation={[-Math.PI, 0.749, -2.736]}>
                  <group name="Object_5" />
                </group>
                <group name="gopro8_iges" position={[-0.598, 2.181, 0.297]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.174, 0.836, 0.999]}>
                  <group name="gopro8_body19" position={[-2.769, 1.45, 2.12]}>
                    <mesh name="gopro8_body19_RGB_20-20-20_0" geometry={nodes['gopro8_body19_RGB_20-20-20_0'].geometry} material={materials['RGB_20-20-20']} />
                  </group>
                  <group name="gopro8_body20">
                    <group name="gopro8_body21">
                      <mesh name="gopro8_body21_RGB_0-147-245_0" geometry={nodes['gopro8_body21_RGB_0-147-245_0'].geometry} material={materials['RGB_0-147-245']} />
                    </group>
                    <mesh name="gopro8_body20_RGB_33-33-33_0" geometry={nodes['gopro8_body20_RGB_33-33-33_0'].geometry} material={materials['RGB_33-33-33']} />
                  </group>
                  <group name="gopro8_body29" position={[0.3, 0.504, -2.249]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh name="gopro8_body29_RGB_88-84-81_0" geometry={nodes['gopro8_body29_RGB_88-84-81_0'].geometry} material={materials['RGB_88-84-81']} />
                  </group>
                  <group name="gopro8_body30" position={[-0.3, 0.504, -2.25]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh name="gopro8_body30_RGB_88-84-81_0" geometry={nodes['gopro8_body30_RGB_88-84-81_0'].geometry} material={materials['RGB_88-84-81']} />
                  </group>
                  <group name="glass">
                    <group name="gopro8_body12">
                      <mesh name="gopro8_body12_RGB_255-255-255_0" geometry={nodes['gopro8_body12_RGB_255-255-255_0'].geometry} material={materials['RGB_255-255-255']} />
                    </group>
                    <group name="gopro8_body16" position={[1.675, -0.34, 0.75]}>
                      <mesh name="gopro8_body16_RGB_255-255-255_0" geometry={nodes['gopro8_body16_RGB_255-255-255_0'].geometry} material={materials['RGB_255-255-255']} />
                    </group>
                    <group name="gopro8_body17">
                      <mesh name="gopro8_body17_RGB_255-255-255_0" geometry={nodes['gopro8_body17_RGB_255-255-255_0'].geometry} material={materials['RGB_255-255-255']} />
                    </group>
                    <group name="gopro8_body23">
                      <mesh name="gopro8_body23_RGB_255-255-255_0" geometry={nodes['gopro8_body23_RGB_255-255-255_0'].geometry} material={materials['RGB_255-255-255']} />
                    </group>
                    <group name="gopro8_body24">
                      <mesh name="gopro8_body24_RGB_255-255-255_0" geometry={nodes['gopro8_body24_RGB_255-255-255_0'].geometry} material={materials['RGB_255-255-255']} />
                    </group>
                  </group>
                  <group name="gopro8_body1">
                    <mesh name="gopro8_body1_RGB_14-14-14_0" geometry={nodes['gopro8_body1_RGB_14-14-14_0'].geometry} material={materials['RGB_14-14-14']} />
                  </group>
                  <group name="gopro8_body10">
                    <mesh name="gopro8_body10_RGB_229-46-46_0" geometry={nodes['gopro8_body10_RGB_229-46-46_0'].geometry} material={materials['RGB_229-46-46']} />
                  </group>
                  <group name="gopro8_body11">
                    <mesh name="gopro8_body11_RGB_229-46-46_0" geometry={nodes['gopro8_body11_RGB_229-46-46_0'].geometry} material={materials['RGB_229-46-46']} />
                  </group>
                  <group name="gopro8_body13">
                    <mesh name="gopro8_body13_RGB_14-14-14_0" geometry={nodes['gopro8_body13_RGB_14-14-14_0'].geometry} material={materials['RGB_14-14-14']} />
                  </group>
                  <group name="gopro8_body14">
                    <mesh name="gopro8_body14_RGB_20-20-20_0" geometry={nodes['gopro8_body14_RGB_20-20-20_0'].geometry} material={materials['RGB_20-20-20']} />
                  </group>
                  <group name="gopro8_body15">
                    <mesh name="gopro8_body15_RGB_7-7-7_0" geometry={nodes['gopro8_body15_RGB_7-7-7_0'].geometry} material={materials['RGB_7-7-7']} />
                  </group>
                  <group name="gopro8_body18">
                    <mesh name="gopro8_body18_RGB_20-20-20_0" geometry={nodes['gopro8_body18_RGB_20-20-20_0'].geometry} material={materials['RGB_20-20-20']} />
                  </group>
                  <group name="gopro8_body2">
                    <mesh name="gopro8_body2_RGB_14-14-14_0" geometry={nodes['gopro8_body2_RGB_14-14-14_0'].geometry} material={materials['RGB_14-14-14']} />
                  </group>
                  <group name="gopro8_body22">
                    <mesh name="gopro8_body22_RGB_33-33-33_0" geometry={nodes['gopro8_body22_RGB_33-33-33_0'].geometry} material={materials['RGB_33-33-33']} />
                  </group>
                  <group name="gopro8_body25">
                    <mesh name="gopro8_body25_RGB_70-70-70_0" geometry={nodes['gopro8_body25_RGB_70-70-70_0'].geometry} material={materials['RGB_70-70-70']} />
                  </group>
                  <group name="gopro8_body26">
                    <mesh name="gopro8_body26_RGB_20-20-20_0" geometry={nodes['gopro8_body26_RGB_20-20-20_0'].geometry} material={materials['RGB_20-20-20']} />
                  </group>
                  <group name="gopro8_body27">
                    <mesh name="gopro8_body27_RGB_230-11-11_0" geometry={nodes['gopro8_body27_RGB_230-11-11_0'].geometry} material={materials['RGB_230-11-11']} />
                  </group>
                  <group name="gopro8_body28">
                    <mesh name="gopro8_body28_RGB_70-70-70_0" geometry={nodes['gopro8_body28_RGB_70-70-70_0'].geometry} material={materials['RGB_70-70-70']} />
                  </group>
                  <group name="gopro8_body3">
                    <mesh name="gopro8_body3_RGB_14-14-14_0" geometry={nodes['gopro8_body3_RGB_14-14-14_0'].geometry} material={materials['RGB_14-14-14']} />
                  </group>
                  <group name="gopro8_body31">
                    <mesh name="gopro8_body31_RGB_88-84-81_0" geometry={nodes['gopro8_body31_RGB_88-84-81_0'].geometry} material={materials['RGB_88-84-81']} />
                  </group>
                  <group name="gopro8_body32">
                    <mesh name="gopro8_body32_RGB_70-70-70_0" geometry={nodes['gopro8_body32_RGB_70-70-70_0'].geometry} material={materials['RGB_70-70-70']} />
                  </group>
                  <group name="gopro8_body33">
                    <mesh name="gopro8_body33_RGB_142-142-142_0" geometry={nodes['gopro8_body33_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body34">
                    <mesh name="gopro8_body34_RGB_142-142-142_0" geometry={nodes['gopro8_body34_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body35">
                    <mesh name="gopro8_body35_RGB_142-142-142_0" geometry={nodes['gopro8_body35_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body36">
                    <mesh name="gopro8_body36_RGB_142-142-142_0" geometry={nodes['gopro8_body36_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body37">
                    <mesh name="gopro8_body37_RGB_142-142-142_0" geometry={nodes['gopro8_body37_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body38">
                    <mesh name="gopro8_body38_RGB_142-142-142_0" geometry={nodes['gopro8_body38_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body39">
                    <mesh name="gopro8_body39_RGB_142-142-142_0" geometry={nodes['gopro8_body39_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body4">
                    <mesh name="gopro8_body4_RGB_142-142-142_0" geometry={nodes['gopro8_body4_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body40">
                    <mesh name="gopro8_body40_RGB_142-142-142_0" geometry={nodes['gopro8_body40_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body41">
                    <mesh name="gopro8_body41_RGB_142-142-142_0" geometry={nodes['gopro8_body41_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body42">
                    <mesh name="gopro8_body42_RGB_142-142-142_0" geometry={nodes['gopro8_body42_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body43">
                    <mesh name="gopro8_body43_RGB_142-142-142_0" geometry={nodes['gopro8_body43_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body44">
                    <mesh name="gopro8_body44_RGB_142-142-142_0" geometry={nodes['gopro8_body44_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body45">
                    <mesh name="gopro8_body45_RGB_142-142-142_0" geometry={nodes['gopro8_body45_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body46">
                    <mesh name="gopro8_body46_RGB_142-142-142_0" geometry={nodes['gopro8_body46_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body47">
                    <mesh name="gopro8_body47_RGB_142-142-142_0" geometry={nodes['gopro8_body47_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body48">
                    <mesh name="gopro8_body48_RGB_142-142-142_0" geometry={nodes['gopro8_body48_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body49">
                    <mesh name="gopro8_body49_RGB_142-142-142_0" geometry={nodes['gopro8_body49_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body5">
                    <mesh name="gopro8_body5_RGB_142-142-142_0" geometry={nodes['gopro8_body5_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body50">
                    <mesh name="gopro8_body50_RGB_142-142-142_0" geometry={nodes['gopro8_body50_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body51">
                    <mesh name="gopro8_body51_RGB_70-70-70_0" geometry={nodes['gopro8_body51_RGB_70-70-70_0'].geometry} material={materials['RGB_70-70-70']} />
                  </group>
                  <group name="gopro8_body6" position={[-0.814, 0, 0]}>
                    <mesh name="gopro8_body6_RGB_142-142-142_0" geometry={nodes['gopro8_body6_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body7">
                    <mesh name="gopro8_body7_RGB_142-142-142_0" geometry={nodes['gopro8_body7_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body8">
                    <mesh name="gopro8_body8_RGB_142-142-142_0" geometry={nodes['gopro8_body8_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                  <group name="gopro8_body9">
                    <mesh name="gopro8_body9_RGB_142-142-142_0" geometry={nodes['gopro8_body9_RGB_142-142-142_0'].geometry} material={materials['RGB_142-142-142']} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
