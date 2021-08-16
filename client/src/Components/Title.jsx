const Title = ({ title, opaceTitle }) => {
  return (
    <div className="title">
      <h1>
        {title}
        <span>{opaceTitle}</span>
      </h1>
    </div>
  );
};

export default Title;
