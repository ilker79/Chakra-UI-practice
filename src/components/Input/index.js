import { Input } from "@chakra-ui/react"

function InputComponent({onChange}){
    return (
        <div>
        <Input width ="50%" variant="outline" placeholder="Basic usage" size = "lg" onChange={onChange}/>
        
        </div>
    );
}

export default InputComponent;