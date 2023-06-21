import React from "react";

const ProdItem = (props) => {

  const removeHandler = (event) => {
    const ele = event.target.parentElement;
    const dltId = ele.getAttribute("id")
    props.onDltItem(dltId);
    ele.remove();
  };

  return (
    <li id={props.id} price={props.sp}>
      {props.sp} - {props.pName}
      <button onClick={removeHandler}>Delete Product</button>
    </li>
  );
};

export default ProdItem;
