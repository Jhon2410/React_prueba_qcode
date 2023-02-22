import { Button } from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { connect } from "react-redux";

function ButtonClear({ reset }) {
    return (
        <Button variant="outlined" fullWidth onClick={() => reset()} endIcon={<ClearOutlinedIcon />}>
            Limpiar
        </Button>
    )
}

const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = (dispatch) => ({
    reset() {
        dispatch({
            type: "reset"
        });
    },
});



export default connect(mapStateToProps, mapDispatchToProps)(ButtonClear);