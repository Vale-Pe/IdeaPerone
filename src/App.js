import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import IDC from './components/IDC';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings='¡Bienvenidos!' />
      <ItemDetailContainer greetings='DETALLES' />
      {/* <IDC /> */}
    </div>
  );
}

export default App;