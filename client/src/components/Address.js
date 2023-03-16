import React, { useState }from 'react'

const Address = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
      });
      
      const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
  return (
    <form className="form-container">
                <div className="form-input-row">
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder = 'First Name'
                    />
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder = 'Last Name'
                    />
                </div>
                <div className="form-input-row">
                    <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    className="form-input"
                    placeholder = 'Address'
                    />
                </div>
                <div className="form-input-row">
                    <input
                    type="text"
                    id="address2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    className="form-input"
                    placeholder = 'Apartment, Suite, etc'
                    />
                </div>
                <div className="form-input-row">
                    <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input"
                    placeholder = 'City'
                    />
                    <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-input"
                    placeholder = 'State'
                    />
                     <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="form-input"
                    placeholder = 'Zip Code'
                    />
                </div>
                <div style = {{'display': 'flex', 'justifyContent': 'right', 'width': '100%'}}><button type="submit" onClick = {submitShipping}>Continue to Payment</button></div>
                </form>
  )
}

export default Address