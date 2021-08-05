import { Divider, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Slide } from '../components/Slide';
import { api } from "../services/api";

type Continent = {
  id: string;
  title: string;
  subtitle: string;
  continentImage: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Header />
      <Image
        src={isWideVersion ? "/banners/banner.svg" : "/banners/bannerMobile.svg"}
        w="100%"
        h="auto"
      />
      <Categories />
      <Divider
        borderColor="text.primary"
        borderWidth="2px"
        w="90px"
        m="0 auto"
      />
      <Stack direction="column" align="center" mt="62">
        <Text
          fontWeight="500"
          align="center"
          fontSize={["24", "36"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Stack>
      <Slide continents={continents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents');

  return {
    props: {
      continents: response.data
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}