import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object"; // Ensure we're using DateObject for proper date handling
import "./JalaliDatePicker.css";

export default function JalaliDatePickerRange({
  value,
  onChange,
  placeholder,
  title,
}) {
  const [dateRange, setDateRange] = useState([]);

  // Sync the internal state with the 'value' prop whenever it changes
  useEffect(() => {
    if (Array.isArray(value) && value.length === 2) {
      const startDate = new DateObject(value[0]); // Convert start date to DateObject
      const endDate = new DateObject(value[1]); // Convert end date to DateObject

      // Validate dates and update state
      if (!isNaN(startDate.toDate()) && !isNaN(endDate.toDate())) {
        setDateRange([startDate, endDate]);
      } else {
        console.warn("Invalid date range passed:", value);
      }
    }
  }, [value]);

  // Handle date range change
  const handleChange = (selectedRange) => {
    if (!selectedRange || selectedRange.length !== 2) {
      setDateRange([]);
      return;
    }

    const [start, end] = selectedRange;

    // Convert selected dates to DateObject for Persian calendar
    const startDate = new DateObject({
      year: start.year,
      month: start.month - 1, // Month is 0-indexed in JavaScript
      day: start.day,
      calendar: persian,
    });

    const endDate = new DateObject({
      year: end.year,
      month: end.month - 1,
      day: end.day,
      calendar: persian,
    });

    // Validate dates
    if (!isNaN(startDate.toDate()) && !isNaN(endDate.toDate())) {
      setDateRange([startDate, endDate]);
    } else {
      console.warn("Invalid date range selected:", selectedRange);
    }

    if (onChange) {
      const gregorianRange = [startDate.toDate(), endDate.toDate()]; // Convert to Gregorian Date for passing to parent
      onChange(gregorianRange);
    }
  };

  return (
    <div>
      {/* Render the title as a heading */}
      {title && (
        <h3 className="jalali-date-title text-white pb-2 text-sm">{title}</h3>
      )}
      <DatePicker
        value={
          dateRange.length === 2 ? dateRange.map((date) => date.toDate()) : null
        } // Pass the range as JavaScript Dates
        onChange={handleChange}
        range
        calendar={persian}
        locale={persian_fa}
        inputClass="jalali-date-input"
        containerClass="jalali-date-container"
        className="jalali-calendar"
        placeholder={placeholder}
        format="YYYY/MM/DD"
      />
    </div>
  );
}
