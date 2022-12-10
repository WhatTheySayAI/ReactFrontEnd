import "./HomePage.css";

import { Box, Heading, Text, Button, Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Slide } from "react-slideshow-image";

const fadeImages = [
  {
    url: "/childFour.jpg",
    caption: "First Slide",
  },
  {
    url: "/childOne.jpg",
    caption: "Second Slide",
  },
];

function HomePage() {
  return (
    <>
      <Box m={[5, 20, 40, 80]}>
        <Heading className="headline" size="3xl">
          What
          <br></br>
          Teachers
          <br></br>
          S(AI)
        </Heading>

        {/* <Slide>
          {fadeImages.map((fadeImage, index) => (
            <Image height="150px" src={fadeImage.url} />

            //   <div className="each-fade" key={index}>
            //     <div className="image-container">
            //       <img src={fadeImage.url} />
            //     </div>
            //     <h2>{fadeImage.caption}</h2>
            //   </div>
          ))}
        </Slide> */}

        <Center>
        <Box height = "150px">
          <Image className="slide-1" src="/childFour.png" />
          <Image className="slide-2" src="/childOne.png" />
          <Image className="slide-3" src="/childThree.png" />
          <Image className="slide-4" src="/childTwo.png" />
        </Box>
        </Center>

        

        <Heading className="textHeader" size="lg">
          Want to remember everything in your next lesson?
        </Heading>

        <Text className="textBody">
          So often in our music lessons we forget key points in our music
          lesson. We get transfixed in the moment, thinking about new
          information from the teacher. Our solution automatically transcribes
          everything that was said during the lesson, with the opportunity for
          you to write down notes during and after the lesson, with the option
          to send all this information via e-mail.
        </Text>
        <Center>
          <Link to="/lesson">
            <Button whiteSpace="normal">
              <Text className="button">
                Ready to Rock and Roll?🎸
              </Text>
            </Button>
          </Link>
        </Center>
      </Box>
    </>
  );
}

export default HomePage;
