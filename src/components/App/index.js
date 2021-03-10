import React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import ButtonComponent from '../Button/index';
import InputComponent from '../Input/index';
import Slider1 from './slider/index';

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <ButtonComponent />
      <InputComponent />
      <Slider1 />
    </ChakraProvider>
  );
}

export default App;
