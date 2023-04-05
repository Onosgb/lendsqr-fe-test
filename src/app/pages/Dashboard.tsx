import Card from "../compnents/Card";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  loadUserAsync,
  selectUser,
  userReducer,
} from "../../reducers/users.reducer";
import { User } from "../model";
import FilterUser from "../compnents/FilterUser";
import PaginationComponent from "../compnents/Pagination";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, status } = useAppSelector(userReducer);
  const [listUsers, setListUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState(false);

  // check for active user using today date
  const checkActive = (date: string) => {
    return new Date(date).getDate() === new Date().getDate();
  };

  // load users data;
  useEffect(() => {
    dispatch(loadUserAsync()).then((data) => {
      console.log("data", data);
    });

    // eslint-disable-next-line
  }, []);

  const filteredData = (usersData: User[]) => {
    setListUsers(usersData);
  };

  if (status === "loading") return <div>Loading...</div>;

  return (
    <>
      <h2 className="page_label">Users</h2>

      <div className="container">
        <div className="stat_card-container">
          <Card
            bageClass="users"
            iconClass="cofont-users-alt-4"
            title="USERS"
            totalCount={255}
          />
          <Card
            bageClass="active_user"
            iconClass="cofont-users-alt-4"
            title="ACTIVE USERS"
            totalCount={255}
          />

          <Card
            bageClass="loan"
            iconClass="cofont-users-alt-4"
            title="USERS WITH LOANS"
            totalCount={255}
          />

          <Card
            bageClass="savings"
            iconClass="cofont-users-alt-4"
            title="USERS WITH SAVINGS"
            totalCount={255}
          />
        </div>

        <div className="table_card">
          <table className="fl-table">
            <thead onClick={() => setFilter(!filter)}>
              <tr>
                <th>
                  Organization <i className="icofont-sort"></i>
                </th>
                <th>
                  Username<i className="icofont-sort"></i>
                </th>
                <th>
                  Email<i className="icofont-sort"></i>
                </th>
                <th>
                  Phone number<i className="icofont-sort"></i>
                </th>
                <th>
                  Date joined<i className="icofont-sort"></i>
                </th>
                <th>
                  Status<i className="icofont-sort"></i>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listUsers.map((user, idx) => (
                <tr
                  key={idx}
                  onClick={() => {
                    dispatch(selectUser(user));
                    navigate(`user`);
                  }}
                >
                  <td>{user.orgName}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{new Date(user.createdAt).toLocaleString()}</td>
                  <td>
                    <span
                      className={
                        checkActive(user.lastActiveDate) ? "active" : "pending"
                      }
                    >
                      {checkActive(user.lastActiveDate) ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <button className="more">
                      <img src="img/Vector.png" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filter && <FilterUser users={users} filteredData={filteredData} />}
        </div>

        <PaginationComponent items={users} paginatData={filteredData} />
      </div>
    </>
  );
};

export default Dashboard;
