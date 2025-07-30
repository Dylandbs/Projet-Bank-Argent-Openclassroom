import Header from "../components/header/Header";
import FormSignUp from "../components/AuthForm/FormSignout";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main bg-dark">
        <section className="sign-up-content">
          <i className="fa fa-user-circle"></i>
          <h1>Sign Up</h1>
          <FormSignUp />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;