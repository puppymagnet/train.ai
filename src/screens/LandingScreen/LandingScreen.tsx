import { 
    Box, 
    Flex, 
    Center,
    SimpleGrid, 
    Heading
} from '@chakra-ui/react'
import React from 'react'
import FeaturedWorkoutsScreen from './FeaturedWorkoutsScreen/FeaturedWorkoutsScreen'

const LandingScreen = () => {
    return (
    <Box p={'10px'} borderRadius={'lg'}>
            <FeaturedWorkoutsScreen/>
    </Box>
  )
}

export default LandingScreen