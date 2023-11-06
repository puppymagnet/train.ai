import * as React from "react"
import { Navigate, Route, Routes, useLocation, Router } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import NavBar from "./components/HigherOrder/Common/NavBar/NavBar";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import Layout from "./components/Layout";
import PerformanceInsisghtsScreen from "./screens/LandingScreen/PerformanceInsightsScreen/PerformanceInsisghtsScreen";
import FeaturedWorkouts from "./components/Highlights/FeaturedWorkouts/FeaturedWorkouts";
import YourWorkoutsScreen from "./screens/LandingScreen/YourWorkoutsScreen/YourWorkoutsScreen";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FeaturedWorkouts />} />
        <Route path="insights" element={<PerformanceInsisghtsScreen />} />
        <Route path="featured" element={<FeaturedWorkouts/>} />
        <Route path="your-workouts" element={<YourWorkoutsScreen/>} />
      </Route>
    </Routes> 
  </ChakraProvider>
);
