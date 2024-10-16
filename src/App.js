import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import About from './component/About';
import Touch from './component/Touch';
import Footer from './component/Footer';
import Login from './component/Login';
import SignUp from './component/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Sign_In" element={<SignInFn />}  />
          <Route path="/Signup" element={<SignUpFn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function MainPage() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Touch />
      <Footer />
    </>
  );
}

function SignUpFn() {
  return (
    <>
      <Navbar />
      <Main />
      <Login />
      <Touch />
      <Footer />
      
    </>
  );
}
function SignInFn(){
  return (
    <>
      <Navbar />
      <Main />
      <SignUp />
      <Touch />
      <Footer />
    </>
  )
}

export default App;
