import { HStack, Icon } from "@chakra-ui/react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import React from "react";
import { Tooltip } from '@chakra-ui/react'

const Rating = React.forwardRef(({ rating, max = 5 }, ref) => {
  return (
    <Tooltip label={rating}>
    <HStack spacing="1" ref={ref}>
      {Array.from({ length: max }).map((_, index) => {
        const fullStar = index + 1 <= rating
        const halfStar = index + 0.9 >= rating

        return (
          
             <Icon
            key={index}
            as={fullStar ? FaStar : halfStar ? FaStarHalfAlt : FaRegStar}
            color="yellow.400"
          />
          
        );
      })}
    </HStack>
     </Tooltip>
         
  )
});

export default Rating
