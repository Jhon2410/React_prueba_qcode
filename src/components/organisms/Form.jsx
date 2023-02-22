import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import InputSelection from "../atoms/Inputs/Selects/InputSelection";
import InputCurrency from "../atoms/Inputs/Numbers/InputCurrency";
import FooterForm from "../molecules/FooterForm";

import { connect } from "react-redux";

function Form({ valor, trm, option, changeOption, changeTrm, changeValor }) {

    return (
        <Container style={{ "textAlign": "-webkit-center", "background": "#fff", "borderRadius": "5px", "padding": "25px" }}>
            <Grid container width="100%" justifyContent="center" >
                <Grid item sm={12} md={3} width="100%" marginTop="15px" marginX="10px" textAlign={"center"}>
                    <InputCurrency title="VALOR" variable={valor} action={changeValor}></InputCurrency>
                </Grid>
                <Grid item sm={12} md={3} width="100%" marginX="10px" marginTop="15px">
                    <InputSelection title="OPTION" variable={option} action={changeOption} ></InputSelection>
                </Grid>
                <Grid item sm={12} md={3} width="100%" marginTop="15px" marginX="10px" >
                    <InputCurrency title="TRM" variable={trm} action={changeTrm}></InputCurrency>
                </Grid>
            </Grid>
            <Grid item container width="80%" justifyContent="center" >
                <FooterForm></FooterForm>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    "valor": state.VALOR,
    "option": state.OPTION,
    "trm": state.TRM
})

const mapDispatchToProps = (dispatch) => ({
    changeValor(valor) {
        dispatch({
            type: "changeVALOR", VALOR: valor
        });
    },
    changeOption(option) {
        dispatch({
            type: "changeOPTION", OPTION: option
        });
    },
    changeTrm(trm) {
        dispatch({
            type: "changeTRM", TRM: trm
        });
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(Form);