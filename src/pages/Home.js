import './Home.css';
import HomePageTitle from '../components/HomePageTitle'
import GetInContactButton from '../components/GetInContactButton'
import AboutUs from '../components/AboutUs'

function Home() {
  return (
    <div>  
          <HomePageTitle />      
          <AboutUs/>
          <br/>
          <br/>
    </div>
  );
}

export default Home;
