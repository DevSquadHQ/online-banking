import "./BlockUnblock.css";

const BlockUnblock = () => {
  return (
    <>
      <ul className="list">
        <li>
          <span>شماره سپرده</span>
          <span>11111</span>
        </li>
        <li>
          <span>شماره کارت</span>
          <span>111111</span>
        </li>
        <li>
          <span>نوع حساب</span>
          <span>جاری</span>
        </li>
        <button className="list-btn">مسدود کردن/رفع مسدودی</button>
      </ul>
    </>
  );
};
export default BlockUnblock;
