import React, {useEffect} from 'react';
import axios from 'axios';
import {Button, Checkbox, CssBaseline, FormControlLabel, Radio, RadioGroup, TextField, Typography, Select,InputLabel,MenuItem,FormControl} from "@mui/material";
import Box from "@mui/material/Box";
import {
    centerBoxSx,
    CNPSx,
    dataDiagnosticuluiSx,
    diabetZaharatSx,
    nrCrtSx,
    numeSiPrenumeSx,
    typographyCNPSx,
    typographyDataDiagnosticuluiSx,
    typographyDiabetZaharatSx,
    typographyNrCrtSx,
    typographyNumeSiPrenumeSx,
    typographyTitluSx,
    boxSx,
    typographyHbA1CSx,
    HbA1CSx,
    typographyGlicemieSx,
    glicemieSx,
    typographyUreeSx,
    ureeSx,
    typographyCreatininaSx,
    creatininaSx,
    typographyeRFGSx,
    eRFGSx,
    typographyHTASx,
    HTASx,
    typographyNeuropatieSx,
    neuropatieSx,
    typographyNefropatieSx,
    nefropatieSx,
    typographyCISx,
    CISx,
    typographyeAVCSx,
    AVCSx,
    typographyeIMASx,
    IMASx,
    typographyeHipercolesterolemieSx,
    hipercolesterolemieSx,
    typographyHipertrigliceridemieSx,
    hipertrigliceridemieSx,
    typographyTratamentDiabetInPrezentSx,
    insulinaSx,
    typographyInsulinaSx,
    ADOSx,
    typographyADOSx,
    dietaSx,
    typographyeDietaSx,
    nimicSx,
    typographyeNimicSx,
    typographyDiagnosticSx,
    typographyDiagnosticODSx,
    typographyDiagnosticOSSx,
    diagnosticODSx,
    diagnosticOSSx,
    typographyTratamentAnteriorOcularSx,
    typographyInjectieSx,
    injectieODSx,
    typographyInjectieODSx,
    injectieOSSx,
    typographyInjectieOSSx,
    typographyPanfotocoagulareSx,
    panfotocoagulareODSx,
    typographyPanfotocoagulareODSx,
    panfotocoagulareOSSx,
    typographyPanfotocoagulareOSSx,
    typographyRecomandariSx,
    typographySauSx,
    recomandareFieldSx,
    typographyTratamentRecomandatSx,
    tratamentFieldSx,
    ambulatorInFieldSx,
    typographyInSx,
    ambulatorLaFieldSx,
    typographyAmbulatorSx,
    typographyControlOftalmologicSx,
    typographyAnSx,
    pesteLuniSx,
    typographyLuniSx,
    pesteSaptamaniSx,
    typographySaptamaniSx,
    typographyDataSx,
    lastBoxSx,
    typographyMedicExaminatorSx,
    acuitateOSSx,
    typographyAcuitateOSSx,
    acuitateODSx,
    typographyAcuitateODSx,
    typographyAcuitateSx,
    typographySegmentAnteriorSx,
    typographyRubeozaIrianaSx,
    typographyRubeozaIrianaODSx,
    typographyRubeozaIrianaOSSx,
    typographyStadiulSx,
    typographyFaraRetinopatieDiabeticaSx,
    typographyFaraRetinopatieDiabeticaODSx,
    typographyFaraRetinopatieDiabeticaOSSx,
    typographyRetinopatieDiabeticaNeproliferativaSx,
    typographyUsoaraSx,
    typographyUsoaraODSx,
    typographyUsoaraOSSx,
    typographyModerataSx,
    typographyModerataODSx,
    typographyModerataOSSx,
    typographySeveraSx,
    typographySeveraODSx,
    typographySeveraOSSx,
    typographyRetinopatieDiabeticaProliferativaSx,
    typographyRetinopatieDiabeticaProliferativaODSx,
    typographyRetinopatieDiabeticaProliferativaOSSx,
    typographyEdemMacularSx,
    typographyEdemMacularODSx,
    typographyEdemMacularOSSx,
    typographyNuSeCunoasteOSSx,
    typographyNuSeCunoasteODSx,
    typographyNuSeCunoasteSx,
    typographyMaiRauOSSx,
    typographyMaiRauODSx,
    typographyMaiRauSx,
    typographyMaiBineOSSx,
    typographyMaiBineODSx,
    typographyMaiBineSx,
    typographyLaFelOSSx,
    typographyLaFelODSx, typographyLaFelSx, typographyComparativSx, typographyDetaliiSx, typographyAlteModificariSx,
    medicExaminatorFieldSx, buttonDeconectareSx, buttonSalvareSx, typographyPesteLuniSx, typographyPesteSaptamaniSx,
} from "./OftalmologPage.styles";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {useLocation, useNavigate} from "react-router-dom";
import dayjs from "dayjs";


function RadioButtonsGroupTipDiabetZaharat({ tipDiabetZaharat, setTipDiabetZaharat }) {
    return (
        <FormControl >
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={tipDiabetZaharat}
                name="radio-buttons-group"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "5px 10px",
                    height: "100%",
                    width: "100%"
                }}
              //  onChange={(e) => setTipDiabetZaharat(e.target.value)}
            >
                <FormControlLabel value="tip 1" control={<Radio />} label="tip 1" />
                <FormControlLabel value="tip 2" control={<Radio />} label="tip 2" />
            </RadioGroup>
        </FormControl>
    );
}

function RadioButtonsGroupTipHbA1C({ tipHbA1C, setTipHbA1C }) {
    return (
        <FormControl style={{ display: "flex", flexDirection: "row" }}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={tipHbA1C}
                name="radio-buttons-group"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "5px 10px",
                    height: "100%",
                    width: "100%"
                }}
                onChange={(e) => setTipHbA1C(e.target.value)}
            >
                <FormControlLabel value="< 6 luni" control={<Radio />} label="< 6 luni" />
                <FormControlLabel value=">= 6 luni" control={<Radio />} label=">= 6 luni;" />
            </RadioGroup>
        </FormControl>
    );
}

function RadioButtonsGroupRecomandari({ recomandare, setRecomandare, setRecomandareField }) {
    return (
        <FormControl style={{width: "40%"}}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={recomandare}
                name="radio-buttons-group"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "5px 10px",
                    height: "100%",
                    width: "100%"
                }}
                onChange={(e) => {
                    const value = e.target.value;
                    setRecomandare(value);
                    if (value === "Doar monitorizare") {
                        setRecomandareField("");
                    }
                }}
            >
                <FormControlLabel value="Doar monitorizare" control={<Radio />} label="Doar monitorizare" />
                <Typography sx={typographySauSx}> sau </Typography>
                <FormControlLabel value="Examinare suplimentara" control={<Radio />} label="Examinare suplimentară:" />
            </RadioGroup>
        </FormControl>
    );
}

