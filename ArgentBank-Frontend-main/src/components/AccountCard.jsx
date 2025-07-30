import { setActiveAccount } from "../features/accountSlice";
import { useSelector, useDispatch } from "react-redux";

const AccountCard = ({ accountId, visite, balance }) => {
  const activeAccountId = useSelector((state) => state.accounts.accountId);
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setActiveAccount(accountId));
    console.log(`account is : ${accountId}`);
  };

  const isActive = activeAccountId === accountId;

  return (
    <div className="account-card-wrapper">
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

export default AccountCard;