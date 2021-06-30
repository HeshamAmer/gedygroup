import './Home.css';
import HomePageTitle from '../HomePageTitle'
import GetInContactButton from '../GetInContactButton'
import AboutUs from '../AboutUs'

function Home() {
  return (
    <div>  
          <HomePageTitle />      
          <GetInContactButton />
          <AboutUs/>
          <br/>
          <br/>
    </div>
  );
}

export default Home;
