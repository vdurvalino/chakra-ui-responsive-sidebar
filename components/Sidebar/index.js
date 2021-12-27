import {Avatar, Divider, Flex, Heading, IconButton, Text} from "@chakra-ui/react";
import {FiBriefcase, FiCalendar, FiDollarSign, FiHome, FiMenu, FiSettings, FiUser} from "react-icons/fi";
import {IoPawOutline} from "react-icons/io";
import {useState} from "react";
import {NavItem} from "../NavItem";

export function Sidebar() {
    const [navSize, changeNavSize] = useState("large")

    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p={"5%"}
                flexDir={"column"}
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as={"nav"}
            >
                <IconButton
                    background={"none"}
                    mt={5}
                    _hover={{background: "none"}}
                    icon={<FiMenu/>}
                    onClick={() => {
                        if (navSize === "small") {
                            changeNavSize("large")
                        } else {
                            changeNavSize("small")
                        }
                    }}
                />

                <NavItem navSize={navSize} icon={FiHome} title={"Dashboard"} description={"Descrição de teste do dashboard"}/>
                <NavItem navSize={navSize} icon={FiCalendar} title={"Calendar"} active/>
                <NavItem navSize={navSize} icon={FiUser} title={"Clients"}/>
                <NavItem navSize={navSize} icon={IoPawOutline} title={"Animals"}/>
                <NavItem navSize={navSize} icon={FiDollarSign} title={"Stocks"}/>
                <NavItem navSize={navSize} icon={FiBriefcase} title={"Reports"}/>
                <NavItem navSize={navSize} icon={FiSettings} title={"Settings"}/>
            </Flex>
            <Flex
                p={"5%"}
                flexDir={"column"}
                w={"100%"}
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"}/>
                <Flex mt={4} align={"center"}>
                    <Avatar size={"sm"} src={"https://github.com/vdurvalino.png"}/>
                    <Flex flexDir={"column"} ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as={"h3"} size={"sm"}>Vinícius D. Souza</Heading>
                        <Text color={"gray"}>Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}