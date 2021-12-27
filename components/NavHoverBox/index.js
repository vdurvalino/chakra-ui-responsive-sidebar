import {Flex, Heading, Icon, Text} from "@chakra-ui/react";

export function NavHoverBox({icon, title, description}) {
    return (
        <>
            <Flex
                pos={"absolute"}
                mt={"calc(100px - 7.5px)"}
                ml={"-10px"}
                w={0}
                h={0}
                borderTop={"10px solid transparent"}
                borderBottom={"10px solid transparent"}
                borderRight={"10px solid #82AAAD"}
            />
            <Flex
                // w={200}
                w={"100%"}
                h={200}
                flexDir={"column"}
                alignItems={"center"}
                justify={"center"}
                backgroundColor={"#82AAAD"}
                borderRadius={"10px"}
                color={"#FFF"}
                textAlign={"center"}
            >
                <Icon as={icon} fontSize={"3xl"} mb={4} />
                <Heading size={"md"} fontWeight={"normal"}>{title}</Heading>
                <Text>{description}</Text>
            </Flex>
        </>
    )
}