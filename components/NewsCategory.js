const NewsCategory = props => (
  <div>
    {props.newsList.articles.map((e, index) => (
      <div key={index}>
        <p className="text-justify colored">
          <strong>Title:</strong> <i className="bx bx-tada bxl-whatsapp"></i>{' '}
          {e.title}
          <br />
          <strong>
            Author:
          </strong> <i className="bx bx-tada bxs-phone-call"></i> {e.author}
          <br />
          <strong>Description:</strong> <i className=""></i> {e.description}
          <br />
        </p>
      </div>
    ))}
  </div>
);
export default NewsCategory;
