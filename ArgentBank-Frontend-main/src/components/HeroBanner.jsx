const HeroBanner = ({ contents, img, alt }) => {
  return (
    <div className="hero">
      <img srcSet={img} alt={alt} className="hero-img"/>
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
