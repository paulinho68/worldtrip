import { Box, Image, Text } from "@chakra-ui/react";

interface ItemProps {
    title: string;
    src: string;
}

export function Item({ title, src }: ItemProps) {
    return (
        <Box h="145" align="center" p={["20px", "0"]}>
            <Image src={src} width={["55px", "85px"]} mb="24px" />
            <Text fontWeight="600" fontSize={["18", "24"]}>{title}</Text>
        </Box>
    )
}