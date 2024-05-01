import React from 'react';
import { Box, Image, Text , Center} from '@chakra-ui/react';

const ImageCard = ({ title, price }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ boxShadow: "md" }}>
      <Center>
      <Image src="https://via.placeholder.com/300" alt={title} />
      </Center>
      
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Text fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {title}
          </Text>
        </Box>
        <Box>
          {price}
          <Box as="span" color="gray.600" fontSize="sm">
            / unit
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCard;