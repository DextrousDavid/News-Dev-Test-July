import Layout from '../components/Layout';

const Login = () => (
  <Layout>
    <div>
      <section id="cover" className="min-vh-100">
        <div id="cover-caption">
          <div className="container">
            <div className="row text-white">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h1 className="display-4 py-2 text-truncate text-center">
                  Login
                </h1>
                <div className="px-2">
                  <form action="" className="justify-content-center">
                    <div className="form-group">
                      <label className="sr-only">Name</label>
                      <input
                        required
                        type="username"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>

                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input
                        required
                        validate
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary btn-lg">
                        Login
                      </button>
                      <br />a
                    </div>
                    <div>
                      <h6>
                        Not a member? <a href="register">Click to register</a>
                      </h6>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          #cover {
            background-size: cover;
            height: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            position: relative;
          }

          #cover-caption {
            width: 100%;
            position: relative;
            z-index: 1;
          }

          /* only used for background overlay not needed for centering */
          form:before {
            content: '';
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: -1;
            border-radius: 10px;
            background-color: #fafafa;
          }
        `}
      </style>
    </div>
  </Layout>
);

export default Login;
