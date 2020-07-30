import Fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import NewsUploadForm from '../components/newsUploadForm';
//import NewsCategory from '../components/NewsCategory';

const News = props => (
  <div className="allNews">
    <div className="row">
      <div className="col-md-8">
        <h3>
          <br />
          Breaking News
        </h3>
        {props.newsList.articles.map((e, index) => (
          <div key={index}>
            <div className="">
              <div className="">
                <p className="colored">
                  <strong>Title:</strong>{' '}
                  <span
                    style={{
                      color: '#2FA4E7',
                    }}
                    id="capitalized"
                  >
                    {e.title}
                  </span>
                  <br />
                  <strong>Date Published:</strong> {e.publishedAt}
                  <br />
                  <strong className="text-center">Author:</strong>{' '}
                  <i className="bx bx-tada bxs-phone-call"></i> {e.author}
                  <br />
                  <strong>Description:</strong>{' '}
                  <span className="text-justify">{e.description}</span>
                  <br />
                  <strong>Content:</strong> <span>{e.content}</span>
                  <br />
                  <strong>LinkToImage:</strong>
                  <a href={e.urlToImage} target="_blank">
                    {' '}
                    Link to Image
                  </a>
                  <hr id="bottomStyle" />
                  <br />
                </p>
              </div>
            </div>
          </div>
        ))}{' '}
      </div>
      <div className="col-md-4">
        <NewsUploadForm />
      </div>
    </div>
    <style jsx>
      {`
        .colored {
          padding: 10px;
          background-color: #fafafa;
          border: 2px solid #efefef;
        }

        p {
          font-size: 17px;
        }

        .allNews {
          padding-right: 20px;
        }

        #capitalized {
          text-transform: capitalize;
          font-weight: bold;
        }
      `}
    </style>
  </div>
);
export default News;
