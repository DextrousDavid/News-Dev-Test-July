import Layout from '../components/Layout';

const NewsUploadForm = () => (
  <div>
    <br />
    <form name="contact" method="POST" role="form" data-netlify="true">
      <br />
      <h4 className="text-center">News Upload Form</h4>
      <div className="form-group">
        <label for="title">
          Title<span id="redStar">*</span>
        </label>
        <input
          required
          type="text"
          name="title"
          className="form-control"
          id="name"
          placeholder="Title..."
        />
      </div>
      <div className="form-group">
        <label for="subject">
          Subject<span id="redStar">*</span>
        </label>
        <input
          required
          validate
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Subject..."
        />
      </div>
      <div className="form-group">
        <label for="category">
          Category<span id="redStar">*</span>
        </label>
        <select required className="form-control" name="subject" id="subject">
          <option value="sport">Sports</option>
          <option value="weather">Weather</option>
          <option value="politics">Politics</option>
          <option value="celebrity">Celebrity</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>

      <div className="form-group">
        <label for="author">
          Author's Name<span id="redStar">*</span>
        </label>
        <input
          required
          type="text"
          name="author"
          className="form-control"
          id="author"
          placeholder="Author's Name..."
        />
      </div>
      <div className="form-group">
        <label for="urlToImage">Link To Image</label>
        <input
          required
          type="img"
          className="form-control"
          name="image"
          id="image"
          placeholder="Url to image...."
          data-msg="Please enter a valid url to img"
        />
      </div>

      <div className="form-group">
        <label for="date">
          Select Date<span id="redStar">*</span>
        </label>
        <input
          required
          type="date"
          className="form-control"
          name="date"
          id="date"
          placeholder="Select date created"
        />
      </div>
      <div className="form-group">
        <label for="message">Please, Write Something for Us!</label>
        <textarea
          required
          className="form-control"
          name="body"
          rows="5"
          data-msg="Please write something for us"
          placeholder="Please, write something for us..."
        ></textarea>
      </div>
      <div className="text-center">
        <button className="btn btn-info" type="submit">
          Upload News
        </button>
      </div>
    </form>

    <style jsx>
      {`
        form,
        p {
          padding-left: 40px;
        }

        #redStar {
          color: red;
        }
        p {
          color: blue;
        }
      `}
    </style>
  </div>
);

export default NewsUploadForm;
