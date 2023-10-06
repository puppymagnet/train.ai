import { 
    Card, 
    CardBody, 
    Image, 
    Heading, 
    Text,
    Badge,
    CardFooter,
    Button ,
    Tag
} from '@chakra-ui/react'
import React from 'react'

export interface WorkOutCardProps {
    title: string;
    desc?: string;
    img?: string; 
    muscles: string[];
}

export const WorkoutCard: React.FC<WorkOutCardProps> = ({
    title,
    desc,
    img,
    muscles
}) => {
  return (
    <Card>
        <Image src={img}></Image>
        <CardBody>
            <Tag colorScheme='purple'>{muscles.map(muscle => `${muscle}, `)}</Tag>
            <Heading size={'md'}>{title}</Heading>
            <Text>{desc}</Text>
        </CardBody>
        <CardFooter>
            <Button>View workout details</Button>
        </CardFooter>
    </Card>
  )
}

export default WorkoutCard