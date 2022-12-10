import { Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function LessonPage() {
    return<>
    This is the lesson page
    <Link to ="/summary">
    <Button>
        Finish your lesson ➡
    </Button>
    </Link>
    
    </>
}

export default LessonPage;