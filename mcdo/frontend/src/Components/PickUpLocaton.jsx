import React from 'react'
import {Box,Center,Button} from "@chakra-ui/react"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const PickUpLocaton = () => {
  return (
    <Box padding="20px" bg="#FFC72C">
          <Center gap={10} color="black">
            <Box>
              <LocationOnIcon style={{ color: "#e4002b" }} fontSize="small" />
              Pick up from: McDonald's BGC, 10th Ave, 40th Street, Taguig, Metro Manila
            </Box>
            <Box>
              <AccessTimeIcon style={{ color: "#e4002b" }} fontSize="small" />
              ASAP{" "}
            </Box>
            <Button
              color="white"
              border="white"
              _hover={{ bg: "#e4002b" }}
              bg="#e4002b"
            >
              Change
            </Button>
          </Center>
        </Box>
  )
}

export default PickUpLocaton;