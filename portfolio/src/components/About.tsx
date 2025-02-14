import BannerImage from './../assets/images/banner.svg'
import WavingGif from './../assets/images/waving.gif'
import { Box, Heading, Text, Image } from "@chakra-ui/react"


const About = () => {
  return (
    <>
        <Box display='flex' px='10rem' py='20' my='10' w='100%' h='85vh' gap='20' alignItems='center'>
            <Box w='6/12'>
                <Box display='flex' gap='3' my='10' alignItems='center'>
                    <Heading fontSize='5xl'>Hi, i am</Heading>
                    <Heading fontSize='5xl' color='#8056F9'>Shisir Basel</Heading>
                    <Image h='12'
                        src={WavingGif}
                    />
                </Box>
                <Box my='10'>
                    <Text textStyle='2xl' lineHeight='2'>
                        I am a Full Stack Developer skilled in Django, Django REST Framework and React.js, 
                        with a strong foundation in software engineering. 
                        I am passionate about AI, machine learning, and innovative web solutions.
                    </Text>
                </Box>
            </Box>
            <Box w='6/12'>
                <Image 
                src={BannerImage} 
                className="floating-image" 
                alt="Banner" 
                />
            </Box>
        </Box>
    </>
  )
}

export default About
