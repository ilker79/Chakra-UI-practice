import React, { useState } from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import ButtonComponent from '../Button/index';
import InputComponent from '../Input/index';
import SliderComponent from '../Slider/index';
import DisplayComponent from '../Display/index';

function App() {
  // 2. Use at the root of your app
  const[state, setState] = useState("");
  const[display, setDisplay] = useState("");
  const[slideValue, setSlideValue] = useState();

  function onChange(e){
    setState(e.target.value);
    
  }

  function handleClick(){
    setDisplay(state);
    console.log(display);
  }

  function sliderNum(value){

    setSlideValue(value);
    console.log(value);
}

  return (
    <ChakraProvider>
      <ButtonComponent handleClick = {handleClick} />
      <InputComponent onChange = {onChange}/>
      <SliderComponent sliderNum={sliderNum}/>
      <DisplayComponent  slideValue= {slideValue} display = {display}/>
    </ChakraProvider>
  );
}

export default App;

