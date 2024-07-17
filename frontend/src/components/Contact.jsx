import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [workEmail, setWorkEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setWorkEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      workEmail,
      firstName,
      lastName,
      isChecked,
    };

    try {
      await axios.post("https://getform.io/f/bzylnwja", formData);
      alert("Form submitted successfully!");
      setWorkEmail("");
      setFirstName("");
      setLastName("");
      setIsChecked(false);
      navigate("/");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="mt-8">
      <h1 className="font-bold ml-24 text-2xl mt-24">Talk to Us</h1>

      <form onSubmit={handleSubmit} className="ml-16">
        <div className="mt-4 flex items-center">
          <label htmlFor="workEmailInput" className="block text-gray-700 mr-2">
            Work Email <span className="text-red-500">*</span>:
          </label>
          <input
            type="email"
            id="workEmailInput"
            value={workEmail}
            onChange={handleEmailChange}
            placeholder="Enter your work email"
            className="underline border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mt-4 flex items-center">
          <div className="flex flex-col mr-4">
            <label htmlFor="firstNameInput" className="text-gray-700">
              First Name <span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="firstNameInput"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="Enter your first name"
              className="underline border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastNameInput" className="text-gray-700">
              Last Name <span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="lastNameInput"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Enter your last name"
              className="underline border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="agreeCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="h-5 w-5 border border-red-800 rounded checked:bg-[#ED3C64] checked:border-transparent focus:outline-none appearance-none"
            required
          />
          <label htmlFor="agreeCheckbox" className="text-gray-700 ml-2">
            I agree to Fyle's terms and conditions, and provide <br /> consent
            to send me communication.
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#ED3C64] w-1/2 mt-5 text-white px-4 py-2 ml-14 text-sm"
        >
          CONTACT US
        </button>
      </form>
    </div>
  );
};

export default Contact;
