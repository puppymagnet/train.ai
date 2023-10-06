import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Heading,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import NavBar from "./components/HigherOrder/Common/NavBar"
import LandingScreen from "./screens/LandingScreen/LandingScreen"

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar/>
    <LandingScreen></LandingScreen>
  </ChakraProvider>
)
