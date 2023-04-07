import { Link, Outlet, useMatch, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
const DashboardNav: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <aside className="side_navigation">
        <div className="side_nav">
          <div className="org_select">
            <i className="icofont-briefcase icofont-2x"></i>
            <select name="" id="">
              <option value="">Switch Organization</option>
            </select>
          </div>

          <button
            onClick={() => navigate("/v1")}
            className={`menu_btn ${
              useMatch({ path: "/v1", end: true }) ? "active" : ""
            }`}
          >
            <Icon.HouseFill /> Dashboard
          </button>
        </div>

        <div className="other_nav-btn">
          <p className="section_label">CUSTOMERS</p>
          <button
            data-test-id="users"
            onClick={() => navigate("users")}
            className={`menu_btn ${
              useMatch({ path: "/v1/users", end: true }) ? "active" : ""
            }`}
          >
            <Icon.People /> Users
          </button>
          <button
            onClick={() => navigate("guarantors")}
            className={`menu_btn ${
              useMatch({ path: "/v1/guarantors", end: true }) ? "active" : ""
            }`}
          >
            <Icon.Person /> Guarantors
          </button>
        </div>
      </aside>

      <nav className="nav_header">
        <img
          src={`${process.env.PUBLIC_URL}/img/logo.svg`}
          alt=""
          className="logo"
        />

        <div className="search">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for anything"
          />
          <button>
            <Icon.Search />
          </button>
        </div>

        <div className="right_elements">
          <Link className="doc" to="#">
            Docs
          </Link>
          <button className="notify">
            <Icon.Bell />
          </button>
          <div className="user">
            <img src={`${process.env.PUBLIC_URL}/img/andel.png`} alt="" />
            <button className="user_btn">
              Adedeji
              <Icon.CaretDown />
            </button>
          </div>
        </div>
      </nav>

      <main className="main_content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardNav;
