import { Link } from "react-router-dom";

const DropDown = (props) => {
  const { username, email } = props;

  return (
    <>
      <details>
        <summary>
          <img
            src="/images/7f9adfb6486c67063d80474f4d89a506.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full ml-4 cursor-pointer"
          />
        </summary>
        <ul>
          <li>
            <span>{username}</span>
            <span className="email-info">{email}</span>
          </li>
          <li>
            <Link to={"/my-account"} />
            حساب من
          </li>
          <li>
            <Link to={"/account-lists"} />
            لیست حساب ها
          </li>
          <li>
            <Link to={"/logout"} />
            خروج
          </li>
          <li>
            <Link to={"/delete-account"} />
            حذف حساب{" "}
          </li>
        </ul>
      </details>
    </>
  );
};
export default DropDown;
