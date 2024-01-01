import React, { useContext } from 'react'
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Context } from './context/Context';




function App() {
  const {user} = useContext(Context);

  return (
    <Router>
      <Topbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/register" element={ user? <Home /> : <Register /> } />
          <Route exact path="/login" element={ user? <Home /> : <Login /> } />
          <Route exact path="/write" element={ user? <Write /> : <Register /> } />
          <Route exact path="/settings" element={ user? <Setting /> : <Register /> } />
          <Route  path="/post/:postId" element={ <Single /> } />
        </Routes>

    </Router>
  )
}

export default App;
