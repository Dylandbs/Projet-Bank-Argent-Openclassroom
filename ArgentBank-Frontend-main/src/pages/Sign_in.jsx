import Header from "../components/header/Header";
import FormSignIn from "../components/AuthForm/FormSignin";
import Footer from "../components/Footer";

const SignIn = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle"></i>
          <h1>Sign In</h1>
          <FormSignIn />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;