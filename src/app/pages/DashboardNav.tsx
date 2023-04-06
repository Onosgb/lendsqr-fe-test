import { Link, Outlet } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
const DashboardNav: React.FC = () => {
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

          <button className="menu_btn">
            <Icon.HouseFill /> Dashboard
          </button>
        </div>

        <div className="other_nav-btn">
          <p className="section_label">CUSTOMERS</p>
          <Link to="/v1" className="menu_btn">
            {/* <button className="menu_btn"> */}
            <Icon.People /> Users
            {/* </button> */}
          </Link>
          <Link to="#" className="menu_btn">
            <Icon.Person /> Guarantors
          </Link>
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
