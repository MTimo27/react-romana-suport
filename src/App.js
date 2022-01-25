import Header from './components/Header';
import Footer from './components/Footer';
import Liceu from './pages/Liceu';
import './styles/css/app.css';

function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <Liceu />
      </div>

      <Footer />
    </div>
  );
}

export default App;
