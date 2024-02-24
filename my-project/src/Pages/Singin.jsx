import React, { useState,  } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Singin = () => {
  const Navigate = useNavigate();
  const [isFormFilled, setIsFormFilled] = useState(false);


  const singuphaldelbutton = () => {
    Navigate(`/Singup`);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Check if any input field is filled
    const filledFields = Object.values(values).some(value => value !== undefined && value !== '');
    if (filledFields) {
      setIsFormFilled(true);
      // Simulate login by setting isLoggedIn to true in local storage
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to the home page
      Navigate("/Home");
    } else {
      setIsFormFilled(false);
    }
  };



  return (
    <div className="signup-container">
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>Sign in</Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: '300px', margin: '0 auto' }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%', transition: 'background-color 0.3s' }}
              className="custom-button"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <Text>Don't have an account? <a onClick={singuphaldelbutton}>Sign up</a></Text>
        {!isFormFilled && <p>Please fill in the input fields.</p>}
      </div>
      {localStorage.getItem('isLoggedIn') && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      )}
    </div>
  );
};

export { Singin };
