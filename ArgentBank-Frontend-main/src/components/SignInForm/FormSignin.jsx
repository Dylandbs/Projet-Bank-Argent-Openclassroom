import { useState } from "react";
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";


const FormSignIn = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Checkbox, setCheckbox] = useState(false);

  const handlecheck = () => setCheckbox((check) => !check);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: Username,
      password: Password,
    };

    console.log(userData);
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
      />
      <InputField
        type="text"
        id="Password"
        aria="Password"
        label="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <CheckboxField
        id="remember-me"
        label="Remember me"
        checked={Checkbox}
        onChange={handlecheck}
      />
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default FormSignIn;
