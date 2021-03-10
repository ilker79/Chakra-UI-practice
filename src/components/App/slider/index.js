import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@chakra-ui/react"

function Slider1() {
    return (<Slider aria-label="slider-ex-2" colorScheme="blue" defaultValue={300}>
        <SliderTrack>
            <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
    </Slider>)

}

export default Slider1;