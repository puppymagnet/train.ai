import { 
    Card, 
    CardBody, 
    Image, 
    Heading, 
    Text,
    Badge,
    CardFooter,
    Button ,
    Tag,
    HStack
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
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={img}></Image>
        <CardBody>
            <HStack marginY={1}>
                {muscles.map(muscle => {
                    return (
                        <Tag>{muscle}</Tag>
                    )
                })}
            </HStack>
            <Heading size={'2xl'}>{title}</Heading>
            <Text>{desc}</Text>
        </CardBody>
        <CardFooter>
            <Button>View workout details</Button>
        </CardFooter>
    </Card>
  )
}

export default WorkoutCard