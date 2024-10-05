// import React, { useState } from 'react';
// import styled from 'styled-components';


// // Global styles
// const Container = styled.div`
//   width: 100%;
//   max-width: 600px;
//   margin: 20px auto;
//   padding: 20px;
//   margin-top:70px;
//   border-radius: 8px;
//   background-color: #ffffff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.h1`
//   font-family: 'Pacifico', cursive;
//   text-align: center;
//   font-size: 2.5rem;
//   margin-bottom: 10px;
// `;

// const Subtitle = styled.h3`
//   text-align: center;
//   font-size: 1rem;
//   margin: 0.5rem 0;
// `;

// const Label = styled.label`
//   margin: 10px 0 5px;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Select = styled.select`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   margin-top: 15px;
//   padding: 10px;
//   background-color: #f44336;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #d32f2f;
//   }
// `;

// const ErrorMsg = styled.small`
//   color: red;
//   font-size: 0.875rem;
//   margin-top: 5px;
// `;

// // Main Award Component
// const Award = () => {
//   const [formData, setFormData] = useState({
//     mechanicName: '',
//     garageName: '',
//     phoneNumber: '',
//     email: '',
//     garageAddress: '',
//     nomination: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.mechanicName) newErrors.mechanicName = 'Mechanic name is required';
//     if (!formData.garageName) newErrors.garageName = 'Garage name is required';
//     if (!formData.phoneNumber) {
//       newErrors.phoneNumber = 'Phone number is required';
//     } else if (formData.phoneNumber.length > 13) {
//       newErrors.phoneNumber = 'Max length is 13';
//     }
//     if (!formData.nomination) newErrors.nomination = 'Nomination is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       setIsSubmitted(true);
//       console.log(formData);
//       setFormData({
//         mechanicName: '',
//         garageName: '',
//         phoneNumber: '',
//         email: '',
//         garageAddress: '',
//         nomination: '',
//       });
//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <Container>
//         <Title>Submission Successful</Title>
//         <Subtitle>Your nomination has been submitted!</Subtitle>
//         <Button onClick={() => setIsSubmitted(false)}>Back to Form</Button>
//       </Container>
//     );
//   }

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Title>Award Nomination Form</Title>
//         <Label>Mechanic Name*:</Label>
//         <Input
//           name="mechanicName"
//           value={formData.mechanicName}
//           onChange={handleChange}
//           placeholder="Mechanic Name"
//         />
//         {errors.mechanicName && <ErrorMsg>{errors.mechanicName}</ErrorMsg>}

//         <Label>Garage Name*:</Label>
//         <Input
//           name="garageName"
//           value={formData.garageName}
//           onChange={handleChange}
//           placeholder="Garage Name"
//         />
//         {errors.garageName && <ErrorMsg>{errors.garageName}</ErrorMsg>}

//         <Label>Phone Number*:</Label>
//         <Input
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Phone Number"
//         />
//         {errors.phoneNumber && <ErrorMsg>{errors.phoneNumber}</ErrorMsg>}

//         <Label>Email ID:</Label>
//         <Input
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           type="email"
//           placeholder="Email"
//         />

//         <Label>Garage Address:</Label>
//         <TextArea
//           name="garageAddress"
//           value={formData.garageAddress}
//           onChange={handleChange}
//           placeholder="Garage Address"
//           rows="3"
//         />

//         <Label>Nomination:</Label>
//         <Select
//           name="nomination"
//           value={formData.nomination}
//           onChange={handleChange}
//         >
//           <option value="">Select Nomination</option>
//           <option value="Best Mechanic">Best Mechanic</option>
//           <option value="Most Innovative Garage">Most Innovative Garage</option>
//           <option value="Best Customer Service">Best Customer Service</option>
//         </Select>
//         {errors.nomination && <ErrorMsg>{errors.nomination}</ErrorMsg>}

//         <Button type="submit">Submit</Button>
//       </Form>
//     </Container>
//   );
// };

// export default Award;

// import React, { useState } from 'react';
// import styled, { createGlobalStyle } from 'styled-components';

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Arial', sans-serif; // Changed to Arial sans-serif
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;

// const Container = styled.div`
//   margin-top: 100px;
//   width: 100%;
//   max-width: 600px;
//   margin: 20px auto;
//   padding: 20px;
//   border-radius: 8px;
//   background-color: #ffffff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.h1`
//   font-family: 'Arial', sans-serif; // Added sans-serif font
//   text-align: center;
//   font-size: 2.5rem;
//   margin-bottom: 10px;
//   margin-top: 30px;
// `;

