import { Input } from "@chakra-ui/react"

function InputComponent({onChange}){
    return (
        <div>
        <Input width ="50%" variant="outline" placeholder="Enter a text, click the button and drag the slide" size = "lg" onChange={onChange}/>        
        </div>
    );
}

export default InputComponent;