import Header from './components/Header';
import Footer from './components/Footer';
import Views from './Views';
import './styles/css/app.css';

function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <Views />
      </div>
      <Footer />
    </div>
  );
}

export default App;
