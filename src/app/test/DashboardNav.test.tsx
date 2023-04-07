import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter, useLocation } from "react-router-dom";
import DashboardNav from "../pages/DashboardNav";

describe("DashboardNav", () => {
  it("should navigate to /v1 when clicking on the Dashboard button", () => {
    const { getByText } = render(
      <BrowserRouter>
        <DashboardNav />
      </BrowserRouter>
    );

    const dashboardButton = getByText("Dashboard"); // Get the button element with text "Dashboard"

    fireEvent.click(dashboardButton); // Simulate a click event on the button

    expect(location.pathname).toBe("/v1"); // Assert that the pathname in the history object is "/v1"
  });

  it("should navigate to /v1/users when clicking on the Users button", () => {
    const { getByText } = render(
      <BrowserRouter>
        <DashboardNav />
      </BrowserRouter>
    );

    const usersButton = getByText("Users"); // Get the button element with text "Users"

    fireEvent.click(usersButton); // Simulate a click event on the button

    expect(location.pathname).toBe("/users"); // Assert that the pathname in the history object is "/v1/users"
  });

  it("should navigate to /v1/guarantors when clicking on the Guarantors button", () => {
    const { getByText } = render(
      <BrowserRouter>
        <DashboardNav />
      </BrowserRouter>
    );

    const guarantorsButton = getByText("Guarantors"); // Get the button element with text "Guarantors"

    fireEvent.click(guarantorsButton); // Simulate a click event on the button

    expect(location.pathname).toBe("/guarantors"); // Assert that the pathname in the history object is "/v1/guarantors"
  });
});
