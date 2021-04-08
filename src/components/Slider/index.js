import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    
} from "@chakra-ui/react"


function SliderComponent({sliderNum}) {
    
    
    return (
    <Slider  onChange={x =>sliderNum(x)} width="80%" step="1" max="1000" aria-label="slider-ex-2" colorScheme="blue" defaultValue={0}>
        <SliderTrack bg="green">
            <SliderFilledTrack bg="tomato"/>
        </SliderTrack>
        <SliderThumb boxSize="55">Drag me</SliderThumb>
        
        
    </Slider>
    )

}

export default SliderComponent;