import Header from "../components/header/Header";
import FormSignIn from "../components/SignInForm/FormSignin";
import Footer from "../components/Footer";

const sign_in = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle"></i>
          <h1>Sign In</h1>
          <FormSignIn />
        </section>
      </main>
    <Footer />
    </>
  );
};

export default sign_in;
