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
    typographyCreazaContSx
} from "./RegisterPage.styles";
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

const RegisterPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("")
    const [message, setMessage] = React.useState("");
    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    const [prenume, setPrenume] = React.useState("");
    const [nume, setNume] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefon, setTelefon] = React.useState("");
    const [parola, setParola] = React.useState("");
    const [confirmareParola, setConfirmareParola] = React.useState("");
    const [tipMedic, setTipMedic] = React.useState("diabetolog");
    const [gresit, setGresit] = React.useState({ prenume: false, nume: false, email: false, telefon: false, parola: false, confirmareParola: false });

    const validatePrenume = (value: string) => /^[a-zA-Z\s-]+$/.test(value);
    const validateNume = (value: string) => /^[a-zA-Z\s-]+$/.test(value);
    const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const validateTelefon = (value: string) => /^[0-9]{10}$/.test(value);
    const validateParola = (value: string) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[().*[\]!@#$%^&_\-+={}|~`:;"'<,>?/]).{8,}$/.test(value);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const allFieldsValid = Object.values(gresit).every(value => value === false);

        if(allFieldsValid) {
            const data = new FormData(event.currentTarget);
            const registerDTO = {
                prenume: data.get('prenumeField'),
                nume: data.get('numeField'),
                email: data.get('emailField'),
                phoneNumber: data.get('telefonField'),
                password: data.get('parolaField'),
                role: tipMedic,
            }

            axios.post(`${process.env.REACT_APP_SERVER_LINK}/admin/register`, registerDTO, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                setOpen(true);
                setSeverity("success");
                setMessage(response.data.mesaj);

                setPrenume("");
                setNume("");
                setEmail("");
                setTelefon("");
                setParola("");
                setConfirmareParola("");
                setTipMedic("diabetolog");
            }).catch((error: any) => {
                setOpen(true);
                setSeverity("error");
                setMessage(error.response.data.mesaj);
            })
        }
    }

    const handleInapoi = () => {
        navigate("/AdminPage", { state: location.state });
    }

    return (
        <div className="registerPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx} component="form" onSubmit={handleSubmit}>
                <Typography sx={typographyCreazaContSx}>
                    Creează cont
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
                        setGresit({ ...gresit, parola: !validateParola(value) });
                    }}
                    error={gresit.parola}
                    helperText={gresit.parola ? "Parola trebuie sa conţină minim o literă mică, minim o literă mare, minim o cifră, minim un simbol." : ""}
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
                <RadioButtonsGroup tipMedic={tipMedic} setTipMedic={setTipMedic} />
                <Button sx={buttonSx} type="submit">
                    Adaugă cont
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

export default RegisterPage;