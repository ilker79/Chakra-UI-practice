import React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import ButtonComponent from '../Button/index';
import InputComponent from '../Input/index';

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <ButtonComponent />
      <InputComponent />
    </ChakraProvider>
  );
}

export default App;
