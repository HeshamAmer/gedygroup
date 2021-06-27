import './Home.css';
import HomePageTitle from '../HomePageTitle'
import GetInContactButton from '../GetInContactButton'
import Carousel from '../Carousel'
import AboutUs from '../AboutUs'

function Home() {
  return (
    <div style={{backgroundColor:'black'}}>  
          <HomePageTitle />      
          <Carousel/>
          <GetInContactButton />
          <AboutUs/>
          <br/>
          <br/>
    </div>
  );
}

export default Home;
