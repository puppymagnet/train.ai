import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { 
  Box, 
  Button, 
  Center, 
  Drawer, 
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Heading, 
  IconButton, 
  useDisclosure 
} from '@chakra-ui/react';

const YourWorkoutsScreen = () => {
  const { 
    isOpen: createWorkoutDrawerIsOpen, 
    onOpen: createWorkoutDrawerOnOpen, 
    onClose: createWorkoutDrawerOnClose
  } = useDisclosure();

  const workouts = [];
  
  return (
    <>
      {workouts.length > 0 ? (
      <Heading>Workouts</Heading>
      ) : (
        <Box>
          <Center>
            <IconButton aria-label="Add workout" onClick={createWorkoutDrawerOnOpen} icon={<AddIcon/>}/>
            <Drawer 
              placement='bottom' 
              onClose={createWorkoutDrawerOnClose} 
              isOpen={createWorkoutDrawerIsOpen}
              size={'full'}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>New Workout</DrawerHeader>
                <DrawerBody>
                </DrawerBody>
                <DrawerFooter>
                  <Button type='submit' form='my-form'>
                    create workout
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Center>
        </Box>
      )}
    </>  
  )
}

export default YourWorkoutsScreen