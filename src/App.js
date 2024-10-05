import React from 'react';
import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import QRCodeDetails from './Components/QRCodeDetails';
import RegisterForm from './Components/RegisterForm';
import ContactForm from './Components/ContactForm';
import VehicleVerify from './Components/VehicleVerify';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import './App.css';
import Award from './Components/Award';
import Customer from './Components/Customer';

function App() {
  const tawkMessengerRef = useRef();

    const handleMinimize =() => {
      tawkMessengerRef.current.minimize();
  };
    const onLoad = () => {
      console.log('onLoad works!');
  };
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <Navigation />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:qrcode" element={<QRCodeDetails />} />
            <Route path="/registration" element={<RegisterForm />} />
            <Route path="/award" element={<Award/>} />
            <Route path="/customer" element={<Customer/>} />
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/vehicle-verify" element={<VehicleVerify />} />
          </Routes>
        </Router>
        <TawkMessengerReact
                propertyId="647b7d097957702c744b98b8"  widgetId ="1h2160ri8" 
                ref={tawkMessengerRef}
                onLoad={onLoad}/>
      </div>
    </SnackbarProvider>
  );
}

export default App;
