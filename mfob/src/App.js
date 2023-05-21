import React from "react";
import './App.css';
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import { Canvas } from '@react-three/fiber'

const Container = styled.div `
height:100vh;
scroll-snap-type: y mandatory;
scoll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
  }`;

  function App() {
    return (
      <Container>
        <Navbar />
        <Canvas>
          <Intro />
          {/* <About /> */}
          {/* <Portfolio />
          <Resume />
          <Contact />
          <Map />
          <Dodecahedron />
          <WebDesign />
          <AppDevelopment />
          <DataScience />
          <PersonalProjects /> */}
        </Canvas>
      </Container>
    );
  }

export default App;
