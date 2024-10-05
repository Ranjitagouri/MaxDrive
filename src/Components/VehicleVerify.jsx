

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';


// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;

//   background-size: cover;
//   padding: 1rem;

//   @media (max-width: 768px) {
//     padding: 2rem;
//   }

//   @media (max-width: 320px) {
//     padding: 1rem;
//   }
// `;

// const FormContainer = styled.div`
//   background-color: grey;
//   padding: 1rem;
//   border-radius: 0.375rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
//   width: 90%;
//   max-width: 400px;
//   margin-bottom: 1rem;


//   @media (max-width: 768px) {
//     width: 100%;
//     margin-top:110px;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   @media (max-width: 320px) {
//     gap: 0.5rem;
//   }
// `;

// const Input = styled.input`
//   border: 1px solid #d1d5db;
//   border-radius: 0.375rem;
//   padding: 0.5rem 1rem;
//   width: 100%;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const Button = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #f08300;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const InfoText = styled.p`
//   width: 80%;
//   text-align: center;
//   color: #333;
//   font-size: 1rem;
//   line-height: 1.5rem;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }

//   @media (max-width: 320px) {
//     font-size: 0.8rem;
//   }
// `;

// const Card = styled.div`
//   background-color: #ffffff;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   padding: 1rem;
//   border-radius: 0.375rem;
//   margin-bottom: 1rem;
//   width: 90%;
//   max-width: 600px;

//   @media (max-width: 768px) {
//     padding: 0.75rem;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const Item = styled.div`
//   margin-bottom: 1rem;
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//   }

//   @media (max-width: 320px) {
//     font-size: 1rem;
//   }
// `;

// const ItemText = styled.p`
//   font-size: 1rem;
//   margin-bottom: 0.25rem;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }

//   @media (max-width: 320px) {
//     font-size: 0.8rem;
//   }
// `;

// const ItemImageContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
//   flex-wrap: wrap;

//   @media (max-width: 320px) {
//     gap: 0.5rem;
//   }
// `;

// const ItemImage = styled.img`
//   width: 100px;
//   height: auto;

//   @media (max-width: 320px) {
//     width: 80px;
//   }
// `;

// const ClaimButton = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: #f08300;
//   }

//   &:disabled {
//     background-color: #cccccc;
//     cursor: not-allowed;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const Title = styled.p`
//   font-size: 40px;
//   color: #fff;
//   text-align: center;
//   margin-bottom: 4rem; /* Added margin to create a gap */
// `;

// function VehicleVerify() {
//   document.title= 'Maxdrive | Warranty Check';
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   const [vehicle_number, setVehicleNumber] = useState('');
//   const [qrData, setQrData] = useState([]);

//   const handleClaimClick = () => {
//     localStorage.setItem('user_details', JSON.stringify(qrData[0]));
//     navigate('/contact-form');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Remove all whitespace characters from the vehicle number
//     const normalizedVehicleNumber = vehicle_number.replace(/\s+/g, '');

//     try {
//       const response = await axios.post("http://192.168.0.107:8002/view_warranty/", {
//       // const response = await axios.post(`${process.env.REACT_APP_API_URL}/view_warranty/`, {
//         vehicle_number: normalizedVehicleNumber,
//       });
//       const data = response.data;
//       console.log(data);
//       if (data.length > 0) {
//         setQrData(data); // Assuming response.data is an array of items
//       } else {
//         enqueueSnackbar('No warranty data found for this vehicle number', { variant: 'info' });
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data || 'Error submitting form';
//       enqueueSnackbar(errorMessage, { variant: 'error' });
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <PageContainer>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <Title>Check the Warranty</Title>
//           <Input
//             type="text"
//             placeholder="Enter Vehicle Number"
//             value={vehicle_number}
//             onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
//           />
//           <Button type="submit">Submit</Button>
//         </Form>
//       </FormContainer>

//       {qrData.map((item, index) => {
//         const currentDate = new Date();
//         const registeredDate = new Date(item.registered);
//         const warrantyEndDate = new Date(item.warranty_till);

//         const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

