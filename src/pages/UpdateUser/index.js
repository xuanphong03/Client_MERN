import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../../components/Button";

import styles from "./UpdateUser.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/getUser/" + id)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber);
        setAddress(res.data.address);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3002/update/" + id, {
        name,
        email,
        phoneNumber,
        address,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={cx("container")}>
      <h1>Cập nhật thông tin người dùng</h1>
      <form onSubmit={Update}>
        <div className={cx("form-group")}>
          <label>Name</label>
          <input
            type="text"
            className={cx("form-control")}
            value={name}
            placeholder="Enter user name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={cx("form-group")}>
          <label>Email</label>
          <input
            type="email"
            className={cx("form-control")}
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={cx("form-group")}>
          <label>Telephone number</label>
          <input
            type="tel"
            className={cx("form-control")}
            value={phoneNumber}
            placeholder="Enter telephone number..."
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className={cx("form-group")}>
          <label>Address</label>
          <input
            type="text"
            className={cx("form-control")}
            value={address}
            placeholder="Enter address..."
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <Button update type="submit">
          Cập nhật thông tin người dùng
        </Button>
      </form>
    </div>
  );
}

export default UpdateUser;
