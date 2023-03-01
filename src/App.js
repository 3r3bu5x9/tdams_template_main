import Home from "./Home";
import NavBar from "./NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import AllItems from "./AllItems";
import AllUsers from "./AllUsers";
import {AuthProvider} from "./contexts/authContext";
import UserProvider from "./contexts/userContext";

export default function App() {

  return (
      <AuthProvider>
        <UserProvider>
            <BrowserRouter>
                <NavBar loginState={false}></NavBar>
                <div>
                  <Routes>
                    <Route path={'/login'} element={<Login/>}></Route>
                    <Route path={'/'} element={<Home/>}></Route>
                    <Route path={'/home'} element={<Home/>}></Route>
                    <Route path={'/products'} element={<AllItems/>}></Route>
                    <Route path={'/about'} element={<About/>}></Route>
                    <Route path={'/register'} element={<Register/>}></Route>
                    <Route path={'/allUsers'} element={<AllUsers/>}></Route>
                  </Routes>
                </div>
            </BrowserRouter>
        </UserProvider>
      </AuthProvider>
  );
}
