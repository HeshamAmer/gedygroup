import './App.css';
import Main from './Main'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Main className="dottedBackground"/>    
      <Footer/>

    </div>
  );
}

export default App;
