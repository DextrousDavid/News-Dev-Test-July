const Jumbotron = () => (
  <div className="card container-fluid card-image">
    <div className="text-white text-center">
      <div className="py-3">
        <h2 className="card-title my-2 py-1">Welcome to UpBaseNews</h2>
        <p>Your number one news platform...</p>
        <br />
      </div>
    </div>

    <style jsx>
      {`
        .card {
          background-image: linear-gradient(15deg, #18547a 0%, #80d0c7 100%);
          color: #fff;
        }

        h4,
        h3,
        h2 {
          color: #fff;
        }
      `}
    </style>
  </div>
);
export default Jumbotron;