// const Subtitle = styled.h3`
//   font-family: 'Arial', sans-serif; // Added sans-serif font
//   text-align: center;
//   font-size: 1rem;
//   margin: 0.5rem 0;
// `;

// const Label = styled.label`
//   margin: 10px 0 5px;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Select = styled.select`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   margin-top: 15px;
//   padding: 10px;
//   background-color: #f44336;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #d32f2f;
//   }
// `;

// const ErrorMsg = styled.small`
//   color: red;
//   font-size: 0.875rem;
//   margin-top: 5px;
// `;

// // Main Award Component
// const Award = () => {
//   const [formData, setFormData] = useState({
//     mechanicName: '',
//     garageName: '',
//     phoneNumber: '',
//     email: '',
//     garageAddress: '',
//     nomination: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.mechanicName) newErrors.mechanicName = 'Mechanic name is required';
//     if (!formData.garageName) newErrors.garageName = 'Garage name is required';
//     if (!formData.phoneNumber) {
//       newErrors.phoneNumber = 'Phone number is required';
//     } else if (formData.phoneNumber.length > 13) {
//       newErrors.phoneNumber = 'Max length is 13';
//     }
//     if (!formData.nomination) newErrors.nomination = 'Nomination is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       setIsSubmitted(true);
//       console.log(formData);
//       setFormData({
//         mechanicName: '',
//         garageName: '',
//         phoneNumber: '',
//         email: '',
//         garageAddress: '',
//         nomination: '',
//       });
//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <Container>
//         <Title>Submission Successful</Title>
//         <Subtitle>Your nomination has been submitted!</Subtitle>
//         <Button onClick={() => setIsSubmitted(false)}>Back to Form</Button>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <GlobalStyle />
//       <Container>
//         <Form onSubmit={handleSubmit}>
//           <Title>Award Nomination Form</Title>
//           <Label>Mechanic Name:</Label>
//           <Input
//             name="mechanicName"
//             value={formData.mechanicName}
//             onChange={handleChange}
//             placeholder="Mechanic Name"
//           />
//           {errors.mechanicName && <ErrorMsg>{errors.mechanicName}</ErrorMsg>}

//           <Label>Garage Name:</Label>
//           <Input
//             name="garageName"
//             value={formData.garageName}
//             onChange={handleChange}
//             placeholder="Garage Name"
//           />
//           {errors.garageName && <ErrorMsg>{errors.garageName}</ErrorMsg>}

//           <Label>Phone Number:</Label>
//           <Input
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//           />
//           {errors.phoneNumber && <ErrorMsg>{errors.phoneNumber}</ErrorMsg>}

//           <Label>Email ID:</Label>
//           <Input
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             type="email"
//             placeholder="Email"
//           />

//           <Label>Garage Address:</Label>
//           <TextArea
//             name="garageAddress"
//             value={formData.garageAddress}
//             onChange={handleChange}
//             placeholder="Garage Address"
//             rows="3"
//           />

//           <Label>Nomination:</Label>
//           <Select
//             name="nomination"
//             value={formData.nomination}
//             onChange={handleChange}
//           >
//             <option value="">Select Nomination</option>
//             <option value="Best Mechanic">Best Mechanic</option>
//             <option value="Most Innovative Garage">Most Innovative Garage</option>
//             <option value="Best Customer Service">Best Customer Service</option>
//           </Select>
//           {errors.nomination && <ErrorMsg>{errors.nomination}</ErrorMsg>}

//           <Button type="submit">Submit</Button>
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default Award;


// import React, { useState } from 'react';
// import styled, { createGlobalStyle } from 'styled-components';

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Arial', sans-serif; // Changed to Arial sans-serif
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;

// const Container = styled.div`
//   margin-top: 100px;
//   width: 100%;
//   max-width: 600px;
//   margin: 20px auto;
//   padding: 20px;
//   border-radius: 8px;
//   background-color: #ffffff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.h1`
//   font-family: 'Arial', sans-serif; // Added sans-serif font
//   text-align: center;
//   font-size: 2.5rem;
//   margin-bottom: 10px;
//   margin-top: 30px;
// `;

// const Subtitle = styled.h3`
//   font-family: 'Arial', sans-serif; // Added sans-serif font
//   text-align: center;
//   font-size: 1rem;
//   margin: 0.5rem 0;
// `;

