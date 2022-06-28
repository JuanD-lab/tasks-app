import { Container, Blob4, Blob3 } from "./styles";
import LoginForm from "../../Components/Login/LoginForm";
import Logo from "../../letters.png";
import "../../App.css";

function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center ">
        <LoginForm />
      </div>
      {/* <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <img src={Logo} width="330px" aria-label="hidden" className="animate-pulse" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div> */}
    </div>
  );
}
{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" aria-label="hidden"/>
        <p>Alion Agent Dashboard</p>
        <p>Live preview version 1.0.0</p>
      </header>
    </div> */
}

export default Login;
