import { useState, } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputField from "./InputField";
import { login, setDataUser } from "../../features/authSlice";
import { SetCookie } from "../cookieUtils";

const FormSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmedPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!firstName || !lastName || !userName || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const signupResponse = await fetch(
        "http://localhost:3001/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
            userName
          }),
        }
      );

      if (!signupResponse.ok) {
        const errorData = await signupResponse.json();
        throw new Error(errorData.message || "Registration error");
      }

      const loginResponse = await fetch(
        "http://localhost:3001/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!loginResponse.ok) {
        throw new Error("Automatic login failed");
      }

      const loginData = await loginResponse.json();
      const token = loginData.body.token;

      SetCookie("token", token);
      dispatch(login({ token }));

      const profileResponse = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profileData = await profileResponse.json();

      dispatch(setDataUser(profileData.body));

      navigate(`/User/${profileData.body.id}`);
    } catch (err) {
      setError(err.message || "An error occurred during registration");
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="sign-out-form">
      {error && <div className="error-message">{error}</div>}

      <div className="name-row">
        <InputField
          type="text"
          id="firstName"
          aria="First Name"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          input_className="input-field"
          container_className="input-wrapper"
        />
        <InputField
          type="text"
          id="lastName"
          aria="Last Name"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          input_className="input-field"
          container_className="input-wrapper"
        />
      </div>
      <InputField
        type="text"
        id="username"
        aria="Username"
        label="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        input_className="input-field"
        container_className="input-wrapper"
      />
      <InputField
        type="email"
        id="email"
        aria="Email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        input_className="input-field"
        container_className="input-wrapper"
      />
      <div className="password-row">
        <InputField
          type="password"
          id="password"
          aria="Password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          input_className="input-field"
          container_className="input-wrapper"
        />
        <InputField
          type="password"
          id="confirmPassword"
          aria="Confirm Password"
          label="Confirm Password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          input_className="input-field"
          container_className="input-wrapper"
        />
      </div>
      <button type="submit" className="sign-in-button" disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
      <p className="sign-up-link">
        Already have an account? <Link to="/Sign_in">Sign In</Link>
      </p>
    </form>
  );
};

export default FormSignUp;