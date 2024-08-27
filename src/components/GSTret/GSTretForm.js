import React from "react";

const GstForm = () => {
  return (
    <div className="bg-gradient-to-b from-[#048c04] to-black text-white px-[7%] py-8">
      <h1 className="text-2xl font-bold mb-4 bg-[#05611a] rounded-lg text-center">
        Get Your GST Return Filed in Just 3 Hours with the help of Experts
        Starting from ₹499/-monthly
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">⏰</span>
            <p className="text-lg">
              Guaranteed GST filing at the government portal within 6hrs by top
              CA's
            </p>
          </div>
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">🔒</span>
            <p className="text-lg">
              Completely Secured + Encrypted online ITR filing Process.
            </p>
          </div>
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">👨‍⚖️</span>
            <p className="text-lg">
              Over 45+ Income Tax Advocates, CAs & CS Experts - Ready to Assist.
            </p>
          </div>
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">📊</span>
            <p className="text-lg">Data modeling in Excel & Tally</p>
          </div>
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">📝</span>
            <p className="text-lg">
              Processing over 2000+ GST return filing Requests Daily from all
              over India.
            </p>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center ">
              <h2 className="text-7xl font-bold mb-2">100000+</h2>
              <p className="text-xl">GST Return Filing Through Us</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">🕒</span>
            <p className="text-lg">
              24/7 Tax Expert available to help with your questions.
            </p>
          </div>
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">🌐</span>
            <p className="text-lg">
              Customer Support Available in 6 Languages including English
            </p>
          </div>
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">🏆</span>
            <p className="text-lg">
              We Provide Top Notch Tax Compliance Services Across the County
            </p>
          </div>
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">📋</span>
            <p className="text-lg">Input Tax Credit Reconciliation</p>
          </div>
          <div className="flex items-center py-2">
            <span className="text-3xl mr-2">💰</span>
            <p className="text-lg">Money back Policy</p>
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-lg mt-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              className="w-10 h-10 mr-3"
            />
            <div className="">
              <p className="font-semibold">Google Reviews</p>
              <div className="flex items-center">
                <span className="text-yellow-400">{"★".repeat(5)}</span>
                <span className="ml-2">4.5/5</span>
                <span className="mx-2">|</span>
                <span>10.5k+ Happy Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-black p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Need Help with GST Return?</h2>
          <p className="mb-4">Fill Up the below Mentioned Form</p>
          <form>
            <div className="mb-4">
              <label className="block mb-1">
                Applicant Full Name / आवेदक का पूर्ण नाम *
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="Applicant Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email Address / ईमेल पता *</label>
              <input
                type="email"
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="your@gmail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Mobile / मोबाइल *</label>
              <input
                type="tel"
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="98XXXXXXXX(Without 0 or +91)"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">GST Return Plan *</label>
              <div className="flex flex-col space-y-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gstPlan"
                    value="nil"
                    className="form-radio"
                    required
                  />
                  <span className="ml-2">NIL Return Plan</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gstPlan"
                    value="standard"
                    className="form-radio"
                  />
                  <span className="ml-2">Standard Monthly Plan</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gstPlan"
                    value="superSaving"
                    className="form-radio"
                  />
                  <span className="ml-2">Super Saving Plan (Yearly)</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <input type="checkbox" required />
              <label className="ml-2">
                I have read and agree to the Terms and Conditions, Refund Policy
                and Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-indigo-800 text-white font-bold hover:bg-opacity-90 p-2 rounded w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GstForm;
