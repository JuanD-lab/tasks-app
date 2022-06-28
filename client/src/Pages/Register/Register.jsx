import RegisterForm from "../../Components/Register/RegisterForm";
import "../../App.css";

function Register() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center ">
        <RegisterForm />
      </div>
      
    </div>
  );
}

export default Register;
