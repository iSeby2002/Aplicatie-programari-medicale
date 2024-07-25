import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    boxSx, buttonDeconectareSx, buttonProgrameazaSx,
    centerBoxSx, CNPSx, dataDiagnosticuluiSx, diabetZaharatSx, nrCrtSx,
    numeSiPrenumeSx, typographyCNPSx, typographyDataDiagnosticuluiSx, typographyDiabetZaharatSx, typographyNrCrtSx,
    typographyNumeSiPrenumeSx, typographyProgramaerSx,
    typographyTitluSx
} from "./DiabetologPage.styles";
import {
    Autocomplete, Button,
    CssBaseline,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import {FormControl} from "@mui/base";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";


function RadioButtonsGroup1({ tipDiabetZaharat, setTipDiabetZaharat }) {
    return (
        <FormControl style={{ display: "flex", flexDirection: "row" }}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={tipDiabetZaharat}
                name="radio-buttons-group"
                sx={{ display: "flex", flexDirection: 'row', marginLeft: "-20px" }}
                onChange={(e) => setTipDiabetZaharat(e.target.value)}
            >
                <FormControlLabel value="tip 1" control={<Radio />} label="tip 1" />
                <FormControlLabel value="tip 2" control={<Radio />} label="tip 2" />
            </RadioGroup>
        </FormControl>
    );
}

function ComboBox({ options, value, onChange }: { options: { label: string }[], value: any, onChange: (event: any, newValue: any) => void }) {
    return (
        <Autocomplete
            disablePortal
            id="oreDisponibile"
            options={options}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} />}
            value={value}
            onChange={onChange}
        />
    );
}

