import React from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <div className="page">
      <header className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
        <nav className="container-fluid flex-wrap flex-lg-nowrap">
          <a className="navbar-brand" href="/">
            __Template__
          </a>
          <button
            className="navbar-toggler hidden-md"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </header>
      <div className="side-menu-layout">
        <aside className="side-menu">
          <div
            className="offcanvas-lg offcanvas-start text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                __Template__
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </aside>
        <div className="container-fluid page-content">{children}</div>
      </div>
    </div>
  </>
);

export default Layout;
