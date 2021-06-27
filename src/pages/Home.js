import './Home.css';
import HomePageTitle from '../HomePageTitle'
import GetInContactButton from '../GetInContactButton'
import Carousel from '../Carousel'

function Home() {
  return (
    <div className="App">  
          <HomePageTitle />      
          <GetInContactButton />
          <Carousel/>
    </div>
  );
}

export default Home;
