import { useState } from "react";
import { SetCookie } from "../cookieUtils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { useSelector } from "react-redux";
import { toggleChecked } from "../../features/hiddenSlice";
import { setDataUser } from "../../features/authSlice";
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";

const FormSignIn = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const Checkbox = useSelector((state) => state.hidden.checked);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const urlApiLogin = "http://localhost:3001/api/v1/user/login";
  const urlApiProfile = "http://localhost:3001/api/v1/user/profile";

  const handleCheck = () => dispatch(toggleChecked());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: Username,
      password: Password,
    };

    console.log(userData);

    try {
      const response = await fetch(urlApiLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
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
        throw new Error("Network response was not ok");
      }
      const profileData = await profileResponse.json();
      navigate(`/User/${profileData.body.id}`);
      dispatch(setDataUser(profileData.body));
      if (Checkbox) {
        dispatch(toggleChecked());
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };



  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <InputField
        type="text"
        id="Username"
        aria="Username"
        label="Username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        input_className="input-field"
        container_className="input-wrapper"
      />
      <InputField
        type="text"
        id="Password"
        aria="Password"
        label="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        input_className="input-field"
        container_className="input-wrapper"
      />
      <CheckboxField
        id="remember-me"
        label="Remember me"
        checked={Checkbox}
        onChange={handleCheck}
      />
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default FormSignIn;
