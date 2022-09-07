import renderer from "react-test-renderer";
import SideBar from ".";

it("Should render the sidebar correctly", () => {
  const sidebarComponent = renderer.create(<SideBar />).toJSON();

  expect(sidebarComponent).toMatchSnapshot();
});
