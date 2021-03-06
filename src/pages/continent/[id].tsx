import { Box, Flex, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Card from "../../components/Card";
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
                        <Card city={city} />
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