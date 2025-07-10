import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleHidden } from "../features/hiddenSlice";
import { useState } from "react";
import { editUsername } from "../features/authSlice";
import { GetCookie } from "./cookieUtils";
import InputField from "./SignInForm/InputField";

const ChangeUsername = () => {
  const profilData = useSelector((state) => state.auth.dataUser);
  const hidden = useSelector((state) => state.hidden.hidden);
  const [userName, setUserName] = useState(profilData.userName || "");
  const dispatch = useDispatch();
  const token = GetCookie("token");

  const urlApiProfile = "http://localhost:3001/api/v1/user/profile";

  const handleCheck = () => dispatch(toggleHidden());

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(urlApiProfile, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: userName }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(editUsername({ userName: data.body.userName }));
      dispatch(toggleHidden());
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {!hidden && (
        <>
          <h1>
            Welcome back
            <br />
            {profilData.userName}
          </h1>
          <button className="edit-button" onClick={handleCheck}>
            Edit Name
          </button>
        </>
      )}

      {hidden && (
        <form action="">
          <h3>Edit user</h3>
          <div className="input-container">
            <InputField
              type="text"
              id="userName"
              aria="userName"
              label="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={"input-field"}
            />
            <InputField
              type="text"
              id="firstName"
              aria="first Name"
              label="First Name"
              className={"input-field"}
              value={profilData.firstName}
              onChange={null}
              disabled={true}
            />
            <InputField
              type="text"
              id="lastName"
              aria="lastName"
              label="lastName"
              className={"input-field"}
              value={profilData.lastName}
              onChange={null}
              disabled={true}
            />
            <button type="submit" className="edit-button" onClick={handleClick}>
              Save
            </button>
            <button type="button" className="edit-button" onClick={handleCheck}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ChangeUsername;
