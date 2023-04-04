function User() {
  return (
    <>
      <section className="action_menu">
        <div className="left_sec">
          <button className="back">
            <i className="icofont-long-arrow-left icofont-2x"></i> Back to Users
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
            <img src="img/user1.png" alt="" />
          </div>

          <div className="detail_container">
            <div className="col">
              <h3 className="name">Grace Effiom</h3>
              <p className="ref">LSQFf587g90</p>
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
              <div className="amount">₦200,000.00</div>
              <div className="ref">9912345678/Providus Bank</div>
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
              <h4 className="data_info">Grace Effiom</h4>
            </div>
            <div className="data">
              <span className="tag">Phone Number</span>
              <h4 className="data_info">07060780922</h4>
            </div>
            <div className="data">
              <span className="tag">Email Address</span>
              <h4 className="data_info">grace@gmail.com</h4>
            </div>
            <div className="data">
              <span className="tag">Bvn</span>
              <h4 className="data_info">07060780922</h4>
            </div>
            <div className="data">
              <span className="tag">Gender</span>
              <h4 className="data_info">Female</h4>
            </div>
            <div className="data">
              <span className="tag">Marital status</span>
              <h4 className="data_info">Single</h4>
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

        <div className="container">
          <h4 className="row_title">Education and Employment</h4>

          <div className="more_detail">
            <div className="data">
              <span className="tag">level of education</span>
              <h4 className="data_info">B.Sc</h4>
            </div>
            <div className="data">
              <span className="tag">employment status</span>
              <h4 className="data_info">Employed</h4>
            </div>
            <div className="data">
              <span className="tag">sector of employment</span>
              <h4 className="data_info">FinTech</h4>
            </div>
            <div className="data">
              <span className="tag">Duration of employment</span>
              <h4 className="data_info">2 years</h4>
            </div>
            <div className="data">
              <span className="tag">office email</span>
              <h4 className="data_info">grace@lendsqr.com</h4>
            </div>
            <div className="data">
              <span className="tag">Monthly income</span>
              <h4 className="data_info">₦200,000.00 - ₦400,000.00</h4>
            </div>
            <div className="data">
              <span className="tag">loan repayment</span>
              <h4 className="data_info">40,000</h4>
            </div>
          </div>
        </div>

        <div className="container">
          <h4 className="row_title">Socials</h4>

          <div className="more_detail">
            <div className="data">
              <span className="tag">Twitter</span>
              <h4 className="data_info">@grace_effiom</h4>
            </div>
            <div className="data">
              <span className="tag">Facebook</span>
              <h4 className="data_info">Grace Effiom</h4>
            </div>
            <div className="data">
              <span className="tag">Instagram</span>
              <h4 className="data_info">@grace_effiom</h4>
            </div>
          </div>
        </div>

        <div className="container">
          <h4 className="row_title">Guarantor</h4>

          <div className="more_detail">
            <div className="data">
              <span className="tag">full Name</span>
              <h4 className="data_info">Debby Ogana</h4>
            </div>
            <div className="data">
              <span className="tag">Phone Number</span>
              <h4 className="data_info">07060780922</h4>
            </div>
            <div className="data">
              <span className="tag">Email Address</span>
              <h4 className="data_info">debby@gmail.com</h4>
            </div>
            <div className="data">
              <span className="tag">Relationship</span>
              <h4 className="data_info">Sister</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default User;
