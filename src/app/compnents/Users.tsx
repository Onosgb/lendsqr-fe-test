import Card from "../compnents/Card";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectUser, userReducer } from "../../reducers/users.reducer";
import { User } from "../model";
import FilterUser from "../compnents/FilterUser";
import PaginationComponent from "../compnents/Pagination";
import * as Icon from "react-bootstrap-icons";
import { useSearchState } from "../context/SearchContext";

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(userReducer);
  const [listUsers, setListUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState(false);
  const [action, setAction] = useState("");
  // get search variables from useSearchState
  const { search, type } = useSearchState();

  // check for active user using today date
  const checkActive = (date: string) => {
    return new Date(date).getDate() === new Date().getDate();
  };

  // monitor search in usecontext
  useEffect(() => {
    if (type === "users") {
      const timer = setTimeout(() => {
        const usersSearched = users.filter(
          (data: User) =>
            data.orgName.toLowerCase().includes(search) ||
            data.userName.toLowerCase().includes(search) ||
            data.phoneNumber.toLowerCase().includes(search)
        );
        setListUsers(usersSearched.slice(0, 10));
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
    // eslint-disable-next-line
  }, [search]);

  const filteredData = (usersData: User[]) => {
    setListUsers(usersData);
  };

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
                <tr key={idx}>
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
                    <button
                      className="more"
                      onClick={() => {
                        setAction(`${idx === +action ? "" : idx}`);
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Vector.png`}
                        alt=""
                      />
                    </button>
                    {action && idx === +action && (
                      <div className="actions">
                        <button
                          className="more item"
                          onClick={() => {
                            setAction("");
                            dispatch(selectUser(user));
                          }}
                        >
                          <Icon.Eye /> View Details
                        </button>
                        <button className="more item">
                          <Icon.PersonDash /> Blacklist User
                        </button>
                        <button className="more item">
                          <Icon.PersonFillCheck /> Activate User
                        </button>
                      </div>
                    )}
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
