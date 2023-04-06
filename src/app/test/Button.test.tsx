import { render, fireEvent, screen } from "@testing-library/react";

import Button from "../compnents/Button"; // Replace with the path to your Button component

test("renders button with label and click event handler", () => {
  // Define a mock click event handler
  const onClickMock = jest.fn();

  // Render the Button component with props
  render(
    <Button
      label="Click me"
      onClick={onClickMock}
      disabled={false}
      className="custom-button"
    />
  );

  // Find the button by its label text
  const button = screen.getByText("Click me");

  // Assert that the button is rendered with the correct label
  expect(button).toBeInTheDocument();

  // Assert that the button has the correct className prop
  expect(button).toHaveClass("custom-button");

  // Simulate a click event on the button
  fireEvent.click(button);

  // Assert that the onClick event handler is called once
  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test("renders disabled button", () => {
  // Render the Button component with disabled prop
  render(<Button label="Disabled" onClick={() => {}} disabled={true} />);

  // Find the button by its label text
  const button = screen.getByText("Disabled");

  // Assert that the button is rendered with the correct disabled prop
  expect(button).toBeDisabled();
});
