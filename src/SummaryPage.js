import { Heading, Container, Text, Input, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function SummaryPage({transcript, notes, finalThoughts, setFinalThoughts}) {
    return (
        <Container>
        <Heading>SUMMARY</Heading>    
        <Heading>TRANSCRIPT</Heading>
        <Text>{transcript}</Text>
        <Heading>NOTES</Heading>
        <Text>{notes}</Text>
        <Heading>FINAL THOUGHTS</Heading>
        <Input value={finalThoughts} placeholder="Final thoughts?" onChange={(event) => setFinalThoughts(event.target.value)}/>
        <Link to="/email">
            <Button>
                Send email ➡
            </Button>
        </Link>
        </Container>
    )
}

export default SummaryPage;