//         return (
//           <Card key={index}>
//             <Item>
//               <ItemTitle>{item.unique_code}</ItemTitle>
//               <ItemText>Batch: {item.batch}</ItemText>
//               <ItemText>Vehicle Number: {item.vehicle_number}</ItemText>
//               <ItemText>Full Name: {item.full_name}</ItemText>
//               <ItemText>Contact Number: {item.contact_number}</ItemText>
//               <ItemText>Odometer Reading: {item.odometer_reading}</ItemText>
//               <ItemText>Mechanic Name: {item.mechanic_name}</ItemText>
//               <ItemText>Mechanic Number: {item.mechanic_number}</ItemText>
//               <ItemText>Registration Date: {item.registered}</ItemText>
//               <ItemText>Warranty Till: {item.warranty_till}</ItemText>
//               <ItemImageContainer>
//                 <ItemImage src={item.odometer_image_url} alt="Odometer" />
//                 <ItemImage src={item.bike_image_url} alt="Bike" />
//               </ItemImageContainer>
//               {isWithinWarranty && <ClaimButton onClick={handleClaimClick}>Claim Warranty</ClaimButton>}
//             </Item>
//           </Card>
//         );
//       })}
//     </PageContainer>
//   );
// }

// export default VehicleVerify;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-size: cover;
//   padding: 1rem;

//   @media (max-width: 768px) {
//     padding: 2rem;
//   }

//   @media (max-width: 320px) {
//     padding: 1rem;
//   }
// `;

