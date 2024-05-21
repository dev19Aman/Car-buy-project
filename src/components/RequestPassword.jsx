import { Box, Heading, Input, InputGroup, InputLeftElement, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import AuthBg from "../assets/images/bg.png";
import Logo from "../assets/images/logo.png";
import Phone from  "../assets/icons/phone.svg"
import Password from  "../assets/icons/password.svg"
import Show from  "../assets/icons/show.svg"

const RequestPassword = () => {
  return (
    <Box className="w-full h-screen flex bg-black">
      <img src={AuthBg} alt="Login bg" />
      <section>
      <div className="w-[400px] max-h-[600px] rounded-sm m-14 mt-20 p-10 bg-[#272727]" >
        <VStack>
          <img src={Logo} alt="Login bg" className="w-1/2 h-1/2"/>
          <div className="w-full pt-5 pb-5 ">
            <Heading color="white" size='md'>Forget Password</Heading>
            <div className="text-white text-sm">Enter new your registered email here</div>
            </div>
          <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<img src={Password} alt="Confirm password" width={15}/>}
      />
      <img src={Show} alt="show"  className="absolute z-20 right-2 top-3" width={20}/>
          <Input size='xs' p={5} placeholder="Confirm password" bg="white" rounded="base" px="10" fontWeight={500} mb="3" />
  </InputGroup>
<button className={buttonCss}>Change password</button>
        </VStack>
      </div>
      <pre className="text-white -mt-10 text-right text-xs mr-16 font-sans">Term & Condition <b class=" inline"> . </b> Privacy Policy</pre>  
</section>
    </Box>
  );
};

export default RequestPassword;

const buttonCss =
	'bg-theme w-full rounded-md text-sm hover:bg-white hover:text-theme border border-theme font-bold text-xs py-3 ';
