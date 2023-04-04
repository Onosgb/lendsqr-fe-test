import { Link, Outlet } from "react-router-dom";
// import {OutLet}
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
            <i className="icofont-home"></i>Dashboard
          </button>
        </div>

        <div className="other_nav-btn">
          <p className="section_label">CUSTOMERS</p>
          <button className="menu_btn">
            <i className="icofont-users-alt-4"></i>Users
          </button>
          <button className="menu_btn">
            <i className="icofont-users-alt-5"></i>Guarantors
          </button>
        </div>
      </aside>
      <nav className="nav_header">
        <img src="img/logo.svg" alt="" className="logo" />

        <div className="search">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for anything"
          />
          <button>
            <i className="icofont-search"></i>
          </button>
        </div>

        <div className="right_elements">
          <Link className="doc" to="#">
            Docs
          </Link>
          <button className="notify">
            <i className="icofont-bell-alt"></i>
          </button>
          <div className="user">
            <img src="img/andel.png" alt="" />
            <button className="user_btn">
              Adedeji<i className="icofont-caret-down"></i>
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
