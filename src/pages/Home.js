import './Home.css';
import HomePageTitle from '../components/HomePageTitle'
import AboutUs from '../components/AboutUs'
import ScrollToTopButton from '../components/ScrollToTopButton';

function Home() {
  return (
    <div>  
          <HomePageTitle />
          <AboutUs/>
    </div>
  );
}

export default Home;
