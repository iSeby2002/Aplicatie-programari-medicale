import React from 'react';
import axios from "axios";
import {
    Button,
    CssBaseline,
    TextField,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import {
    buttonSx,
    centerBoxSx,
    textFieldSx,
    typographySchimbareParolaSx
} from "./SchimbareParolaPage.styles";
import {useLocation, useNavigate} from "react-router-dom";
import CustomizedSnackbars from "../../../utils/CustomizedSnackbars";


const SchimbareParolaPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("")
    const [message, setMessage] = React.useState("");
    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    const [parola, setParola] = React.useState("");
    const [confirmareParola, setConfirmareParola] = React.useState("");
    const [gresit, setGresit] = React.useState({ parola: false, confirmareParola: false });

    const validateParola = (value: string) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[().*[\]!@#$%^&_\-+={}|~`:;"'<,>?/]).{8,}$/.test(value);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const allFieldsValid = Object.values(gresit).every(value => value === false);

        if(allFieldsValid) {
            const data = new FormData(event.currentTarget);
            const updateDTO = {
                id: location.state.medic.id,
                password: data.get('parolaField'),
            }

            axios.post(`${process.env.REACT_APP_SERVER_LINK}/admin/schimbareParola`, updateDTO, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                setOpen(true);
                setSeverity("success");
                setMessage(response.data.mesaj);

                setTimeout(() => {
                    navigate("/AdminPage/EditarePage", { state: location.state });
                }, 1000);

            }).catch((error: any) => {
                setOpen(true);
                setSeverity("error");
                setMessage(error.response.data.mesaj);
            })
        }
    }

    const handleInapoi = () => {
        navigate("/AdminPage/EditarePage", { state: location.state });
    }

    return (
        <div className="schimbareParolaPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx} component="form" onSubmit={handleSubmit}>
                <Typography sx={typographySchimbareParolaSx}>
                    Schimbare parolă
                </Typography>
                <TextField
                    id="parolaField"
                    type="password"
                    label="Parolă"
                    name="parolaField"
                    required
                    value={parola}
                    variant="standard"
                    onChange={(e) => {
                        const value = e.target.value;
                        setParola(value);
                        setGresit({ ...gresit, parola: !validateParola(value), confirmareParola: value !== confirmareParola  });
                    }}
                    error={gresit.parola}
                    helperText={gresit.parola ? "Parola trebuie sa conţină minim: 8 caractere, o literă mică, o literă mare, o cifră, un simbol." : ""}
                    sx={textFieldSx}
                />
                <TextField
                    id="confirmareParolaField"
                    type="password"
                    label="Confirmare Parolă"
                    name="confirmareParolaField"
                    required
                    value={confirmareParola}
                    variant="standard"
                    onChange={(e) => {
                        const value = e.target.value;
                        setConfirmareParola(value);
                        setGresit({ ...gresit, confirmareParola: value !== parola });
                    }}
                    error={gresit.confirmareParola}
                    helperText={gresit.confirmareParola ? "Confirmare parolă incorectă." : ""}
                    sx={textFieldSx}
                />
                <Button sx={buttonSx} type="submit">
                    Actualizează parola
                </Button>
                <Button sx={{...buttonSx, marginBottom: "4%"}} onClick={handleInapoi}>
                    Înapoi
                </Button>
            </Box>
            <CustomizedSnackbars
                open={open}
                severity={severity}
                message={message}
                onClose={handleCloseSnackbar}
            />
        </div>
    );
}

export default SchimbareParolaPage;