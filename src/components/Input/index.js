import { Input } from "@chakra-ui/react"

function InputComponent(){
    return (
        <div>
        <Input width ="50%" variant="outline" placeholder="Basic usage" size = "lg"/>
        <Input placeholder="Basic usage" size = "xs"/>
        </div>
    );
}

export default InputComponent;