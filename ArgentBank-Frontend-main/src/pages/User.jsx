import Header from "../components/header/Header";
import Footer from "../components/Footer";
import ChangeUsername from "../components/ChangeUsername";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  console.log("User ID:", id);

  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <i className="fa fa-user-circle"></i>
        <h1>User ID: {id}</h1>
        <ChangeUsername />
      </main>
      <Footer />
    </div>
  );
};

export default User;
