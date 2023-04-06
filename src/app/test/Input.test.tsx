import { render, fireEvent } from "@testing-library/react";
import Input from "../compnents/Input";

describe("Input component", () => {
  const onChangeMock = jest.fn();
  const validateMock = jest.fn();
  const required = true;

  beforeEach(() => {
    onChangeMock.mockClear();
    validateMock.mockClear();
  });

  it("renders input field correctly", () => {
    const { getByPlaceholderText } = render(
      <Input
        type="text"
        name="test"
        placeholder="Test Input"
        value=""
        onChange={onChangeMock}
        validate={validateMock}
        required={required}
      />
    );

    const inputElement = getByPlaceholderText("Test Input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("name", "test");
    expect(inputElement).toHaveValue("");
    expect(inputElement).toBeRequired();
  });

  it("triggers onChange callback when input value changes", () => {
    const { getByPlaceholderText } = render(
      <Input
        type="text"
        name="test"
        placeholder="Test Input"
        value=""
        onChange={onChangeMock}
        validate={validateMock}
        required={required}
      />
    );

    const inputElement = getByPlaceholderText("Test Input");
    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("test", "New Value");
  });

  it("calls validate function when provided", () => {
    validateMock.mockReturnValue("Validation error");

    const { getByPlaceholderText, getByText } = render(
      <Input
        type="text"
        name="test"
        placeholder="Test Input"
        value="Invalid Value"
        onChange={onChangeMock}
        validate={validateMock}
        required={required}
      />
    );

    const inputElement = getByPlaceholderText("Test Input");
    // expect(getByText("Validation error")).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "Valid Value" } });
    // expect(getByText("Validation error")).not.toBeInTheDocument();
    expect(validateMock).toHaveBeenCalledTimes(1);
    expect(validateMock).toHaveBeenCalledWith("Valid Value");
  });
});
