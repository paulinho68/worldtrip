import { Divider, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Slide } from '../components/Slide';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Header />
      <Image src={isWideVersion ? "/banners/banner.svg" : "/banners/bannerMobile.svg"} w="100%" h="auto" />
      <Categories />
      <Divider
        borderColor="text.primary"
        borderWidth="2px"
        w="90px"
        m="0 auto"
      />
      <Stack direction="column" align="center" mt="62">
        <Text fontWeight="500" align="center" fontSize={["24", "36"]}>Vamos nessa?</Text>
        <Text fontWeight="500" align="center" fontSize={["24", "36"]}>Então escolha seu continente</Text>
      </Stack>
      <Slide />
    </>
  )
}