// const FormContainer = styled.div`
//   background-color: grey;
//   padding: 1rem;
//   border-radius: 0.375rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
//   width: 90%;
//   max-width: 400px;
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-top: 110px;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   @media (max-width: 320px) {
//     gap: 0.5rem;
//   }
// `;

// const Input = styled.input`
//   border: 1px solid #d1d5db;
//   border-radius: 0.375rem;
//   padding: 0.5rem 1rem;
//   width: 100%;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const Button = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #e06e00; /* Changed color on hover for better visibility */
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const Title = styled.p`
//   font-size: 40px;
//   color: #fff;
//   text-align: center;
//   margin-bottom: 4rem; /* Added margin to create a gap */
// `;

// const InfoContainer = styled.div`
//   width: 90%;
//   max-width: 600px;
//   margin-top: 2rem;
// `;

// const Card = styled.div`
//   background-color: #ffffff;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   padding: 1rem;
//   border-radius: 0.375rem;
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     padding: 0.75rem;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// const Item = styled.div`
//   margin-bottom: 1rem;
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//   }

//   @media (max-width: 320px) {
//     font-size: 1rem;
//   }
// `;

// const ItemText = styled.p`
//   font-size: 1rem;
//   margin-bottom: 0.25rem;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }

//   @media (max-width: 320px) {
//     font-size: 0.8rem;
//   }
// `;

// const ItemImageContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
//   flex-wrap: wrap;

//   @media (max-width: 320px) {
//     gap: 0.5rem;
//   }
// `;

// const ItemImage = styled.img`
//   width: 100px;
//   height: auto;

//   @media (max-width: 320px) {
//     width: 80px;
//   }
// `;

// const ClaimButton = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: #e06e00; /* Changed color on hover for better visibility */
//   }

//   &:disabled {
//     background-color: #cccccc;
//     cursor: not-allowed;
//   }

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//   }
// `;

// function VehicleVerify() {
//   document.title = 'Maxdrive | Warranty Check';
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   const [vehicle_number, setVehicleNumber] = useState('');
//   const [qrData, setQrData] = useState([]);

//   const handleClaimClick = () => {
//     localStorage.setItem('user_details', JSON.stringify(qrData[0]));
//     navigate('/contact-form');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Remove all whitespace characters from the vehicle number
//     const normalizedVehicleNumber = vehicle_number.replace(/\s+/g, '');

//     try {
//       const response = await axios.post("http://192.168.0.107:8002/view_warranty/", {
//         vehicle_number: normalizedVehicleNumber,
//       });
//       const data = response.data;
//       console.log(data);
//       if (data.length > 0) {
//         setQrData(data); // Assuming response.data is an array of items
//       } else {
//         enqueueSnackbar('No warranty data found for this vehicle number', { variant: 'info' });
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data || 'Error submitting form';
//       enqueueSnackbar(errorMessage, { variant: 'error' });
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <PageContainer>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <Title>Check the Warranty</Title>
//           <Input
//             type="text"
//             placeholder="Enter Vehicle Number"
//             value={vehicle_number}
//             onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
//           />
//           <Button type="submit">Submit</Button>
//         </Form>
//       </FormContainer>

//       <InfoContainer>
//         {qrData.map((item, index) => {
//           const currentDate = new Date();
//           const registeredDate = new Date(item.registered);
//           const warrantyEndDate = new Date(item.warranty_till);

//           const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

//           return (
//             <Card key={index}>
//               <Item>
//                 <ItemTitle>{item.unique_code}</ItemTitle>
//                 <ItemText>Batch: {item.batch}</ItemText>
//                 <ItemText>Vehicle Number: {item.vehicle_number}</ItemText>
//                 <ItemText>Full Name: {item.full_name}</ItemText>
//                 <ItemText>Contact Number: {item.contact_number}</ItemText>
//                 <ItemText>Odometer Reading: {item.odometer_reading}</ItemText>
//                 <ItemText>Mechanic Name: {item.mechanic_name}</ItemText>
//                 <ItemText>Mechanic Number: {item.mechanic_number}</ItemText>
//                 <ItemText>Registration Date: {item.registered}</ItemText>
//                 <ItemText>Warranty Till: {item.warranty_till}</ItemText>
//                 <ItemImageContainer>
//                   <ItemImage src={item.odometer_image_url} alt="Odometer" />
//                   <ItemImage src={item.bike_image_url} alt="Bike" />
//                 </ItemImageContainer>
//                 {isWithinWarranty && <ClaimButton onClick={handleClaimClick}>Claim Warranty</ClaimButton>}
//               </Item>
//             </Card>
//           );
//         })}
//       </InfoContainer>
//     </PageContainer>
//   );
// }

// export default VehicleVerify;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-size: cover;
//   padding: 1rem;
// `;

// const FormContainer = styled.div`
//   background-color: grey;
//   padding: 1rem;
//   border-radius: 0.375rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
//   width: 90%;
//   max-width: 400px;
//   margin-bottom: 1rem;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Input = styled.input`
//   border: 1px solid #d1d5db;
//   border-radius: 0.375rem;
//   padding: 0.5rem 1rem;
//   width: 100%;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//   }
// `;

// const Button = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #e06e00; /* Changed color on hover for better visibility */
//   }
// `;

// const Title = styled.p`
//   font-size: 40px;
//   color: #fff;
//   text-align: center;
//   margin-bottom: 4rem; /* Added margin to create a gap */
// `;

// const InfoContainer = styled.div`
//   width: 90%;
//   max-width: 600px;
//   margin-top: 2rem;
// `;

// const Card = styled.div`
//   position: fixed; /* Change to fixed positioning */
//   top: 50%; /* Center the card vertically */
//   left: 50%; /* Center the card horizontally */
//   transform: translate(-50%, -50%); /* Offset to truly center the card */
//   background-color: #ffffff;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   padding: 1rem;
//   border-radius: 0.375rem;
//   z-index: 1000; /* Ensure it appears above other content */
// `;

// const Item = styled.div`
//   margin-bottom: 1rem;
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 0.5rem;
// `;

// const ItemText = styled.p`
//   font-size: 1rem;
//   margin-bottom: 0.25rem;
// `;

// const ItemImageContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
//   flex-wrap: wrap;
// `;

// const ItemImage = styled.img`
//   width: 100px;
//   height: auto;
// `;

// const ClaimButton = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: #e06e00; /* Changed color on hover for better visibility */
//   }

//   &:disabled {
//     background-color: #cccccc;
//     cursor: not-allowed;
//   }
// `;

// function VehicleVerify() {
//   document.title = 'Maxdrive | Warranty Check';
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   const [vehicle_number, setVehicleNumber] = useState('');
//   const [qrData, setQrData] = useState([]);

//   const handleClaimClick = () => {
//     localStorage.setItem('user_details', JSON.stringify(qrData[0]));
//     navigate('/contact-form');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Remove all whitespace characters from the vehicle number
//     const normalizedVehicleNumber = vehicle_number.replace(/\s+/g, '');

//     try {
//       const response = await axios.post("http://192.168.0.107:8002/view_warranty/", {
//         vehicle_number: normalizedVehicleNumber,
//       });
//       const data = response.data;
//       console.log(data);
//       if (data.length > 0) {
//         setQrData(data); // Assuming response.data is an array of items
//       } else {
//         enqueueSnackbar('No warranty data found for this vehicle number', { variant: 'info' });
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data || 'Error submitting form';
//       enqueueSnackbar(errorMessage, { variant: 'error' });
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <PageContainer>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <Title>Check the Warranty</Title>
//           <Input
//             type="text"
//             placeholder="Enter Vehicle Number"
//             value={vehicle_number}
//             onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
//           />
//           <Button type="submit">Submit</Button>
//         </Form>
//       </FormContainer>

//       <InfoContainer>
//         {qrData.map((item, index) => {
//           const currentDate = new Date();
//           const registeredDate = new Date(item.registered);
//           const warrantyEndDate = new Date(item.warranty_till);

//           const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

//           return (
//             <Card key={index}>
//               <Item>
//                 <ItemTitle>{item.unique_code}</ItemTitle>
//                 <ItemText>Batch: {item.batch}</ItemText>
//                 <ItemText>Vehicle Number: {item.vehicle_number}</ItemText>
//                 <ItemText>Full Name: {item.full_name}</ItemText>
//                 <ItemText>Contact Number: {item.contact_number}</ItemText>
//                 <ItemText>Odometer Reading: {item.odometer_reading}</ItemText>
//                 <ItemText>Mechanic Name: {item.mechanic_name}</ItemText>
//                 <ItemText>Mechanic Number: {item.mechanic_number}</ItemText>
//                 <ItemText>Registration Date: {item.registered}</ItemText>
//                 <ItemText>Warranty Till: {item.warranty_till}</ItemText>
//                 <ItemImageContainer>
//                   <ItemImage src={item.odometer_image_url} alt="Odometer" />
//                   <ItemImage src={item.bike_image_url} alt="Bike" />
//                 </ItemImageContainer>
//                 {isWithinWarranty && <ClaimButton onClick={handleClaimClick}>Claim Warranty</ClaimButton>}
//               </Item>
//             </Card>
//           );
//         })}
//       </InfoContainer>
//     </PageContainer>
//   );
// }

// export default VehicleVerify;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-size: cover;
//   padding: 1rem;
// `;

// const FormContainer = styled.div`
//   background-color: grey;
//   padding: 1rem;
//   border-radius: 0.375rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
//   width: 90%;
//   max-width: 400px;
//   margin-bottom: 1rem;
//   margin-top:120px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Input = styled.input`
//   border: 1px solid #d1d5db;
//   border-radius: 0.375rem;
//   padding: 0.5rem 1rem;
//   width: 100%;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//   }
// `;

// const Button = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #e06e00; /* Changed color on hover for better visibility */
//   }
// `;

// const Title = styled.p`
//   font-size: 40px;
//   color: #fff;
//   text-align: center;
//   margin-bottom: 4rem; /* Added margin to create a gap */
// `;

// const InfoContainer = styled.div`
//   width: 90%;
//   max-width: 600px;
//   margin-top: 2rem;
//   display: flex;
//   flex-direction: column; /* Ensure items are displayed in a column */
//   align-items: center; /* Center items horizontally */
// `;

// const Card = styled.div`
//   position: fixed; /* Change to fixed positioning */
//   top: 90%; /* Center the card vertically */
//   left: 50%; /* Center the card horizontally */
//   transform: translate(-50%, -50%); /* Offset to truly center the card */
//   background-color: #ffffff;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   padding: 1rem;
//   border-radius: 0.375rem;
//   z-index: 1000; /* Ensure it appears above other content */
//       width: 400px;
// `;

// const Item = styled.div`
//   margin-bottom: 1rem;
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 0.5rem;
// `;

// const ItemText = styled.p`
//   font-size: 1rem;
//   margin-bottom: 0.25rem;
// `;

// const ItemImageContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
//   flex-wrap: wrap;
// `;

// const ItemImage = styled.img`
//   width: 100px;
//   height: auto;
// `;

// const ClaimButton = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: #e06e00; /* Changed color on hover for better visibility */
//   }

//   &:disabled {
//     background-color: #cccccc;
//     cursor: not-allowed;
//   }
// `;

// function VehicleVerify() {
//   document.title = 'Maxdrive | Warranty Check';
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   const [vehicle_number, setVehicleNumber] = useState('');
//   const [qrData, setQrData] = useState([]);

//   const handleClaimClick = () => {
//     localStorage.setItem('user_details', JSON.stringify(qrData[0]));
//     navigate('/contact-form');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Remove all whitespace characters from the vehicle number
//     const normalizedVehicleNumber = vehicle_number.replace(/\s+/g, '');

//     try {
//       const response = await axios.post("http://192.168.0.107:8002/view_warranty/", {
//         vehicle_number: normalizedVehicleNumber,
//       });
//       const data = response.data;
//       console.log(data);
//       if (data.length > 0) {
//         setQrData(data); // Assuming response.data is an array of items
//       } else {
//         enqueueSnackbar('No warranty data found for this vehicle number', { variant: 'info' });
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data || 'Error submitting form';
//       enqueueSnackbar(errorMessage, { variant: 'error' });
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <PageContainer>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <Title>Check the Warranty</Title>
//           <Input
//             type="text"
//             placeholder="Enter Vehicle Number"
//             value={vehicle_number}
//             onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
//           />
//           <Button type="submit">Submit</Button>
//         </Form>
//       </FormContainer>

//       {/* This div will ensure the vehicle info is below the card */}
//       <InfoContainer style={{ marginTop: 'calc(50vh + 2rem)' }}>
//         {qrData.map((item, index) => {
//           const currentDate = new Date();
//           const registeredDate = new Date(item.registered);
//           const warrantyEndDate = new Date(item.warranty_till);

//           const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

//           return (
//             <Card key={index}>
//               <Item>
//                 <ItemTitle>{item.unique_code}</ItemTitle>
//                 <ItemText>Batch: {item.batch}</ItemText>
//                 <ItemText>Vehicle Number: {item.vehicle_number}</ItemText>
//                 <ItemText>Full Name: {item.full_name}</ItemText>
//                 <ItemText>Contact Number: {item.contact_number}</ItemText>
//                 <ItemText>Odometer Reading: {item.odometer_reading}</ItemText>
//                 <ItemText>Mechanic Name: {item.mechanic_name}</ItemText>
//                 <ItemText>Mechanic Number: {item.mechanic_number}</ItemText>
//                 <ItemText>Registration Date: {item.registered}</ItemText>
//                 <ItemText>Warranty Till: {item.warranty_till}</ItemText>
//                 <ItemImageContainer>
//                   <ItemImage src={item.odometer_image_url} alt="Odometer" />
//                   <ItemImage src={item.bike_image_url} alt="Bike" />
//                 </ItemImageContainer>
//                 {isWithinWarranty && <ClaimButton onClick={handleClaimClick}>Claim Warranty</ClaimButton>}
//               </Item>
//             </Card>
//           );
//         })}
//       </InfoContainer>
//     </PageContainer>
//   );
// }

// export default VehicleVerify;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-size: cover;
//   padding: 1rem;
//   overflow: hidden; /* Prevents overflow from the page container */
// `;

// const FormContainer = styled.div`
//   background-color: grey;
//   padding: 1rem;
//   border-radius: 0.375rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
//   width: 90%;
//   max-width: 400px;
//   margin-bottom: 1rem;
//   margin-top: 120px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Input = styled.input`
//   border: 1px solid #d1d5db;
//   border-radius: 0.375rem;
//   padding: 0.5rem 1rem;
//   width: 100%;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//   }
// `;

// const Button = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #e06e00; /* Changed color on hover for better visibility */
//   }
// `;

// const Title = styled.p`
//   font-size: 40px;
//   color: #fff;
//   text-align: center;
//   margin-bottom: 4rem; /* Added margin to create a gap */
// `;

// const InfoContainer = styled.div`
//   width: 90%;
//   max-width: 600px;
//   margin-top: 2rem;
//   display: flex;
//   flex-direction: column; /* Ensure items are displayed in a column */
//   align-items: center; /* Center items horizontally */
//   overflow-y: auto; /* Enables vertical scrolling */
//   max-height: calc(100vh - 400px); /* Adjust this value based on your layout */
// `;

// const Card = styled.div`
//   position: relative; /* Changed to relative positioning */
//   background-color: #ffffff;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   padding: 1rem;
//   border-radius: 0.375rem;
//   z-index: 1000; /* Ensure it appears above other content */
//   width: 100%; /* Change width to 100% to fit within InfoContainer */
//   margin-bottom: 1rem; /* Spacing between cards */
// `;

// const Item = styled.div`
//   margin-bottom: 1rem;
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 0.5rem;
// `;

// const ItemText = styled.p`
//   font-size: 1rem;
//   margin-bottom: 0.25rem;
// `;

// const ItemImageContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
//   flex-wrap: wrap;
// `;

// const ItemImage = styled.img`
//   width: 100px;
//   height: auto;
// `;

// const ClaimButton = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: #e06e00; /* Changed color on hover for better visibility */
//   }

//   &:disabled {
//     background-color: #cccccc;
//     cursor: not-allowed;
//   }
// `;

// function VehicleVerify() {
//   document.title = 'Maxdrive | Warranty Check';
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   const [vehicle_number, setVehicleNumber] = useState('');
//   const [qrData, setQrData] = useState([]);

//   const handleClaimClick = () => {
//     localStorage.setItem('user_details', JSON.stringify(qrData[0]));
//     navigate('/contact-form');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Remove all whitespace characters from the vehicle number
//     const normalizedVehicleNumber = vehicle_number.replace(/\s+/g, '');

//     try {
//       const response = await axios.post("http://192.168.0.107:8002/view_warranty/", {
//         vehicle_number: normalizedVehicleNumber,
//       });
//       const data = response.data;
//       console.log(data);
//       if (data.length > 0) {
//         setQrData(data); // Assuming response.data is an array of items
//       } else {
//         enqueueSnackbar('No warranty data found for this vehicle number', { variant: 'info' });
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data || 'Error submitting form';
//       enqueueSnackbar(errorMessage, { variant: 'error' });
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <PageContainer>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <Title>Check the Warranty</Title>
//           <Input
//             type="text"
//             placeholder="Enter Vehicle Number"
//             value={vehicle_number}
//             onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
//           />
//           <Button type="submit">Submit</Button>
//         </Form>
//       </FormContainer>

//       {/* This div will ensure the vehicle info is below the card */}
//       <InfoContainer>
//         {qrData.map((item, index) => {
//           const currentDate = new Date();
//           const registeredDate = new Date(item.registered);
//           const warrantyEndDate = new Date(item.warranty_till);

//           const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

//           return (
//             <Card key={index}>
//               <Item>
//                 <ItemTitle>{item.unique_code}</ItemTitle>
//                 <ItemText>Batch: {item.batch}</ItemText>
//                 <ItemText>Vehicle Number: {item.vehicle_number}</ItemText>
//                 <ItemText>Full Name: {item.full_name}</ItemText>
//                 <ItemText>Contact Number: {item.contact_number}</ItemText>
//                 <ItemText>Odometer Reading: {item.odometer_reading}</ItemText>
//                 <ItemText>Mechanic Name: {item.mechanic_name}</ItemText>
//                 <ItemText>Mechanic Number: {item.mechanic_number}</ItemText>
//                 <ItemText>Registration Date: {item.registered}</ItemText>
//                 <ItemText>Warranty Till: {item.warranty_till}</ItemText>
//                 <ItemImageContainer>
//                   <ItemImage src={item.odometer_image_url} alt="Odometer" />
//                   <ItemImage src={item.bike_image_url} alt="Bike" />
//                 </ItemImageContainer>
//                 {isWithinWarranty && <ClaimButton onClick={handleClaimClick}>Claim Warranty</ClaimButton>}
//               </Item>
//             </Card>
//           );
//         })}
//       </InfoContainer>
//     </PageContainer>
//   );
// }

// export default VehicleVerify;

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  padding: 1rem;
  overflow-y: auto; /* Allow vertical scrolling */
`;

const FormContainer = styled.div`
  background-color: grey;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  width: 90%;
  max-width: 400px;
  margin-bottom: 1rem;
  margin-top: 120px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const Button = styled.button`
  background-color: #f08300;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e06e00; /* Changed color on hover for better visibility */
  }
`;

const Title = styled.p`
  font-size: 40px;
  color: #fff;
  text-align: center;
  margin-bottom: 4rem; /* Added margin to create a gap */
`;

const InfoContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column; /* Ensure items are displayed in a column */
  align-items: center; /* Center items horizontally */
`;

const Card = styled.div`
  position: relative; /* Change to relative positioning */
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  border-radius: 0.375rem;
  z-index: 1000; /* Ensure it appears above other content */
  width: 400px;
  margin-bottom: 1rem; /* Add spacing between cards */
`;

const Item = styled.div`
  margin-bottom: 1rem;
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ItemText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const ItemImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const ItemImage = styled.img`
  width: 100px;
  height: auto;
`;

const ClaimButton = styled.button`
  background-color: #f08300;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #e06e00; /* Changed color on hover for better visibility */
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

function VehicleVerify() {
  document.title = 'Maxdrive | Warranty Check';
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [vehicle_number, setVehicleNumber] = useState('');
  const [qrData, setQrData] = useState([]);

  const handleClaimClick = () => {
    localStorage.setItem('user_details', JSON.stringify(qrData[0]));
    navigate('/contact-form');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove all whitespace characters from the vehicle number
    const normalizedVehicleNumber = vehicle_number.replace(/\s+/g, '');

    try {
      const response = await axios.post("http://192.168.0.107:8002/view_warranty/", {
        vehicle_number: normalizedVehicleNumber,
      });
      const data = response.data;
      console.log(data);
      if (data.length > 0) {
        setQrData(data); // Assuming response.data is an array of items
      } else {
        enqueueSnackbar('No warranty data found for this vehicle number', { variant: 'info' });
      }
    } catch (error) {
      const errorMessage = error.response?.data || 'Error submitting form';
      enqueueSnackbar(errorMessage, { variant: 'error' });
      console.error('Error:', error);
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title>Check the Warranty</Title>
          <Input
            type="text"
            placeholder="Enter Vehicle Number"
            value={vehicle_number}
            onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>

      <InfoContainer>
        {qrData.map((item, index) => {
          const currentDate = new Date();
          const registeredDate = new Date(item.registered);
          const warrantyEndDate = new Date(item.warranty_till);

          const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

          return (
            <Card key={index}>
              <Item>
                <ItemTitle>{item.unique_code}</ItemTitle>
                <ItemText>Batch: {item.batch}</ItemText>
                <ItemText>Vehicle Number: {item.vehicle_number}</ItemText>
                <ItemText>Full Name: {item.full_name}</ItemText>
                <ItemText>Contact Number: {item.contact_number}</ItemText>
                <ItemText>Odometer Reading: {item.odometer_reading}</ItemText>
                <ItemText>Mechanic Name: {item.mechanic_name}</ItemText>
                <ItemText>Mechanic Number: {item.mechanic_number}</ItemText>
                <ItemText>Registration Date: {item.registered}</ItemText>
                <ItemText>Warranty Till: {item.warranty_till}</ItemText>
                <ItemImageContainer>
                  <ItemImage src={item.odometer_image_url} alt="Odometer" />
                  <ItemImage src={item.bike_image_url} alt="Bike" />
                </ItemImageContainer>
                {isWithinWarranty && <ClaimButton onClick={handleClaimClick}>Claim Warranty</ClaimButton>}
              </Item>
            </Card>
          );
        })}
      </InfoContainer>
    </PageContainer>
  );
}

export default VehicleVerify;
