import './App.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from './components/header/Header'
import {Footer} from './components/footer/Footer'
import {Rutas} from './config/Routes'

function App() {
  return (
    <BrowserRouter>
     <Route render ={props => (
      <>
      <Header {...props}/>
      <Rutas/>
      <Footer/>
      </>
     )}/>
    </BrowserRouter> 
  );
}

export default App;
