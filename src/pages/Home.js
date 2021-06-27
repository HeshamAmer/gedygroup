import './Home.css';
import NavigationBar from '../NavigationBar'
import HomePageTitle from '../HomePageTitle'
import GetInContactButton from '../GetInContactButton'

function Home() {
  return (
    <div className="App">  
          <HomePageTitle />  
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', backgroundColor: 'grey'}}>        
          <GetInContactButton />
        </div>    
    </div>
  );
}

export default Home;
