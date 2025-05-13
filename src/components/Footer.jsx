import React from 'react'
import image from '../assets/Logo (1).png'
function Footer() {
  return (
   <div
  className="bg-black footer-section"
  style={{ color: "white", padding: "50px 0 20px 0" }}
>
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="row">
          <div className="col-12 col-sm-4 text-center text-sm-start mb-4 mb-sm-0">
            <img
              src={image}
              className="img-fluid"
              style={{ maxWidth: 150 }}
            />
          </div>
          <div className="col-6 col-sm-4">
            <ul
              style={{ listStyle: "none", paddingLeft: 0 }}
              className="mb-4 mb-md-0"
            >
              <li className="mb-2">
                <a
                  href="./index.html"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="./about.html"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="./testimonials.html"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Influencer
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="./blog.html"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4">
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li className="mb-2">
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  FACEBOOK
                </a>
              </li>
              <li className="mb-2">
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  INSTAGRAM
                </a>
              </li>
              <li className="mb-2">
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  TWITTER
                </a>
              </li>
              <li className="mb-2">
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  LINKEDIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-end align-items-center align-items-md-end mt-4 mt-md-0">
        <h3 className="mb-2">Stay in the know — we'll</h3>
        <h3 className="mb-3">send you offers &amp; more.</h3>
        <button
          className="btn btn-outline-secondary"
          style={{
            color: "white",
            borderRadius: 20,
            padding: "6px 20px",
            textTransform: "uppercase"
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
  <div className="container">
    <hr
      style={{
        opacity: 1,
        borderColor: "#555",
        margin: "30px auto",
        width: "90%"
      }}
    />
  </div>
  <div className="container">
    <div className="d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center">
      <p className="mb-2 mb-md-0 text-center text-md-start">
        © 2022 Scandleted. All right reserved.
      </p>
      <p className="mb-0 text-center text-md-end">Design Made By Asmaa</p>
    </div>
  </div>
  <div className="modal fade" id="loginform" data-bs-backdrop="static">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Login Form</h1>
          <span className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
