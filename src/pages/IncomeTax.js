import React from "react";
import IncomeTaxReturn from "../components/IncomeTaxx/IncomeTaxReturn";
import DocsReq from "../components/IncomeTaxx/DocsReq";
import Process from "../components/IncomeTaxx/Process";
import InfoCards from "../components/IncomeTaxx/InfoCards";
import Types from "../components/IncomeTaxx/Types";
import TaxTable from "../components/IncomeTaxx/TaxTable";
import Peanulties from "../components/IncomeTaxx/Peanulties";

function IncomeTax() {
  return (
    <div>
      <IncomeTaxReturn />
      <DocsReq />
      <div className="flex  justify-center">
        <Process />
      </div>
      <InfoCards />
      <Types />
      <TaxTable />
      <Peanulties />
    </div>
  );
}

export default IncomeTax;
