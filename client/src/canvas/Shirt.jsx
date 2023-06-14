import React from 'react'
import { easing  } from 'math';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

function Shirt() {
const snap = useSnapshot(state);

  return (
    <div>Shirt</div>
  )
}

export default Shirt
