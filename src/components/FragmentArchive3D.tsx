'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useRef, useState, useEffect, Suspense } from 'react'
import type { Group, Mesh } from 'three'

/* Fixed z-offsets. No Math.random() to avoid hydration drift */
const Z_OFFSETS = [0.10, 0.25, 0.05, 0.20, 0.15, 0.30, 0.08, 0.22, 0.12]

/* ─── Single image plane ─────────────────────────────────────────────────── */

interface FragmentProps {
  position: [number, number, number]
  textureUrl: string
}

function Fragment({ position, textureUrl }: FragmentProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(textureUrl)

  useFrame(() => {
    if (!meshRef.current) return
    const targetZ = hovered ? position[2] + 0.5 : position[2]
    meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.1
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <planeGeometry args={[1, 1.4]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={hovered ? 1 : 0.7}
      />
    </mesh>
  )
}

/* ─── 3x3 grid with mouse parallax ──────────────────────────────────────── */

function ArchiveGrid() {
  const groupRef = useRef<Group>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const fragments = Array.from({ length: 9 }, (_, i) => ({
    position: [
      (i % 3 - 1) * 1.5,
      (Math.floor(i / 3) - 1) * 1.8,
      Z_OFFSETS[i],
    ] as [number, number, number],
    url: `/fragments/0${i + 1}.webp`,
  }))

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y +=
      (mouse.current.x * 0.1 - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x +=
      (-mouse.current.y * 0.1 - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef}>
      {fragments.map((f, i) => (
        <Fragment key={i} position={f.position} textureUrl={f.url} />
      ))}
    </group>
  )
}

/* ─── Loading state shown while textures resolve ────────────────────────── */

function ArchiveLoader() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        fontSize: 11,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)',
      }}
    >
      Loading Archive&hellip;
    </div>
  )
}

/* ─── Public component ───────────────────────────────────────────────────── */

export default function FragmentArchive3D() {
  return (
    <div style={{ position: 'relative', height: '80vh', background: '#0a0a0a' }}>
      <Suspense fallback={<ArchiveLoader />}>
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <ArchiveGrid />
        </Canvas>
      </Suspense>
    </div>
  )
}
