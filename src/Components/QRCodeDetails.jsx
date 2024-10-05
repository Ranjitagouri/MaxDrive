
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import Swal from 'sweetalert2';

// const Card = styled.div`
//   max-width: 1000px;
//   width: 1200px;
//   height: auto;
//   background-color: #ffffff;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   border-radius: 1rem;
//   padding: 2rem;
//   margin: 10vh auto;
//   transition: transform 0.3s ease-in-out;
//   position: relative;

//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
//   text-align: center;
//   color: #333;
// `;

// const ClaimButton = styled.button`
//   background-color: ${props => props.disabled ? '#ccc' : '#4a90e2'};
//   color: white;
//   border: none;
//   padding: 1rem 2.5rem;
//   font-size: 1rem;
//   font-weight: bold;
//   border-radius: 0.5rem;
//   cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
//   transition: background-color 0.3s ease;
//   margin-top:8px;

//   &:hover {
//     background-color: ${props => props.disabled ? '#ccc' : '#357bd8'};
//   }

//   position: absolute;
//   bottom: 1rem;
//   right: 1rem;
// `;

// const Item = styled.div`
//   margin-bottom: 1.5rem;
//   padding: 1.5rem;
//   background-color: #f9fafb;
//   border-radius: 0.75rem;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #e2e8f0;
//   }
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   text-align: center;
//   margin-bottom: 0.5rem;
//   color: #2d3748;
// `;

// const ItemText = styled.p`
//   color: #4a5568;
//   margin-bottom: 0.5rem;
//   font-size: 1rem;
// `;

// const ItemImageContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const ItemImage = styled.img`
//   width: 200px;
//   height: 240px;
//   border-radius: 0;
//   object-fit: cover;
// `;

// const QRCodeDetails = () => {
//   document.title = 'Maxdrive | Warranty';
//   const { qrcode } = useParams();
//   const navigate = useNavigate();

//   const [qrData, setQrData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const [uniqueCode, setUniqueCode] = useState('');
//   const [vehicleNumber, setVehicleNumber] = useState('');

//   useEffect(() => {
//     const fetchQrData = async (qrcode) => {
//       if (!qrcode) {
//         setError('QR Code is undefined');
//         Swal.fire('Error', 'QR Code is undefined', 'error');
//         setLoading(false);
//         return;
//       }
//       try {
//         setLoading(true);
//         setError('');
//         const response = await axios.get("http://192.168.0.107:8002/${qrcode}");
//         const data = response.data;
//         setQrData(data.data);
//         setUniqueCode(data.data[0].unique_code);
//         setVehicleNumber(data.data[0].vehicle_number);
//       } catch (error) {
//         if (error.response) {
//           setError(`Error: ${error.response} - ${error.response.statusText}`);
//           // Swal.fire('Error', `Error: ${error.response.status} - ${error.response.statusText}`, 'error');
//           Swal.fire('Error', ` ${error.response.data}`);
//         } else if (error.request) {
//           setError('Error: No response received from the server');
//           Swal.fire('Error', 'Error: No response received from the server', 'error');
//         } else {
//           setError(`Error: ${error.message}`);
//           Swal.fire('Error', `Error: ${error.message}`, 'error');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//   }, [qrcode]);

//   const redirectToRegistration = () => {
//     navigate({ pathname: '/registration', search: `?QrCode=${qrcode}` });
//   };

//   const handleClaimClick = () => {
//     localStorage.setItem("user_details", JSON.stringify(qrData[0]));
//     navigate('/contact-form');
//   };

//   if (loading) return <Card>Loading...</Card>;
//   if (error) return <Card>{error}</Card>;

//   if (!uniqueCode || !vehicleNumber) {
//     redirectToRegistration();
//     return null;
//   }

//   return (
//     <>
//       <Card>
//         {qrData.map((item, index) => {
//           const currentDate = new Date();
//           const registeredDate = new Date(item.registered);
//           const warrantyEndDate = new Date(item.warranty_till);

//           const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

//           return (
//             <Item key={index}>
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
//               <ClaimButton
//                 onClick={handleClaimClick}
//                 disabled={!isWithinWarranty}
//               >
//                 Claim
//               </ClaimButton>
//             </Item>
//           );
//         })}
//       </Card>
//     </>
//   );
// };

