import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/UserStore";
import { useDecodeToken } from "../hooks/decodeToken";

// Définition du type pour les données de l'utilisateur
// Définition du type commun pour signup et login
type Data = {
  username?: string; // Le champ username est optionnel pour login
  email: string;
  password: string;
};

// Hook personnalisé pour la gestion de l'inscription
export const useSignup = () => {
  const { login, setLoading } = useUserStore();
  const navigate = useNavigate();

  const signup = async (data: Data) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw new Error("Signup failed");
      }
      setLoading(false);
      const decoded = useDecodeToken(result.token);
      if (decoded) {
        alert("Signup Successful");
        login(
          {
            username: decoded.username,
            email: decoded.email,
            role: decoded.role.toLowerCase() === "user" ? "user" : "admin",
          },
          result.token
        );
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return signup; // Retourne la fonction signup
};

// Hook personnalisé pour la gestion de la connexion
export const useLogin = () => {
  const { login, setLoading } = useUserStore();
  const navigate = useNavigate();

  const loginUser = async (data: Data) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw new Error("Login failed");
      }
      setLoading(false);
      const decoded = useDecodeToken(result.token);
      if (decoded) {
        alert("Login Successful");
        login(
          {
            username: decoded.username,
            email: decoded.email,
            role: decoded.role.toLowerCase() === "user" ? "user" : "admin",
          },
          result.token
        );
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return loginUser; // Retourne la fonction loginUser
};


// Hook personnalisé pour la gestion de la déconnexion
export const useLogout = () => {
  const navigate = useNavigate();
  const { logout, setLoading } = useUserStore();

  const logoutUser = async () => {
    try {
      setLoading(true);
      logout();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return logoutUser; // Retourne la fonction logoutUser à utiliser dans le composant
};
