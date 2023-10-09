import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [users]);

  return (
    <div className={cx("container")}>
      <h1 className={cx("list-name")}>Danh sách người dùng</h1>
      <Link to={"/create"}>
        <Button create>Thêm mới</Button>
      </Link>
      <table className={cx("user_list")}>
        <thead>
          <tr>
            <th>Tên người dùng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id} className={cx("user-item")}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
                <td>
                  <Link to={`/update/${user._id}`}>
                    <Button primary>Cập nhật</Button>
                  </Link>

                  <Link>
                    <Button id={user._id} deleteUser secondary>
                      Xóa
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
