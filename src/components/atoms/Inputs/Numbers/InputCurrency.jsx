import { TextField } from "@mui/material";
import { useState } from "react";
import utils from "../../../../utils/Utils";
import { connect } from "react-redux";
import { useEffect } from "react";

function InputCurrency({ title = "Number", action, state }) {

    const formatter = (e) => {
        if (utils.onlyNumber(e.target.value)) {
            action(utils.formatNumber(e.target.value))
        }
    }

    return (
        <TextField
            id="outlined-number"
            label={title}
            type="text"
            fullWidth
            value={state[title]}
            onChange={formatter}
            InputLabelProps={{
                shrink: true,

            }}
        />
    )
}
const mapStateToProps = (state) => ({
    state: state,
})

const mapDispatchToProps = (dispatch) => ({
    action1: (value) => dispatch({ type: "SET_VALUE", payload: value }),
})
export default connect(mapStateToProps, mapDispatchToProps)(InputCurrency);;