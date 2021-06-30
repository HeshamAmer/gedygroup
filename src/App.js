import './App.css';
import Main from './Main'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="App"><NavigationBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
