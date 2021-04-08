import { Button } from "@chakra-ui/react";

function ButtonComponent({handleClick}){
    return(
        <Button onClick={handleClick} colorScheme="cyan">Click to Display</Button>
    );
}

export default ButtonComponent;