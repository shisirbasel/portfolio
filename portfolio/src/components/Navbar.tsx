import { Box, Button, Heading, Text, Drawer, Portal, CloseButton } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <Box display="flex" px={{md:'4.5rem','lg':'4.5rem',base:'2.5rem'}} py="5" w="100%" gap={{md:'5','lg':'10'}} alignItems="center">
        <Box>
          <Heading fontSize="2xl" fontFamily="Dancing Script" whiteSpace="nowrap">{"<> Shisir Basel </>"}</Heading>
        </Box>
        <Box display={{ base: "none", md: "flex" }} ml="auto" gap={{md:'5','lg':'10'}} alignItems="center">
          {/* <a href="/#"><Text fontWeight="semibold" textStyle="lg" _hover={{ textDecoration: "underline" }}>About</Text></a>
          <a href="/#education"><Text fontWeight="semibold" textStyle="lg" _hover={{ textDecoration: "underline" }}>Education</Text></a>
          <a href="/#experience"><Text fontWeight="semibold" textStyle="lg" _hover={{ textDecoration: "underline" }}>Experience</Text></a>
          <a href="/#projects"><Text fontWeight="semibold" textStyle="lg" _hover={{ textDecoration: "underline" }}>Projects</Text></a> */}
          <ColorModeButton />
        </Box>
 
         <Box display={{ base: "flex", md: "none" }} ml="auto" alignItems="center" gap="4">
          <ColorModeButton />
          {/* <Drawer.Root size="sm">
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header display="flex" justifyContent="space-between" alignItems="center">
                    <Drawer.Title fontSize="2xl">Menu</Drawer.Title>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="xl" />
                    </Drawer.CloseTrigger>
                  </Drawer.Header>
                  <Drawer.Body display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="6" flex="1">
                    <a href="/#"><Text fontWeight="bold" fontSize="xl">About</Text></a>
                    <a href="/#education"><Text fontWeight="bold" fontSize="xl">Education</Text></a>
                    <a href="/#experience"><Text fontWeight="bold" fontSize="xl">Experience</Text></a>
                    <a href="/#projects"><Text fontWeight="bold" fontSize="xl">Projects</Text></a>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root> */}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
