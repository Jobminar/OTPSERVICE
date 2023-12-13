import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PhoneAuthComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      // Generate OTP before the try-catch blockvbdhsfcjhkfgit remote -v

      const otp = generateRandomOTP();

      // Simulate redirection to the API link with phone number and OTP
      const apiLink = `https://login.digitalsms.biz/api/?apikey=282e30c82bdc97889c5de90dacfc555b&mobile=${phoneNumber}&msg=${otp}`;

      // Store API link and OTP in local storage
      localStorage.setItem("apiLink", apiLink);
      localStorage.setItem("otp", otp);

      // Show success message using Swal
      Swal.fire({
        icon: "success",
        title: "OTP Sent!",
        text: "An OTP has been sent to your phone number.",
      });

      // Open a smaller popup window
      openPopup(apiLink);

      // Redirect to the OTP entering page
      navigate(`/enter-otp?phone=${phoneNumber}`);
    } catch (error) {
      // Show error message using Swal
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error generating OTP. Please try again.",
      });
      console.error("Error generating OTP:", error);
    }
  };

  const generateRandomOTP = () => {
    // Generate a random 4-digit OTP (for example)
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // Store the generated OTP in local storage
    localStorage.setItem("otp", otp);

    return otp;
  };

  const openPopup = (url) => {
    // Set the dimensions of the popup window
    const width = 400;
    const height = 300;

    // Calculate the center of the screen
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    // Open a smaller popup window
    window.open(
      url,
      "_blank",
      `width=${width}, height=${height}, left=${left}, top=${top}`
    );
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">KISAN MARKET</h1>
          <h2 className="text-center mb-4">Phone Authentication</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Enter your phone number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSendOTP}
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneAuthComponent;
