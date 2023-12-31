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
        muscles: ['Chest', 'Triceps', 'Shoulders'],
        author_id: 'Thomas Michael',
    },
    {
        title: 'Arnold Pull',
        desc: 'A basic pull workout building on basic compoinds and principles',
        img: example_pull,
        muscles: ['Back', 'Biceps'],
        author_id: 'Thomas Michael'
    },
    {
        title: 'Arnold Legs',
        desc: 'A basic leg workout building on basic compoinds and principles',
        img: example_legs,
        muscles: ['Quads', 'Hamstrings', 'Calves'],
        author_id: 'Thomas Michael'
    },
]

const FeaturedWorkouts = () => {
  return (
        <SimpleGrid columns={{ sm: 1, md:2, lg:3}} padding={10} spacing={4}>
            {example_cards.map(example => {
                return (
                    <WorkoutCard 
                        title={example.title}
                        desc={example.desc}
                        img={example.img}
                        muscles={example.muscles}
                        author_id={example.author_id}
                    />
                )
            })}
        </SimpleGrid>
  )
}

export default FeaturedWorkouts