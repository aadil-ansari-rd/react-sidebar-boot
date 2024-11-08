import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function Sidebarmenu({ children }) {
  return (
    <div className="container-fluid d-flex">
      <div className="row bg-dark" style={{ width: "20%" }}>
        <div className="bg-dark min-vh-100 col">
          <div>
            <a className="text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2">
              <i className=" fs-4 bi bi-speedometer"></i>
              <span className="ms-1 fs-4">Brand</span>
            </a>
            <hr className="text-secondry" />
            <ul className="nav nav-pills flex-column">
              <li className="nav-item text-white fs-4 my-1">
                <a
                  href
                  to="/"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2">Dashborad</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <a
                  href="/anayltics"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-house"></i>
                  <span className="ms-2">Home</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <a
                  href="/comment"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-2">Comments</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-2">Products</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <a
                  href="#"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main style={{ width: "100%", margin: "20px" }}>{children}</main>
    </div>
  );
}

export default Sidebarmenu;
