import {
  Route,
  Routes,
  BrowserRouter,
  
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
