import Header from "../components/header/Header";
import HeroBanner from "../components/HeroBanner";
import ServiceFeature from "../components/ServiceFeature";
import Footer from "../components/Footer";

const Home = () => {
  const bannerContents = [
    {
      text: "No fees.",
      class: "subtitle",
    },
    {
      text: "No minimum deposit.",
      class: "subtitle",
    },
    {
      text: "High interest rates.",
      class: "subtitle",
    },
    {
      text: "Open a savings account with Argent Bank today!",
      class: "text",
    },
  ];

  const serviceContents = [
    {
      img: "../img/icon-chat.png",
      title: "You are our #1 priority",
      desciption: `Need to talk to a representative? You can get in touch through 
      our 24/7 chat or through a phone call in less than 5 minutes.`,
    },
    {
      img: "../img/icon-money.png",
      title: "More savings means higher rates",
      desciption: `The more you save with us, the higher your interest rate will be!`,
    },
    {
      img: "../img/icon-security.png",
      title: "Security you can trust",
      desciption: `We use top of the line encryption to make sure your data and money is always safe.`,
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <HeroBanner contents={bannerContents} />
        <section className="features">
          <ServiceFeature contents={serviceContents} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
