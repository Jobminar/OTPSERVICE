import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EnterOTPComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userOTP, setUserOTP] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storedOTP, setStoredOTP] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setPhoneNumber(searchParams.get("phone") || "");

    // Retrieve the stored OTP from localStorage
    const storedOTP = localStorage.getItem("otp");
    setStoredOTP(storedOTP || "");
  }, [location.search]);

  const handleVerifyOTP = () => {
    // Compare user-entered OTP with the stored OTP
    if (userOTP === storedOTP) {
      // Redirect to home page or any other desired page
      navigate("/home");
    } else {
      // Show error message using Swal
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "Please enter the correct OTP and try again.",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="mb-4">KISAN-MARKET</h1>
          <div className="card p-4" style={{ backgroundColor: "#d1f5d3" }}>
            <p className="lead">Enter OTP sent to {phoneNumber}</p>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                value={userOTP}
                onChange={(e) => setUserOTP(e.target.value)}
              />
            </div>
            <button
              className="btn btn-success"
              onClick={() => handleVerifyOTP()}
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOTPComponent;
