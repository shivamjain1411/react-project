import React from "react";
import Heading from "../Heading";

function GSTretBody1() {
  return (
    <div>
      <div className=" mx-[6%] p-6  flex flex-col  bg-background text-foreground">
        <Heading title={"GST Return - Overview"} />
        <p className="text-lg text-muted-foreground mb-4">
          A GST return is a crucial document that all taxpayers registered under
          GST must file. This document reports their income, expenses, sales,
          purchases, and tax liability to tax authorities via their unique
          GSTIN. It provides essential details for tax administrative
          authorities to ensure compliance with the Goods and Services Tax
          (GST), an indirect tax levied on the supply of goods and services
          throughout India. As the GST system of taxation is an ever-evolving
          one, it’s critical to stay up-to-date with the latest rules and
          regulations. This is where our GST return filing service comes in –
          our professionals will take care of filings on your behalf, allowing
          you to stay GST compliant and worry-free.
        </p>
      </div>
      <Heading title={"Our Pricing"} />
    </div>
  );
}

export default GSTretBody1;
