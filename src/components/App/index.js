import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react"
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <ButtonComponent />
    </ChakraProvider>
  );
}

export default App;
