import { Container, Grid, ListItem } from "@mui/material";
import Form from "../organisms/Form";
import Tabla from "../organisms/Tabla";

function MainTemplate() {
    return (
        <Container>
            <Grid container className="my-3 text-center">
                <Grid xs={12} textAlign={"center"}>
                    <ListItem >
                        <Form />
                    </ListItem>
                </Grid>
                <Grid xs={12}>
                    <ListItem>
                        <Tabla></Tabla>
                    </ListItem>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MainTemplate;