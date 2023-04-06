import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import Login from "./app/pages/Login";

test("Check whether App component has rendered", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  screen.debug();
});

test("Should print the login component", () => {
  render(<Login />);

  screen.debug();
});
