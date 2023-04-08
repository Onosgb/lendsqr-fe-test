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
import * as Icon from "react-bootstrap-icons";
import { useSearchState } from "../context/SearchContext";

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, status } = useAppSelector(userReducer);
  const [listUsers, setListUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState(false);
  // get search variables from useSearchState
  const { search, type } = useSearchState();

  // check for active user using today date
  const checkActive = (date: string) => {
    return new Date(date).getDate() === new Date().getDate();
  };

  // monitor search in usecontext
  useEffect(() => {
    if (type === "users") {
      const usersSearched = users.filter((data: User) =>
        data.orgName.toLowerCase().includes(search)
      );
      console.log(usersSearched);
      setListUsers(usersSearched.slice(0, 10));
    }
    // eslint-disable-next-line
  }, [search]);

  // convert data to lower case string
  const isExist = (search: string) => {
    return search.toLowerCase();
  };

  // load users data;
  useEffect(() => {
    dispatch(loadUserAsync());

    // eslint-disable-next-line
  }, []);

  const filteredData = (usersData: User[]) => {
    setListUsers(usersData);
  };

  if (status === "loading") return <div>Loading...</div>;

  // filter user base on the criterial passed

  // get users with savings
  const userWithSavings = () => {
    return users.filter((user: User) => parseInt(user.accountBalance) > 0);
  };

  // get user with loans
  const userWithLoans = () => {
    return users.filter(
      (user: User) =>
        user.education && parseInt(user.education.loanRepayment) > 0
    );
  };

  // get user with loans
  const activeUsers = () => {
    return users.filter((user: User) => checkActive(user.lastActiveDate));
  };

  return (
    <>
      <h2 className="page_label">Users</h2>

      <div className="container">
        <div className="stat_card-container">
          <Card
            bageClass="users"
            iconName={<Icon.Person />}
            title="USERS"
            totalCount={users.length}
          />
          <Card
            bageClass="active_user"
            iconName={<Icon.Person />}
            title="ACTIVE USERS"
            totalCount={activeUsers().length}
          />

          <Card
            bageClass="loan"
            iconName={<Icon.Person />}
            title="USERS WITH LOANS"
            totalCount={userWithLoans().length}
          />

          <Card
            bageClass="savings"
            iconName={<Icon.Person />}
            title="USERS WITH SAVINGS"
            totalCount={userWithSavings().length}
          />
        </div>

        <div className="table_card">
          <table className="fl-table">
            <thead onClick={() => setFilter(!filter)}>
              <tr>
                <th>
                  <span className="item">
                    Organization <Icon.SortDown />
                  </span>
                </th>
                <th>
                  <span className="item">
                    Username <Icon.SortDown />
                  </span>
                </th>
                <th>
                  <span className="item">
                    Email <Icon.SortDown />
                  </span>
                </th>
                <th>
                  <span className="item">
                    Phone number <Icon.SortDown />
                  </span>
                </th>
                <th>
                  <span className="item">
                    Date joined <Icon.SortDown />
                  </span>
                </th>
                <th>
                  <span className="item">
                    Status
                    <Icon.SortDown />
                  </span>
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
                    navigate(`/v1/user:${user.id}`);
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

export default Users;
