import { toggleAccount } from "../features/hiddenSlice";
import { useSelector, useDispatch } from "react-redux";

const AccountCards = ({ accountId, visite, balance }) => {
  const account = useSelector((state) => state.hidden.accountId);
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(toggleAccount(accountId));
    console.log(`account is : ${account}`);
  };

  const isActive = account === accountId;

  return (
    <div className="test">
      <div className="card-container">
        <div className="card-info">
          <h3>Argent bank checking (x{visite})</h3>
          <p>${balance}</p>
          <p>avalaible balance</p>
        </div>

        <i
          className={`fa-solid ${isActive ? "fa-xmark" : "fa-chevron-right"} 
               transition-icon`}
          onClick={handleCheck}
        ></i>
      </div>
    </div>
  );
};

export default AccountCards;
