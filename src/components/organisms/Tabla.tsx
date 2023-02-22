import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import selectOptions from "../../assets/api/Selects.json"
import { connect } from 'react-redux';
import { Typography } from '@mui/material';


function Tabla({ posts = [] }) {
    const [_selectOptions] = useState(selectOptions);

    return (
        <TableContainer component={Paper}>
            {posts.length === 0 ? <Typography textAlign={"center"} variant="h6">No hay ningun Elemento agregado</Typography> : <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Consecutivo</TableCell>
                        <TableCell align="center">Valor</TableCell>
                        <TableCell align="center">Descripcion</TableCell>
                        <TableCell align="center">TRM</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((row, idx) => (
                        <TableRow
                            key={idx + 1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{idx + 1}</TableCell>
                            <TableCell align="center">{row["VALOR"]}</TableCell>
                            <TableCell align="center">{_selectOptions[row["OPTION"] - 1].DESCRIPTION}</TableCell>
                            <TableCell align="center">{row["TRM"]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>}

        </TableContainer>
    )
}
const mapStateToProps = (state: any) => (
    {
        posts: state.posts
    }
)

export default connect(mapStateToProps)(Tabla);