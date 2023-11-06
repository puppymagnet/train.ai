import React from 'react'
import {
    Box,
    Heading,
    Center
} from "@chakra-ui/react";

import PersonalBestSeriesChart from './PresonalBestSeriesChart';

const squatProgressionData = [
    { date: '2022-01-01', weight: 135 }, // Starting point
    { date: '2022-02-01', weight: 140 },
    { date: '2022-03-01', weight: 145 },
    { date: '2022-04-01', weight: 145 },
    { date: '2022-05-01', weight: 155 },
    { date: '2022-06-01', weight: 155 },
    { date: '2022-07-01', weight: 150 },
    { date: '2022-08-01', weight: 170 },
    { date: '2022-09-01', weight: 175 },
    { date: '2022-10-01', weight: 175 }, // Achieving the squat PR
    { date: '2022-11-01', weight: 175 }, // Continuing progress
    { date: '2022-12-01', weight: 180 },
    { date: '2023-01-01', weight: 175 },
    { date: '2023-02-01', weight: 170 }, // New squat PR
    // Add more data points as needed
  ];

const PerformanceInsisghtsScreen = () => {
  return (
    <Box padding={10}>
      <Center>
          <Heading color={'teal'}>Squat 1RM</Heading>
      </Center>
      <PersonalBestSeriesChart data={squatProgressionData} />
    </Box>
  );
}

export default PerformanceInsisghtsScreen