// export default QRCodeDetails;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import Swal from 'sweetalert2';

// const Card = styled.div`
//   max-width: 1000px;
//   width: 1200px;
//   height: auto;
//   background-color: #ffffff;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   border-radius: 1rem;
//   padding: 2rem;
//   margin: 10vh auto;
//   transition: transform 0.3s ease-in-out;
//   position: relative;

//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
//   text-align: center;
//   color: #333;
// `;

// const ClaimButton = styled.button`
//   background-color: ${props => props.disabled ? '#ccc' : '#4a90e2'};
//   color: white;
//   border: none;
//   padding: 1rem 2.5rem;
//   font-size: 1rem;
//   font-weight: bold;
//   border-radius: 0.5rem;
//   cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
//   transition: background-color 0.3s ease;
//   margin-top:8px;

//   &:hover {
//     background-color: ${props => props.disabled ? '#ccc' : '#357bd8'};
//   }

//   position: absolute;
//   bottom: 1rem;
//   right: 1rem;
// `;

// const Item = styled.div`
//   margin-bottom: 1.5rem;
//   padding: 1.5rem;
//   background-color: #f9fafb;
//   border-radius: 0.75rem;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #e2e8f0;
//   }
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   text-align: center;
//   margin-bottom: 0.5rem;
//   color: #2d3748;
// `;

// const ItemText = styled.p`
//   color: #4a5568;
//   margin-bottom: 0.5rem;
//   font-size: 1rem;
// `;

// const ItemImageContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const ItemImage = styled.img`
//   width: 200px;
//   height: 240px;
//   border-radius: 0;
//   object-fit: cover;
// `;

// const QRCodeDetails = () => {
//   document.title = 'Maxdrive | Warranty';
//   const { qrcode } = useParams();
//   const navigate = useNavigate();

//   const [qrData, setQrData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const [uniqueCode, setUniqueCode] = useState('');
//   const [vehicleNumber, setVehicleNumber] = useState('');

//   useEffect(() => {
//     const fetchQrData = async () => {
//       if (!qrcode) {
//         setError('QR Code is undefined');
//         Swal.fire('Error', 'QR Code is undefined', 'error');
//         setLoading(false);
//         return;
//       }
//       try {
//         setLoading(true);
//         setError('');
//         const response = await axios.get("http://192.168.0.107:8002/${qrcode}");
//         const data = response.data;
//         setQrData(data.data);
//         setUniqueCode(data.data[0]?.unique_code || '');
//         setVehicleNumber(data.data[0]?.vehicle_number || '');
//       } catch (error) {
//         if (error.response) {
//           setError(`Error: ${error.response.data} - ${error.response.statusText}`);
//           Swal.fire('Error', `${error.response.data}`, 'error');
//         } else if (error.request) {
//           setError('Error: No response received from the server');
//           Swal.fire('Error', 'Error: No response received from the server', 'error');
//         } else {
//           setError(`Error: ${error.message}`);
//           Swal.fire('Error', `Error: ${error.message}`, 'error');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Call the function when component mounts
//     fetchQrData();
//   }, [qrcode]);

//   const redirectToRegistration = () => {
//     navigate({ pathname: '/registration', search: `?QrCode=${qrcode}` });
//   };

//   const handleClaimClick = () => {
//     localStorage.setItem("user_details", JSON.stringify(qrData[0]));
//     navigate('/contact-form');
//   };

//   if (loading) return <Card>Loading...</Card>;
//   if (error) return <Card>{error}</Card>;

//   if (!uniqueCode || !vehicleNumber) {
//     redirectToRegistration();
//     return null;
//   }

//   return (
//     <>
//       <Card>
//         {qrData.map((item, index) => {
//           const currentDate = new Date();
//           const registeredDate = new Date(item.registered);
//           const warrantyEndDate = new Date(item.warranty_till);

//           const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

//           return (
//             <Item key={index}>
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
//               <ClaimButton
//                 onClick={handleClaimClick}
//                 disabled={!isWithinWarranty}
//               >
//                 Claim
//               </ClaimButton>
//             </Item>
//           );
//         })}
//       </Card>
//     </>
//   );
// };

// export default QRCodeDetails;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import Swal from 'sweetalert2';

