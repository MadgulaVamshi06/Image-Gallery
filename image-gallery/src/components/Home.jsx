import React from "react";
import { Image, Box, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Box>
        <Box boxSize="xxl" >
            <Center>
            <Image h='100vh' src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </Center>
          
        </Box>
      </Box>
    </div>
  );
};

export default Home;
