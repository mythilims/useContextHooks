import React, { useContext } from "react";
import { Card, CardBody, CardHeader, FormGroup, Input, Button } from 'reactstrap';
import { UserAuthDetails } from "../Context/AuthCon";
import bgBook from '../assets/bgBook.jpg'; 

function Login() {
  const { userName, setUserName, psw, setPsw, login } = useContext(UserAuthDetails);

  return (
    <div 
     
      className="bgImage vh-100 d-flex justify-content-center align-items-center"
    >
     <Card 
  className="shadow-lg p-4 rounded" 
  style={{ 
    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
    backdropFilter: 'blur(10px)', 
    border: '1px solid rgba(255, 255, 255, 0.3)',
    width: '500px', // **400px --> 500px** pannitten
    maxWidth: '90%', // small screen-ku adjust aagum
  }}
>
        <CardHeader className="bg-transparent border-0 text-center mb-4">
          <h2 className="text-white">Welcome Book Store </h2>
        </CardHeader>

        <CardBody>
          <FormGroup className="mb-4">
            <Input
              id="name"
              className="form-control form-control-lg"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
            />
          </FormGroup>

          <FormGroup className="mb-4">
            <Input
              id="psw"
              type="password"
              className="form-control form-control-lg"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
              placeholder="Enter your password"
            />
          </FormGroup>

          <Button
            color="primary"
            size="lg"
            className="w-100"
            onClick={login}
          >
            Log In
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
