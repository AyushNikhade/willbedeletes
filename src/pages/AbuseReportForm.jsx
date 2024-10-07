import React, { useState } from 'react';

const AbuseReportForm = () => {
  const [formData, setFormData] = useState({
    victimName: '',
    abuseType: '',
    gender: '',
    age: '',
    phone: '',
    victimState: '',
    victimCity: '',
    incidentLocation: '',
    incidentState: '',
    incidentCity: '',
    incidentDate: '',
    description: '',
    witnessName: '',
    witnessPhone: '',
    evidence: null,
    consent: false,
    legalDisclaimer: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, evidence: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4" onSubmit={handleSubmit}>
      {/* Victim's Info Section */}
      <h2 className="text-xl font-semibold mb-4">Victim's Info</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="victimName"
          value={formData.victimName}
          onChange={handleChange}
          placeholder="Name Of Victim"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <select
          name="abuseType"
          value={formData.abuseType}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Type Of Abuse</option>
          <option value="physical">Physical Abuse</option>
          <option value="verbal">Verbal Abuse</option>
          <option value="sexual">Sexual Abuse</option>
          <option value="emotional">Emotional Abuse</option>
        </select>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Gender Of Victim</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age Of Victim"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <select
          type="text"
          name="victimState"
          value={formData.victimState}
          onChange={handleChange}
          placeholder="State"
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Delhi">Delhi</option>
        <option value="Puducherry">Puducherry</option>
          </select>
        <input
          type="text"
          name="victimCity"
          value={formData.victimCity}
          onChange={handleChange}
          placeholder="City"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number "
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      {/* Incident Info Section */}
      <h2 className="text-xl font-semibold mb-4">Incident Info</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="incidentLocation"
          value={formData.incidentLocation}
          onChange={handleChange}
          placeholder="Location Of Incident"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="incidentState"
          value={formData.incidentState}
          onChange={handleChange}
          placeholder="State"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="incidentCity"
          value={formData.incidentCity}
          onChange={handleChange}
          placeholder="City"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="date"
          name="incidentDate"
          value={formData.incidentDate}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Detailed Description Of Incident"
        className="p-2 border border-gray-300 rounded w-full mb-6"
      ></textarea>

      {/* Optional Witness Info */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="witnessName"
          value={formData.witnessName}
          onChange={handleChange}
          placeholder="Witness Name (Optional)"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="witnessPhone"
          value={formData.witnessPhone}
          onChange={handleChange}
          placeholder="Witness Phone Number (Optional)"
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2">Supporting Evidence (Optional)</label>
        <input
          type="file"
          name="evidence"
          onChange={handleChange}
          className="block w-full"
        />
      </div>

      {/* Consent Section */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Consent And Legal Disclaimer</label>
        <div className="flex items-start mb-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
          />
          <label>I hereby declare that all information provided is true and accurate to the best of my knowledge</label>
        </div>
        <div className="flex items-start mb-2">
          <input
            type="checkbox"
            name="legalDisclaimer"
            checked={formData.legalDisclaimer}
            onChange={handleChange}
            className="mr-2"
          />
          <label>I understand that sharing fake information will result in legal repercussions...</label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default AbuseReportForm;
