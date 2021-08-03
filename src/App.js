import './App.css';
import Main from './Main'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App"><NavigationBar />
      <Main />
      <ScrollToTopButton/>
      <Footer />
    </div>
  );
}

export default App;
