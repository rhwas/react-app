import React, { Component } from 'react';
import './App.css';
import "./styles.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import provinces from './map_data/states.png'
import background from './map_data/background.jpg'

function App() {
  return (
    <div style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"
    }}>
      <div className="row">
        <div className="col">
          <TransformWrapper
            initialScale={0.2}
            initialPositionX={400}
            initialPositionY={100}
            limitToBounds={false}
            centerZoomedOut={false}
            maxScale={8}
            minScale={0.2}
            centerOnInit={false}
          >
            <TransformComponent>
              <img src={provinces} alt="provinces" />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