// const Card = styled.div`
//   max-width: 1000px;
//   width: 1200px;
//   height: auto;
//   background-color: #ffffff;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   border-radius: 1rem;
//   padding: 2rem;
//   margin: 10vh auto;
//   transition: transform 0.3s ease-in-out;
//   position: relative;

//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
//   text-align: center;
//   color: #333;
// `;

// const ClaimButton = styled.button`
//   background-color: ${props => props.disabled ? '#ccc' : '#4a90e2'};
//   color: white;
//   border: none;
//   padding: 1rem 2.5rem;
//   font-size: 1rem;
//   font-weight: bold;
//   border-radius: 0.5rem;
//   cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
//   transition: background-color 0.3s ease;
//   margin-top: 8px;

//   &:hover {
//     background-color: ${props => props.disabled ? '#ccc' : '#357bd8'};
//   }

//   position: absolute;
//   bottom: 1rem;
//   right: 1rem;
// `;

// const Item = styled.div`
//   margin-bottom: 1.5rem;
//   padding: 1.5rem;
//   background-color: #f9fafb;
//   border-radius: 0.75rem;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #e2e8f0;
//   }
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   text-align: center;
//   margin-bottom: 0.5rem;
//   color: #2d3748;
// `;

// const ItemText = styled.p`
//   color: #4a5568;
//   margin-bottom: 0.5rem;
//   font-size: 1rem;
// `;

// const ItemImageContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const ItemImage = styled.img`
//   width: 200px;
//   height: 240px;
//   border-radius: 0;
//   object-fit: cover;
// `;

// const QRCodeDetails = () => {
//   document.title = 'Maxdrive | Warranty';
//   const { qrcode } = useParams();
//   const navigate = useNavigate();

//   const [qrData, setQrData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const [uniqueCode, setUniqueCode] = useState('');
//   const [vehicleNumber, setVehicleNumber] = useState('');

//   useEffect(() => {
//     const fetchQrData = async () => {
//       if (!qrcode) {
//         setError('QR Code is undefined');
//         Swal.fire('Error', 'QR Code is undefined', 'error');
//         setLoading(false);
//         return;
//       }
//       try {
//         setLoading(true);
//         setError('');
//         const response = await axios.get(`http://192.168.0.107:8002/${qrcode}`); // Updated URL template string
//         const data = response.data;

//         // Check if the data exists and is in the expected format
//         if (data && data.data && data.data.length > 0) {
//           setQrData(data.data);
//           setUniqueCode(data.data[0]?.unique_code || '');
//           setVehicleNumber(data.data[0]?.vehicle_number || '');
//         } else {
//           setError('No data found for the provided QR code.');
//           Swal.fire('Error', 'No data found for the provided QR code.', 'error');
//         }
//       } catch (error) {
//         if (error.response) {
//           setError(`Error: ${error.response.data} - ${error.response.statusText}`);
//           Swal.fire('Error', `${error.response.data}`, 'error');
//         } else if (error.request) {
//           setError('Error: No response received from the server');
//           Swal.fire('Error', 'Error: No response received from the server', 'error');
//         } else {
//           setError(`Error: ${error.message}`);
//           Swal.fire('Error', `Error: ${error.message}`, 'error');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Call the function when the component mounts
//     fetchQrData();
//   }, [qrcode]);

//   const redirectToRegistration = () => {
//     navigate({ pathname: '/registration', search: `?QrCode=${qrcode}` });
//   };

//   const handleClaimClick = () => {
//     localStorage.setItem("user_details", JSON.stringify(qrData[0]));
//     navigate('/contact-form');
//   };

//   if (loading) return <Card>Loading...</Card>;
//   if (error) return <Card>{error}</Card>;

//   if (!uniqueCode || !vehicleNumber) {
//     redirectToRegistration();
//     return null;
//   }

//   return (
//     <>
//       <Card>
//         {qrData.map((item, index) => {
//           const currentDate = new Date();
//           const registeredDate = new Date(item.registered);
//           const warrantyEndDate = new Date(item.warranty_till);

//           const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

