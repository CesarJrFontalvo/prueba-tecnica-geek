// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ingredientes from "../components/Ingredientes";

// import Login from '../components/Login';

const AppRouter = () => {
 <Router>
 <Routes>
  
 <Route path="/" element={ <Ingredientes/> } />

 </Routes>
</Router>
};

export default AppRouter;
