import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SingleService from './Component/SingleService/SingleService';
import Footer from './Component/Footer/Footer';
import SignUp from './Component/SignUp/SignUp';
import FlatRent from './Component/FlatRent/FlatRent';
import { VendorDetails } from './Component/VendorDetails/VendorDetails';

function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Banner></Banner>} />

          <Route path="singleService" element={<SingleService></SingleService>} />

          <Route path="signUp" element={<SignUp></SignUp>} />

          <Route path="flatRent" element={<FlatRent></FlatRent>} />
          <Route path="VendorDetails" element={<VendorDetails></VendorDetails>} />





        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>



    </div>
  );
}

export default App;
