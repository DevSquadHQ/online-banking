import React from "react";
import Buttons from "../../Components/buttons/Buttons";
import { Link } from "react-router-dom";
import DropDown from "../links/drop-down/DropDown";

export default function HeaderForm() {
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
          <DropDown username={"jese Leos"} email={"name@example"} />
        </div>
      </div>
    </div>
  );
}
