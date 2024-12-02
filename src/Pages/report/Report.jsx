import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Button } from "antd";
import PaginationFile from "../../Components/paginantion/PaginantionFile";
import AccountData from "../../Data/Data";
import JalaliDatePickerRange from "../../Components/JalaliDatePicker/JalaliDatePickerRange";

export default function Report() {
  const { control, Controller } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  // Paginate data for the current page
  const paginatedData = AccountData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div className="bg-gray-800 w-[480px] h-auto px-8 py-10 mt-10 rounded-md">
        <h2 className="text-white font-bold text-2xl">گزارش مالی</h2>
        <div className="flex justify-center mt-5">
          <JalaliDatePickerRange placeholder="انتخاب محدوده تاریخ" />
        </div>

        <Button type="primary" className="w-5/6 flex mx-auto mt-0 mb-6 py-5">
          تایید
        </Button>

        {/* Render paginated data */}
        <ul className="mt-6 p-0">
          {paginatedData.map((item) => (
            <li
              key={item.key}
              className="flex justify-between  bg-gray-500 text-white p-4 mb-2 rounded"
            >
              <span>{item.date}</span>
              <span>{item.amount}</span>
              <span className="mx-2">
                <span className="ml-2">{item.statusIcon}</span>
                {item.status}
              </span>
            </li>
          ))}
        </ul>

        <PaginationFile
          total={AccountData.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onChange={(page) => setCurrentPage(page)}
          className={"border border-gray-500 mt-10 p-[1px]"}
        />

        <p className="flex justify-center mt-6 text-gray-300 ">
          {`نمایش 1 تا ${pageSize} از ${AccountData.length} مورد`}
        </p>
      </div>
    </div>
  );
}
