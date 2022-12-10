import { Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Heading class = "headline" size="3xl">
        What
        <br></br>
        Teachers
        <br></br>
        S(AI)
      </Heading>

      <Heading size="lg">
        Want to remember everything in your next lesson?
      </Heading>

      <Text>
        So often in our music lessons we forget key points in our music lesson.
        We get transfixed in the moment, thinking about new information from the
        teacher. Our solution automatically transcribes everything that was said
        during the lesson, with the opportunity for you to write down notes
        during and after the lesson, with the option to send all this
        information via e-mail.
      </Text>

      <Link to="/lesson">
        <Button>Ready to Rock and Roll?🎸</Button>
      </Link>
    </>
  );
}

export default HomePage;
