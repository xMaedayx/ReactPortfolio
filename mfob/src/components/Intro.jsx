import React, { Suspense } from 'react';
import Navbar from "./Navbar";
import styled from 'styled-components';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

//import anImage from '../images/hero.png';
import { OrbitControls} from 'three-stdlib'
import { extend } from '@react-three/fiber';
import { HTML } from 'drei';

extend({ HTML });



const AmbientLight = ({ intensity }) => {
  return ( new THREE.AmbientLight('#ffffff', intensity))};
  const DirectionalLight = ({ intensity}) => { 
    return ( new THREE.DirectionalLight('#ffffff', intensity))};

extend({ MeshDistortMaterial })
extend({ OrbitControls })
extend({ Sphere })
extend({Canvas})
// const Section = styled.div`
// height: 100vh;
// scroll-snap-align: center;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: space-between;
// `;
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1000px;
display: flex;
justify-content: space-between;

`;
const Top = styled.div`
flex: 3;
display: flex;
flex-direction: column;
justify-content: center;
gap: 25px;

`;
const Bottom = styled.div`
flex: 5;
position: relative;

`;

const Title = styled.div`
font-size: 50px;
`;
const Content = styled.div`
display: flex;
align-items: center;
gap: 15px;
`;
const Text = styled.div`
height:5px;
color: #FCACBF;

`;
const Description = styled.div`
font-size: 20px;
color: #B0808C;

`;
const Button = styled.button`
background-color: #9CAF88;
color: #ffffff;
font-weight: 500;
width: 150px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;
// const Image = styled.img`
//   width: 700px;
//   height: 500px;
//   object-fit: contain;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   margin: auto;

//   animation: animate 2s infinite ease alternate;
//   @keyframes animate {
//     to {
//       transform: translateY(30px);
//     }
//   }
// `;

const Intro = () => {
  return (
    
   <HTML>
      <Navbar />
      <Container>
        <Top>
          <Title>Unique Solutions</Title>
          <Content>
            <Text>
              Offering...
            </Text>
          </Content>
          <Description>
          stuff and things.
          </Description>
          <Button>Learn More</Button>
        </Top>
        <Bottom>
          {/* <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <AmbientLight intensity={1} />
              <DirectionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas> */}
          {/* <Image source={anImage} /> */}
        </Bottom>
      </Container>
    </HTML>
  );
};

export default Intro