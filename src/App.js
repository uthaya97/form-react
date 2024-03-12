import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Sign from "./Component/Sign";
import Customer from "./Component/Customer";
import Detail from "./Component/Detail";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<Sign/>}></Route>
    <Route path="/login"element={<Login/>}></Route>
    <Route path="/customer"element={<Customer/>}></Route>
    <Route path="/detail/:id"element={<Detail/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
