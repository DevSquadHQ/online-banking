import React from "react";
import ListContainer from "../../Components/List/ListContainer";
import ListHeader from "../../Components/List/ListHeader";
import ListContent from "../../Components/List/ListContent";

function AccountLists() {
  return (
    <>
      <ListContainer>
        <ListHeader>لیست حساب ها</ListHeader>
        <ListContent />
      </ListContainer>
    </>
  );
}

export default AccountLists;
