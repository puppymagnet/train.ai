import React from 'react'
import { 
    Box, 
    Flex, 
    Center,
    SimpleGrid, 
    Heading
} from '@chakra-ui/react'
import {WorkoutCard, WorkOutCardProps} from '../../Cards/WorkoutCrad/WorkoutCard';

import example_push from '../../../assets/card_images/example_push.jpeg';
import example_pull from '../../../assets/card_images/example_pull.jpeg';
import example_legs from '../../../assets/card_images/example_legs.jpeg';

const example_cards: WorkOutCardProps[] = [
    {
        title: 'Arnold Push',
        desc: 'A basic push workout building on basic compoinds and principles',
        img: example_push,
        muscles: ['Chest', 'Triceps', 'Shoulders']
    },
    {
        title: 'Arnold Pull',
        desc: 'A basic pull workout building on basic compoinds and principles',
        img: example_pull,
        muscles: ['Back', 'Biceps']
    },
    {
        title: 'Arnold Legs',
        desc: 'A basic leg workout building on basic compoinds and principles',
        img: example_legs,
        muscles: ['Quads', 'Hamstrings', 'Calves']
    },
]

const FeaturedWorkouts = () => {
  return (
    <Box p={'10px'} bgColor={'red'}>
        <Center>
            <Heading>Featured Workouts</Heading>
        </Center>
        <SimpleGrid columns={3} spacing={4}>
            {example_cards.map(example => {
                return (
                    <WorkoutCard 
                        title={example.title}
                        desc={example.desc}
                        img={example.img}
                        muscles={example.muscles}
                    />
                )
            })}
        </SimpleGrid>

    </Box>
  )
}

export default FeaturedWorkouts