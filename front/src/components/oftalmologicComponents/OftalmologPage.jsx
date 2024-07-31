import React from 'react';
import axios from 'axios';
import {Button, Checkbox, CssBaseline, FormControlLabel, Radio, RadioGroup, TextField, Typography} from "@mui/material";
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
    medicExaminatorFieldSx,
    buttonDeconectareSx,
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
} from "./OftalmologPage.styles";
import {FormControl} from "@mui/base";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {useNavigate} from "react-router-dom";


function RadioButtonsGroupTipDiabetZaharat({ tipDiabetZaharat, setTipDiabetZaharat }) {
    return (
        <FormControl>
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
                onChange={(e) => setTipDiabetZaharat(e.target.value)}
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
                sx={{ display: "flex", flexDirection: 'row',  }}
                onChange={(e) => setTipHbA1C(e.target.value)}
            >
                <FormControlLabel value="< 6 luni" control={<Radio />} label="< 6 luni" />
                <FormControlLabel value=">= 6 luni" control={<Radio />} label=">= 6 luni;" />
            </RadioGroup>
        </FormControl>
    );
}

function RadioButtonsGroupRecomandari({ recomandare, serRecomandare }) {
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
                onChange={(e) => serRecomandare(e.target.value)}
            >
                <FormControlLabel value="Doar monitorizare" control={<Radio />} label="Doar monitorizare" />
                <Typography sx={typographySauSx}> sau </Typography>
                <FormControlLabel value="Examinare suplimentara" control={<Radio />} label="Examinare suplimentară:" />
            </RadioGroup>
        </FormControl>
    );
}

function handleDetaliiFundDeOchi() {
    const text = document.getElementById("detaliiFundDeOchi").value;
    // setDetaliiFundDeOchiText(text);
    console.log(text);
}

function handleAlteModificariOculare() {
    const text = document.getElementById("alteModificareOculare").value;
    // setAlteModificariOculareText(text);
    console.log(text);
}

