import Link from 'next/link';

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </li>
    </ul>

    <style jsx>
      {`
        ul {
          background: #333;
          color: #fff;
          list-style: none;
          display: flex;
        }

        ul li {
          font-size: 18px;
          margin-right: 20px;
        }

        ul li a {
          color: #fff;
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default Navbar;
