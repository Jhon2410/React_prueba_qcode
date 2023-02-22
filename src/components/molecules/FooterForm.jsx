import { Button, Grid, Stack } from "@mui/material";
import ButtonClear from "../atoms/Buttons/Clear/ButtonClear";
import ButtonSave from "../atoms/Buttons/Save/ButtonSave";
function FooterForm() {
    return (
        <Grid container width="80%" marginTop={"20px"} justifyContent="center"  >
            <Grid margin="5px" item Width="50px" xs={12} sm={12} md={6}>
                <ButtonClear />
            </Grid>
            <Grid margin="5px" item xs={12} sm={12} md={6}>
                <ButtonSave />
            </Grid>
        </Grid>

    )
}

export default FooterForm;