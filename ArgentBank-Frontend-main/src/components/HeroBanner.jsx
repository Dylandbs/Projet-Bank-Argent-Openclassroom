const HeroBanner = ({ contents }) => {
  return (
    <div className="hero">
      <section className="hero-content">
        {contents.map((content, index) => (
          <p className={content.class} key={index}>
            {content.text}
          </p>
        ))}
      </section>
    </div>
  );
};

export default HeroBanner;
