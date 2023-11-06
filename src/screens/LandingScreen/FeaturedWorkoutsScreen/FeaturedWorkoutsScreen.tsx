import React from 'react';
import FeaturedWorkouts from '../../../components/Highlights/FeaturedWorkouts/FeaturedWorkouts';
import { Box } from '@chakra-ui/react';

const FeaturedWorkoutsScreen = () => {
  return (
    <Box p={'10px'} borderRadius={'lg'}>
            <FeaturedWorkouts/>
    </Box>
  )
}

export default FeaturedWorkoutsScreen