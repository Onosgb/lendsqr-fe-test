import { useState } from "react";
import { User } from "../model";
const initialState = {
  orgName: "",
  userName: "",
  phoneNumber: "",
  createdAt: new Date(),
  email: "",
};

interface filterProp {
  filteredData: Function;
  users: User[] | any[];
}

const FilterUser: React.FC<filterProp> = ({ users, filteredData }) => {
  const [filterForm, setFilterForm] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    console.log("data", value);
    setFilterForm({ ...filterForm, [name]: value });
  };

  const filterData = (users: User[]) => {
    const { orgName, email, phoneNumber, createdAt } = filterForm;

    const fiteredUsers = users.filter(
      (user) =>
        hasValue(user.orgName, orgName) ||
        hasValue(user.email, email) ||
        hasValue(user.email, phoneNumber) ||
        dateFormat(user.createdAt) === dateFormat(createdAt)
    );

    filteredData(fiteredUsers);
  };

  const dateFormat = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  const hasValue = (value: string, field: string) => {
    return field.toLowerCase().includes(value.toLowerCase());
  };

  return (
    <div className="filter_card">
      <form
        onSubmit={(event) => {
          filterData(users);
          event.preventDefault();
        }}
      >
        <div className="text_input">
          <label>Organization</label>
          <select
            name="orgName"
            value={filterForm.orgName}
            id=""
            onChange={handleChange}
          >
            <option value="">Select Email</option>
            {users.map((org, idx) => (
              <option key={idx}>{org.orgName}</option>
            ))}
          </select>
        </div>
        <div className="text_input">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            id=""
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="text_input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="text_input">
          <label>Date</label>
          <input
            type="date"
            name="createdAt"
            id=""
            placeholder="Date"
            onChange={handleChange}
          />
        </div>
        <div className="text_input">
          <label>Phone</label>
          <input
            type="number"
            name="phoneNumber"
            id=""
            placeholder="Phone"
            onChange={handleChange}
          />
        </div>
        <div className="text_input">
          <label>Status</label>
          <select name="" id="" onChange={handleChange}>
            <option value="">Select</option>
          </select>
        </div>

        <button
          className="secondary_btn"
          onClick={() => setFilterForm(initialState)}
        >
          Reset
        </button>
        <button className="primary_btn">Filter</button>
      </form>
    </div>
  );
};

export default FilterUser;
