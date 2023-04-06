import { render, screen } from "@testing-library/react";
import Card from "../compnents/Card";

test("renders card with correct props", () => {
  // Define props for the Card component
  const cardProps = {
    bageClass: "badge-primary",
    iconName: "📊",
    title: "Total Users",
    totalCount: 100,
  };

  // Render the Card component with props
  render(
    <Card
      bageClass={cardProps.bageClass}
      iconName={cardProps.iconName}
      title={cardProps.title}
      totalCount={cardProps.totalCount}
    />
  );

  // Find the card elements using their respective classNames
  const iconElement = screen.getByText(cardProps.iconName);
  const titleElement = screen.getByText(cardProps.title);
  const totalCountElement = screen.getByText(cardProps.totalCount.toString());

  // Assert that the card elements are rendered with the correct props
  expect(iconElement).toHaveClass(cardProps.bageClass);
  expect(titleElement).toBeInTheDocument();
  expect(totalCountElement).toBeInTheDocument();
});