function handleDetaliiFundDeOchi(event, setDetaliiFundDeOchiText) {
    const text = event.target.value;
    setDetaliiFundDeOchiText(text);
}

function handleAlteModificariOculare(event, setAlteModificariOculareText) {
    const text = event.target.value;
    setAlteModificariOculareText(text);
}

function RadioButtonsGroupUrmatorulControl({ urmatorulControl, setUrmatorulControl, pesteLuni, setPesteLuni, pesteSaptamani, setPesteSaptamani }) {
    return (
        <FormControl style={{width: "40%"}}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={urmatorulControl}
                name="radio-buttons-group"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "0px 10px",
                    height: "100%",
                    width: "100%"
                }}
                onChange={(e) => {
                    const value = e.target.value;
                    setUrmatorulControl(value);
                    if (value === "an") {
                        setPesteLuni("");
                        setPesteSaptamani("");
                    }else if (value === "luni") {
                        setPesteSaptamani("");
                    }else if (value === "saptamani") {
                        setPesteLuni("");
                    }
                }}
            >
                <FormControlLabel value="an" control={<Radio />} label={""}/>
                <Typography sx={typographyAnSx}>
                    peste 1 an;
                </Typography>
                <FormControlLabel value="luni" control={<Radio />} label={""}/>
                <Typography sx={typographyPesteLuniSx}>
                    peste
                </Typography>
                <TextField
                    id="pesteLuniField"
                    name="pesteLuniField"
                    value={pesteLuni}
                    variant="standard"
                    type="number"
                    onChange={(e) => {
                        setPesteLuni(e.target.value);
                    }}
                    inputProps={{ step: "1" }}
                    sx={pesteLuniSx}
                    disabled={ urmatorulControl === "an" || urmatorulControl === "saptamani" }
                />
                <Typography sx={typographyLuniSx}>
                    luni;
                </Typography>
                <FormControlLabel value="saptamani" control={<Radio />}  label={""}/>
                <Typography sx={typographyPesteSaptamaniSx}>
                    peste
                </Typography>
                <TextField
                    id="pesteSaptamaniField"
                    name="pesteSaptamaniField"
                    value={pesteSaptamani}
                    variant="standard"
                    type="number"
                    onChange={(e) => {
                        setPesteSaptamani(e.target.value);
                    }}
                    inputProps={{ step: "1" }}
                    sx={pesteSaptamaniSx}
                    disabled={ urmatorulControl === "an" || urmatorulControl === "luni" }
                />
                <Typography sx={typographySaptamaniSx}>
                    săptămâni;
                </Typography>
            </RadioGroup>
        </FormControl>
    );
}

const OftalmologPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // BOX 1
    const [numeSiPrenume, setNumeSiPrenume] = React.useState("");
    const [nrCrt, setNrCrt] = React.useState();
    const [cnp, setCnp] = React.useState("");
    const [diabetZaharat, setDiabetZaharat] = React.useState("");
    const [tipDiabetZaharat, setTipDiabetZaharat] = React.useState("");
    const [dataDiagnosticului, setDataDiagnosticului] = React.useState("");


    // BOX 2
    const [HbA1C, setHbA1C] = React.useState(0); // double
    const [tipHbA1C, setTipHbA1C] = React.useState("< 6 luni"); // string
    const [glicemie, setGlicemie] = React.useState(0); // double
    const [uree, setUree] = React.useState(0); // double
    const [creatinina, setCreatinina] = React.useState(0); // double
    const [eRFG, setERFG] = React.useState(0); // double
    const [HTA, setHTA] = React.useState(false); // boolean
    const handleChangeHTA = (event) => {
        setHTA(event.target.checked);
    };
    const [neuropatie, setNeuropatie] = React.useState(false); // boolean
    const handleChangeNeuropatie = (event) => {
        setNeuropatie(event.target.checked);
    };
    const [nefropatie, setNefropatie] = React.useState(false); // boolean
    const handleChangeNefropatie= (event) => {
        setNefropatie(event.target.checked);
    };
    const [CI, setCI] = React.useState(false); // boolean
    const handleChangeCI = (event) => {
        setCI(event.target.checked);
    };
    const [AVC, setAVC] = React.useState(false); // boolean
    const handleChangeAVC = (event) => {
        setAVC(event.target.checked);
    };
    const [IMA, setIMA] = React.useState(false); // boolean
    const handleChangeIMA = (event) => {
        setIMA(event.target.checked);
    };
    const [hipercolesterolemie, setHipercolesterolemie] = React.useState(false); // boolean
    const handleChangeHipercolesterolemie = (event) => {
        setHipercolesterolemie(event.target.checked);
    };
    const [hipertrigliceridemie, setHipertrigliceridemie] = React.useState(false); // boolean
    // const [HTA, setHTA] = React.useState("sasa");
    // const [neuropatie, setNeuropatie] = React.useState("sasa");
    // const [nefropatie, setNefropatie] = React.useState("sasa");
    // const [CI, setCI] = React.useState("sasa");
    // const [AVC, setAVC] = React.useState("sasa");
    // const [IMA, setIMA] = React.useState("sasa");
    // const [hipercolesterolemie, setHipercolesterolemie] = React.useState("sasa");
    // const [hipertrigliceridemie, setHipertrigliceridemie] = React.useState("sasa");
    const handleChangeHipertrigliceridemie = (event) => {
        setHipertrigliceridemie(event.target.checked);
    };
    const [insulina, setInsulina] = React.useState(false); // boolean
    const handleChangeInsulina = (event) => {
        setInsulina(event.target.checked);
    };
    const [ADO, setADO] = React.useState(false); // boolean
    const handleChangeAdo = (event) => {
        setADO(event.target.checked);
    };
    const [dieta, setDieta] = React.useState(false); // boolean
    const handleChangeDieta = (event) => {
        setDieta(event.target.checked);
    };
    const [nimic, setNimic] = React.useState(false); // boolean, daca ii selectat cele din stanga nu pot fi selectate
    const handleChangeNimic = (event) => {
        setNimic(event.target.checked);
        if (event.target.checked) {
            setInsulina(false);
            setADO(false);
            setDieta(false);
        }
    };

    // Box 3
    const [acuitateOD, setAcuitateOD] = React.useState(0); // double
    const [acuitateOS, setAcuitateOS] = React.useState(0); // double
    const [rubeozaIrianaOD, setRubeozaIrianaOD] = React.useState(false); // boolean
    const handleChangeRubeozaIrianaOD = (event) => {
        setRubeozaIrianaOD(event.target.checked);
    };
    const [rubeozaIrianaOS, setRubeozaIrianaOS] = React.useState(false); // boolean
    const handleChangeRubeozaIrianaOS = (event) => {
        setRubeozaIrianaOS(event.target.checked);
    };
    const [faraRetinopatieDiabeticaOD, setFaraRetinopatieDiabeticaOD] = React.useState(false); // boolean
    const handleChangeFaraRetinopatieDiabeticaOD = (event) => {
        setFaraRetinopatieDiabeticaOD(event.target.checked);
        if (event.target.checked) {
            setUsoaraOD(false);
            setModerataOD(false);
            setSeveraOD(false);
            setRetinopatieDiabeticaProliferativaOD(false);
            setEdemMacularOD(false)
        }
    };
    const [faraRetinopatieDiabeticaOS, setFaraRetinopatieDiabeticaOS] = React.useState(false); // boolean
    const handleChangeFaraRetinopatieDiabeticaOS = (event) => {
        setFaraRetinopatieDiabeticaOS(event.target.checked);
        if (event.target.checked) {
            setUsoaraOS(false);
            setModerataOS(false);
            setSeveraOS(false);
            setRetinopatieDiabeticaProliferativaOS(false);
            setEdemMacularOS(false)
        }
    };
    const [usoaraOD, setUsoaraOD] = React.useState(false); // boolean
    const handleChangeUsoaraOD = (event) => {
        setUsoaraOD(event.target.checked);
        if (event.target.checked) {
            setFaraRetinopatieDiabeticaOD(false);
            setModerataOD(false);
            setSeveraOD(false);
            setRetinopatieDiabeticaProliferativaOD(false);
        }
    };
    const [usoaraOS, setUsoaraOS] = React.useState(false); // boolean
    const handleChangeUsoaraOS = (event) => {
        setUsoaraOS(event.target.checked);
        if (event.target.checked) {
            setFaraRetinopatieDiabeticaOS(false);
            setModerataOS(false);
            setSeveraOS(false);
            setRetinopatieDiabeticaProliferativaOS(false);
        }
    };
    const [moderataOD, setModerataOD] = React.useState(false); // boolean
    const handleChangeModerataOD = (event) => {
        setModerataOD(event.target.checked);
        if (event.target.checked) {
            setFaraRetinopatieDiabeticaOD(false);
            setUsoaraOD(false);
            setSeveraOD(false);
            setRetinopatieDiabeticaProliferativaOD(false);
        }
    };
    const [moderataOS, setModerataOS] = React.useState(false); // boolean
    const handleChangeModerataOS = (event) => {
        setModerataOS(event.target.checked);
        if (event.target.checked) {
            setFaraRetinopatieDiabeticaOS(false);
            setUsoaraOS(false);
            setSeveraOS(false);
            setRetinopatieDiabeticaProliferativaOS(false);
        }
    };
    const [severaOD, setSeveraOD] = React.useState(false); // boolean
    const handleChangeSeveraOD = (event) => {
        setSeveraOD(event.target.checked);
        if (event.target.checked) {
            setFaraRetinopatieDiabeticaOD(false);
            setUsoaraOD(false);
            setModerataOD(false);
            setRetinopatieDiabeticaProliferativaOD(false);
        }
    };
    const [severaOS, setSeveraOS] = React.useState(false); // boolean
    const handleChangeSeveraOS = (event) => {
        setSeveraOS(event.target.checked);
        if (event.target.checked) {
            setFaraRetinopatieDiabeticaOS(false);
            setUsoaraOS(false);
            setModerataOS(false);
            setRetinopatieDiabeticaProliferativaOS(false);
        }
    };
    const [retinopatieDiabeticaProliferativaOD, setRetinopatieDiabeticaProliferativaOD] = React.useState(false); // boolean
    const handleChangeRetinopatieDiabeticaProliferativaOD = (event) => {
        setRetinopatieDiabeticaProliferativaOD(event.target.checked);
        if (event.target.checked) {
            setFaraRetinopatieDiabeticaOD(false);
            setUsoaraOD(false);
            setModerataOD(false);
            setSeveraOD(false);
        }
    };
    const [retinopatieDiabeticaProliferativaOS, setRetinopatieDiabeticaProliferativaOS] = React.useState(false); // boolean
    const handleChangeRetinopatieDiabeticaProliferativaOS = (event) => {
        setRetinopatieDiabeticaProliferativaOS(event.target.checked);
        if (event.target.checked) {
            setFaraRetinopatieDiabeticaOS(false);
            setUsoaraOS(false);
            setModerataOS(false);
            setSeveraOS(false);
        }
    };
    const [edemMacularOD, setEdemMacularOD] = React.useState(false); // boolean
    const handleChangeEdemMacularOD = (event) => {
        setEdemMacularOD(event.target.checked);
    };
    const [edemMacularOS, setEdemMacularOS] = React.useState(false); // boolean
    const handleChangeEdemMacularOS = (event) => {
        setEdemMacularOS(event.target.checked);
    };
    const [laFelOD, setLaFelOD] = React.useState(false); // boolean
    const handleChangeLaFelOD = (event) => {
        setLaFelOD(event.target.checked);
        if (event.target.checked) {
            setMaiBineOD(false);
            setMaiRauOD(false);
            setNuSeCunoasteOD(false);
        }
    };
    const [laFelOS, setLaFelOS] = React.useState(false); // boolean
    const handleChangeLaFelOS = (event) => {
        setLaFelOS(event.target.checked);
        if (event.target.checked) {
            setMaiBineOS(false);
            setMaiRauOS(false);
            setNuSeCunoasteOS(false);
        }
    };
    const [maiBineOD, setMaiBineOD] = React.useState(false); // boolean
    const handleChangeMaiBineOD = (event) => {
        setMaiBineOD(event.target.checked);
        if (event.target.checked) {
            setLaFelOD(false);
            setMaiRauOD(false);
            setNuSeCunoasteOD(false);
        }
    };
    const [maiBineOS, setMaiBineOS] = React.useState(false); // boolean
    const handleChangeMaiBineOS = (event) => {
        setMaiBineOS(event.target.checked);
        if (event.target.checked) {
            setLaFelOS(false);
            setMaiRauOS(false);
            setNuSeCunoasteOS(false);
        }
    };
    const [maiRauOD, setMaiRauOD] = React.useState(false); // boolean
    const handleChangeMaiRauOD = (event) => {
        setMaiRauOD(event.target.checked);
        if (event.target.checked) {
            setLaFelOD(false);
            setMaiBineOD(false);
            setNuSeCunoasteOD(false);
        }
    };
    const [maiRauOS, setMaiRauOS] = React.useState(false); // boolean
    const handleChangeMaiRauOS = (event) => {
        setMaiRauOS(event.target.checked);
        if (event.target.checked) {
            setLaFelOS(false);
            setMaiBineOS(false);
            setNuSeCunoasteOS(false);
        }
    };
    const [nuSeCunoasteOD, setNuSeCunoasteOD] = React.useState(false); // boolean
    const handleChangeNuSeCunoasteOD = (event) => {
        setNuSeCunoasteOD(event.target.checked);
        if (event.target.checked) {
            setLaFelOD(false);
            setMaiBineOD(false);
            setMaiRauOD(false);
        }
    };
    const [nuSeCunoasteOS, setNuSeCunoasteOS] = React.useState(false); // boolean
    const handleChangeNuSeCunoasteOS = (event) => {
        setNuSeCunoasteOS(event.target.checked);
        if (event.target.checked) {
            setLaFelOS(false);
            setMaiBineOS(false);
            setMaiRauOS(false);
        }
    };
    const [detaliiFundDeOchiText, setDetaliiFundDeOchiText] = React.useState("");
    const [alteModificareOculareText, setAlteModificariOculareText] = React.useState("");

    // Box 4
    const [injectieNumarOD, setInjectieNumarOD] = React.useState(); // double
    const [injectieDozaOD, setInjectieDozaOD] = React.useState(); // double
    const [injectieNumarOS, setInjectieNumarOS] = React.useState(); // double
    const [injectieDozaOS, setInjectieDozaOS] = React.useState(); // double
    const [panfotocoagulareOD, setPanfotocoagulareOD] = React.useState(""); // string nu stie
    const [panfotocoagulareOS, setPanfotocoagulareOS] = React.useState(""); // string nu stie

    // BOX 5
    const [diagnosticOD, setDiagnosticOD] = React.useState(""); // string
    const [diagnosticOS, setDiagnosticOS] = React.useState(""); // string

    // BOX 6
    const [recomandare, setRecomandare] = React.useState("Doar monitorizare"); // string
    const [recomandareField, setRecomandareField] = React.useState(""); // string doar daca ii selectat "Examinare suplimentara"
    const [tratament, setTratament] = React.useState(false); // boolean
    const handleChangeTratament = (event) => {
        setTratament(event.target.checked);
        if(!event.target.checked){
            setTratamentField("");
        }
    };
    const [tratamentField, setTratamentField] = React.useState(""); // doar daca ii selectat
    const [urmatorulControl, setUrmatorulControl] = React.useState("an")
    const [pesteLuni, setPesteLuni] = React.useState(); // double - trebe sa il fac comobox
    const [pesteSaptamani, setPesteSaptamani] = React.useState(); // double - trebe sa il fac comobox
    const [ambulator, setAmbulator] = React.useState(false); // boolean
    const handleChangeAmbulator = (event) => {
        setAmbulator(event.target.checked);
        if (!event.target.checked) {
            setAmbulatorLaField("");
            setAmbulatorInField("");
        }
    };
    const [ambulatorLaField, setAmbulatorLaField] = React.useState(""); // string, numa daca ii selectat
    const [ambulatorInField, setAmbulatorInField] = React.useState(""); // string, numa daca ii selectat

    // LAST BOX
    const [selectedData, setSelectedData] = React.useState(dayjs()); // initial sa fie ziua de azi
    const handleDataChange = (newValue) => {
        setSelectedData(newValue);
    };
    const [medicExaminatorField, setMedicExaminatorField] = React.useState(location.state.nume + " " + location.state.prenume);
    const handleSalvare = () => {
        // if (selectedData) {
            const esteAn = (urmatorulControl === "an")

            const fisaMedicalaDTO = {
                idProgramare: selectedProgramare.id,
                // Box 2
                HbA1C: HbA1C,
                tipHbA1C: tipHbA1C,
                glicemie: glicemie,
                uree: uree,
                creatinina: creatinina,
                eRFG: eRFG,
                hta: HTA,
                neuropatie: neuropatie,
                nefropatie: nefropatie,
                ci: CI,
                avc: AVC,
                ima: IMA,
                hipercolesterolomie: hipercolesterolemie,
                hipertrigliceridemie: hipertrigliceridemie,
                insulina: insulina,
                ado: ADO,
                dieta: dieta,
                nimic: nimic,
                //box3
                detaliiFundDeOchi: detaliiFundDeOchiText,
                alteModalitatiOculare: alteModificareOculareText,
                acuitateVizualaOD: acuitateOD,
                acuitateVizualaOS: acuitateOS,
                rubeozaIrianaOD: rubeozaIrianaOD,
                rubeozaIrianaOS: rubeozaIrianaOS,
                faraRetinopatieDiabeticaOD: faraRetinopatieDiabeticaOD,
                faraRetinopatieDiabeticaOS: faraRetinopatieDiabeticaOS,
                retinopatieDiabeticaNeproliferativaUsoaraOD: usoaraOD,
                retinopatieDiabeticaNeproliferativaUsoaraOS: usoaraOS,
                retinopatieDiabeticaNeproliferativaMedieOD: moderataOD,
                retinopatieDiabeticaNeproliferativaMedieOS: moderataOS,
                retinopatieDiabeticaNeproliferativaSeveraOD: severaOD,
                retinopatieDiabeticaNeproliferativaSeveraOS: severaOS,
                retinopatieDiabeticaProliferativaOD: retinopatieDiabeticaProliferativaOD,
                retinopatieDiabeticaProliferativaOS: retinopatieDiabeticaProliferativaOS,
                edemMacularClinicSemnificativOD: edemMacularOD,
                edemMacularClinicSemnificativOS: edemMacularOS,
                comparativCuUltimaExaminareLaFelOD: laFelOD,
                comparativCuUltimaExaminareLaFelOS: laFelOS,
                comparativCuUltimaExaminareMaiBineOS: maiBineOD,
                comparativCuUltimaExaminareMaiBineOD: maiBineOS,
                comparativCuUltimaExaminareMaiRauOD: maiRauOD,
                comparativCuUltimaExaminareMaiRauOS: maiRauOS,
                comparativCuUltimaExaminareNuSeCunoasteOD: nuSeCunoasteOD,
                comparativCuUltimaExaminareNuSeCunoasteOS: nuSeCunoasteOS,
                //box4
                injectieNumarOS: injectieNumarOS,
                injectieDozaOS: injectieDozaOS,
                injectieNumarOD: injectieNumarOD,
                injectieDozaOD: injectieDozaOD,
                laserOD: panfotocoagulareOD,
                laserOS: panfotocoagulareOS,
                //box5
                diagnosticOD: diagnosticOD,
                diagnosticOS: diagnosticOS,
                //box6
                recomandare: recomandare,
                recomandareField: recomandareField,
                tratament: tratament,
                tratamentField: tratamentField,
                peste1An: esteAn,
                pesteLuni: pesteLuni,
                pesteSaptamani: pesteSaptamani,
                ambulator: ambulator,
                ambulatorLaField: ambulatorLaField,
                ambulatorInField: ambulatorInField,
                data: selectedData,
                MedicExaminator: medicExaminatorField,
            };

            console.log(fisaMedicalaDTO);

            axios.post("http://localhost:8080/medici/fisaMedicala/saveFisaMedicala", fisaMedicalaDTO, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                navigate("/OftalmologPage", { state: location.state });
                console.log(response.data)
            });
        // }
    };
    const handleDeconectare = () => {
        navigate("/");
    };

    const [selectedDataProgramarii, setSelectedDataProgramarii] = React.useState(dayjs()); // initial sa fie ziua de azi
    const handleDataProgramariiChange = (newValue) => {
        setSelectedDataProgramarii(newValue);
        setOraProgramarii("");
    };
    const [listOreDisponibile, setListOreDisponibile] = React.useState([]);
    const [oraProgramarii, setOraProgramarii] = React.useState("");
    const [selectedProgramare, setSelectedProgramare] = React.useState(null);
    
    useEffect(() => {
        axios.post("http://localhost:8080/medici/fisaMedicala/getProgramariCurente", selectedDataProgramarii,{
            headers: {
                "content-type": "application/json"
            }
        }).then((response) => {
            const oreDisponibile = response.data.map(programare => ({
                time: dayjs(programare.startTime).format('HH:mm'),
                details: programare
            }));
            setListOreDisponibile(oreDisponibile);
        }).catch((err) => {
            console.error(err);
        });
    }, [selectedDataProgramarii]);

    const handleProgramareChange = (event) => {
        const selectedTime = event.target.value;
        setOraProgramarii(selectedTime);

        const programareDetails = listOreDisponibile.find(programare => programare.time === selectedTime);
        setSelectedProgramare(programareDetails?.details);

        if (programareDetails?.details) {
            const { pacient } = programareDetails.details;
    
            setNumeSiPrenume(pacient.numePrenume || "");
            setNrCrt(pacient.nrCrt || 0);
            setCnp(pacient.cnp || "");
            setTipDiabetZaharat(pacient.diabetZaharat || "tip 1");
            setDiabetZaharat(pacient.diabetZaharatField || "");
            setDataDiagnosticului(dayjs(pacient.dataDiagnosticului).format("DD/MM/YYYY") || "");
        }
    };

    useEffect(() => {
        if (selectedProgramare) {
            console.log("Programare selectată:", selectedProgramare);
        }
    }, [selectedProgramare]);

    return (
        <div className="oftalmologPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx}>
                <Box sx={{ width: "90%", display:  "flex",justifyContent:"flex-end", alignItems: "center"}}>
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                label="Data"
                                value={selectedDataProgramarii}
                                onChange={handleDataProgramariiChange}
                                inputFormat="DD/MM/YYYY"
                                slotProps={{ textField: { variant: 'standard' } }}
                                format="DD/MM/YYYY"
                            />
                        </LocalizationProvider>
                    </Box>
                    <FormControl variant="standard" sx={{ ml: "10px", padding: "10px 10px", width: "200px" }}>
                        <InputLabel id="select-ora-label" sx={{padding: "10px 10px"}}>Ora Programării</InputLabel>
                        <Select
                            labelId="ora-programarii-label"
                            id="ora-programarii"
                            value={oraProgramarii}
                            label="Ora programării"
                            onChange={handleProgramareChange}
                        >
                            {listOreDisponibile.map((programare, index) => (
                                <MenuItem key={index} value={programare.time}>
                                    {programare.time}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Typography sx={typographyTitluSx}>
                    SCREENING RETINOPATIE DIABETICĂ
                </Typography>
                {/* Box 1 */}
                <Box sx={boxSx}>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Typography sx={typographyNumeSiPrenumeSx}>
                            Nume și prenume:
                        </Typography>
                        <TextField
                            id="numeSiPrenumeField"
                            name="numeSiPrenumeField"
                            value={numeSiPrenume}
                            variant="standard"
                            InputProps={{
                                readOnly: true,
                            }}
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
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Typography sx={typographyCNPSx}>
                            CNP:
                        </Typography>
                        <TextField
                            id="CNPField"
                            name="CNPField"
                            value={cnp}
                            variant="standard"
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={CNPSx}
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Typography sx={typographyDiabetZaharatSx}>
                            Diabet zaharat:
                        </Typography>
                        <RadioButtonsGroupTipDiabetZaharat tipDiabetZaharat={tipDiabetZaharat} setTipDiabetZaharat={setTipDiabetZaharat}/>
                        <TextField
                            id="diabetZaharatField"
                            name="diabetZaharatField"
                            value={diabetZaharat}
                            variant="standard"
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={diabetZaharatSx}
                        />
                        <Typography sx={typographyDataDiagnosticuluiSx}>
                            Data diagnosticului:
                        </Typography>
                        <TextField
                            id="dataDiagnosticuluiField"
                            name="dataDiagnosticuluiField"
                            value={dataDiagnosticului}
                            variant="standard"
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={dataDiagnosticuluiSx}
                        />
                    </Box>
                </Box>
                {/* Box 2 */}
                <Box sx={boxSx}>
                    <Box sx={{display: "flex", flexDirection: "row", width: "100%"}}>
                        <Typography sx={typographyHbA1CSx}>
                            HbA1C:
                        </Typography>
                        <TextField
                            id="HbA1CField"
                            name="HbA1CField"
                            value={HbA1C}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setHbA1C(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={HbA1CSx}
                        />
                        <RadioButtonsGroupTipHbA1C tipHbA1C={tipHbA1C} setTipHbA1C={setTipHbA1C}/>
                        <Typography sx={typographyGlicemieSx}>
                            Glicemie:
                        </Typography>
                        <TextField
                            id="glicemieField"
                            name="glicemieField"
                            value={glicemie}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setGlicemie(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={glicemieSx}
                        />
                        <Typography sx={typographyUreeSx}>
                            Uree:
                        </Typography>
                        <TextField
                            id="ureeField"
                            name="ureeField"
                            value={uree}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setUree(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={ureeSx}
                        />
                        <Typography sx={typographyCreatininaSx}>
                            Creatinină:
                        </Typography>
                        <TextField
                            id="creatininaField"
                            name="creatininaField"
                            value={creatinina}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setCreatinina(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={creatininaSx}
                        />
                        <Typography sx={typographyeRFGSx}>
                            eRFG:
                        </Typography>
                        <TextField
                            id="eRFGField"
                            name="eRFGField"
                            value={eRFG}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setERFG(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={eRFGSx}
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "row", width: "100%"}}>
                        <Checkbox
                            checked={HTA}
                            onChange={handleChangeHTA}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyHTASx}>
                            HTA;
                        </Typography>
                        {/*<Typography sx={typographyHTASx}>*/}
                        {/*    HTA:*/}
                        {/*</Typography>*/}
                        {/*<TextField*/}
                        {/*    id="HTAField"*/}
                        {/*    name="HTAField"*/}
                        {/*    value={HTA}*/}
                        {/*    variant="standard"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        const value = e.target.value;*/}
                        {/*        setHTA(value);*/}
                        {/*    }}*/}
                        {/*    sx={HTASx}*/}
                        {/*/>*/}
                        <Checkbox
                            checked={neuropatie}
                            onChange={handleChangeNeuropatie}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyNeuropatieSx}>
                            Neuropatie;
                        </Typography>
                        {/*<Typography sx={typographyNeuropatieSx}>*/}
                        {/*    Neuropatie:*/}
                        {/*</Typography>*/}
                        {/*<TextField*/}
                        {/*    id="neuropatieField"*/}
                        {/*    name="neuropatieField"*/}
                        {/*    value={neuropatie}*/}
                        {/*    variant="standard"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        const value = e.target.value;*/}
                        {/*        setNeuropatie(value);*/}
                        {/*    }}*/}
                        {/*    sx={neuropatieSx}*/}
                        {/*/>*/}
                        <Checkbox
                            checked={nefropatie}
                            onChange={handleChangeNefropatie}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyNefropatieSx}>
                            Nefropatie;
                        </Typography>
                        {/*<Typography sx={typographyNefropatieSx}>*/}
                        {/*    Nefropatie:*/}
                        {/*</Typography>*/}
                        {/*<TextField*/}
                        {/*    id="nefropatieField"*/}
                        {/*    name="nefropatieField"*/}
                        {/*    value={nefropatie}*/}
                        {/*    variant="standard"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        const value = e.target.value;*/}
                        {/*        setNefropatie(value);*/}
                        {/*    }}*/}
                        {/*    sx={nefropatieSx}*/}
                        {/*/>*/}
                        <Checkbox
                            checked={CI}
                            onChange={handleChangeCI}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyCISx}>
                            CI;
                        </Typography>
                        {/*<Typography sx={typographyCISx}>*/}
                        {/*    CI:*/}
                        {/*</Typography>*/}
                        {/*<TextField*/}
                        {/*    id="CIField"*/}
                        {/*    name="CIField"*/}
                        {/*    value={CI}*/}
                        {/*    variant="standard"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        const value = e.target.value;*/}
                        {/*        setCI(value);*/}
                        {/*    }}*/}
                        {/*    sx={CISx}*/}
                        {/*/>*/}
                        <Checkbox
                            checked={AVC}
                            onChange={handleChangeAVC}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyeAVCSx}>
                            AVC;
                        </Typography>
                        {/*<Typography sx={typographyeAVCSx}>*/}
                        {/*    AVC:*/}
                        {/*</Typography>*/}
                        {/*<TextField*/}
                        {/*    id="AVCField"*/}
                        {/*    name="AVCField"*/}
                        {/*    value={AVC}*/}
                        {/*    variant="standard"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        const value = e.target.value;*/}
                        {/*        setAVC(value);*/}
                        {/*    }}*/}
                        {/*    sx={AVCSx}*/}
                        {/*/>*/}
                        <Checkbox
                            checked={IMA}
                            onChange={handleChangeIMA}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyeIMASx}>
                            IMA;
                        </Typography>
                        {/*<Typography sx={typographyeIMASx}>*/}
                        {/*    IMA:*/}
                        {/*</Typography>*/}
                        {/*<TextField*/}
                        {/*    id="IMAField"*/}
                        {/*    name="IMAField"*/}
                        {/*    value={IMA}*/}
                        {/*    variant="standard"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        const value = e.target.value;*/}
                        {/*        setIMA(value);*/}
                        {/*    }}*/}
                        {/*    sx={IMASx}*/}
                        {/*/>*/}
                        <Checkbox
                            checked={hipercolesterolemie}
                            onChange={handleChangeHipercolesterolemie}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyeHipercolesterolemieSx}>
                            Hipercolesterolemie;
                        </Typography>
                        {/*<Typography sx={typographyeHipercolesterolemieSx}>*/}
                        {/*    Hipercolesterolemie:*/}
                        {/*</Typography>*/}
                        {/*<TextField*/}
                        {/*    id="HipercolesterolemieField"*/}
                        {/*    name="HipercolesterolemieField"*/}
                        {/*    value={hipercolesterolemie}*/}
                        {/*    variant="standard"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        const value = e.target.value;*/}
                        {/*        setHipercolesterolemie(value);*/}
                        {/*    }}*/}
                        {/*    sx={hipercolesterolemieSx}*/}
                        {/*/>*/}
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "row", width: "100%"}}>
                        <Checkbox
                            checked={hipertrigliceridemie}
                            onChange={handleChangeHipertrigliceridemie}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyHipertrigliceridemieSx}>
                            Hipertrigliceridemie;
                        </Typography>
                        {/*<Typography sx={typographyHipertrigliceridemieSx}>*/}
                        {/*    Hipertrigliceridemie:*/}
                        {/*</Typography>*/}
                        {/*<TextField*/}
                        {/*    id="HipertrigliceridemieField"*/}
                        {/*    name="HipertrigliceridemieField"*/}
                        {/*    value={hipertrigliceridemie}*/}
                        {/*    variant="standard"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        const value = e.target.value;*/}
                        {/*        setHipertrigliceridemie(value);*/}
                        {/*    }}*/}
                        {/*    sx={hipertrigliceridemieSx}*/}
                        {/*/>*/}
                        <Typography sx={typographyTratamentDiabetInPrezentSx}>
                            Tratament diabet în prezent:
                        </Typography>
                         <Checkbox
                            checked={insulina}
                            onChange={handleChangeInsulina}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                            disabled={nimic}
                        />
                        <Typography sx={typographyInsulinaSx}>
                            Insulină;
                        </Typography>
                        <Checkbox
                            checked={ADO}
                            onChange={handleChangeAdo}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                            disabled={nimic}
                        />
                        <Typography sx={typographyADOSx}>
                            ADO;
                        </Typography>
                        <Checkbox
                            checked={dieta}
                            onChange={handleChangeDieta}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                            disabled={nimic}
                        />
                        <Typography sx={typographyeDietaSx}>
                            Dietă;
                        </Typography>
                        <Checkbox
                            checked={nimic}
                            onChange={handleChangeNimic}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyeNimicSx}>
                            Nimic.
                        </Typography> 
                    </Box>
                </Box>
                {/* Box 3 */}
                <Box sx={boxSx}>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Box sx={{display: "flex", flexDirection: 'column', width: "50%"}}>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyAcuitateSx}>
                                    Acuitate vizuală:
                                </Typography>
                                <Typography sx={typographyAcuitateODSx}>
                                    OD
                                </Typography>
                                <TextField
                                    id="acuitateODField"
                                    name="acuitateODField"
                                    value={acuitateOD}
                                    variant="standard"
                                    type="number"
                                    onChange={(e) => {
                                        setAcuitateOD(e.target.value);
                                    }}
                                    inputProps={{ step: "0.01" }}
                                    sx={acuitateODSx}
                                />
                                <Typography sx={typographyAcuitateOSSx}>
                                    OS
                                </Typography>
                                <TextField
                                    id="acuitateOSField"
                                    name="acuitateOSField"
                                    value={acuitateOS}
                                    variant="standard"
                                    type="number"
                                    onChange={(e) => {
                                        setAcuitateOS(e.target.value);
                                    }}
                                    inputProps={{ step: "0.01" }}
                                    sx={acuitateOSSx}
                                />
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographySegmentAnteriorSx}>
                                    Segment anterior:
                                </Typography>
                                <Typography sx={typographyRubeozaIrianaSx}>
                                    Rubeoză iriană
                                </Typography>
                                <Checkbox
                                    checked={rubeozaIrianaOD}
                                    onChange={handleChangeRubeozaIrianaOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyRubeozaIrianaODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={rubeozaIrianaOS}
                                    onChange={handleChangeRubeozaIrianaOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyRubeozaIrianaOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyStadiulSx}>
                                    Stadiul retinopatiei diabetice:
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyFaraRetinopatieDiabeticaSx}>
                                    Fără retinopatie diabetică
                                </Typography>
                                <Checkbox
                                    checked={faraRetinopatieDiabeticaOD}
                                    onChange={handleChangeFaraRetinopatieDiabeticaOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyFaraRetinopatieDiabeticaODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={faraRetinopatieDiabeticaOS}
                                    onChange={handleChangeFaraRetinopatieDiabeticaOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyFaraRetinopatieDiabeticaOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyRetinopatieDiabeticaNeproliferativaSx}>
                                    Retinopatie diabetică neproliferativă
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyUsoaraSx}>
                                    Ușoară
                                </Typography>
                                <Checkbox
                                    checked={usoaraOD}
                                    onChange={handleChangeUsoaraOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyUsoaraODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={usoaraOS}
                                    onChange={handleChangeUsoaraOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyUsoaraOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyModerataSx}>
                                    Moderată
                                </Typography>
                                <Checkbox
                                    checked={moderataOD}
                                    onChange={handleChangeModerataOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyModerataODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={moderataOS}
                                    onChange={handleChangeModerataOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyModerataOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographySeveraSx}>
                                    Severă
                                </Typography>
                                <Checkbox
                                    checked={severaOD}
                                    onChange={handleChangeSeveraOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographySeveraODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={severaOS}
                                    onChange={handleChangeSeveraOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographySeveraOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyRetinopatieDiabeticaProliferativaSx}>
                                    Retinopatie diabetică proliferativă
                                </Typography>
                                <Checkbox
                                    checked={retinopatieDiabeticaProliferativaOD}
                                    onChange={handleChangeRetinopatieDiabeticaProliferativaOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyRetinopatieDiabeticaProliferativaODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={retinopatieDiabeticaProliferativaOS}
                                    onChange={handleChangeRetinopatieDiabeticaProliferativaOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyRetinopatieDiabeticaProliferativaOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyEdemMacularSx}>
                                    Edem macular clinic semnificativ
                                </Typography>
                                <Checkbox
                                    checked={edemMacularOD}
                                    onChange={handleChangeEdemMacularOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyEdemMacularODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={edemMacularOS}
                                    onChange={handleChangeEdemMacularOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyEdemMacularOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyComparativSx}>
                                    Comparativ cu ultima examinare a Fundului de ochi:
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyLaFelSx}>
                                    La fel
                                </Typography>
                                <Checkbox
                                    checked={laFelOD}
                                    onChange={handleChangeLaFelOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyLaFelODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={laFelOS}
                                    onChange={handleChangeLaFelOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyLaFelOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyMaiBineSx}>
                                    Mai bine
                                </Typography>
                                <Checkbox
                                    checked={maiBineOD}
                                    onChange={handleChangeMaiBineOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyMaiBineODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={maiBineOS}
                                    onChange={handleChangeMaiBineOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyMaiBineOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyMaiRauSx}>
                                    Mai rău
                                </Typography>
                                <Checkbox
                                    checked={maiRauOD}
                                    onChange={handleChangeMaiRauOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyMaiRauODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={maiRauOS}
                                    onChange={handleChangeMaiRauOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyMaiRauOSSx}>
                                    OS
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                                <Typography sx={typographyNuSeCunoasteSx}>
                                    Nu se cunoaște aspectul precedent
                                </Typography>
                                <Checkbox
                                    checked={nuSeCunoasteOD}
                                    onChange={handleChangeNuSeCunoasteOD}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyNuSeCunoasteODSx}>
                                    OD
                                </Typography>
                                <Checkbox
                                    checked={nuSeCunoasteOS}
                                    onChange={handleChangeNuSeCunoasteOS}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{padding: "10px 10px"}}
                                />
                                <Typography sx={typographyNuSeCunoasteOSSx}>
                                    OS
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: 'column', alignItems: "center", justifyItems: "center", width: "50%",}}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'column',
                                alignItems: "center",
                                justifyItems: "center",
                                width: "98%",
                                height: "48%",
                                borderRadius: "2px",
                                border: "2px solid #adadad",
                                margin: "5px 0px",
                            }}>
                                <Typography sx={typographyDetaliiSx}>
                                    Detalii Fund de ochi (opțional):
                                </Typography>
                                <textarea
                                    id="detaliiFundDeOchi"
                                    style={{width: "98%", height: "85%"}}
                                    onInput={(event) => handleDetaliiFundDeOchi(event, setDetaliiFundDeOchiText)}
                                ></textarea>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'column',
                                width: "98%",
                                height: "48%",
                                borderRadius: "2px",
                                border: "2px solid #adadad",
                                margin: "5px 0px",
                                alignItems: "center",
                                justifyItems: "center",
                            }}>
                                <Typography sx={typographyAlteModificariSx}>
                                    Alte modificări oculare:
                                </Typography>
                                <textarea
                                    id="alteModificareOculare"
                                    style={{width: "98%", height: "85%"}}
                                    onInput={(event) => handleAlteModificariOculare(event, setAlteModificariOculareText)}
                                ></textarea>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* Box 4 */}
                <Box sx={boxSx}>
                    <Typography sx={typographyTratamentAnteriorOcularSx}>
                        Tratament anterior ocular:
                    </Typography>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Typography sx={typographyInjectieSx}>
                            Injectie intravitreeană anti-VEGF număr și ultima doză
                        </Typography>
                        <TextField
                            id="injectieNumarODField"
                            name="injectieNumarODField"
                            label="Număr"
                            value={injectieNumarOD}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setInjectieNumarOD(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={injectieODSx}
                        />
                        <TextField
                            id="injectieDozaODField"
                            name="injectieDozaODField"
                            label="Doză"
                            value={injectieDozaOD}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setInjectieDozaOD(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={injectieODSx}
                        />
                        <Typography sx={typographyInjectieODSx}>
                            OD;
                        </Typography>
                        <TextField
                            id="injectieNumarOSField"
                            name="injectieNumarOSField"
                            label="              Număr"
                            value={injectieNumarOS}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setInjectieNumarOS(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={injectieOSSx}
                        />
                        <TextField
                            id="injectieDozaOSField"
                            name="injectieDozaOSField"
                            label=" Doză"
                            value={injectieDozaOS}
                            variant="standard"
                            type="number"
                            onChange={(e) => {
                                setInjectieDozaOS(e.target.value);
                            }}
                            inputProps={{ step: "0.01" }}
                            sx={injectieOSSx}
                        />
                        <Typography sx={typographyInjectieOSSx}>
                            OS
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyPanfotocoagulareSx}>
                            Panfotocoagulare laser retiniană
                        </Typography>
                        <TextField
                            id="panfotocoagulareODField"
                            name="panfotocoagulareODField"
                            value={panfotocoagulareOD}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setPanfotocoagulareOD(value);
                            }}
                            sx={panfotocoagulareODSx}
                        />
                        <Typography sx={typographyPanfotocoagulareODSx}>
                            OD
                        </Typography>
                        <TextField
                            id="panfotocoagulareOSField"
                            name="panfotocoagulareOSField"
                            value={panfotocoagulareOS}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setPanfotocoagulareOS(value);
                            }}
                            sx={panfotocoagulareOSSx}
                        />
                        <Typography sx={typographyPanfotocoagulareOSSx}>
                            OS
                        </Typography>
                    </Box>
                </Box>
                {/* Box 5 */}
                <Box sx={boxSx}>
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyDiagnosticSx}>
                            Diagnostic:
                        </Typography>
                        <Box sx={{display: "flex", flexDirection: 'column', width: "100%"}}>
                            <Box sx={{display: "flex", flexDirection: 'row'}}>
                                <Typography sx={typographyDiagnosticODSx}>
                                    OD
                                </Typography>
                                <TextField
                                    id="diagnosticODField"
                                    name="diagnosticODField"
                                    value={diagnosticOD}
                                    variant="standard"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setDiagnosticOD(value);
                                    }}
                                    sx={diagnosticODSx}
                                />
                            </Box>
                            <Box sx={{display: "flex", flexDirection: 'row'}}>
                                <Typography sx={typographyDiagnosticOSSx}>
                                    OS
                                </Typography>
                                <TextField
                                    id="diagnosticOSField"
                                    name="diagnosticOSField"
                                    value={diagnosticOS}
                                    variant="standard"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setDiagnosticOS(value);
                                    }}
                                    sx={diagnosticOSSx}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* Box 6 */}
                <Box sx={boxSx}>
                    <Typography sx={typographyRecomandariSx}>
                        Recomandări:
                    </Typography>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <RadioButtonsGroupRecomandari recomandare={recomandare} setRecomandare={setRecomandare} setRecomandareField={setRecomandareField}/>
                        <TextField
                            id="recomandareField"
                            name="recomandareField"
                            value={recomandareField}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setRecomandareField(value);
                            }}
                            sx={recomandareFieldSx}
                            disabled={recomandare !== 'Examinare suplimentara'}
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Checkbox
                            checked={tratament}
                            onChange={handleChangeTratament}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyTratamentRecomandatSx}>
                            Tratament recomandat:
                        </Typography>
                        <TextField
                            id="tratamentField"
                            name="tratamentField"
                            value={tratamentField}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setTratamentField(value);
                            }}
                            sx={tratamentFieldSx}
                            disabled={!tratament}
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Typography sx={typographyControlOftalmologicSx}>
                            Următorul control oftalmologic:
                        </Typography>
                        <RadioButtonsGroupUrmatorulControl
                            urmatorulControl={urmatorulControl}
                            setUrmatorulControl={setUrmatorulControl}
                            pesteLuni={pesteLuni}
                            setPesteLuni={setPesteLuni}
                            pesteSaptamani={pesteSaptamani}
                            setPesteSaptamani={setPesteSaptamani}/>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Checkbox
                            checked={ambulator}
                            onChange={handleChangeAmbulator}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyAmbulatorSx}>
                            În ambulator Oftalmologie la
                        </Typography>
                        <TextField
                            id="ambulatorLaField"
                            name="ambulatorLaField"
                            value={ambulatorLaField}
                            variant="standard"
                            onChange={(e) => {
                                setAmbulatorLaField(e.target.value);
                                if(!ambulator) {
                                    setAmbulatorLaField("");
                                }
                            }}
                            sx={ambulatorLaFieldSx}
                            disabled={ !ambulator }
                        />
                        <Typography sx={typographyInSx}>
                            în
                        </Typography>
                        <TextField
                            id="ambulatorInField"
                            name="ambulatorInField"
                            value={ambulatorInField}
                            variant="standard"
                            onChange={(e) => {
                                setAmbulatorInField(e.target.value);
                                if(!ambulator) {
                                    setAmbulatorInField("");
                                }
                            }}
                            sx={ambulatorInFieldSx}
                            disabled={ !ambulator }
                        />
                    </Box>
                </Box>
                {/* Last Box */}
                <Box sx={lastBoxSx}>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Box sx={{display: "flex", flexDirection: 'column', width: "50%"}}>
                            <Typography sx={typographyDataSx}>
                                Data
                            </Typography>
                            <Box sx={{marginTop: "-10px"}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker
                                        label="Data"
                                        value={selectedData}
                                        onChange={handleDataChange}
                                        inputFormat="DD/MM/YYYY"
                                        slotProps={{ textField: { variant: 'standard' } }}
                                        format="DD/MM/YYYY"
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: 'column', alignItems: "center", width: "50%"}}>
                            <Typography sx={typographyMedicExaminatorSx}>
                                Medic examinator
                            </Typography>
                            <TextField
                                id="medicExaminatorField"
                                name="medicExaminatorField"
                                value={medicExaminatorField}
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={medicExaminatorFieldSx}
                            />
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center", width: "100%", gap: "5%"}}>
                        <Button sx={buttonSalvareSx} onClick={handleSalvare}>
                            Salvare
                        </Button>
                        <Button sx={buttonDeconectareSx} onClick={handleDeconectare}>
                            Deconectare
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default OftalmologPage;