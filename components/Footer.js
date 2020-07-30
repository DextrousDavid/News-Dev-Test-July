const Footer = () => (
  <div>
    <footer className="container-fluid footer text-light bg-dark ">
      <div className="text-center">
        Copyright &copy; 2020{' '}
        <strong>
          <span>UpBaseNews.com</span>
        </strong>
      </div>
    </footer>
    <style jsx>
      {`
        footer {
          padding: 40px;
          margin-top: 30px;
          font-size: 20px;
        }
      `}
    </style>
  </div>
);
export default Footer;
