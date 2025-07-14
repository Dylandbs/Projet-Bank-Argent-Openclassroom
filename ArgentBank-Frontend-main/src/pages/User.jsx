import Header from "../components/header/Header";
import Footer from "../components/Footer";
import ChangeUsername from "../components/ChangeUsername";
import AccountList from "../components/AccounList";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  console.log("User ID:", id);

  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <ChangeUsername />
        <AccountList />
      </main>
      <Footer />
    </div>
  );
};

export default User;