//           return (
//             <Item key={index}>
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
//               <ClaimButton
//                 onClick={handleClaimClick}
//                 disabled={!isWithinWarranty}
//               >
//                 Claim
//               </ClaimButton>
//             </Item>
//           );
//         })}
//       </Card>
//     </>
//   );
// };

// export default QRCodeDetails;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Card = styled.div`
  max-width: 1000px;
  width: 1200px;
  height: auto;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  margin: 10vh auto;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 430px) {
    width: 100%;
    padding: 1rem;
    margin: 5vh auto;
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
    margin: 3vh auto;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 430px) {
    font-size: 1.25rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const ClaimButton = styled.button`
  background-color: ${props => props.disabled ? '#ccc' : '#4a90e2'};
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s ease;
  margin-top: 8px;

  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : '#357bd8'};
  }

  position: absolute;
  bottom: 1rem;
  right: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 0.875rem;
  }

  @media (max-width: 430px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.75rem;
    bottom: 0.5rem;
    right: 0.5rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 1rem;
    font-size: 0.625rem;
  }
`;

const Item = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2e8f0;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 430px) {
    padding: 0.75rem;
    margin-top:50px;
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #2d3748;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 0.875rem;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`;

const ItemText = styled.p`
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 430px) {
    font-size: 0.75rem;
  }

  @media (max-width: 320px) {
    font-size: 0.625rem;
  }
`;

const ItemImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 430px) {
    flex-direction: row;
    overflow-x: auto;
  }

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

const ItemImage = styled.img`
  width: 200px;
  height: 240px;
  border-radius: 0;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 150px;
    height: 180px;
  }

  @media (max-width: 430px) {
    width: 120px;
    height: 150px;
  }

  @media (max-width: 320px) {
    width: 100px;
    height: 120px;
  }
`;

const QRCodeDetails = () => {
  document.title = 'Maxdrive | Warranty';
  const { qrcode } = useParams();
  const navigate = useNavigate();

  const [qrData, setQrData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [uniqueCode, setUniqueCode] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  useEffect(() => {
    const fetchQrData = async () => {
      if (!qrcode) {
        setError('QR Code is undefined');
        Swal.fire('Error', 'QR Code is undefined', 'error');
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(`http://192.168.0.107:8002/${qrcode}`); // Updated URL template string
        const data = response.data;

        // Check if the data exists and is in the expected format
        if (data && data.data && data.data.length > 0) {
          setQrData(data.data);
          setUniqueCode(data.data[0]?.unique_code || '');
          setVehicleNumber(data.data[0]?.vehicle_number || '');
        } else {
          setError('No data found for the provided QR code.');
          Swal.fire('Error', 'No data found for the provided QR code.', 'error');
        }
      } catch (error) {
        if (error.response) {
          setError(`Error: ${error.response.data} - ${error.response.statusText}`);
          Swal.fire('Error', `${error.response.data}`, 'error');
        } else if (error.request) {
          setError('Error: No response received from the server');
          Swal.fire('Error', 'Error: No response received from the server', 'error');
        } else {
          setError(`Error: ${error.message}`);
          Swal.fire('Error', `Error: ${error.message}`, 'error');
        }
      } finally {
        setLoading(false);
      }
    };

    // Call the function when the component mounts
    fetchQrData();
  }, [qrcode]);

  const redirectToRegistration = () => {
    navigate({ pathname: '/registration', search: `?QrCode=${qrcode}` });
  };

  const handleClaimClick = () => {
    localStorage.setItem("user_details", JSON.stringify(qrData[0]));
    navigate('/contact-form');
  };

  if (loading) return <Card>Loading...</Card>;
  if (error) return <Card>{error}</Card>;

  if (!uniqueCode || !vehicleNumber) {
    redirectToRegistration();
    return null;
  }

  return (
    <>
      <Card>
        {qrData.map((item, index) => {
          const currentDate = new Date();
          const registeredDate = new Date(item.registered);
          const warrantyEndDate = new Date(item.warranty_till);

          const isWithinWarranty = currentDate >= registeredDate && currentDate <= warrantyEndDate;

          return (
            <Item key={index}>
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
              <ClaimButton
                onClick={handleClaimClick}
                disabled={!isWithinWarranty}
              >
                Claim
              </ClaimButton>
            </Item>
          );
        })}
      </Card>
    </>
  );
};

export default QRCodeDetails;
