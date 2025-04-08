import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Card = styled(MuiCard)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  gap: "16px",
  width: "450px",
  margin: "auto",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.16)",
  },
}));

const SignInContainer = styled(Stack)(() => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  backgroundImage: "linear-gradient(to bottom, #f5f7fa 0%, #e4e8eb 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
}));

interface LoginProps {
  onSwitch: () => void;
}

const Login = ({ onSwitch }: LoginProps) => {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [fullnameErrorMessage, setFullnameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const validateInputs = () => {
    let isValid = true;

    if (!fullname || fullname.length < 3) {
      setFullnameError(true);
      setFullnameErrorMessage("Password must be at least 3 characters long.");
      isValid = false;
    } else {
      setFullnameError(false);
      setFullnameErrorMessage("");
    }

    // Validate Email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    // Validate Password
    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }
    alert("Register Successful");
  };

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Typography
          sx={{ width: "100%", fontSize: "2rem", fontWeight: "bold" }}
        >
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="fullname">Full Name</FormLabel>
            <TextField
              id="fullname"
              type="name"
              name="name"
              placeholder="John Doe"
              autoComplete="name"
              autoFocus
              required
              fullWidth
              variant="outlined"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              error={fullnameError}
              color={fullnameError ? "error" : "primary"}
            />
            {fullnameError && (
              <FormHelperText error>{fullnameErrorMessage}</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              color={emailError ? "error" : "primary"}
            />
            {emailError && (
              <FormHelperText error>{emailErrorMessage}</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="••••••"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              color={passwordError ? "error" : "primary"}
            />
            {passwordError && (
              <FormHelperText error>{passwordErrorMessage}</FormHelperText>
            )}
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              height: "45px",
              textTransform: "none",
              borderRadius: "10px",
              borderWidth: "2px",
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "lightblue",
              },
            }}
          >
            Sign up
          </Button>
        </Box>
        <Divider>or</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign up with Google")}
            startIcon={<GoogleIcon sx={{ color: "red" }} />}
            sx={{
              fontSize: "0.9rem",
              height: "45px",
              textTransform: "none",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "lightblue",
              },
            }}
          >
            Sign up with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign up with Facebook")}
            startIcon={<FacebookIcon sx={{ color: "blue" }} />}
            sx={{
              fontSize: "0.9rem",
              height: "45px",
              textTransform: "none",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "lightblue",
              },
            }}
          >
            Sign up with Facebook
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              component="button"
              type="button"
              onClick={onSwitch}
              sx={{ alignSelf: "center" }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignInContainer>
  );
};

export default Login;
