
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

// const Container = styled.div`
//   background-color: #f0f4f8;
//   padding: 6rem 1rem;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 768px) {
//     padding: 2rem 1rem;
//   }

//   @media (max-width: 320px) {
//     padding: 1rem 1rem;
//   }
// `;

// const FormWrapper = styled.div`
//   max-width: 48rem;
//   width: 100%;
//   background-color: #ffffff;
//   padding: 2rem;
//   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
//   border-radius: 0.5rem;

//   @media (max-width: 768px) {
//     padding: 1.5rem;
//   }

//   @media (max-width: 320px) {
//     padding: 1rem;
//   }
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 1.5rem;
//   text-align: center;

//   @media (max-width: 320px) {
//     font-size: 1.25rem;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1.5rem;

//   @media (min-width: 640px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }

//   @media (max-width: 320px) {
//     gap: 1rem;
//   }
// `;

// const FormControl = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   font-size: 0.875rem;
//   font-weight: medium;
//   color: #4b5563;
//   margin-bottom: 0.5rem;

//   @media (max-width: 320px) {
//     font-size: 0.75rem;
//   }
// `;

// const Input = styled.input`
//   padding: 0.75rem;
//   border: 1px solid #cbd5e0;
//   border-radius: 0.25rem;
//   font-size: 1rem;

//   @media (max-width: 320px) {
//     padding: 0.5rem;
//     font-size: 0.875rem;
//   }
// `;

// const Button = styled.button`
//   background-color: #f08300;
//   color: #ffffff;
//   padding: 0.75rem;
//   border-radius: 0.25rem;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #f08300;
//   }

//   @media (max-width: 320px) {
//     width: 100%;
//     padding: 0.5rem;
//     font-size: 0.875rem;
//   }
// `;

// const ResponseContainer = styled.div`
//   margin-top: 2rem;
//   padding: 1rem;
//   background-color: #edf2f7;
//   border-radius: 0.5rem;
// `;

