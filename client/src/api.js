export const sendOTPRequest = async (phoneNumber, otp) => {
  // Replace 'your-api-endpoint' with the actual API endpoint for sending OTP
  const apiEndpoint = `https://login.digitalsms.biz/api/?apikey=282e30c82bdc97889c5de90dacfc555b&mobile=${phoneNumber}&msg=${otp}`;

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      // No need to send body for this API
    });

    if (!response.ok) {
      throw new Error("Failed to send OTP");
    }

    return response.json();
  } catch (error) {
    throw new Error("Error sending OTP");
  }
};
