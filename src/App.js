import './App.css';
import NavigationBar from './NavigationBar'
import HomePageTitle from './HomePageTitle'
import GetInContactButton from './GetInContactButton'

function App() {
  return (
    <div className="App">
      <NavigationBar />
                      
          <HomePageTitle />  
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', backgroundColor: 'grey'}}>        
          <GetInContactButton />
        </div>    
    </div>
  );
}

export default App;