// const RegisterForm = () => {
//   document.title= 'Maxdrive | Registration';
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const selectQrCode = queryParams.get('QrCode');
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const [formData, setFormData] = useState({
//     unique_code: selectQrCode,
//     full_name: '',
//     vehicle_number: '',
//     contact_number: '',
//     odometer_reading: '',
//     odometer_image: null,
//     bike_image: null,
//     mechanic_name: '',
//     mechanic_number: ''
//   });

//   const [apiResponse, setApiResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setFormData(prevState => ({
//         ...prevState,
//         [name]: files[0]
//       }));
//     } else {
//       setFormData(prevState => ({
//         ...prevState,
//         [name]: value
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('unique_code', formData.unique_code);
//       formDataToSend.append('full_name', formData.full_name);
//       formDataToSend.append('vehicle_number', formData.vehicle_number);
//       formDataToSend.append('contact_number', formData.contact_number);
//       formDataToSend.append('odometer_reading', formData.odometer_reading);
//       formDataToSend.append('odometer_image', formData.odometer_image); // Handle file upload
//       formDataToSend.append('bike_image', formData.bike_image); // Handle file upload
//       formDataToSend.append('mechanic_name', formData.mechanic_name);
//       formDataToSend.append('mechanic_number', formData.mechanic_number);

//       const response = await axios.post("https://mymotokart.maxdrive.in/generate_code/register_warranty/",
//         formDataToSend
//       );
//       console.log('Warranty API Response:', response.data);
//       setApiResponse(response.data); // Store the response data

//       enqueueSnackbar('Form submitted successfully', { variant: 'success' });
//       navigate(`/${selectQrCode}`);
      
//     } catch (error) {
//       console.error('Error fetching warranty data:', error);
//       setError(error); // Store the error

//       enqueueSnackbar('Error submitting form', { variant: 'error' });
//     }
//   };

//   return (
//     <Container>
//       <FormWrapper>
//         <Title>Vehicle Registration Form</Title>
//         <form onSubmit={handleSubmit}>
//           <Grid>
//             <FormControl>
//               <Label htmlFor="full_name">Full Name</Label>
//               <Input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <Label htmlFor="vehicle_number">Vehicle Number</Label>
//               <Input type="text" id="vehicle_number" name="vehicle_number" value={formData.vehicle_number} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <Label htmlFor="contact_number">Contact Number</Label>
//               <Input type="text" id="contact_number" name="contact_number" value={formData.contact_number} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <Label htmlFor="odometer_reading">Odometer Reading</Label>
//               <Input type="text" id="odometer_reading" name="odometer_reading" value={formData.odometer_reading} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <Label htmlFor="odometer_image">Odometer Image</Label>
//               <Input type="file" id="odometer_image" name="odometer_image" onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <Label htmlFor="bike_image">Bike Image</Label>
//               <Input type="file" id="bike_image" name="bike_image" onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <Label htmlFor="mechanic_name">Mechanic Name</Label>
//               <Input type="text" id="mechanic_name" name="mechanic_name" value={formData.mechanic_name} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <Label htmlFor="mechanic_number">Mechanic Number</Label>
//               <Input type="text" id="mechanic_number" name="mechanic_number" value={formData.mechanic_number} onChange={handleChange} />
//             </FormControl>
//           </Grid>

//           <div style={{ marginTop: '1.5rem' }}>
//             <Button type="submit">Submit</Button>
//           </div>
//         </form>
//         {apiResponse && (
//           <ResponseContainer>
//             <h3>API Response:</h3>
//             <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
//           </ResponseContainer>
//         )}
//         {error && (
//           <ResponseContainer>
//             <h3>Error:</h3>
//             <pre>{JSON.stringify(error, null, 2)}</pre>
//           </ResponseContainer>
//         )}
//       </FormWrapper>
//     </Container>
//   );
// };

// export default RegisterForm;


import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Container = styled.div`
  background-color: #f0f4f8;
  padding: 6rem 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 430px) {
    padding: 1rem 1rem;
    margin-top:76px;
  }
`;

const FormWrapper = styled.div`
  max-width: 48rem;
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 430px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 430px) {
    font-size: 1.25rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 430px) {
    gap: 1rem;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: medium;
  color: #4b5563;
  margin-bottom: 0.5rem;

  @media (max-width: 430px) {
    font-size: 0.75rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  font-size: 1rem;

  @media (max-width: 430px) {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
`;

const Button = styled.button`
  background-color: #f08300;
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f08300;
  }

  @media (max-width: 430px) {
    width: 100%;
    padding: 0.5rem;
    font-size: 0.875rem;
  }
`;

const ResponseContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #edf2f7;
  border-radius: 0.5rem;
`;

const RegisterForm = () => {
  document.title = 'Maxdrive | Registration';
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectQrCode = queryParams.get('QrCode');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    unique_code: selectQrCode,
    full_name: '',
    vehicle_number: '',
    contact_number: '',
    odometer_reading: '',
    odometer_image: null,
    bike_image: null,
    mechanic_name: '',
    mechanic_number: ''
  });

  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('unique_code', formData.unique_code);
      formDataToSend.append('full_name', formData.full_name);
      formDataToSend.append('vehicle_number', formData.vehicle_number);
      formDataToSend.append('contact_number', formData.contact_number);
      formDataToSend.append('odometer_reading', formData.odometer_reading);
      formDataToSend.append('odometer_image', formData.odometer_image); // Handle file upload
      formDataToSend.append('bike_image', formData.bike_image); // Handle file upload
      formDataToSend.append('mechanic_name', formData.mechanic_name);
      formDataToSend.append('mechanic_number', formData.mechanic_number);

      const response = await axios.post("http://192.168.0.107:8002/generate_code/register_warranty/",
        formDataToSend
      );
      console.log('Warranty API Response:', response.data);
      setApiResponse(response.data); // Store the response data

      enqueueSnackbar('Form submitted successfully', { variant: 'success' });
      navigate(`/${selectQrCode}`);
      
    } catch (error) {
      console.error('Error fetching warranty data:', error);
      setError(error); // Store the error

      enqueueSnackbar('Error submitting form', { variant: 'error' });
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Vehicle Registration Form</Title>
        <form onSubmit={handleSubmit}>
          <Grid>
            <FormControl>
              <Label htmlFor="full_name">Full Name</Label>
              <Input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="vehicle_number">Vehicle Number</Label>
              <Input type="text" id="vehicle_number" name="vehicle_number" value={formData.vehicle_number} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="contact_number">Contact Number</Label>
              <Input type="text" id="contact_number" name="contact_number" value={formData.contact_number} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="odometer_reading">Odometer Reading</Label>
              <Input type="text" id="odometer_reading" name="odometer_reading" value={formData.odometer_reading} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="odometer_image">Odometer Image</Label>
              <Input type="file" id="odometer_image" name="odometer_image" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="bike_image">Bike Image</Label>
              <Input type="file" id="bike_image" name="bike_image" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="mechanic_name">Mechanic Name</Label>
              <Input type="text" id="mechanic_name" name="mechanic_name" value={formData.mechanic_name} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label htmlFor="mechanic_number">Mechanic Number</Label>
              <Input type="text" id="mechanic_number" name="mechanic_number" value={formData.mechanic_number} onChange={handleChange} />
            </FormControl>
          </Grid>

          <div style={{ marginTop: '1.5rem' }}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
        {apiResponse && (
          <ResponseContainer>
            <h3>API Response:</h3>
            <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
          </ResponseContainer>
        )}
        {error && (
          <ResponseContainer>
            <h3>Error:</h3>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </ResponseContainer>
        )}
      </FormWrapper>
    </Container>
  );
};

export default RegisterForm;
