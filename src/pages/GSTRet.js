import React from "react";
import GSTretForm from "../components/GSTret/GSTretForm";
import GSTretBody1 from "../components/GSTret/GSTretBody1";
import GSTretBody2 from "../components/GSTret/GSTretBody2";
import GSTretPricing from "../components/GSTret/GSTretPricing";
import GSTretDrop from "../components/GSTret/GSTretDrop";
import GSTDoc from "../components/GSTret/GSTDoc";

function GSTRet() {
  return (
    <div>
      <GSTretForm />
      <GSTretBody1 />
      <GSTretPricing />
      <GSTretDrop />
      <GSTDoc />
      <GSTretBody2 />
    </div>
  );
}

export default GSTRet;
