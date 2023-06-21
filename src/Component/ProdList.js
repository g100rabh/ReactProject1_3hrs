import React from "react";
import ProdItem from "./ProdItem";

const ProdList = (props) => {
  // console.log(props)

  const dltItem = (idToDlt)=> {
      props.onDlt(idToDlt);
  }
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {props.itemList.map((p) => (
          <ProdItem key={p.id} id={p.id} pName={p.prodName} sp={p.prodSp} onDltItem={dltItem} />
        ))}
      </ul>
    </div>
  );
};

export default ProdList;
