import { Box } from "@chakra-ui/react";


const ProjectCard = () => {
  return (
    <Box
    bgColor='#8F70EB' 
    h='20vh' 
    w='37vh' 
    px='10'
    py='4'
    borderRadius='10px'
    _hover={{
      bgColor:'#8056F9',
      cursor:'pointer'
    }}
    >

    </Box>
  );
};

export default ProjectCard;
