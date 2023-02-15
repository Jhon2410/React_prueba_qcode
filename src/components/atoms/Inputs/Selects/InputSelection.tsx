import { Select, MenuItem } from "@mui/material";
function InputSelection() {
    return (
        <Select
            value=""
            onChange={() => { }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    )
}

export default InputSelection;