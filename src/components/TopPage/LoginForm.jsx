import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    if (username === "yourUsername" && password === "yourPassword") {
      // Successful login logic
    } else {
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>

        {showAlert && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            Incorrect username or password. Please try again.
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={closeAlert}
            />
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default LoginForm;
