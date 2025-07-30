import AccountCard from "./AccountCard";
import AccountTransaction from "./AccountTransaction";
import { useSelector } from "react-redux";

const AccountList = () => {
  const accountId = useSelector((state) => state.accounts.accountId);
  const accounts = useSelector((state) => state.accounts.accounts);

  return (
    <div>
      {accounts.map((acc) => (
        <div key={acc.id}>
          <AccountCard
            accountId={acc.id}
            visite={acc.visite}
            balance={acc.balance}
          />
          {accountId === acc.id && (
            <AccountTransaction transactions={acc.transactions} />
          )}
        </div>
      ))}
    </div>
  );
};

export default AccountList;