const DiabetologPage = () => {
    const navigate = useNavigate();

    // BOX 1
    const [gresit, setGresit] = React.useState({ numeSiPrenume: false, cnp: false, diabetZaharat: false});
    const validateNumeSiPrenume = (value: string) => /^[a-zA-Z\s-]+$/.test(value);
    const validateCNP = (value: string) => /^[0-9]{13}$/.test(value);
    const validateDiabetZaharat = (value: string) => /^[a-zA-Z\s-]+$/.test(value);
    // const validateData = (value: string) => /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value);
    // const validateOra = (value: string) => /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/.test(value);

    const [numeSiPrenume, setNumeSiPrenume] = React.useState("");
    const [nrCrt, setNrCrt] = React.useState(0);
    const [cnp, setCnp] = React.useState("");
    const [diabetZaharat, setDiabetZaharat] = React.useState("");
    const [tipDiabetZaharat, setTipDiabetZaharat] = React.useState("tip 1");
    const [dataDiagnosticului, setDataDiagnosticului] = React.useState("");
    const [dataProgramarii, setDataProgramarii] = React.useState("");

    const [selectedDate, setSelectedDate] = React.useState(null);
    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
        setDataDiagnosticului(dayjs(newValue).format('DD/MM/YYYY'));
    };

    const [selectedDateProgramare, setSelectedDateProgramare] = React.useState(null);
    const handleDateChangeProgramare = (newValue) => {
        setSelectedDateProgramare(newValue);
        setDataProgramarii(dayjs(newValue).format('DD/MM/YYYY'));
    };

    const [listOreDisponibile, setListOreDisponibile] = useState([]);
    const [oraProgramarii, setOraProgramarii] = useState("");

    useEffect(() => {
        // const newTime = { label: '09:00' };
        // setListOreDisponibile([...listOreDisponibile, newTime]);

        // axios.post("http://localhost:8080/medici/GetOreDisponibile", dataProgramarii, {
        //     headers: {
        //         "content-type": "application/json"
        //     }
        // }).then((response: any) => {
        //     const oreDisponibile = response.data.map((oraDisponibila: any) => ({ label: oraDisponibila }));
        //     setListOreDisponibile([...oreDisponibile]);
        // });
    }, [dataProgramarii]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const allFieldsValid = Object.values(gresit).every(value => value === false);

        if(allFieldsValid) {
            const data = new FormData(event.currentTarget);
            const programareDTO = {
                numeSiPrenume: data.get('numeSiPrenumeField'),
                nrCrt: data.get('nrCrtField'),
                cnp: data.get('CNPField'),
                tipDiabetZaharat: tipDiabetZaharat,
                diabetZaharat: data.get('diabetZaharatField'),
                dataDiagnosticului: dataDiagnosticului,
                dataProgramarii: dataProgramarii,
                oraProgramarii: oraProgramarii,

            }
            console.log(programareDTO)

            if(oraProgramarii === ""){
                console.log("Indisponibil in data selectata")
            }else{
                console.log("Disponibil in data selectata")
            }

            // axios.post("http://localhost:8080/medici/login", loginDTO, {
            //     headers: {
            //         "content-type": "application/json"
            //     }
            // }).then((response: any) => {
            //     console.log(response)
            //     if (response.data.role === "diabetolog") {
            //         console.log(response.data)
            //         navigate("/DiabetologPage");
            //         // navigate("/MedicDiabetPage", { state: response.data.id })
            //     } else if (response.data.role === "oftalmolog") {
            //         console.log(response.data)
            //         navigate("/OftalmologPage");
            //         // navigate("/MedicOftalmologicPage", { state: response.data.id })
            //     }
            // }).catch((error: any) => {
            //     console.error(error)
            //     setGresit(true)
            // })
        }
    }

    const handleDeconectare = () => {
          navigate("/");
    };

    return (
        <div className="oftalmologPage">
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
                        <RadioButtonsGroup1 tipDiabetZaharat={tipDiabetZaharat} setTipDiabetZaharat={setTipDiabetZaharat}/>
                        <TextField
                            id="diabetZaharatField"
                            name="diabetZaharatField"
                            value={diabetZaharat}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setDiabetZaharat(value);
                                setGresit({ ...gresit, diabetZaharat: !validateDiabetZaharat(value) });
                            }}
                            error={gresit.diabetZaharat}
                            helperText={gresit.diabetZaharat ? "Diabet zaharat incorect." : ""}
                            sx={diabetZaharatSx}
                        />
                        <Typography sx={typographyDataDiagnosticuluiSx}>
                            Data diagnosticului:
                        </Typography>
                        {/*<TextField*/}
                        {/*    id="dataDiagnosticuluiField"*/}
                        {/*    name="dataDiagnosticuluiField"*/}
                        {/*    value={dataDiagnosticului}*/}
                        {/*    variant="standard"*/}
                        {/*    InputProps={{*/}
                        {/*        readOnly: true,*/}
                        {/*    }}*/}
                        {/*    sx={dataDiagnosticuluiSx}*/}
                        {/*/>*/}
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                sx={{marginBottom: "10px"}}
                                label="Selectează data"
                                value={selectedDate}
                                onChange={handleDateChange}
                                inputFormat="DD/MM/YYYY"
                                renderInput={(params) => <TextField {...params} />}
                                format="DD/MM/YYYY"
                            />
                        </LocalizationProvider>
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
                                value={selectedDateProgramare}
                                onChange={handleDateChangeProgramare}
                                inputFormat="DD/MM/YYYY"
                                renderInput={(params) => <TextField {...params} />}
                                format="DD/MM/YYYY"
                            />
                        </LocalizationProvider>
                        </Box>
                        <Box
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: "10px 10px",
                            }}
                        >
                            <ComboBox options={listOreDisponibile} value={oraProgramarii}
                                       onChange={(event, newValue) => setOraProgramarii(newValue?.label || "")}/>
                        </Box>
                        <Button sx={buttonProgrameazaSx} type="submit">
                            Programează
                        </Button>
                    </Box>
                </Box>
                <Button sx={buttonDeconectareSx} onClick={handleDeconectare}>
                    Deconectare
                </Button>
            </Box>
        </div>
    )
}

export default DiabetologPage;