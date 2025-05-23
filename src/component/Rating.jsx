import { HStack, Icon } from "@chakra-ui/react"
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa"

const Rating = ({ rating, max = 5 }) => {
  return (
    <HStack spacing="1">
      {Array.from({ length: max }).map((_, index) => {
        const fullStar = index + 1 <= rating
        const halfStar = index + 0.9 >= rating

        return (
          <Icon
            key={index}
            as={fullStar ? FaStar : halfStar ? FaStarHalfAlt : FaRegStar}
            color="yellow.400"
          />
        )
      })}
    </HStack>
  )
}

export default Rating
