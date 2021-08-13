import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Link from 'next/link';
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

type Continent = {
    id: string;
    title: string;
    subtitle: string;
    continentImage: string;
}

interface ContinentsProps {
    continents: Continent[];
}

export function Slide({ continents }: ContinentsProps) {
    return (
        <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]} mt={["28px", "52px"]}>
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                "clickable": true,
            }} navigation={true} >
                {!!continents[0] && continents.map(continent => (
                    <SwiperSlide className="mySwiper" key={continent.id}>
                        <Link href={`/continent/${continent.id}`} as={`/continent/${continent.id}`} key={continent.id}>
                            <a>
                                <Image opacity="87%" objectFit="cover" w="100%" h="100%" align="center" src={continent.continentImage} alt="Europe" />
                                <Box align="center" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                                    <Text color="background.primary" fontSize={["24", "48"]}>
                                        {continent.title}
                                    </Text>
                                    <Text color="#DADADA" fontSize={["14", "24"]}>
                                        {continent.subtitle}
                                    </Text>
                                </Box>
                            </a>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    )
}