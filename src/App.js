import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import {Routes, Route} from 'react-router-dom' 

//built-in imports  ->   { module to import}
//user made imports ->     module
function App() {

  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  
    </div>
  );
}

export default App;
