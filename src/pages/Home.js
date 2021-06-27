import './Home.css';
import HomePageTitle from '../HomePageTitle'
import GetInContactButton from '../GetInContactButton'
import Carousel from '../Carousel'

function Home() {
  return (
    <div style={{backgroundColor:'black'}}>  
          <HomePageTitle />      
          <Carousel/>
          <GetInContactButton />
          <br/>
          <br/>
    </div>
  );
}

export default Home;
