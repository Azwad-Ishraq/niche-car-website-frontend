import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import Explore from './Pages/Explore/Explore';
import CarDetail from './Pages/CarDetail/CarDetail';

import AuthProvider from './context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


const theme = createTheme({
  palette:{
    primary:{
      main:'#2ecc71',
      dark:'#2ecc71',
      contrastText: '#ffffff'
    }
  }
})



function App() {
  return (
   <ThemeProvider theme={theme}>
      <AuthProvider>
      <div className="App">
     <BrowserRouter>



     <Switch>


       <Route exact path='/'>
            <Home></Home>
       </Route>
       <Route  path='/home'>
            <Home></Home>
       </Route>

       <Route  path='/explore'>
            <Explore></Explore>
       </Route>

       <PrivateRoute  path='/cars/:id'>
            <CarDetail></CarDetail>
       </PrivateRoute>
       <Route  path='/register'>
            <Register></Register>
       </Route>

       <Route  path='/login'>
            <Login></Login>
       </Route>

       <PrivateRoute  path='/dashboard'>
            <Dashboard></Dashboard>
       </PrivateRoute>



     </Switch>



     </BrowserRouter>
    </div>
      </AuthProvider>
   </ThemeProvider>
  );
}

export default App;
