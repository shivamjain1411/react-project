import React from "react";
import Heading from "../Heading";

function GSTretBody2() {
  return (
    <div className=" mx-[8%] p-6  flex flex-col  bg-background text-foreground">
      <Heading title={"Who Is Eligible for GST Return?"} />
      <ul className="list-disc list-inside">
        <li className="font-semibold">
          Regular enterprises with an annual aggregate revenue of more than ₹5
          crore
        </li>
      </ul>
    </div>
  );
}

export default GSTretBody2;
