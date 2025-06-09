import BannerImage from './../assets/images/banner.svg'
import WavingGif from './../assets/images/waving.gif'
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react"

const About = () => {
  return (
    <Flex 
      direction={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      py={{ base: "10", md: "16", lg: "20" }}
      my={{ base: "5", md: "10" }}
      gap={{ base: "10", md: "16", lg: "20" }}
      px={{ base: "2.5rem", md: "4.5rem", lg: "4.5rem" }}
    >
      <Box w={{ base: "full", md: "8/12", lg: "6/12" }} textAlign={{ base: "center", lg: "left" }}>
        <Flex alignItems="center" gap="3" justifyContent={{ base: "center", lg: "flex-start" }}>
            <Heading 
                fontSize={
                    { 
                        base: "2xl", 
                        md: "3xl", 
                        lg: "4xl", 
                        xl:'5xl',
                    }
                }
            >
                Hi, I am
            </Heading>
            <Heading 
                fontSize={
                    { 
                        base: "2xl", 
                        md: "3xl", 
                        lg: "4xl", 
                        xl:'5xl',
                    }
                } 
                color="#8056F9"
            >
                Shisir Basel
            </Heading>
          <Image h={{ base: "8", md: "10", lg: "12" }} src={WavingGif} alt="Waving hand" />
        </Flex>
        <Text mt="6" fontSize={{ base: "md", md: "lg", lg: "xl" }} lineHeight={{ base: "1.6", md: "1.8" }}>
          I am a Full Stack Developer skilled in Python and JavaScript, 
          with a strong foundation in software engineering. I am passionate about AI, machine learning, and 
          innovative web solutions.
        </Text>
      </Box >
      <Box w={{ base: "80%", sm: "70%", md: "60%", lg: "500px", xl: "600px" }}>
        <Image src={BannerImage} className="floating-image" alt="Banner" />
      </Box>
    </Flex>
  )
}

export default About;