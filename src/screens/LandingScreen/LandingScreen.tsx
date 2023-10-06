import { 
    Box, 
    Flex, 
    Center,
    SimpleGrid, 
    Heading
} from '@chakra-ui/react'
import React from 'react'
import FeaturedWorkouts from '../../components/Highlights/FeaturedWorkouts/FeaturedWorkouts'


const LandingScreen = () => {
  return (
    <Box p={'10px'} borderRadius={'lg'}>
            <FeaturedWorkouts/>
    </Box>
  )
}

export default LandingScreen