import React from 'react';
import './side-panel.css';

const SidePanel = ({ formData, onInputChange, onPhotoChange }) => (
  <div id="side-panel">
    <h3>Create New Email Signature</h3>
    <form id="signature-form">
      <label htmlFor="photo">Photo Upload</label>
      <input 
        type="file" 
        id="photo" 
        name="photo" 
        accept="image/*" 
        onChange={onPhotoChange} 
      />

      <label htmlFor="fullName">Employee Name</label>
      <input 
        type="text" 
        id="fullName" 
        name="fullName" 
        value={formData.fullName} 
        onChange={onInputChange} 
      />

      <label htmlFor="designation">Designation</label>
      <input 
        type="text" 
        id="designation" 
        name="designation" 
        value={formData.designation} 
        onChange={onInputChange} 
      />

      <label htmlFor="department">Department</label>
      <input 
        type="text" 
        id="department" 
        name="department" 
        value={formData.department} 
        onChange={onInputChange} 
      />

      <label htmlFor="whatsapp">WhatsApp Number</label>
      <input 
        type="text" 
        id="whats" 
        name="whatsapp" 
        value={formData.whatsapp} 
        onChange={onInputChange} 
        pattern="\d*" 
        title="Please enter only numeric values" 
      />

      <label htmlFor="linkedin">LinkedIn ID</label>
      <input 
        type="url" 
        id="linkedin" 
        name="linkedin" 
        value={formData.linkedin} 
        onChange={onInputChange} 
      />

      <label htmlFor="instagram">Instagram ID</label>
      <input 
        type="url" 
        id="insta" 
        name="instagram" 
        value={formData.instagram} 
        onChange={onInputChange} 
      />
    </form>
  </div>
);

export default SidePanel;
