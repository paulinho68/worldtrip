import { Box, Flex, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { Header } from "../../components/Header";
import { api } from "../../services/api";


interface HundreadPlusProps {
    id: number;
    name: string;
    country: string;
    image: string;
    countryIcon: string;
}

interface ContinentProps {
    continent: {
        id: number;
        title: string;
        subtitle: string;
        continentImage: string;
        description: string;
        countries: number;
        languages: number;
        hundreadPlus: HundreadPlusProps[];
    }
}

export default function Continent({ continent }: ContinentProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <Spinner />
    }

    return (
        <>
            <Header />
            <Image src={continent.continentImage} h={["auto", "500px"]} w="100%" objectFit={["contain", "cover"]} />
            <Flex direction={["column", "row"]} m={["60px 20px", "80px 140px"]} fontSize={["16px", "24px"]} lineHeight="36px">
                <Text textAlign="justify" w={["100%", "50%"]} align="center" color="text.primary">
                    {continent.description}
                </Text>
                <Stack direction={["column", "row"]} align="center" justifyContent="center" mt={["50px", "0px"]} w={["100%", "50%"]} spacing="42px">
                    <Box justifyContent="center" align="center" fontWeight="600" >
                        <Text fontSize="48px" color="text.secondary" mb="10px">{continent.countries}</Text>
                        <Text>países</Text>
                    </Box>
                    <Box justifyContent="center" align="center" fontWeight="600">
                        <Text fontSize="48px" color="text.secondary" mb="10px">{continent.languages}</Text>
                        <Text>línguas</Text>
                    </Box>
                    <Box justifyContent="center" align="center" fontWeight="600">
                        <Text fontSize="48px" color="text.secondary" mb="10px">{continent.hundreadPlus.length}</Text>
                        <Text>cidades +100</Text>
                    </Box>
                </Stack>
            </Flex>
            <Box m={["60px 20px", "80px 140px"]}>
                <Text fontSize={["24px", "36px"]} fontWeight="500">
                    Cidades +100
                </Text>
                <Stack spacing={["20px", "45px"]} mt="35px" direction={["column", "row"]}>
                    {continent.hundreadPlus.map(city => (
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
                    ))}
                </Stack>
            </Box>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await api.get('/continents')
    const continents = response.data

    const paths = continents.map((continent: { id: number; }) => ({
        params: { id: continent.id }
    }))
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params;
    const response = await api.get(`/continents/${id}`);

    const continent = {
        id,
        title: response.data.title,
        subtitle: response.data.subtitle,
        continentImage: response.data.continentImage,
        description: response.data.description,
        countries: response.data.countries,
        languages: response.data.languages,
        hundreadPlus: response.data.hundreadPlus
    }

    return {
        props: { continent }, revalidate: 1
    }
}