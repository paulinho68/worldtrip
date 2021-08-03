import { Flex } from "@chakra-ui/layout";
import { Item } from "./Item";

export function Categories() {
    return (
        <Flex justifyContent="space-between" m="80px 140px">
            <Item title="vida noturna" src="/icons/nightlife.svg" />
            <Item title="praia" src="/icons/surf.svg" />
            <Item title="moderno" src="/icons/building.svg" />
            <Item title="clássico" src="/icons/museum.svg" />
            <Item title="e mais..." src="/icons/earth.svg" />
        </Flex>
    )
}