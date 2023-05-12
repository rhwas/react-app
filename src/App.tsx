import React, { Component } from 'react';
import './App.css';
import "./styles.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import provinces from './map_data/provinces.png'

function App() {
  return (
    // <div className="App">
    //   <div className="img-container">
    //     <img
    //       src={provinces}
    //       alt="provinces"
    //     />
    //   </div>
    // </div>
    <TransformWrapper
      initialScale={1}
      initialPositionX={2000}
      initialPositionY={1000}
      limitToBounds={false}
      centerZoomedOut={false}
    >
      <TransformComponent>
        <img src={provinces} alt="provinces" />
      </TransformComponent>
    </TransformWrapper>
  );
}

export default App;
