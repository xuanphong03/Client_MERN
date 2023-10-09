import axios from "axios";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({
  id,
  type,
  deleteUser = false,
  create = false,
  update = false,
  primary = false,
  secondary = false,
  children,
}) {
  const className = cx("button-item", {
    primary,
    secondary,
    create,
    update,
  });

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3002/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
    alert("Xóa người dùng thành công !");
  };
  return (
    <button
      onClick={deleteUser ? (e) => handleDelete(id) : null}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
