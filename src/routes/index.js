import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../views/innerViews/home.css/index.';
  
  export default function RoutesApp() {
    return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Home />}/>
            </Routes>
        </BrowserRouter>
      </>
    );
  }