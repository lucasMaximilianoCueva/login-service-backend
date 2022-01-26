import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar";
import { AuthRouter } from './routers/AuthRouter';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { LoginScreen } from './components/Auth/Login/LoginScreen';


export function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      
      <div className="mt-10" />

      <Routes>
          <Route path="/" element={<LoginScreen/>} />
          <Route path="/api/*" element={<AuthRouter/>} />
          <Route path="*" element={<PageNotFound/>} />
      </Routes>      

    </BrowserRouter>

  )
}


