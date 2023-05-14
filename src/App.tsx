import React, { Component } from 'react';
import './App.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import provinces from './map_data/states.png'
import background from './map_data/background.jpg'
import victorialogo from './images/Victoria3_logo.png'
import select_states from './map_data/states.png'

function App() {
  return (
    <div className="home-wrapper">
      <div className='background' >
        <img className='background-image' alt="background image" src={background}/>
      </div>
      <header className='logo'>
        <img className='victoria-logo' alt="Victoria 3 logo" src={victorialogo}/>
      </header>
      <div className="maps">
        <div>
          <div className='map-select-states'>
            <img className='states-image-icon' src={select_states}/>
            <div className='button'>States</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* <TransformWrapper
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
          </TransformWrapper> */}
        </div>
      </div>
    </div>
  );
}

export default App;
