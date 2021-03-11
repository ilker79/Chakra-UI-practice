import { Button } from "@chakra-ui/react";

function ButtonComponent({handleClick}){
    return(
        <Button onClick={handleClick} colorScheme="cyan">Button</Button>
    );
}

export default ButtonComponent;