import React, { useState } from "react";
import PooyaPass from "../../Components/pooyaPass/PooyaPass";
// import MoneyTransferComp from "../../Components/MoneyTransferComp/MoneyTransferCom";
import MoneyTransferCom from "../../Components/MoneyTransferComp/MoneyTransferCom";

export default function MoneyTransfer() {
  const [passAppear, setPassAppear] = useState(false);
  const passHandler = () => {
    setPassAppear(!passAppear);
  };
  const oncloseHandler = () => {
    setPassAppear(false);
  };
  console.log(passAppear);

  return (
    <>
      <MoneyTransferCom onClick={passHandler} />

      {passAppear && <PooyaPass onClose={oncloseHandler} />}
    </>
  );
}