// const Label = styled.label`
//   margin: 10px 0 5px;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Select = styled.select`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   margin-top: 15px;
//   padding: 10px;
//   background-color: #f44336;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #d32f2f;
//   }
// `;

// const ErrorMsg = styled.small`
//   color: red;
//   font-size: 0.875rem;
//   margin-top: 5px;
// `;

// // Main Award Component
// const Award = () => {
//   const [formData, setFormData] = useState({
//     mechanicName: '',
//     garageName: '',
//     phoneNumber: '',
//     email: '',
//     garageAddress: '',
//     nomination: '',
//     taluk: '', // New field for Taluk
//     dob: '',   // New field for Date of Birth
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.mechanicName) newErrors.mechanicName = 'Mechanic name is required';
//     if (!formData.garageName) newErrors.garageName = 'Garage name is required';
//     if (!formData.phoneNumber) {
//       newErrors.phoneNumber = 'Phone number is required';
//     } else if (formData.phoneNumber.length > 13) {
//       newErrors.phoneNumber = 'Max length is 13';
//     }
//     if (!formData.nomination) newErrors.nomination = 'Nomination is required';
//     if (!formData.taluk) newErrors.taluk = 'Taluk is required'; // Validation for Taluk
//     if (!formData.dob) newErrors.dob = 'Date of Birth is required'; // Validation for DOB
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       setIsSubmitted(true);
//       console.log(formData);
//       setFormData({
//         mechanicName: '',
//         garageName: '',
//         phoneNumber: '',
//         email: '',
//         garageAddress: '',
//         nomination: '',
//         taluk: '',
//         dob: '',
//       });
//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <Container>
//         <Title>Submission Successful</Title>
//         <Subtitle>Your nomination has been submitted!</Subtitle>
//         <Button onClick={() => setIsSubmitted(false)}>Back to Form</Button>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <GlobalStyle />
//       <Container>
//         <Form onSubmit={handleSubmit}>
//           <Title>Award Nomination Form</Title>
          
//           <Label>Mechanic Name:</Label>
//           <Input
//             name="mechanicName"
//             value={formData.mechanicName}
//             onChange={handleChange}
//             placeholder="Mechanic Name"
//           />
//           {errors.mechanicName && <ErrorMsg>{errors.mechanicName}</ErrorMsg>}

//           <Label>Garage Name:</Label>
//           <Input
//             name="garageName"
//             value={formData.garageName}
//             onChange={handleChange}
//             placeholder="Garage Name"
//           />
//           {errors.garageName && <ErrorMsg>{errors.garageName}</ErrorMsg>}

//           <Label>Phone Number:</Label>
//           <Input
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//           />
//           {errors.phoneNumber && <ErrorMsg>{errors.phoneNumber}</ErrorMsg>}

//           <Label>Email ID:</Label>
//           <Input
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             type="email"
//             placeholder="Email"
//           />

//           <Label>Garage Address:</Label>
//           <TextArea
//             name="garageAddress"
//             value={formData.garageAddress}
//             onChange={handleChange}
//             placeholder="Garage Address"
//             rows="3"
//           />

//           <Label>Nomination:</Label>
//           <Select
//             name="nomination"
//             value={formData.nomination}
//             onChange={handleChange}
//           >
//             <option value="">Select Nomination</option>
//             <option value="Best Mechanic">Best Mechanic</option>
//             <option value="Most Innovative Garage">Most Innovative Garage</option>
//             <option value="Best Customer Service">Best Customer Service</option>
//           </Select>
//           {errors.nomination && <ErrorMsg>{errors.nomination}</ErrorMsg>}

//           {/* New Taluk Dropdown */}
//           <Label>Taluk:</Label>
//           <Select
//             name="taluk"
//             value={formData.taluk}
//             onChange={handleChange}
//           >
//             <option value="">Select Taluk</option>
//             <option value="Belagavi Taluk">Belagavi Taluk</option>
//             {/* Add more taluks here if needed */}
//           </Select>
//           {errors.taluk && <ErrorMsg>{errors.taluk}</ErrorMsg>}

//           {/* New Date of Birth Input */}
//           <Label>Date of Birth:</Label>
//           <Input
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             type="date"
//           />
//           {errors.dob && <ErrorMsg>{errors.dob}</ErrorMsg>}

//           <Button type="submit">Submit</Button>
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default Award;


// import React, { useState } from 'react';
// import styled, { createGlobalStyle } from 'styled-components';

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Arial', sans-serif;
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;

