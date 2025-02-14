import { Box, Heading } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <Box px="10rem" w="100%" h="95vh">
      <Heading size="2xl">Projects</Heading>

      <Box 
        display="flex" 
        flexWrap="wrap" 
        justifyContent="left" 
        gapX="40"
        gapY="24"
        my="10"
      >
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </Box>
    </Box>
  )
}

export default Projects