const OftalmologPage = () => {
    const navigate = useNavigate();

    // BOX 1
    const [numeSiPrenume, setNumeSiPrenume] = React.useState("asaASDADAaa asdaA a daJDA");
    const [nrCrt, setNrCrt] = React.useState(0);
    const [cnp, setCnp] = React.useState("5020204125790");
    const [diabetZaharat, setDiabetZaharat] = React.useState("asasasa");
    const [tipDiabetZaharat, setTipDiabetZaharat] = React.useState("tip 1");
    const [dataDiagnosticului, setDataDiagnosticului] = React.useState("05/02/2002");

    // BOX 2
    const [HbA1C, setHbA1C] = React.useState("sasa");
    const [tipHbA1C, setTipHbA1C] = React.useState("<6luni");
    const [glicemie, setGlicemie] = React.useState("sasa");
    const [uree, setUree] = React.useState("sasa");
    const [creatinina, setCreatinina] = React.useState("sasa");
    const [eRFG, setERFG] = React.useState("sasa");
    const [HTA, setHTA] = React.useState("sasa");
    const [neuropatie, setNeuropatie] = React.useState("sasa");
    const [nefropatie, setNefropatie] = React.useState("sasa");
    const [CI, setCI] = React.useState("sasa");
    const [AVC, setAVC] = React.useState("sasa");
    const [IMA, setIMA] = React.useState("sasa");
    const [hipercolesterolemie, setHipercolesterolemie] = React.useState("sasa");
    const [hipertrigliceridemie, setHipertrigliceridemie] = React.useState("sasa");
    const [insulina, setInsulina] = React.useState("sasa");
    const [ADO, setADO] = React.useState("sasa");
    const [dieta, setDieta] = React.useState("sasa");
    const [nimic, setNimic] = React.useState("sasa");

    // Box 3
    const [acuitateOD, setAcuitateOD] = React.useState("");
    const [acuitateOS, setAcuitateOS] = React.useState("");
    const [rubeozaIrianaOD, setRubeozaIrianaOD] = React.useState(false);
    const handleChangeRubeozaIrianaOD = (event) => {
        setRubeozaIrianaOD(event.target.checked);
    };
    const [rubeozaIrianaOS, setRubeozaIrianaOS] = React.useState(false);
    const handleChangeRubeozaIrianaOS = (event) => {
        setRubeozaIrianaOS(event.target.checked);
    };
    const [faraRetinopatieDiabeticaOD, setFaraRetinopatieDiabeticaOD] = React.useState(false);
    const handleChangeFaraRetinopatieDiabeticaOD = (event) => {
        setFaraRetinopatieDiabeticaOD(event.target.checked);
    };
    const [faraRetinopatieDiabeticaOS, setFaraRetinopatieDiabeticaOS] = React.useState(false);
    const handleChangeFaraRetinopatieDiabeticaOS = (event) => {
        setFaraRetinopatieDiabeticaOS(event.target.checked);
    };
    const [usoaraOD, setUsoaraOD] = React.useState(false);
    const handleChangeUsoaraOD = (event) => {
        setUsoaraOD(event.target.checked);
    };
    const [usoaraOS, setUsoaraOS] = React.useState(false);
    const handleChangeUsoaraOS = (event) => {
        setUsoaraOS(event.target.checked);
    };
    const [moderataOD, setModerataOD] = React.useState(false);
    const handleChangeModerataOD = (event) => {
        setModerataOD(event.target.checked);
    };
    const [moderataOS, setModerataOS] = React.useState(false);
    const handleChangeModerataOS = (event) => {
        setModerataOS(event.target.checked);
    };
    const [severaOD, setSeveraOD] = React.useState(false);
    const handleChangeSeveraOD = (event) => {
        setSeveraOD(event.target.checked);
    };
    const [severaOS, setSeveraOS] = React.useState(false);
    const handleChangeSeveraOS = (event) => {
        setSeveraOS(event.target.checked);
    };
    const [retinopatieDiabeticaProliferativaOD, setRetinopatieDiabeticaProliferativaOD] = React.useState(false);
    const handleChangeRetinopatieDiabeticaProliferativaOD = (event) => {
        setRetinopatieDiabeticaProliferativaOD(event.target.checked);
    };
    const [retinopatieDiabeticaProliferativaOS, setRetinopatieDiabeticaProliferativaOS] = React.useState(false);
    const handleChangeRetinopatieDiabeticaProliferativaOS = (event) => {
        setRetinopatieDiabeticaProliferativaOS(event.target.checked);
    };
    const [edemMacularOD, setEdemMacularOD] = React.useState(false);
    const handleChangeEdemMacularOD = (event) => {
        setEdemMacularOD(event.target.checked);
    };
    const [edemMacularOS, setEdemMacularOS] = React.useState(false);
    const handleChangeEdemMacularOS = (event) => {
        setEdemMacularOS(event.target.checked);
    };
    const [laFelOD, setLaFelOD] = React.useState(false);
    const handleChangeLaFelOD = (event) => {
        setLaFelOD(event.target.checked);
    };
    const [laFelOS, setLaFelOS] = React.useState(false);
    const handleChangeLaFelOS = (event) => {
        setLaFelOS(event.target.checked);
    };
    const [maiBineOD, setMaiBineOD] = React.useState(false);
    const handleChangeMaiBineOD = (event) => {
        setMaiBineOD(event.target.checked);
    };
    const [maiBineOS, setMaiBineOS] = React.useState(false);
    const handleChangeMaiBineOS = (event) => {
        setMaiBineOS(event.target.checked);
    };
    const [maiRauOD, setMaiRauOD] = React.useState(false);
    const handleChangeMaiRauOD = (event) => {
        setMaiRauOD(event.target.checked);
    };
    const [maiRauOS, setMaiRauOS] = React.useState(false);
    const handleChangeMaiRauOS = (event) => {
        setMaiRauOS(event.target.checked);
    };
    const [nuSeCunoasteOD, setNuSeCunoasteOD] = React.useState(false);
    const handleChangeNuSeCunoasteOD = (event) => {
        setNuSeCunoasteOD(event.target.checked);
    };
    const [nuSeCunoasteOS, setNuSeCunoasteOS] = React.useState(false);
    const handleChangeNuSeCunoasteOS = (event) => {
        setNuSeCunoasteOS(event.target.checked);
    };
    const [detaliiFundDeOchiText, setDetaliiFundDeOchiText] = React.useState("");
    const [alteModificareOculareText, setAlteModificariOculareText] = React.useState("");

    // Box 4
    const [injectieOD, setInjectieOD] = React.useState("");
    const [injectieOS, setInjectieOS] = React.useState("");
    const [panfotocoagulareOD, setPanfotocoagulareOD] = React.useState("");
    const [panfotocoagulareOS, setPanfotocoagulareOS] = React.useState("");

    // BOX 5
    const [diagnosticOD, setDiagnosticOD] = React.useState("");
    const [diagnosticOS, setDiagnosticOS] = React.useState("");

    // BOX 6
    const [recomandare, setRecomandare] = React.useState("");
    const [recomandareField, setRecomandareField] = React.useState("");
    const [tratament, setTratament] = React.useState(false);
    const handleChangeTratament = (event) => {
        setTratament(event.target.checked);
    };
    const [tratamentField, setTratamentField] = React.useState("");
    const [peste1An, setPeste1An] = React.useState(false);
    const handleChangePeste1An = (event) => {
        setPeste1An(event.target.checked);
    };
    const [pesteLuni, setPesteLuni] = React.useState("");
    const [pesteSaptamani, setPesteSaptamani] = React.useState("");
    const [ambulator, setAmbulator] = React.useState(false);
    const handleChangeAmbulator = (event) => {
        setAmbulator(event.target.checked);
        if (!event.target.checked) {
            setAmbulatorLaField("");
            setAmbulatorInField("");
        }
    };
    const [ambulatorLaField, setAmbulatorLaField] = React.useState("");
    const [ambulatorInField, setAmbulatorInField] = React.useState("");

    // LAST BOX
    const [selectedData, setSelectedData] = React.useState(null);
    const handleDataChange = (newValue) => {
        setSelectedData(newValue);
        // setGresit({...gresit, dataDiagnosticului: !newValue});
    };
    const [medicExaminatorField, setMedicExaminatorField] = React.useState("");

    const handleDeconectare = () => {
        navigate("/");
    };

    return (
        <div className="oftalmologPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx}>
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
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyHbA1CSx}>
                            HbA1C:
                        </Typography>
                        <TextField
                            id="HbA1CField"
                            name="HbA1CField"
                            value={HbA1C}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setHbA1C(value);
                            }}
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
                            onChange={(e) => {
                                const value = e.target.value;
                                setGlicemie(value);
                            }}
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
                            onChange={(e) => {
                                const value = e.target.value;
                                setUree(value);
                            }}
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
                            onChange={(e) => {
                                const value = e.target.value;
                                setCreatinina(value);
                            }}
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
                            onChange={(e) => {
                                const value = e.target.value;
                                setERFG(value);
                            }}
                            sx={eRFGSx}
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyHTASx}>
                            HTA:
                        </Typography>
                        <TextField
                            id="HTAField"
                            name="HTAField"
                            value={HTA}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setHTA(value);
                            }}
                            sx={HTASx}
                        />
                        <Typography sx={typographyNeuropatieSx}>
                            Neuropatie:
                        </Typography>
                        <TextField
                            id="neuropatieField"
                            name="neuropatieField"
                            value={neuropatie}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setNeuropatie(value);
                            }}
                            sx={neuropatieSx}
                        />
                        <Typography sx={typographyNefropatieSx}>
                            Nefropatie:
                        </Typography>
                        <TextField
                            id="nefropatieField"
                            name="nefropatieField"
                            value={nefropatie}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setNefropatie(value);
                            }}
                            sx={nefropatieSx}
                        />
                        <Typography sx={typographyCISx}>
                            CI:
                        </Typography>
                        <TextField
                            id="CIField"
                            name="CIField"
                            value={CI}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setCI(value);
                            }}
                            sx={CISx}
                        />
                        <Typography sx={typographyeAVCSx}>
                            AVC:
                        </Typography>
                        <TextField
                            id="AVCField"
                            name="AVCField"
                            value={AVC}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setAVC(value);
                            }}
                            sx={AVCSx}
                        />
                        <Typography sx={typographyeIMASx}>
                            IMA:
                        </Typography>
                        <TextField
                            id="IMAField"
                            name="IMAField"
                            value={IMA}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setIMA(value);
                            }}
                            sx={IMASx}
                        />
                        <Typography sx={typographyeHipercolesterolemieSx}>
                            Hipercolesterolemie:
                        </Typography>
                        <TextField
                            id="HipercolesterolemieField"
                            name="HipercolesterolemieField"
                            value={hipercolesterolemie}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setHipercolesterolemie(value);
                            }}
                            sx={hipercolesterolemieSx}
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
                        <Typography sx={typographyHipertrigliceridemieSx}>
                            Hipertrigliceridemie:
                        </Typography>
                        <TextField
                            id="HipertrigliceridemieField"
                            name="HipertrigliceridemieField"
                            value={hipertrigliceridemie}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setHipertrigliceridemie(value);
                            }}
                            sx={hipertrigliceridemieSx}
                        />
                        <Typography sx={typographyTratamentDiabetInPrezentSx}>
                            Tratament diabet în prezent:
                        </Typography>
                        <TextField
                            id="insulinaField"
                            name="insulinaField"
                            value={insulina}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setInsulina(value);
                            }}
                            sx={insulinaSx}
                        />
                        <Typography sx={typographyInsulinaSx}>
                            Insulină;
                        </Typography>
                        <TextField
                            id="ADOField"
                            name="ADOField"
                            value={ADO}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setADO(value);
                            }}
                            sx={ADOSx}
                        />
                        <Typography sx={typographyADOSx}>
                            ADO;
                        </Typography>
                        <TextField
                            id="dietaField"
                            name="dietaField"
                            value={dieta}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setDieta(value);
                            }}
                            sx={dietaSx}
                        />
                        <Typography sx={typographyeDietaSx}>
                            Dietă;
                        </Typography>
                        <TextField
                            id="nimicField"
                            name="nimicField"
                            value={nimic}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setNimic(value);
                            }}
                            sx={nimicSx}
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
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setAcuitateOD(value);
                                    }}
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
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setAcuitateOS(value);
                                    }}
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
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            justifyItems: "center",
                            width: "50%",
                        }}>
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
                                <textarea id="detaliiFundDeOchi" style={{width: "98%", height: "85%"}} onInput={handleDetaliiFundDeOchi}></textarea>
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
                                <textarea id="alteModificareOculare" style={{width: "98%", height: "85%"}} onInput={handleAlteModificariOculare}></textarea>
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
                            id="injectieODField"
                            name="injectieODField"
                            value={injectieOD}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setInjectieOD(value);
                            }}
                            sx={injectieODSx}
                        />
                        <Typography sx={typographyInjectieODSx}>
                            OD;
                        </Typography>
                        <TextField
                            id="injectieOSField"
                            name="injectieOSField"
                            value={injectieOS}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setInjectieOS(value);
                            }}
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
                        <RadioButtonsGroupRecomandari recomandare={recomandare} setRecomandare={setRecomandare}/>
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
                        />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                        <Typography sx={typographyControlOftalmologicSx}>
                            Următorul control oftalmologic:
                        </Typography>
                        <Checkbox
                            checked={peste1An}
                            onChange={handleChangePeste1An}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{padding: "10px 10px"}}
                        />
                        <Typography sx={typographyAnSx}>
                            peste 1 an; peste
                        </Typography>
                        <TextField
                            id="pesteLuniField"
                            name="pesteLuniField"
                            value={pesteLuni}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setPesteLuni(value);
                            }}
                            sx={pesteLuniSx}
                        />
                        <Typography sx={typographyLuniSx}>
                            luni; peste
                        </Typography>
                        <TextField
                            id="pesteSaptamaniField"
                            name="pesteSaptamaniField"
                            value={pesteSaptamani}
                            variant="standard"
                            onChange={(e) => {
                                const value = e.target.value;
                                setPesteSaptamani(value);
                            }}
                            sx={pesteSaptamaniSx}
                        />
                        <Typography sx={typographySaptamaniSx}>
                            săptămâni;
                        </Typography>
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
                                const value = e.target.value;
                                setAmbulatorLaField(value);
                            }}
                            InputProps={{
                                readOnly: !ambulator,
                            }}
                            sx={ambulatorLaFieldSx}
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
                                const value = e.target.value;
                                setAmbulatorInField(value);
                            }}
                            InputProps={{
                                readOnly: !ambulator,
                            }}
                            sx={ambulatorInFieldSx}
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
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setMedicExaminatorField(value);
                                }}
                                sx={medicExaminatorFieldSx}
                            />
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center", width: "100%"}}>
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