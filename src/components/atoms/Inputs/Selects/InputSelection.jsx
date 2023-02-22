import { Select, MenuItem } from "@mui/material";
import { connect } from "react-redux";
import json from "../../../../assets/api/Selects.json";
function InputSelection({ action, title = "OPTION", state }) {

    const renderItems = json.map((item, index) => (
        <MenuItem key={index} value={item.ID} id={item.ID}>
            {item.DESCRIPTION}
        </MenuItem>));

    return (
        <Select
            fullWidth
            value={state[title]}
            onChange={(e) => {
                action(e.target.value);
            }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value={0}>
                <em>Seleccione</em>
            </MenuItem>
            {renderItems}
        </Select>
    )
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(InputSelection);