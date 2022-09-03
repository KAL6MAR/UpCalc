import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Header } from './components'
/*eslint no-unused-vars: 0*/
import {Home, Login, Register, Statistics} from './pages'
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/Register'} element={<Register/>}/>
        </Routes>
        {/*<Home/>*/}
        {/*<Login/>*/}
        {/*<Register/>*/}
        {/*<Statistics/>*/}
    </div>
  );
}

export default App;