// const Container = styled.div`
//   margin-top: 100px;
//   width: 100%;
//   max-width: 600px;
//   margin: 20px auto;
//   padding: 20px;
//   border-radius: 8px;
//   background-color: #ffffff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.h1`
//   font-family: 'Arial', sans-serif;
//   text-align: center;
//   font-size: 2.5rem;
//   margin-bottom: 10px;
//   margin-top: 30px;
// `;

// const Subtitle = styled.h3`
//   font-family: 'Arial', sans-serif;
//   text-align: center;
//   font-size: 1rem;
//   margin: 0.5rem 0;
// `;

// const Label = styled.label`
//   margin: 10px 0 5px;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Select = styled.select`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   margin-top: 15px;
//   padding: 10px;
//   background-color: #ff7400;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color:#ff7400;
//   }
// `;

// const ErrorMsg = styled.small`
//   color: red;
//   font-size: 0.875rem;
//   margin-top: 5px;
// `;

// const Award = () => {
//   const [formData, setFormData] = useState({
//     mechanicName: '',
//     garageName: '',
//     phoneNumber: '',
//     email: '',
//     garageAddress: '',
//     nomination: '',
//     taluk: '',
//     dob: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.mechanicName) newErrors.mechanicName = 'Mechanic name is required';
//     if (!formData.garageName) newErrors.garageName = 'Garage name is required';
//     if (!formData.phoneNumber) {
//       newErrors.phoneNumber = 'Phone number is required';
//     } else if (formData.phoneNumber.length > 13) {
//       newErrors.phoneNumber = 'Max length is 13';
//     }
//     if (!formData.nomination) newErrors.nomination = 'Nomination is required';
//     if (!formData.taluk) newErrors.taluk = 'Taluk is required';
//     if (!formData.dob) newErrors.dob = 'Date of Birth is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       setIsSubmitted(true);
//       console.log(formData);
//       setFormData({
//         mechanicName: '',
//         garageName: '',
//         phoneNumber: '',
//         email: '',
//         garageAddress: '',
//         nomination: '',
//         taluk: '',
//         dob: '',
//       });
//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <Container>
//         <Title>Submission Successful</Title>
//         <Subtitle>Your nomination has been submitted!</Subtitle>
//         <Button onClick={() => setIsSubmitted(false)}>Back to Form</Button>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <GlobalStyle />
//       <Container>
//         <Form onSubmit={handleSubmit}>
//           <Title>Award Nomination Form</Title>
          
//           <Label>Mechanic Name:</Label>
//           <Input
//             name="mechanicName"
//             value={formData.mechanicName}
//             onChange={handleChange}
//             placeholder="Mechanic Name"
//           />
//           {errors.mechanicName && <ErrorMsg>{errors.mechanicName}</ErrorMsg>}
//           <Label>Date of Birth:</Label>
//           <Input
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             type="date"
//           />
//           {errors.dob && <ErrorMsg>{errors.dob}</ErrorMsg>}

//           <Label>Garage Name:</Label>
//           <Input
//             name="garageName"
//             value={formData.garageName}
//             onChange={handleChange}
//             placeholder="Garage Name"
//           />
//           {errors.garageName && <ErrorMsg>{errors.garageName}</ErrorMsg>}

//           <Label>Phone Number:</Label>
//           <Input
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//           />
//           {errors.phoneNumber && <ErrorMsg>{errors.phoneNumber}</ErrorMsg>}

//           <Label>Email ID:</Label>
//           <Input
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             type="email"
//             placeholder="Email"
//           />

//           <Label>Garage Address:</Label>
//           <TextArea
//             name="garageAddress"
//             value={formData.garageAddress}
//             onChange={handleChange}
//             placeholder="Garage Address"
//             rows="3"
//           />

//           <Label>Nomination:</Label>
//           <Select
//             name="nomination"
//             value={formData.nomination}
//             onChange={handleChange}
//           >
//             <option value="">Select Nomination</option>
//             <option value="Best Mechanic">Best Mechanic</option>
//             <option value="Most Innovative Garage">Most Innovative Garage</option>
//             <option value="Best Customer Service">Best Customer Service</option>
//           </Select>
//           {errors.nomination && <ErrorMsg>{errors.nomination}</ErrorMsg>}

