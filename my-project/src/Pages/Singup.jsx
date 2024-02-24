import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Singup = () => {
  const navigate = useNavigate();
  const [isFormFilled, setIsFormFilled] = useState(false);

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Check if any input field is filled
    const filledFields = Object.values(values).some(value => value !== undefined && value !== '');
    if (filledFields) {
      setIsFormFilled(true);
      // Handle form submission logic here
      // Redirect to the home page
      navigate(`/Home`);
    } else {
      setIsFormFilled(false);
    }
  };

  return (
    <div className="signup-container">
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>Sign up</Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: '300px', margin: '0 auto' }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%', transition: 'background-color 0.3s' }}
            >
              Sign Up
            </Button>
          </Form.Item>
          {!isFormFilled && <p>Please fill in all the input fields.</p>}
        </Form>
      </div>
    </div>
  );
};

export  {Singup};
