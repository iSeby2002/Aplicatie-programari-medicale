import React from 'react';
import axios from "axios";
import {
    Button,
    CssBaseline,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    FormControl
} from "@mui/material";
import Box from "@mui/material/Box";
import {
    buttonSx,
    centerBoxSx,
    textFieldSx,
    typographyEditareContSx
} from "./EditarePage.styles";
import {useLocation, useNavigate} from "react-router-dom";
import CustomizedSnackbars from "../../../utils/CustomizedSnackbars";


function RadioButtonsGroup({ tipMedic, setTipMedic }) {
    return (
        <FormControl style={{ marginTop: "15px" }}>
            <FormLabel id="tipMedicField" style={{ color: "black", fontWeight: "600" }}>Tip de medic:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={tipMedic}
                name="radio-buttons-group"
                sx={{ display: "flex", flexDirection: 'row' }}
                onChange={(e) => setTipMedic(e.target.value)}
            >
                <FormControlLabel value="diabetolog" control={<Radio />} label="Diabetolog" />
                <FormControlLabel value="oftalmolog" control={<Radio />} label="Oftalmolog" />
            </RadioGroup>
        </FormControl>
    );
}

const EditarePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("")
    const [message, setMessage] = React.useState("");
    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    const [prenume, setPrenume] = React.useState(location.state.medic.prenume);
    const [nume, setNume] = React.useState(location.state.medic.nume);
    const [email, setEmail] = React.useState(location.state.medic.email);
    const [telefon, setTelefon] = React.useState(location.state.medic.phoneNumber);
    const [tipMedic, setTipMedic] = React.useState("diabetolog");
    const [gresit, setGresit] = React.useState({ prenume: false, nume: false, email: false, telefon: false});

    const validatePrenume = (value: string) => /^[a-zA-Z\s-]+$/.test(value);
    const validateNume = (value: string) => /^[a-zA-Z\s-]+$/.test(value);
    const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const validateTelefon = (value: string) => /^[0-9]{10}$/.test(value);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const allFieldsValid = Object.values(gresit).every(value => value === false);

        if(allFieldsValid) {
            const data = new FormData(event.currentTarget);
            const updateDTO = {
                id: location.state.medic.id,
                prenume: data.get('prenumeField'),
                nume: data.get('numeField'),
                email: data.get('emailField'),
                phoneNumber: data.get('telefonField'),
                role: tipMedic,
            }

            axios.post(`${process.env.REACT_APP_SERVER_LINK}/admin/update`, updateDTO, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                setOpen(true);
                setSeverity("success");
                setMessage(response.data.mesaj);
            }).catch((error: any) => {
                setOpen(true);
                setSeverity("error");
                setMessage(error.response.data.mesaj);
            })
        }
    }

    const handleSchimbareParola = () => {
        navigate("/AdminPage/EditarePage/SchimbareParolaPage", { state: location.state });
    }

    const handleInapoi = () => {
        navigate("/AdminPage", { state: location.state.admin });
    }

    return (
        <div className="editarePage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx} component="form" onSubmit={handleSubmit}>
                <Typography sx={typographyEditareContSx}>
                    Actualizează cont
                </Typography>
                <TextField
                    id="prenumeField"
                    label="Prenume"
                    name="prenumeField"
                    required
                    value={prenume}
                    variant="standard"
                    onChange={(e) => {
                        const value = e.target.value;
                        setPrenume(value);
                        setGresit({ ...gresit, prenume: !validatePrenume(value) });
                    }}
                    error={gresit.prenume}
                    helperText={gresit.prenume ? "Prenume incorect." : ""}
                    sx={textFieldSx}
                />
                <TextField
                    id="numeField"
                    label="Nume"
                    name="numeField"
                    required
                    value={nume}
                    variant="standard"
                    onChange={(e) => {
                        const value = e.target.value;
                        setNume(value);
                        setGresit({ ...gresit, nume: !validateNume(value) });
                    }}
                    error={gresit.nume}
                    helperText={gresit.nume ? "Nume incorect." : ""}
                    sx={textFieldSx}
                />
                <TextField
                    id="emailField"
                    label="Email"
                    name="emailField"
                    required
                    value={email}
                    variant="standard"
                    onChange={(e) => {
                        const value = e.target.value;
                        setEmail(value);
                        setGresit({ ...gresit, email: !validateEmail(value) });
                    }}
                    error={gresit.email}
                    helperText={gresit.email ? "Email incorect." : ""}
                    sx={textFieldSx}
                />
                <TextField
                    id="telefonField"
                    label="Telefon"
                    name="telefonField"
                    required
                    value={telefon}
                    variant="standard"
                    onChange={(e) => {
                        const value = e.target.value;
                        setTelefon(value);
                        setGresit({ ...gresit, telefon: !validateTelefon(value) });
                    }}
                    error={gresit.telefon}
                    helperText={gresit.telefon ? "Telefon incorect." : ""}
                    sx={textFieldSx}
                />
                <RadioButtonsGroup tipMedic={tipMedic} setTipMedic={setTipMedic} />
                <Button sx={buttonSx} type="submit">
                    Actualizează datele
                </Button>
                <Button sx={buttonSx} onClick={handleSchimbareParola}>
                    Schimbare parolă
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

export default EditarePage;