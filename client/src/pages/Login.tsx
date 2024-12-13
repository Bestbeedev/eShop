import { LockIcon, MailIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../api/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signup = useLogin(); // Utilisation du hook personnalisé

  const handleLogin = () => {
    const data = { email, password };
    signup(data); // Appel de la fonction signup avec l'objet data
  };
  
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white shadow-lg space-x-7 rounded-lg border -mt-32 flex p-12">
        <div>
          <img
            className="size-96"
            src="../../src/assets/ecommerce.jpg"
            alt=""
          />
        </div>
        <div className=" rounded justify-center flex flex-col w-96">
          <div className="w-full mb-5">
            <h2 className="text-2xl ">Login</h2>
            <h3 className="text-sm">
              Join our e-commerce App and make your order
            </h3>
          </div>

          <div className="mb-4">
            <span className="flex  rounded-lg items-center border px-3 space-x-2">
              <MailIcon size={16} className="" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-2  rounded placeholder:text-sm  focus:outline-none "
              />
            </span>
          </div>
          <div className="mb-4">
            <span className="flex  rounded-lg items-center border px-3 space-x-2">
              <LockIcon size={16} className="" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-2  rounded placeholder:text-sm  focus:outline-none "
              />
            </span>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Se connecter
          </button>
          <span className="w-full flex justify-center space-x-2 my-5 text-center">
            <p>Pas encore inscrit?</p>{" "}
            <Link className="text-blue-500" to="/signup">
              S'inscrire
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
