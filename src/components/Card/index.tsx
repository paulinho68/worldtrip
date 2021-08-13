import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CardProps {
    city: {
        id: number;
        name: string;
        country: string;
        image: string;
        countryIcon: string;
    }
}


export default function Card({ city }: CardProps) {
    return (
        <Box
            backgroundColor="#FFF"
            borderColor="rgba(255, 186, 8, 0.5)"
            w={["100%", "20%"]}
            borderRadius="30px"
            key={city.name}
        >
            <Image src={city.image} h="256px" objectFit="cover" w="100%" borderTopLeftRadius="30px" borderTopRightRadius="30px" />
            <Flex>
                <Box p="18px" w="80%">
                    <Text color="text.primary" fontWeight="600" fontSize="20px">{city.name}</Text>
                    <Text color="text.gray" fontWeight="500" fontSize="16px">{city.country}</Text>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Image
                        src={city.countryIcon}
                        alt={`Bandeira ${city.name}`}
                        borderRadius="full"
                        boxSize="150px"
                        w="30px"
                        h="30px"
                    />
                </Box>
            </Flex>
        </Box>
    )
}