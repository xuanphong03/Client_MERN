import Header from "../components/Header";
import "./DefaultLayout.scss";
function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
