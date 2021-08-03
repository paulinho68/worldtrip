import { Box, Image, Text } from "@chakra-ui/react";

interface ItemProps {
    title: string;
    src: string;
}

export function Item({ title, src }: ItemProps) {
    return (
        <Box h="145" align="center">
            <Image src={src} w="85" mb="24px" />
            <Text fontWeight="600" fontSize="24">{title}</Text>
        </Box>
    )
}