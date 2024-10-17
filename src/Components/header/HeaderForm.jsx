import React from "react";
import Buttons from "../../Components/buttons/Buttons";
import { Link } from "react-router-dom";

export default function HeaderForm() {
  return (
    <div>
      {/* header */}
      <div className="flex justify-between" style={{ background: "#374151" }}>
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

          <img
            src="/images/7f9adfb6486c67063d80474f4d89a506.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full ml-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
