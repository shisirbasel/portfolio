import { Box, Heading, Text } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"

const Navbar = () => {
  return (
    <Box display='flex' px='4.5rem' py='5' w='100%' alignItems='center' >
        <Box>
            <Heading fontSize='2xl' whiteSpace='nowrap'>{"<> Shisir Basel </>"}</Heading>
        </Box>
        <Box display='flex' ml='auto' gap='10' alignItems='center' >
            <a href="/#about"><Text fontWeight='semibold' textStyle='lg' _hover={{textDecoration:'underline'}}>About</Text></a>
            <a href="/#education"><Text fontWeight='semibold' textStyle='lg' _hover={{textDecoration:'underline'}}>Education</Text></a>
            <a href="/#experience"><Text fontWeight='semibold' textStyle='lg' _hover={{textDecoration:'underline'}}>Experience</Text></a>
            <a href="/#projects"><Text fontWeight='semibold' textStyle='lg' _hover={{textDecoration:'underline'}}>Projects</Text></a>
            <ColorModeButton />
        </Box>
    </Box>
  )
}

export default Navbar
