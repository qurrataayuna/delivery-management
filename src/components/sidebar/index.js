import { cx } from "@emotion/css";
import { useState } from "react";
import { menuItem, wrapper } from "./styles";
const menus = [
  {
    id: 1,
    label: "Beranda",
    img: "/home.png",
  },
  {
    id: 2,
    label: "Driver Management",
    img: "/accounts.png",
  },
  {
    id: 3,
    label: "Pickup",
    img: "/calendar.png",
  },
];

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(2);

  return (
    <div css={wrapper}>
      {menus.map((menu) => {
        return (
          <div
            key={menu.id}
            css={menuItem}
            className={cx({ active: menu.id === activeMenu })}
            onClick={() => setActiveMenu(menu.id)}
          >
            <img src={menu.img} alt={menu.label} />
            <p>{menu.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
