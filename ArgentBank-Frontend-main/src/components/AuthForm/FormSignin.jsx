import { useState } from "react";
import { SetCookie } from "../cookieUtils";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setDataUser } from "../../features/authSlice";
import { useSelector } from "react-redux";
import { toggleChecked } from "../../features/hiddenSlice";
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";

const FormSignIn = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
  });
  const Checkbox = useSelector((state) => state.hidden.checked);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const urlApiLogin = "http://localhost:3001/api/v1/user/login";
  const urlApiProfile = "http://localhost:3001/api/v1/user/profile";

  const handleCheck = () => dispatch(toggleChecked());

  const validateFields = () => {
    const errors = {
      email: !Username.trim(),
      password: !Password.trim(),
    };
    setFieldErrors(errors);
    return !errors.email && !errors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");


    if (!validateFields()) {
      setError("Please fill in all fields");
      return;
    }

    const userData = {
      email: Username,
      password: Password,
    };

    try {
      const response = await fetch(urlApiLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid email or password");
      }
      
      const data = await response.json();
      const token = data.body.token;
      SetCookie("token", token, Checkbox ? 30 : null);
      dispatch(login({ token }));

      const profileResponse = await fetch(urlApiProfile, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }
      const profileData = await profileResponse.json();
      navigate(`/User/${profileData.body.id}`);
      dispatch(setDataUser(profileData.body));
      if (Checkbox) {
        dispatch(toggleChecked());
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError(error.message || "An error occurred during login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      {error && <div className="error-message">{error}</div>}
      
      <InputField
        type="text"
        id="Username"
        aria="Username"
        label="Username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        input_className={`input-field ${fieldErrors.email ? "error" : ""}`}
        container_className="input-wrapper"
      />
      <InputField
        type="password" 
        id="Password"
        aria="Password"
        label="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        input_className={`input-field ${fieldErrors.password ? "error" : ""}`}
        container_className="input-wrapper"
      />
      <CheckboxField
        id="remember-me"
        label="Remember me"
        checked={Checkbox}
        onChange={handleCheck}
      />
      <p className="sign-up-link">
        Don't have an account? <Link to="/Sign_up">Sign Up</Link>
      </p>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default FormSignIn;