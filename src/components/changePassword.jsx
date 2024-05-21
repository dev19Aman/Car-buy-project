import { Box, Heading, Input, InputGroup, InputLeftElement, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangePasswordSchema } from "../containers/schemas";
import AuthBg from "../assets/images/bg.png";
import Logo from "../assets/images/logo.png";
import Password from  "../assets/icons/password.svg";
import Show from  "../assets/icons/show.svg";

const ChangePassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ChangePasswordSchema)
      })
  const onSubmit = data => { alert("Login"), console.log("success", data); }

  return (
    <Box className="w-full h-screen flex bg-black">
      <img src={AuthBg} alt="Login bg" />
      <section>
      <form  className="w-[400px] max-h-[600px] rounded-sm m-14 mt-20 p-10 bg-[#272727]" onSubmit={handleSubmit(onSubmit)} >
        <VStack >
          <img src={Logo} alt="Login bg" className="w-1/2 h-1/2"/>
          <div className="w-full pt-5 pb-2">
            <Heading color="white" size='lg'>Change Password</Heading>
            <div className="text-white text-sm">Enter new password</div>
            </div>
          <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<img src={Password} alt="password" width={15}/>}
      />
      <img src={Show} alt="show"  className="absolute z-20 right-2 top-3" width={20}/>
          <Input {...register("newPassword")} size='xs' p={5} placeholder="New password" bg="white" rounded="base" px="10" fontWeight={500} />
  </InputGroup>
  {errors.newPassword&&
  <p className={errorCss}>{errors.newPassword?.message}</p>}
          <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<img src={Password} alt="Confirm password" width={15}/>}
      />
      <img src={Show} alt="show" className="absolute z-20 right-2 top-3" width={20}/>
          <Input {...register("confirmPassword")} size='xs' p={5} placeholder="Confirm password" bg="white" rounded="base" px="10" fontWeight={500}  />
  </InputGroup>
  <p className={errorCss}>{errors.confirmPassword?.message}</p>
<button type="submit" className={buttonCss} style={{marginTop:"1rem"}}>Change password</button>
        </VStack>
      </form>
      <pre className="text-white -mt-10 text-right text-xs mr-16 font-sans">Term & Condition <b class=" inline"> . </b> Privacy Policy</pre>  
</section>
    </Box>
  );
};

export default ChangePassword;

const buttonCss =
	'bg-theme w-full rounded-md text-sm hover:bg-white hover:text-theme border border-theme font-bold text-xs py-3 ';
 const errorCss = "text-xs text-red-500 text-left w-full";