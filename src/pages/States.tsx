import states from '../map_data/states.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Home = () => {
    return (
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
                        <img src={states} alt="states" />
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    );
  };
  
  export default Home;