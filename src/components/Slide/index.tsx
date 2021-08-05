import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function Slide() {
    return (
        <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]} mt={["28px", "52px"]}>
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                "clickable": true,
            }} navigation={true} >
                <SwiperSlide className="mySwiper">
                    <Image w="100%" h="100%" align="center" src="/banners/europe.svg" alt="Europe" />
                    <Box align="center" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                        <Text color="background.primary" fontSize={["24", "48"]}>
                            Europa
                        </Text>
                        <Text color="#DADADA" fontSize={["14", "24"]}>
                            O continente mais antigo.
                        </Text>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </Flex>
    )
}