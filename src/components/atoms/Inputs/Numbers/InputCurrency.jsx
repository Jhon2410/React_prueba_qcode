import { TextField } from "@mui/material";
import { useState } from "react";
import utils from "../../../../utils/Utils";

function InputCurrency() {

    const [value, setValue] = useState("");

    const formatter = (e) => {
        utils.onlyNumber(e.target.value) ?
            setValue(utils.formatNumber(e.target.value)) : null;

    }

    return (
        <TextField
            id="outlined-number"
            label="Number"
            type="text"
            value={value}
            onChange={formatter}
            InputLabelProps={{
                shrink: true,

            }}
        />
    )
}

export default InputCurrency;