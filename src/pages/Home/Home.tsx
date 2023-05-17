import victorialogo from 'images/Victoria3_logo.png';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { RoutePaths } from 'Enums/RoutePaths';
import { Button } from 'components/Button';
import './Home.css';

function Home() {
    const navigateToStates = useAppNavigation(RoutePaths.STATES);
    const navigateToProvinces = useAppNavigation(RoutePaths.PROVINCES);

    return (
        <div className="home-wrapper">
            <header className='logo'>
                <img className='victoria-logo' alt="Victoria 3 logo" src={victorialogo} />
            </header>
            <section className="maps">
                <Button className='map-select states' onClick={navigateToStates}>
                    <span className='map-select-text'>States</span>
                </Button>
                <Button className='map-select provinces' onClick={navigateToProvinces}>
                    <span className='map-select-text'>Provinces</span>
                </Button>
            </section>
            <footer className='footer'>
                <div className='github' />
            </footer>
        </div>
    );
}

export default Home;