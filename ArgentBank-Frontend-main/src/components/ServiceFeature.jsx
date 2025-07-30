const ServiceFeature = ({ contents }) => {
  return contents.map((content, index) => (
    <div className="feature-item" key={index}>
      <img
        className="feature-icon"
        alt="chat-icon"
        srcSet={content.img}
      />
      <h3 className="feature-item-title">{content.title}</h3>
      <p className="feature-item-description">{content.desciption}</p>
    </div>
  ));
};

export default ServiceFeature;
