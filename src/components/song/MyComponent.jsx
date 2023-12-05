import React, { useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [dataToSend, setDataToSend] = useState(""); // State to hold data to send

  const sendDataToBackend = async () => {
    try {
      // Data to send to the backend
      const data = {
        myData: dataToSend, // Modify this based on your data structure
      };

      // Send data to the Flask backend
      const response = await axios.post("http://localhost:5000/api/send-data", data);
      console.log("Response from Flask:", response.data);
    } catch (error) {
      console.error("Error sending data to Flask:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={dataToSend}
        onChange={(e) => setDataToSend(e.target.value)}
      />
      <button onClick={sendDataToBackend}>Send Data</button>
    </div>
  );
};

export default MyComponent;