import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import { getDataApi } from "../../../../services/Index";
import { connect } from "react-redux";
import Swal from 'sweetalert2';
import Spinner from "../../Spinner/Spinner";
import { useState } from "react";
function ButtonSave({ state, updatePosts }) {

    const [loading, setLoading] = useState(false);
    const validar = (data) => {
        return data["VALOR"] !== "" && data["TRM"] !== "" && data["OPTION"] !== 0
    }
    const sendData = async () => {
        setLoading(true)
        if (!validar(state)) {
            Swal.fire({
                icon: 'error',
                title: 'Por favor llene todos los campos',
                showConfirmButton: true,
            })
            setLoading(false)
            return
        }
        const res = await getDataApi(state);
        if (res.status === 200) {
            if (localStorage.getItem('post')) {
                const localPost = JSON.parse(localStorage.getItem('post'));
                localPost.push(res.data.json);
                localStorage.setItem('post', JSON.stringify(localPost))
            } else {
                localStorage.setItem('post', "[" + JSON.stringify(res.data.json) + "]")
            }

            Swal.fire({
                icon: 'success',
                title: 'Ha sido guardado correctamente.',
                showConfirmButton: true,
                timer: 1500
            })
            updatePosts()

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error en la petición. por favor intente de nuevo.',
                showConfirmButton: true,
                timer: 2500
            })
        }
        setLoading(false)
    }
    return (
        <div>
            {loading && <Spinner></Spinner>}
            <Button variant="contained" fullWidth onClick={sendData} endIcon={<SaveIcon />}>
                Guardar
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = (dispatch) => ({
    updatePosts: () => dispatch({
        type: 'updatePosts'
    })

});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSave);