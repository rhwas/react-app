import { Sidebar } from 'components/Sidebar';
import provinces from 'map_data/provinces.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Provinces = () => {
    return (
        <>
            <Sidebar />
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
        </>
    );
};

export default Provinces;