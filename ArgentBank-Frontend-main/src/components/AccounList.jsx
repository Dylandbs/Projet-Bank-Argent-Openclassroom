import AccountCard from "./AccountCard";

const AccountList = () => {
  const accounts = [
    {
      id: 1,
      visite: "3500",
      balance: "50,000.76",
    },
    {
      id: 2,
      visite: "3200",
      balance: "20,500.76",
    },
  ];

  return (
    <div>
      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          accountId={account.id} 
          visite={account.visite}
          balance={account.balance}
        />
      ))}
    </div>
  );
};

export default AccountList;
