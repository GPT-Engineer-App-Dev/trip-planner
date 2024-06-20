import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Book your flights, hotels, and car rentals all in one place.</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button leftIcon={<FaPlane />} colorScheme="teal" variant="solid" size="lg">Flights</Button>
          <Button leftIcon={<FaHotel />} colorScheme="teal" variant="solid" size="lg">Hotels</Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" variant="solid" size="lg">Car Rentals</Button>
        </Box>
        <Image src="/images/travel-hero.jpg" alt="Travel" borderRadius="md" boxShadow="md" />
      </VStack>
    </Container>
  );
};

export default Index;