//           <Label>Taluk:</Label>
//           <Select
//             name="taluk"
//             value={formData.taluk}
//             onChange={handleChange}
//           >
//             <option value="">Select Taluk</option>
//             <option value="Belgaum">Belgaum</option>
//             <option value="Bailhongal">Bailhongal</option>
//             <option value="Chikkodi">Chikkodi</option>
//             <option value="Gokak">Gokak</option>
//             <option value="Hukkeri">Hukkeri</option>
//             <option value="Raybag">Raybag</option>
//             <option value="Ramdurg">Ramdurg</option>
//             <option value="Athani">Athani</option>
//             <option value="Saundatti">Saundatti</option>
//             <option value="Khanapur">Khanapur</option>
//             <option value="Kittur">Kittur</option>
//             <option value="Nippani">Nippani</option>
//             <option value="Kagawad">Kagawad</option>
//             <option value="Mudalagi">Mudalagi</option>
//             <option value="Yaragatti">Yaragatti</option>
//           </Select>
//           {errors.taluk && <ErrorMsg>{errors.taluk}</ErrorMsg>}

          

//           <Button type="submit">Submit</Button>
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default Award;


import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: 'Arial', sans-serif;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const Subtitle = styled.h3`
  font-family: 'Arial', sans-serif;
  text-align: center;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px;
  background-color: #ff7400;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff7400;
  }
`;

const ErrorMsg = styled.small`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;

// Main Award Component
const Award = () => {
  const [formData, setFormData] = useState({
    mechanic_name: '',
    garage_name: '',
    phone: '',
    email: '',
    garage_address: '',
    sub_district: '',
    dob: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subDistricts, setSubDistricts] = useState([]);

  // Fetch sub-districts (if you want dynamic loading)
  useEffect(() => {
    // For now, hardcode the sub-districts
    setSubDistricts([
      'Belgaum', 'Bailhongal', 'Chikkodi', 'Gokak', 'Hukkeri', 'Raybag', 'Ramdurg', 'Athani',
      'Saundatti', 'Khanapur', 'Kittur', 'Nippani', 'Kagawad', 'Mudalagi', 'Yaragatti'
    ]);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the form before submission
  const validateForm = () => {
    const newErrors = {};
    if (!formData.mechanic_name) newErrors.mechanic_name = 'Mechanic name is required';
    if (!formData.garage_name) newErrors.garage_name = 'Garage name is required';
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length > 13) {
      newErrors.phone = 'Max length is 13 characters';
    }
    
    if (!formData.sub_district) newErrors.sub_district = 'Sub-District is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    return newErrors;
  };

  // Handle form submission using Axios
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Make the POST request with Axios
      axios
        .post('http://192.168.0.107:8002/contacts/', formData)
        .then((response) => {
          console.log('Success:', response.data);
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Reset form data
      setFormData({
        mechanic_name: '',
        garage_name: '',
        phone: '',
        email: '',
        garage_address: '',
     
        sub_district: '',
        dob: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  // Display submission confirmation after form is submitted
  if (isSubmitted) {
    return (
      <Container>
        <Title>Submission Successful</Title>
        <Subtitle>Your nomination has been submitted!</Subtitle>
        <Button onClick={() => setIsSubmitted(false)}>Back to Form</Button>
      </Container>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Award Nomination Form</Title>

          <Label>Mechanic Name:</Label>
          <Input
            name="mechanic_name"
            value={formData.mechanic_name}
            onChange={handleChange}
            placeholder="Mechanic Name"
          />
          {errors.mechanic_name && <ErrorMsg>{errors.mechanic_name}</ErrorMsg>}

          <Label>Garage Name:</Label>
          <Input
            name="garage_name"
            value={formData.garage_name}
            onChange={handleChange}
            placeholder="Garage Name"
          />
          {errors.garage_name && <ErrorMsg>{errors.garage_name}</ErrorMsg>}

          <Label>Phone Number:</Label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          {errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}

          <Label>Date of Birth:</Label>
          <Input
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            type="date"
          />
          {errors.dob && <ErrorMsg>{errors.dob}</ErrorMsg>}

          <Label>Email ID:</Label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />

          <Label>Garage Address:</Label>
          <TextArea
            name="garage_address"
            value={formData.garage_address}
            onChange={handleChange}
            placeholder="Garage Address"
            rows="3"
          />


          <Label>Sub-District (Taluk):</Label>
          <Select
            name="sub_district"
            value={formData.sub_district}
            onChange={handleChange}
          >
            <option value="">Select Sub-District</option>
            {subDistricts.map((subDistrict) => (
              <option key={subDistrict} value={subDistrict}>
                {subDistrict}
              </option>
            ))}
          </Select>
          {errors.sub_district && <ErrorMsg>{errors.sub_district}</ErrorMsg>}

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default Award;
