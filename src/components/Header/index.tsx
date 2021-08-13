import { Center, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
    return (
        <Center h="100">
            <Link href="/">
                <a>
                    <Image src="/logo.svg" w="184" h="46" />
                </a>
            </Link>
        </Center >
    )
}