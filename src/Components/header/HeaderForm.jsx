import React from "react";
import Buttons from "../../Components/buttons/Buttons";
import { Link } from "react-router-dom";

export default function HeaderForm() {
  const username = "jese Leos";
  const email = "name@example";

  return (
    <div>
      {/* header */}
      <div
        className="flex justify-between h-16"
        style={{ background: "#1F2A37" }}
      >
        {/* right side */}
        <div className="flex items-center">
          <Link>
            <img
              src="/icons/Group.png"
              alt="Group Icon"
              className="mr-4 hidden md:block"
            />
          </Link>
          <Link>
            <img src="/icons/Vector.png" alt="Vector Icon" className="mr-4" />
          </Link>
        </div>
        {/* left side */}
        <div className="flex items-center">
          {/* Button for medium and larger screens */}
          <Buttons
            className="ml-5 "
            btnName={
              <span>
                <span className="hidden md:block">
                  ساخت حساب جدید{" "}
                  <img
                    src="/icons/plus.png"
                    alt="Plus Icon"
                    className="inline"
                  />
                </span>
                <span className="block md:hidden">
                  حساب جدید{" "}
                  <img
                    src="/icons/plus.png"
                    alt="Plus Icon"
                    className="inline"
                  />
                </span>
              </span>
            }
          />

          <img
            src="/icons/Notification Icon.png"
            alt="Notification Icon"
            className="mx-3 cursor-pointer"
          />

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
        </div>
      </div>
    </div>
  );
}
