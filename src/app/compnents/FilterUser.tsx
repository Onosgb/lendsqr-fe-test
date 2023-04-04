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
  click?: () => void;
  users: User[];
}

const FilterUser: React.FC<filterProp> = ({ users }) => {
  const [filterForm, setFilterForm] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilterForm({ ...filterForm, [name]: value });
  };

  return (
    <div className="filter_card">
      <form action="">
        <div className="text_input">
          <label>Organization</label>
          <select name="orgName" id="" onChange={handleChange}>
            <option value="">Select Email</option>
            {users.map((org) => (
              <option value={filterForm.orgName}>{org.orgName}</option>
            ))}
          </select>
        </div>
        <div className="text_input">
          <label>Username</label>
          <input
            type="text"
            name=""
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
