import React from "react";
import Data from "../../../Students/Data";

function Buttons({ menuItems, filterItems, setItems}) {
  const data = Data()
  return (
    <div className="d-flex justify-content-center  ">
      {
         menuItems.map((val) => (
            <button
              className=" p- px-1 mx-1 btn fw-bold"
              onClick={() => filterItems(val)}
              style={{ backgroundColor:"purple" , color:"white", fontSize:"auto"}}
            >
             {val}
        </button>
         ))
      }
      <button
        className="btn-dark text-white p-1 px-2 mx-1 btn fw-bold"
        type="button"
        onClick={() => setItems(data)}
      >
        All
      </button>
    </div>
  );
}

export default Buttons;
