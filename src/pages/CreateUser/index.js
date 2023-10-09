import Button from "../../components/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Create.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/create", {
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

    setName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    alert("Tạo mới thành công");
  };

  return (
    <div className={cx("container")}>
      <h1>Thêm mới người dùng</h1>
      <form onSubmit={Submit}>
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

        <Button create type="submit">
          Tạo người dùng mới
        </Button>
      </form>
    </div>
  );
}

export default CreateUser;
