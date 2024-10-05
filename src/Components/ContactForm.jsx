// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Swal from 'sweetalert2'; // Import SweetAlert
// import axios from 'axios'; // Import Axios
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const FormContainer = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 107px;
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   background-color: #f08300;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f08300;
//   }
// `;

// const ContactForm = () => {
//   document.title= 'Maxdrive | Contact';
//   const navigate = useNavigate(); // Initialize useNavigate hook
//   const [formData, setFormData] = useState({
//     odometer_reading: '',
//     vehicle_number: '',
//     contact_number: '',
//     claim_image: null,
//     contact_name: '',
//   });
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [fileInputKey, setFileInputKey] = useState(Date.now()); // Add this state to reset file input

//   useEffect(() => {
//     const contactInfoString = localStorage.getItem('user_details');
//     let contactInfo = {};
//     if (contactInfoString) {
//       try {
//         contactInfo = JSON.parse(contactInfoString);
//       } catch (e) {
//         console.error('Error parsing JSON from localStorage:', e);
//       }
//     }
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       vehicle_number: contactInfo.vehicle_number || '',
//       contact_number: contactInfo.contact_number || '',
//       contact_name: contactInfo.full_name || '',
//     }));
//   }, []); // Run only once

//   const handleChange = (event) => {
//     const { name, value, files } = event.target;
//     if (name === 'claim_image') {
//       setFormData((prevFormData) => ({ ...prevFormData, claim_image: files[0] }));
//       if (files && files[0]) {
//         setSelectedImage(URL.createObjectURL(files[0]));
//       }
//     } else {
//       setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData();
//     for (const [key, value] of Object.entries(formData)) {
//       data.append(key, value);
//     }

//     try {
//       const response = await axios.post("http://192.168.0.107:8002/claim_warranty/",
//         data,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );
//       console.log('API Response:', response.data);

//       // Show success message using SweetAlert
//       Swal.fire({
//         icon: 'success',
//         title: 'Submitted Successfully!',
//         text: 'Our team will contact you soon.',
//       }).then(() => {
//         // Redirect to home page after the alert is closed
//         navigate('/');
//       });

//       // Optionally, reset the form
//       setFormData({
//         odometer_reading: '',
//         vehicle_number: '',
//         contact_number: '',
//         claim_image: null,
//         contact_name: '',
//       });
//       setSelectedImage(null); // Reset selected image state
//       setFileInputKey(Date.now()); // Reset file input field
//     } catch (error) {
//       console.error('Error submitting form:', error);

//       // Show error message using SweetAlert
//       Swal.fire({
//         icon: 'error',
//         title: 'Submission Error',
//         text: 'An error occurred while submitting the form.',
//       });
//     }
//   };

//   return (
//     <FormContainer className="mt-10">
//       <h2 className="text-2xl font-bold mb-5 text-center">Contact Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="odometer_reading" className="block text-sm font-medium text-gray-700">Odometer Reading</label>
//         <Input
//           type="text"
//           id="odometer_reading"
//           name="odometer_reading"
//           value={formData.odometer_reading}
//           onChange={handleChange}
//           placeholder="Odometer reading"
//           required
//         />

//         <label htmlFor="vehicle_number" className="block text-sm font-medium text-gray-700">Vehicle Number</label>
//         <Input
//           type="text"
//           id="vehicle_number"
//           name="vehicle_number"
//           value={formData.vehicle_number}
//           onChange={handleChange}
//           placeholder="Vehicle number"
//           required
//         />

//         <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Customer Number</label>
//         <Input
//           type="text"
//           id="contact_number"
//           name="contact_number"
//           value={formData.contact_number}
//           onChange={handleChange}
//           placeholder="Contact number"
//           required
//         />

