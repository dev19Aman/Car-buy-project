import { Box, Heading, Input, InputGroup, InputLeftElement, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthBg from "../assets/images/bg.png";
import Logo from "../assets/images/logo.png";
import Phone from "../assets/icons/phone.svg"
import Password from "../assets/icons/password.svg"
import Show from "../assets/icons/show.svg"
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginWrapperSchema } from "../containers/schemas";


const LoginWrapper = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginWrapperSchema)
  })
  const onSubmit = data => { alert("Login"), console.log("success", data); }

  return (
    <Box className="w-full h-screen flex bg-black">
      <img src={AuthBg} alt="Login bg" />
      <section>
        <div className="w-[400px] max-h-[600px] rounded-sm m-14 mt-20  p-10 bg-[#272727]" >
          <VStack >
            <img src={Logo} alt="Login bg" className="w-1/2 h-1/2" />
            <div className="w-full py-4">
              <Heading color="white" size="lg">Welcome</Heading>
              <div className="text-white text-sm">Sign in to Admin Dashboard</div>
            </div>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <InputGroup >
                <InputLeftElement
                  pointerEvents='none'
                  children={<img src={Phone} alt="phone" width={15} />}
                />
                <Input {...register("email")} size='xs' p={5} placeholder="Enter your registered email or phone number here" bg="white" rounded="base" pl="10" fontWeight={500} />
              </InputGroup>
              <p className={errorCss}>{errors.email?.message}</p>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  mt="3"
                  children={<img src={Password} alt="password" width={15} />}
                />
                <img src={Show} alt="show" className="absolute z-20 right-2 top-6" width={20} onClick={() => setShowPassword(!showPassword)}/>
                <Input  {...register("password")} size='xs' p={5} placeholder="Enter Password" bg="white" rounded="base" px="10" mt="3" fontWeight={500}
                  type={showPassword ? 'text' : 'password'} />
              </InputGroup>
              <p className={errorCss}>{errors.password?.message}</p>

              <Link className={linkCss}>Forget Password?</Link>
              <button type="submit" className={buttonCss}>Sign in</button>
            </form>

          </VStack>
        </div>
        <pre className="text-white -mt-10 text-right text-xs mr-16 font-sans">Term & Condition <b class=" inline"> . </b> Privacy Policy</pre>
      </section>
    </Box>
  );
};

export default LoginWrapper;

const buttonCss =
  'bg-theme w-full rounded-md text-sm hover:bg-white hover:text-theme border border-theme font-bold text-xs py-3 mt-7';
const linkCss = "text-left text-white w-full text-xs mt-1 pb-6 font-semibold hover:underline";
const errorCss = "text-xs text-red-500 mt-1";