import Link from 'next/link';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand navbar-dark bg-custom-2 bg-dark mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <strong className="up">UBNews</strong>
          .com
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navy navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/register">
                <a className="nav-link">Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <style jsx>
      {`
        .bg-custom-2 {
          background-image: linear-gradient(15deg, #18547a 0%, #80d0c7 100%);
          color: #fff;
        }

        li {
          color: #fff;
        }
        .nav-link {
          margin-left: -6px;
        }
        .up {
          font-size: 18px;
          margin-left: -9px;
        }
      `}
    </style>
  </div>
);

export default Navbar;
