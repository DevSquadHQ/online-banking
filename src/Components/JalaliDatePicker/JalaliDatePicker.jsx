import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import "./JalaliDatePicker.css";

export default function JalaliDatePicker({
  value,
  onChange,
  placeholder,
  title,
}) {
  const [date, setDate] = useState(null);

  // Calculate the maximum selectable date (18 years ago from today)
  const today = new DateObject({ calendar: persian });
  const maxDate = today.subtract(18, "years");

  // Sync the internal state with the 'value' prop whenever it changes
  useEffect(() => {
    if (value) {
      const dateFromValue = new DateObject(value);

      // Use native JS Date to check if it's valid
      if (!isNaN(dateFromValue.toDate())) {
        setDate(dateFromValue); // Update state only with valid date
      } else {
        console.warn("Invalid date passed:", value);
      }
    }
  }, [value]);

  // Handle date change when a new date is selected
  const handleChange = (selectedDate) => {
    if (!selectedDate) {
      setDate(null);
      if (onChange) onChange(null); // Pass null to parent if cleared
      return;
    }

    const persianDate = new DateObject({
      year: selectedDate.year,
      month: selectedDate.month,
      day: selectedDate.day,
      calendar: persian,
    });

    if (!isNaN(persianDate.toDate())) {
      setDate(persianDate); // Update state with the newly selected date
      if (onChange) onChange(persianDate.toDate()); // Pass Gregorian date to parent
    } else {
      console.warn("Invalid date selected:", selectedDate);
    }
  };

  // Clear the selected date
  const handleClear = () => {
    setDate(null);
    if (onChange) onChange(null); // Pass null to parent
  };

  return (
    <div>
      {/* Render the title as a heading */}
      {title && (
        <h3 className="jalali-date-title text-white pb-2 text-sm">{title}</h3>
      )}
      <div className="jalali-date-wrapper">
        <DatePicker
          value={date ? date.toDate() : null} // Ensure we pass a valid JavaScript Date or null
          onChange={handleChange}
          calendar={persian}
          locale={persian_fa}
          inputClass="jalali-date-input"
          containerClass="jalali-date-container"
          className="jalali-calendar"
          placeholder={placeholder}
          format="YYYY/MM/DD"
          maxDate={maxDate} // Disable dates for users under 18
        />
        {date && (
          <button className="clear-date-btn" onClick={handleClear}>
            &times;
          </button>
        )}
      </div>
    </div>
  );
}
