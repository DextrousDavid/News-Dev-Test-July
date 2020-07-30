import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import News from '../components/News';
import Jumbotron from '../components/Jumbotron';

// const newsList = {
//   status: 'ok',
//   articles: [
//     {
//       title: 'It will work',
//       author: 'Samuel',
//       publishedAt: 'July',
//       description: 'Hola Hola',
//       content: 'lorem100000000000000',
//       urlToImage: 'www.com.com',
//     },
//   ],
// };
const Index = props => (
  <Layout>
    <div>
      <Jumbotron />
      <br />
      <br />
      <News newsList={props.newsList} />
    </div>
    <style jsx>{`
      .bodily {
        background-color: blue;
        padding: 200px;
      }
    `}</style>
  </Layout>
);

export default Index;

Index.getInitialProps = async function () {
  const res = await fetch(
    'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ff232978e2d41c7872088eb9be53d23'
  );
  const data = await res.json();

  return {
    newsList: data,
  };
};
