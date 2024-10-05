// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   margin-top: 50px;
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

// const Button = styled.button`
//   margin-top: 15px;
//   padding: 10px;
//   background-color: #ff7400;
//   color: white;
//   width:100px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #ff7400;
//   }
// `;

// const ErrorMsg = styled.small`
//   color: red;
//   font-size: 0.875rem;
//   margin-top: 5px;
// `;

// const Customer = () => {
//   const [formData, setFormData] = useState({
//     customer_name: '',
//     customer_number: '',
//     vehicle_number: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.customer_name) newErrors.customer_name = 'Customer name is required';
//     if (!formData.customer_number) newErrors.customer_number = 'Customer number is required';
//     if (!formData.vehicle_number) newErrors.vehicle_number = 'Vehicle number is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       // Process form (e.g., send data to server)
//       console.log('Form data:', formData);

//       // Reset form
//       setFormData({
//         customer_name: '',
//         customer_number: '',
//         vehicle_number: ''
//       });
//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Label>Customer Name:</Label>
//         <Input
//           name="customer_name"
//           value={formData.customer_name}
//           onChange={handleChange}
//           placeholder="Enter Customer Name"
//         />
//         {errors.customer_name && <ErrorMsg>{errors.customer_name}</ErrorMsg>}

//         <Label>Customer Number:</Label>
//         <Input
//           name="customer_number"
//           value={formData.customer_number}
//           onChange={handleChange}
//           placeholder="Enter Customer Number"
//         />
//         {errors.customer_number && <ErrorMsg>{errors.customer_number}</ErrorMsg>}

//         <Label>Vehicle Number:</Label>
//         <Input
//           name="vehicle_number"
//           value={formData.vehicle_number}
//           onChange={handleChange}
//           placeholder="Enter Vehicle Number"
//         />
//         {errors.vehicle_number && <ErrorMsg>{errors.vehicle_number}</ErrorMsg>}

//         <Button type="submit">Vote</Button>
//       </Form>
//     </Container>
//   );
// };

// export default Customer;


import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
   margin-top: 120px;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     
`;

const Title = styled.h2`
  text-align: center; /* Center the title */
  margin-bottom: 20px; /* Space below the title */
  font-size: 2.5rem; /* Title size */
  color: #333; /* Title color */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center the button horizontally */
  margin-top: 15px; /* Space above the button */
`;

const Button = styled.button`
  padding: 10px;
  background-color: #ff7400;
  color: white;
  width: 100px;
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
const Paragraph = styled.p`
  font-size: 1rem; /* Increase font size */
  margin: 10px 0; /* Add some margin for spacing */
`;
const Customer = () => {
    const [formData, setFormData] = useState({
        customer_name: '',
        customer_number: '',
        vehicle_number: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.customer_name) newErrors.customer_name = 'Customer name is required';
        if (!formData.customer_number) newErrors.customer_number = 'Customer number is required';
        if (!formData.vehicle_number) newErrors.vehicle_number = 'Vehicle number is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Process form (e.g., send data to server)
            console.log('Form data:', formData);

            // Reset form
            setFormData({
                customer_name: '',
                customer_number: '',
                vehicle_number: ''
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <Container>
            <Title>Give A Vote To</Title>
              {/* Increased font size paragraphs */}
        <Paragraph>Mechanic Name:</Paragraph>
        <Paragraph>Garage Name:</Paragraph>
        <Paragraph>Taluk:</Paragraph>
            <Form onSubmit={handleSubmit}>
                <Label>Customer Name:</Label>
                <Input
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    placeholder="Enter Customer Name"
                />
                {errors.customer_name && <ErrorMsg>{errors.customer_name}</ErrorMsg>}

                <Label>Customer Number:</Label>
                <Input
                    name="customer_number"
                    value={formData.customer_number}
                    onChange={handleChange}
                    placeholder="Enter Customer Number"
                />
                {errors.customer_number && <ErrorMsg>{errors.customer_number}</ErrorMsg>}

                <Label>Vehicle Number:</Label>
                <Input
                    name="vehicle_number"
                    value={formData.vehicle_number}
                    onChange={handleChange}
                    placeholder="Enter Vehicle Number"
                />
                {errors.vehicle_number && <ErrorMsg>{errors.vehicle_number}</ErrorMsg>}

                <ButtonWrapper>
                    <Button type="submit">Vote</Button>
                </ButtonWrapper>
            </Form>
        </Container>
    );
};

export default Customer;
