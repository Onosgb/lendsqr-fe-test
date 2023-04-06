import { userReducer } from "../../reducers/users.reducer";
import { useAppSelector } from "../hooks";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const User: React.FC = () => {
  const { user } = useAppSelector(userReducer);
  const navigate = useNavigate();
  if (!user) return <div>User not found!</div>;
  return (
    <>
      <section className="action_menu">
        <div className="left_sec">
          <button className="back" onClick={() => navigate(-1)}>
            <Icon.ArrowLeft /> Back to Users
          </button>
          <h2 className="page_label">User Details</h2>
        </div>
        <div className="right_sec">
          <button className="blacklist_btn">BLACKLIST USER</button>
          <button className="activate_btn">ACTIVATE USER</button>
        </div>
      </section>

      <section className="first_capture">
        <div className="first_row">
          <div className="image">
            <img src={user.profile.avatar} alt="Avatar" />
          </div>

          <div className="detail_container">
            <div className="col">
              <h3 className="name">
                {user.profile.firstName} {user.profile.lastName}
              </h3>
              <p className="ref">{user.userName}</p>
            </div>

            <div className="col tier">
              <p className="col_title">User’s Tier</p>
              <div className="ratings">
                <img src="img/filled.png" alt="" />
                <img src="img/outline.png" alt="" />
                <img src="img/outline.png" alt="" />
              </div>
            </div>

            <div className="col">
              <div className="amount">
                {user.profile.currency}
                {user.accountBalance}
              </div>
              <div className="ref">{user.accountNumber}</div>
            </div>
          </div>
        </div>

        <div className="second_row">
          <button className="tab_menu active">General Details</button>
          <button className="tab_menu">Documents</button>
          <button className="tab_menu">Bank Details</button>
          <button className="tab_menu">Loans</button>
          <button className="tab_menu">Savings</button>
          <button className="tab_menu">App and System</button>
        </div>
      </section>

      <section className="other_detail">
        <div className="container">
          <h4 className="row_title">Personal Information</h4>

          <div className="more_detail">
            <div className="data">
              <span className="tag">full Name</span>
              <h4 className="data_info">
                {user.profile.firstName} {user.profile.lastName}
              </h4>
            </div>
            <div className="data">
              <span className="tag">Phone Number</span>
              <h4 className="data_info">{user.profile.phoneNumber}</h4>
            </div>
            <div className="data">
              <span className="tag">Email Address</span>
              <h4 className="data_info">{user.email}</h4>
            </div>
            <div className="data">
              <span className="tag">Bvn</span>
              <h4 className="data_info">{user.profile.bvn}</h4>
            </div>
            <div className="data">
              <span className="tag">Gender</span>
              <h4 className="data_info">{user.profile.gender}</h4>
            </div>
            <div className="data">
              <span className="tag">Marital status</span>
              <h4 className="data_info">{user.profile?.maritalStatus}</h4>
            </div>
            <div className="data">
              <span className="tag">Children</span>
              <h4 className="data_info">None</h4>
            </div>
            <div className="data">
              <span className="tag">Type of residence</span>
              <h4 className="data_info">Parent’s Apartment</h4>
            </div>
          </div>
        </div>

        {user.education && (
          <div className="container">
            <h4 className="row_title">Education and Employment</h4>

            <div className="more_detail">
              <div className="data">
                <span className="tag">level of education</span>
                <h4 className="data_info">{user.education.level}</h4>
              </div>
              <div className="data">
                <span className="tag">employment status</span>
                <h4 className="data_info">{user.education.employmentStatus}</h4>
              </div>
              <div className="data">
                <span className="tag">sector of employment</span>
                <h4 className="data_info">{user.education.sector}</h4>
              </div>
              <div className="data">
                <span className="tag">Duration of employment</span>
                <h4 className="data_info">{user.education.duration}</h4>
              </div>
              <div className="data">
                <span className="tag">office email</span>
                <h4 className="data_info">{user.education.officeEmail}</h4>
              </div>
              <div className="data">
                <span className="tag">Monthly income</span>
                <h4 className="data_info">
                  {user.profile.currency}
                  {user.education.monthlyIncome[1]} - {user.profile.currency}
                  {user.education.monthlyIncome[1]}
                </h4>
              </div>
              <div className="data">
                <span className="tag">loan repayment</span>
                <h4 className="data_info">{user.education.loanRepayment}</h4>
              </div>
            </div>
          </div>
        )}

        {user.socials && (
          <div className="container">
            <h4 className="row_title">Socials</h4>

            <div className="more_detail">
              <div className="data">
                <span className="tag">Twitter</span>
                <h4 className="data_info">{user.socials.twitter}</h4>
              </div>
              <div className="data">
                <span className="tag">Facebook</span>
                <h4 className="data_info">{user.socials.facebook}</h4>
              </div>
              <div className="data">
                <span className="tag">Instagram</span>
                <h4 className="data_info">{user.socials.instagram}</h4>
              </div>
            </div>
          </div>
        )}

        {user.guarantor && (
          <div className="container">
            <h4 className="row_title">Guarantor</h4>

            <div className="more_detail">
              <div className="data">
                <span className="tag">full Name</span>
                <h4 className="data_info">
                  {user.guarantor.firstName} {user.guarantor.lastName}
                </h4>
              </div>
              <div className="data">
                <span className="tag">Phone Number</span>
                <h4 className="data_info">{user.guarantor.phoneNumber}</h4>
              </div>
              <div className="data">
                <span className="tag">Email Address</span>
                <h4 className="data_info">{user.guarantor?.emailAddress}</h4>
              </div>
              <div className="data">
                <span className="tag">Relationship</span>
                <h4 className="data_info">{user.guarantor?.relationship}</h4>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default User;
