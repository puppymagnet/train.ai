import { 
    Card, 
    CardBody, 
    Image, 
    Heading, 
    Text,
    CardFooter,
    Button ,
    Tag,
    HStack,
    Spacer,
    Avatar,
    Tooltip,
    Flex,
} from '@chakra-ui/react'
import React from 'react'
import defaultavatar from '../../../assets/tmw_avatar.jpg';
import { muscleMap } from './muscle-map';

export interface WorkOutCardProps {
    title: string;
    desc?: string;
    img?: string; 
    muscles: string[];
    author_id?: string;
    score?: number;
    verified?: boolean;
    colorScheme?: string;
}

export const WorkoutCard: React.FC<WorkOutCardProps> = ({
    title,
    desc,
    img,
    muscles,
    author_id,
}) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={img} objectFit={'cover'} height={250}></Image>
        <CardBody>
            <HStack marginY={1}>
                {muscles.map(muscle => {
                    return (
                        <Tag colorScheme={muscleMap[muscle.toLowerCase() as keyof typeof muscleMap]} key={muscle}>{muscle}</Tag>
                    )
                })}
            </HStack>
            <Heading size={'2xl'}>{title}</Heading>
            <Text>{desc}</Text>
        </CardBody>
        <CardFooter>
                <Tooltip label={author_id}>
                    <Avatar
                        name='Thomas Michael'
                        src={defaultavatar}
                        size={'md'}
                    />
                </Tooltip>
            <Spacer/>
            <Button>View workout details</Button>
        </CardFooter>
    </Card>
  )
}

export default WorkoutCard;