//         <label htmlFor="claim_image" className="block text-sm font-medium text-gray-700">Odometer Image</label>
//         <Input
//           type="file"
//           id="claim_image"
//           name="claim_image"
//           accept="image/*"
//           onChange={handleChange}
//           key={fileInputKey} // Add this key prop to reset file input
//         />

//         {selectedImage && (
//           <img 
//             src={selectedImage} 
//             alt="Selected" 
//             className="mx-auto mb-5 mt-5" 
//             style={{ maxWidth: '50%', height: 'auto' }}
//           />
//         )}
//         <Button type="submit" className="mt-4">Submit</Button>
//       </form>
//     </FormContainer>
//   );
// };

// export default ContactForm;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'; // Import SweetAlert
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 107px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #f08300;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f07b00; /* Adjust hover color for better visibility */
  }
`;

const ContactForm = () => {
  document.title = 'Maxdrive | Contact';
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    odometer_reading: '',
    vehicle_number: '',
    contact_number: '',
    claim_image: null,
    contact_name: '', // Add contact_name to formData
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Add this state to reset file input

  useEffect(() => {
    const contactInfoString = localStorage.getItem('user_details');
    let contactInfo = {};
    if (contactInfoString) {
      try {
        contactInfo = JSON.parse(contactInfoString);
      } catch (e) {
        console.error('Error parsing JSON from localStorage:', e);
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      vehicle_number: contactInfo.vehicle_number || '',
      contact_number: contactInfo.contact_number || '',
      contact_name: contactInfo.full_name || '',
    }));
  }, []); // Run only once

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'claim_image') {
      setFormData((prevFormData) => ({ ...prevFormData, claim_image: files[0] }));
      if (files && files[0]) {
        setSelectedImage(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      data.append(key, value);
    }

    try {
      const response = await axios.post("http://192.168.0.107:8002/claim_warranty/",
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log('API Response:', response.data);

      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Submitted Successfully!',
        text: 'Our team will contact you soon.',
      }).then(() => {
        // Redirect to home page after the alert is closed
        navigate('/');
      });

      // Optionally, reset the form
      setFormData({
        odometer_reading: '',
        vehicle_number: '',
        contact_number: '',
        claim_image: null,
        contact_name: '',
      });
      setSelectedImage(null); // Reset selected image state
      setFileInputKey(Date.now()); // Reset file input field
    } catch (error) {
      console.error('Error submitting form:', error);

      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: 'An error occurred while submitting the form.',
      });
    }
  };

  return (
    <FormContainer className="mt-10">
      <h2 className="text-2xl font-bold mb-5 text-center">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700">Your Name</label>
        <Input
          type="text"
          id="contact_name"
          name="contact_name"
          value={formData.contact_name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="odometer_reading" className="block text-sm font-medium text-gray-700">Odometer Reading</label>
        <Input
          type="text"
          id="odometer_reading"
          name="odometer_reading"
          value={formData.odometer_reading}
          onChange={handleChange}
          placeholder="Odometer reading"
          required
        />

        <label htmlFor="vehicle_number" className="block text-sm font-medium text-gray-700">Vehicle Number</label>
        <Input
          type="text"
          id="vehicle_number"
          name="vehicle_number"
          value={formData.vehicle_number}
          onChange={handleChange}
          placeholder="Vehicle number"
          required
        />

        <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Customer Number</label>
        <Input
          type="text"
          id="contact_number"
          name="contact_number"
          value={formData.contact_number}
          onChange={handleChange}
          placeholder="Contact number"
          required
        />

        <label htmlFor="claim_image" className="block text-sm font-medium text-gray-700">Odometer Image</label>
        <Input
          type="file"
          id="claim_image"
          name="claim_image"
          accept="image/*"
          onChange={handleChange}
          key={fileInputKey} // Add this key prop to reset file input
        />

        {selectedImage && (
          <img 
            src={selectedImage} 
            alt="Selected" 
            className="mx-auto mb-5 mt-5" 
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        )}
        <Button type="submit" className="mt-4">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
