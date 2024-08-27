import React, { useState } from "react";

function GSTDoc() {
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to toggle dropdowns within a specific column
  const toggleDropdown = (id, column) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [column]: prev[column] === id ? null : id,
    }));
  };

  const DropdownItem = ({ id, title, content, column }) => (
    <div className="">
      <div
        className={`bg-[#45895a] text-white border-x-4 border-y-2 p-2 flex justify-between items-center cursor-pointer ${
          openDropdowns[column] === id ? "text-black" : ""
        }`}
        onClick={() => toggleDropdown(id, column)}
      >
        <span>{title}</span>
        <span>{openDropdowns[column] === id ? "−" : "+"}</span>
      </div>
      {openDropdowns[column] === id && (
        <div className="bg-[#45895a] border-x-4 text-white p-2">{content}</div>
      )}
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-[#519c39] to-[#1f3f14] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="p-4 rounded-lg">
            <DropdownItem
              id="gstr1"
              title="GSTR-1"
              column="column1"
              content={
                <div>
                  <p className="mb-2">
                    Monthly GST returns for any business organization operating
                    in India. Based on GSTR-1, all other forms of GST filings
                    can be submitted for the month.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>The due date of GSTR-1 is the 10th of every month.</li>
                  </ul>
                </div>
              }
            />
            <DropdownItem
              id="gstr2"
              title="GSTR-2"
              column="column1"
              content={
                <div>
                  <p className="mb-2">
                    GSTR-2 is filed for providing all the details regarding the
                    inward supplies of goods and services.
                  </p>
                </div>
              }
            />
            <DropdownItem
              id="gstr2a"
              title="GSTR-2A"
              column="column1"
              content={
                <div>
                  <p className="mb-2">
                    In this type of GST return, the details related to all kinds
                    of inward deliveries of goods/services from registered
                    suppliers are presented. Here the data are obtained from the
                    GSTR-1 process only.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>The due date of GSTR-2A is the 15th of every month.</li>
                  </ul>
                </div>
              }
            />
            <DropdownItem
              id="gstr3b"
              title="GSTR-3B"
              column="column1"
              content={
                <div>
                  <p className="mb-2">
                    Here the input tax credits and the synopsis of the entire
                    monthly returns of all kinds of inward and outward supplies
                    are needed to be submitted.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>The due date of GSTR-3B is the 15th of every month.</li>
                  </ul>
                </div>
              }
            />
            <DropdownItem
              id="gstr4"
              title="GSTR-4"
              column="column1"
              content={
                <div>
                  <p className="mb-2">
                    Synopsis of every outward supply along with the detail of
                    all sorts of paid tax on imported services. This is executed
                    on yearly basis.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      The due date is the 30th of the month succeeding in the
                      financial year for GSTR-4.
                    </li>
                  </ul>
                </div>
              }
            />
          </div>

          {/* Column 2 */}
          <div className="p-4 rounded-lg">
            <DropdownItem
              id="gstr5"
              title="GSTR-5"
              column="column2"
              content={
                <div>
                  <p className="mb-2">
                    It is a mandatory GST filing for all business personalities.
                    Here the details of the inward-outward supplies and the tax
                    liability are needed to be submitted.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>The due date of GSTR-5 is the 20th of every month.</li>
                  </ul>
                </div>
              }
            />
            <DropdownItem
              id="gstr5a"
              title="GSTR-5A"
              column="column2"
              content={
                <div>
                  <p className="mb-2">
                    This category especially works for the OIDAR (Online
                    Information & Database Access or Retrieval) to showcase the
                    details about the services provided to any individual or
                    organization.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>The due date of GSTR-5A is the 20th of every month.</li>
                  </ul>
                </div>
              }
            />
            <DropdownItem
              id="gstr6"
              title="GSTR-6"
              column="column2"
              content={
                <div>
                  <p className="mb-2">
                    After the verification and acceptance of the furnished
                    documents in GSTR-6A, this particular GST filing can be
                    executed.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>The due date of GSTR-6 is the 13th of every month.</li>
                  </ul>
                </div>
              }
            />
            <DropdownItem
              id="gstr6a"
              title="GSTR-6A"
              column="column2"
              content={
                <div>
                  <p className="mb-2">
                    It is a system-generated summary report on the inward
                    supplies of a tax-payer.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>The due date of GSTR-6A is the 13th of every month.</li>
                  </ul>
                </div>
              }
            />
            <DropdownItem
              id="gstr7"
              title="GSTR-7"
              column="column2"
              content={
                <div>
                  <p className="mb-2">
                    Here the details of TDS (Tax Deducted at Source) under GST,
                    TDS refund are submitted for further proceedings.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      The due date of GSTR-7 is the 18th of the subsequent
                      month.
                    </li>
                  </ul>
                </div>
              }
            />
          </div>

          {/* Column 3 */}
          <div className="p-4 rounded-lg">
            <DropdownItem
              id="gstr7a"
              title="GSTR-7A"
              column="column3"
              content="It is better known as TDS Certificate as well. It is generated no sooner than the GSTR-7 form filing is done."
            />
            <DropdownItem
              id="gstr8"
              title="GSTR-8"
              column="column3"
              content={
                <div>
                  <p className="mb-2">
                    GSTR-2 is filed for providing all the details regarding the
                    inward supplies of goods and services.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>The due date of GSTR-8 is the 10th of every month.</li>
                  </ul>
                </div>
              }
            />
            <DropdownItem
              id="gstr9"
              title="GSTR-9"
              column="column3"
              content={
                <div>
                  <p className="mb-2">
                    This annual GST filing contains information about all the
                    sales, purchases, refunds, or input tax credit by all
                    tax-payers, Special Economic Zone (SEZ) unit, SEZ
                    developers, and many more.
                  </p>
                </div>
              }
            />
            <DropdownItem
              id="gstr9a"
              title="GSTR-9A"
              column="column3"
              content={
                <div>
                  <p className="mb-2">
                    GST filing 9A is for them who have selected for the
                    Composition Scheme in any part of the same financial year.
                    In this category inwards, outwards, suppliers, input tax
                    credits are included.
                  </p>
                </div>
              }
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8  text-white p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <h3 className="font-semibold mb-2 bg-white bg-opacity-70 text-black rounded-r-xl rounded-b-xl border-2 border-black mx-2 p-1">
              For the process of GST return filing, one business entity is
              obliged to submit the following documents:
            </h3>
            <ul className="list-disc list-inside">
              <li>The purchase invoice</li>
              <li>Input/purchase credits</li>
              <li>GSTIN of the seller/business identity</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Invoice number & date</li>
              <li>Taxable value/GST rate</li>
              <li>Consumer details</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>The purchase invoice</li>
              <li>Input/purchase credits</li>
              <li>GSTIN of the seller/business identity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GSTDoc;
