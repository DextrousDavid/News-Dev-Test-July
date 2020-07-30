import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => (
  <div className="bodily">
    <Head>
      <title>Upbase Ltd News Test | Welcome</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
    <Footer />
    <style jsx>{`
      .bodily {
        font-family: 'Segoe UI', Tahoma, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
