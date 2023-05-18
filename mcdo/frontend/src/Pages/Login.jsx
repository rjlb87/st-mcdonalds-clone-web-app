import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, unstable_HistoryRouter, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Text, useToast } from '@chakra-ui/react'
import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
// import loader_gif from "../Assets/images/loader_gif.gif";
import { EmailIcon } from "@chakra-ui/icons";
import { useDispatch } from 'react-redux';
import { login } from './../Redux/LoginRedux/Login.Actions';   


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()
  const [loading, setLoading] = useState(false);
  const locationRoute = useLocation()
  console.log("location hai",locationRoute)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    console.log(email,password)
    e.preventDefault();
    setLoading(true);
    const payload = {
      email,
      password,
    };
    dispatch(login({ payload })).then((res) => {
      console.log(res);
      if (res.msg === "user not exist") {
        // alert("user not exist");
        setLoading(false)
        toast({
          title: "Account Not Exist",
          description: "Please SignUp First",
          status: "info",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
        return navigate("/signup");
      } else if (res.msg === "wrong credential") {
        // alert("please enter correct detail");
        setLoading(false)

        toast({
          title: "Wrong Credentials",
          description: "Please enter correct detail",
          status: "warning",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
      } else if (res.msg === "login success" && res.token) {
        // alert("login Successfully");
        setLoading(false)

        toast({
          title: "User Logged in .",
          description: "Welcome to McDonald's",
          status: "success",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });

        return navigate("/");
      } else if (res.msg === "user not found") {
        // alert("user not exist");
        setLoading(false)

        toast({
          title: "Account Not Exist",
          description: "Please SignUp First",
          status: "info",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
        return navigate("/signup");
      }
    });
  };

  // if (loading) {
  //   return (
  //     <Center>
  //       <Image z-index="5" src={loader_gif} />
  //     </Center>
  //   );
  // }

  return (
    <Center>
      <Box m=" 50px auto" p="auto 10%" w={{base:"80%",sm:"80%",md:"70%",lg:"40%"}} >
      <Heading m={{lg:"20px auto"}}>Sign In</Heading>
      <Box>
        <form onSubmit={handleSubmit}  >
       
          <Heading m="20px auto 10px" fontSize="18px" fontWeight="600" letterSpacing="1px" color="	#FFC72C">Email address</Heading>
          <Input focusBorderColor = "	#FFC72C" color="black"  type="text" value={email} onChange={e => setEmail(e.target.value)} />
          
          <Heading m="20px auto 10px" color="	#FFC72C" fontSize="18px" fontWeight="600" letterSpacing="1px">Password</Heading>
          <Input  focusBorderColor = "	#FFC72C" color="black" type="password" value={password}
             onChange={(e) => setPassword(e.target.value)} />
          
          <Input letterSpacing="1px" fontWeight="600" color="#fff" bg="	#FFC72C"  type="submit" mt="30px" />
       
        </form>
        <Text mt="20px">Don't have an account ? <Link to="/signup" style={{color:"	#FFC72C"}}>Signup</Link></Text>
      </Box>
    </Box>
    
    </Center>
   
  );
};

export default Login;



 