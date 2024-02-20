import { useState } from "react";
import { useAuthContext } from "./useAuthContext.js";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const json = await response.json();
        setLoading(false);
        setError(json.error || "Login failed"); // Handle the error message from the server
        return;
      }

      const json = await response.json();
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error("An error occurred:", err);
      setError("An error occurred during login"); // Handle other errors
    }
  };

  return { login, error, loading };
};
