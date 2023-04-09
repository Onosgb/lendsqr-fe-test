import { useEffect } from "react";
import { loadUserAsync, userReducer } from "../../reducers/users.reducer";
import { useAppDispatch, useAppSelector } from "../hooks";
import User from "../compnents/User";
import Users from "../compnents/Users";

const UsersContainer: React.FC = () => {
  const { status, user } = useAppSelector(userReducer);

  const dispatch = useAppDispatch();

  // load users data;
  useEffect(() => {
    dispatch(loadUserAsync());
    // eslint-disable-next-line
  }, []);

  const switchData = () => {
    return !user ? <Users /> : <User />;
  };

  if (status === "loading") return <div>Loading...</div>;

  return <>{switchData()}</>;
};

export default UsersContainer;
