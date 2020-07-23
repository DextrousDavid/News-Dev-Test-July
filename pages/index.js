import Navbar from '../components/Navbar';

import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = props => (
  <Layout>
    <div>
      <h2>Hello HomePage</h2>
      <p>Holla</p>
      <p>{props.news}</p>
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch(
    'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ff232978e2d41c7872088eb9be53d23'
  );
  const data = await res.json();

  return {
    news: data.articles.map(article => (
      <div>
        <ul>
          <li key={article.source.id}>Author: {article.author}</li>
          <li key={article.source.id}>Title: {article.title}</li>
        </ul>
      </div>
    )),
  };
};

//   return {
//     news: data.articles.map(article => (
//       <li key={article.source.id}>{article.source.name}</li>
//     )),
//   };
// r

export default Index;
