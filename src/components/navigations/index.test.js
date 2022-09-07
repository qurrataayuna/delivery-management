import renderer from "react-test-renderer";
import Navigations from ".";

it("Should render navigation bar correctly", () => {
  const navComponent = renderer.create(<Navigations />).toJSON();

  expect(navComponent).toMatchSnapshot();
});
