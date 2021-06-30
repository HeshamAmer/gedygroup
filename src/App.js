import './App.css';
import Main from './Main'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

function App() {
  return (
    <div class="row">
      <NavigationBar />
      <div class="dotted-white-background"/>  
      <div class="column">        
        <Main/>    
      </div>
      <div class="dotted-white-background"/>
      <Footer />
    </div>
  );
}

export default App;
