import "./HomePage.css";

import { Box, Heading, Text, Button, Center, Image, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import { Slide } from "react-slideshow-image";

// const fadeImages = [
//   {
//     url: "/childFour.jpg",
//     caption: "First Slide",
//   },
//   {
//     url: "/childOne.jpg",
//     caption: "Second Slide",
//   },
// ];

function HomePage() {
  return (
    <>
      <Container>
        <Box bg='none' h='5vmin'/>
        <Heading className="headline" size="3xl">
          What
          <br></br>
          Teachers
          <br></br>
          S(AI)
        </Heading>

        <Center>
          <Image height="10em" mt={4} src="/violin.png" />
        </Center>

        <Center mt={3}>
          <Link to="/lesson">
            <Button whiteSpace="normal">
              <Text className="button">Ready to Rock and Roll? 🎸</Text>
            </Button>
          </Link>
        </Center>

        <Heading mt={3} className="textHeader" size="lg">
          Want to remember everything in your next lesson?
        </Heading>

        <Text mt={3} className="textBody">
          So often in our music lessons we forget key points in our music
          lesson. We get transfixed in the moment, thinking about new
          information from the teacher. Our solution automatically transcribes
          everything that was said during the lesson, with the opportunity for
          you to write down notes during and after the lesson, with the option
          to send all this information via e-mail.
        </Text>
      </Container>
    </>
  );
}

export default HomePage;
