import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    boxSx, buttonSx,
    centerBoxSx, CNPSx, diabetZaharatSx, nrCrtSx,
    numeSiPrenumeSx, typographyCNPSx, typographyDataDiagnosticuluiSx, typographyDiabetZaharatSx, typographyNrCrtSx,
    typographyNumeSiPrenumeSx, typographyProgramaerSx,
    typographyTitluSx
} from "./DiabetologPage.styles";
import {
    Button,
    CssBaseline,
    FormControlLabel, InputLabel, FormControl, MenuItem, Select,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";
import CustomizedSnackbars from "../../utils/CustomizedSnackbars";


function RadioButtonsGroup1({ tipDiabetZaharat, setTipDiabetZaharat, setDiabetZaharat }) {
    return (
        <FormControl style={{ display: "flex", flexDirection: "row" }}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={tipDiabetZaharat}
                name="radio-buttons-group"
                sx={{ display: "flex", flexDirection: 'row', marginLeft: "-20px" }}
                onChange={(e) => {
                    const value = e.target.value;
                    setTipDiabetZaharat(value);
                    if(value === "tip 1") {
                        setDiabetZaharat("");
                    }
                }}
            >
                <FormControlLabel value="tip 1" control={<Radio />} label="tip 1" />
                <FormControlLabel value="tip 2" control={<Radio />} label="tip 2" />
            </RadioGroup>
        </FormControl>
    );
}

const DiabetologPage = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("")
    const [message, setMessage] = React.useState("");
    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    // BOX 1
    const [gresit, setGresit] = React.useState({
        numeSiPrenume: false,
        cnp: false,
        diabetZaharat: false,
        dataDiagnosticului: false,
        dataProgramarii: false
    });
    const validateNumeSiPrenume = (value: string) => /^[a-zA-Z\s-]+$/.test(value);
    const validateCNP = (value: string) => /^[0-9]{13}$/.test(value);

    const [numeSiPrenume, setNumeSiPrenume] = React.useState("");
    const [nrCrt, setNrCrt] = React.useState(0);
    const [cnp, setCnp] = React.useState("");
    const [diabetZaharat, setDiabetZaharat] = React.useState("");
    const [tipDiabetZaharat, setTipDiabetZaharat] = React.useState("tip 1");

    const [selectedDataDiagnoticului, setSelectedDataDiagnoticului] = React.useState(null);
    const handleDataDiagnoticuluiChange = (newValue) => {
        setSelectedDataDiagnoticului(newValue);
        setGresit({...gresit, dataDiagnosticului: !newValue});
    };

    const [listOreDisponibile, setListOreDisponibile] = useState([]);
    const [oraProgramarii, setOraProgramarii] = useState("");

    const [selectedDataProgramare, setSelectedDataProgramare] = React.useState(null);
    const handleDateProgramareChange = (newValue) => {
        setSelectedDataProgramare(newValue);
        setGresit({...gresit, dataProgramarii: !newValue});

    };

    const handleGetNext = () => {
        axios.get(`${process.env.REACT_APP_SERVER_LINK}/pacienti/getUrmatorulNrCrt`, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            setNrCrt(response.data);
        });
    }

    useEffect(() => {
        handleGetNext()
    }, []);

    useEffect(() => {
        if (selectedDataProgramare) {
            axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/getAvailableSlots`, {
                dataProgramare: dayjs(selectedDataProgramare).format('YYYY-MM-DD')
            }, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response) => {
                const oreDisponibile = response.data.map(slot => dayjs(slot.startTime).format('HH:mm'));
                setListOreDisponibile(oreDisponibile);
            });
        }
    }, [selectedDataProgramare]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedDataDiagnoticului == null) {
            setOpen(true);
            setSeverity("error");
            setMessage("Data diagnosticului trebuie selectată!");

        } else if (selectedDataProgramare == null) {
            setOpen(true);
            setSeverity("error");
            setMessage("Data programării trebuie selectată!");
        } else if (oraProgramarii === "") {
            setOpen(true);
            setSeverity("error");
            setMessage("Ora programării trebuie selectată!");
        }else{
            const allFieldsValid = Object.values(gresit).every(value => value === false) && selectedDataDiagnoticului && selectedDataProgramare && oraProgramarii;

            if (allFieldsValid) {
                const dataOraProgramarii = dayjs(selectedDataProgramare).format('YYYY-MM-DD') + 'T' + oraProgramarii + ':00';

                const programareDTO = {
                    numeSiPrenume: numeSiPrenume,
                    cnp: cnp,
                    tipDiabetZaharat: tipDiabetZaharat,
                    diabetZaharat: diabetZaharat,
                    dataDiagnosticului: dayjs(selectedDataDiagnoticului).format('YYYY-MM-DD'),
                    dataProgramarii: dayjs(selectedDataProgramare).format('YYYY-MM-DD'),
                    oraProgramarii: dataOraProgramarii,
                };

                axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/programare`, programareDTO, {
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((response: any) => {
                    setOpen(true);
                    setSeverity("success");
                    setMessage(response.data);

                    setNumeSiPrenume("");
                    setCnp("")
                    setTipDiabetZaharat("tip 1");
                    setDiabetZaharat("");
                    setSelectedDataDiagnoticului(null);
                    setSelectedDataProgramare(null);
                    setOraProgramarii("");
                    handleGetNext()
                });

            } else {
                if (!selectedDataDiagnoticului) setGresit({ ...gresit, dataDiagnosticului: true });
                if (!selectedDataProgramare) setGresit({ ...gresit, dataProgramarii: true });
            }
        }

    }

    const handleDeconectare = () => {
        navigate("/");
        localStorage.setItem('auth', 'false');
    };

    return (
        <div className="oftalmologPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx} component="form" onSubmit={handleSubmit}>
                <Typography sx={typographyTitluSx}>
                    SCREENING RETINOPATIE DIABETICĂ
                </Typography>
                <Box sx={boxSx}>
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyNumeSiPrenumeSx}>
                            Nume și prenume:
                        </Typography>
                        <TextField
                            id="numeSiPrenumeField"
                            name="numeSiPrenumeField"
                            value={numeSiPrenume}
                            variant="standard"
                            required
                            onChange={(e) => {
                                const value = e.target.value;
                                setNumeSiPrenume(value);
                                setGresit({ ...gresit, numeSiPrenume: !validateNumeSiPrenume(value) });
                            }}
                            error={gresit.numeSiPrenume}
                            helperText={gresit.numeSiPrenume ? "Nume si prenume incorect." : ""}
                            sx={numeSiPrenumeSx}
                        />
                        <Typography sx={typographyNrCrtSx}>
                            Nr. crt.
                        </Typography>
                        <TextField
                            id="nrCrtField"
                            name="nrCrtField"
                            value={nrCrt}
                            variant="standard"
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={nrCrtSx}
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyCNPSx}>
                            CNP:
                        </Typography>
                        <TextField
                            id="CNPField"
                            name="CNPField"
                            value={cnp}
                            variant="standard"
                            required
                            onChange={(e) => {
                                const value = e.target.value;
                                setCnp(value);
                                setGresit({ ...gresit, cnp: !validateCNP(value) });
                            }}
                            error={gresit.cnp}
                            helperText={gresit.cnp ? "CNP incorect." : ""}
                            sx={CNPSx}
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyDiabetZaharatSx}>
                            Diabet zaharat:
                        </Typography>
                        <RadioButtonsGroup1
                            tipDiabetZaharat={tipDiabetZaharat}
                            setTipDiabetZaharat={setTipDiabetZaharat}
                            setDiabetZaharat={setDiabetZaharat}
                        />
                        <TextField
                            id="diabetZaharatField"
                            name="diabetZaharatField"
                            value={diabetZaharat}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setDiabetZaharat(value);
                            }}
                            sx={diabetZaharatSx}
                            disabled={tipDiabetZaharat !== 'tip 2'}
                        />
                        <Typography sx={typographyDataDiagnosticuluiSx}>
                            Data diagnosticului:
                        </Typography>
                        <Box sx={{marginTop: "-10px"}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    label="Selectează data"
                                    value={selectedDataDiagnoticului}
                                    onChange={handleDataDiagnoticuluiChange}
                                    inputFormat="DD/MM/YYYY"
                                    slotProps={{ textField: { variant: 'standard' } }}
                                    format="DD/MM/YYYY"
                                />
                            </LocalizationProvider>
                        </Box>
                    </Box>
                </Box>
                <Box sx={boxSx}>
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyProgramaerSx}>
                            Alege data și ora programării:
                        </Typography>
                        <Box sx={{padding: "10px 0px"}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    label="Selectează data"
                                    value={selectedDataProgramare}
                                    onChange={handleDateProgramareChange}
                                    inputFormat="DD/MM/YYYY"
                                    slotProps={{ textField: { variant: 'standard' } }}
                                    format="DD/MM/YYYY"
                                />
                            </LocalizationProvider>
                        </Box>
                        <FormControl variant="standard" sx={{ ml: "10px", padding: "10px 10px", width: "200px" }}>
                            <InputLabel id="select-ora-label" sx={{padding: "10px 10px"}}>Ora Programării</InputLabel>
                            <Select
                                labelid="select-ora-label"
                                id="select-ora"
                                value={oraProgramarii}
                                onChange={(e) => setOraProgramarii(e.target.value)}
                                label="Ora Programării"
                            >
                                {listOreDisponibile.map((ora, index) => (
                                    <MenuItem key={index} value={ora}>
                                        {ora}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button sx={buttonSx} type="submit">
                            Programează
                        </Button>
                    </Box>
                </Box>
                <Button sx={{ ...buttonSx, marginBottom: "15px" }} onClick={handleDeconectare}>
                    Deconectare
                </Button>
            </Box>
            <CustomizedSnackbars
                open={open}
                severity={severity}
                message={message}
                onClose={handleCloseSnackbar}
            />
        </div>
    )
}

export default DiabetologPage;