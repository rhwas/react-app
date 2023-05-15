import provinces from './map_data/states.png'
import background from '../map_data/background.jpg'
import victorialogo from '../images/Victoria3_logo.png'
import { useNavigate } from "react-router-dom";


const Home = () => {
    let navigate = useNavigate(); 
    const routeStates = () =>{ 
        let path = `states`; 
        navigate(path);
    }
    const routeProvinces = () =>{ 
        let path = `provinces`; 
        navigate(path);
    }
    return (
        <div className="home-wrapper">
            <div className='background' >
                <img className='background-image' alt="background" src={background}/>
            </div>
            <div className='logo'>
                <img className='victoria-logo' alt="Victoria 3 logo" src={victorialogo}/>
            </div>
            <div className="maps">
                <>
                    <div className='map-select states' onClick={routeStates}>
                    <div className='button'>States</div>
                    </div>
                </>
                <>
                    <div className='map-select provinces' onClick={routeProvinces}>
                    <div className='button'>Provinces</div>
                    </div>
                </>
            </div>
            <div className='footer'>
                <div className='github'>

                </div>
            </div>
      </div>
    );
  };
  
  export default Home;