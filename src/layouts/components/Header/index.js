import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("container")}>
      <NavLink
        to="/"
        className={(nav) => cx("nav-item", { active: nav.isActive })}
      >
        Trang chủ
      </NavLink>

      <NavLink
        to="/create"
        className={(nav) => cx("nav-item", { active: nav.isActive })}
      >
        Tạo mới
      </NavLink>
    </header>
  );
}

export default Header;
