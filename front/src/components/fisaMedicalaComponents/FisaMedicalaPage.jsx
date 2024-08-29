import React, {useEffect, useState} from 'react';
import {
    Button,
    Checkbox,
    CssBaseline,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide
} from "@mui/material";
import Box from "@mui/material/Box";
import {
    acuitateODSx,
    acuitateOSSx, ambulatorLaFieldSx,
    boxSx,
    buttonSx,
    centerBoxSx,
    CNPSx,
    creatininaSx,
    diagnosticODSx,
    diagnosticOSSx,
    eRFGSx,
    glicemieSx,
    HbA1CSx,
    injectieODSx,
    injectieOSSx,
    lastBoxSx, medicExaminatorFieldSx,
    nrCrtSx,
    numeSiPrenumeSx, pesteLuniSx, pesteSaptamaniSx,
    recomandareFieldSx, tratamentFieldSx,
    typographyAcuitateODSx,
    typographyAcuitateOSSx,
    typographyAcuitateSx,
    typographyADOSx,
    typographyAlteModificariSx, typographyAmbulatorSx, typographyAnSx,
    typographyCISx,
    typographyCNPSx,
    typographyComparativSx, typographyControlOftalmologicSx,
    typographyCreatininaSx,
    typographyDataDiagnosticuluiSx, typographyDataSx,
    typographyDetaliiSx,
    typographyDiabetZaharatSx,
    typographyDiagnosticODSx,
    typographyDiagnosticOSSx,
    typographyDiagnosticSx,
    typographyDoarSx,
    typographyeAVCSx,
    typographyEdemMacularODSx,
    typographyEdemMacularOSSx,
    typographyEdemMacularSx,
    typographyeDietaSx,
    typographyeHipercolesterolemieSx,
    typographyeIMASx,
    typographyeNimicSx,
    typographyeRFGSx,
    typographyFaraRetinopatieDiabeticaODSx,
    typographyFaraRetinopatieDiabeticaOSSx,
    typographyFaraRetinopatieDiabeticaSx,
    typographyGlicemieSx,
    typographyHbA1CSx,
    typographyHipertrigliceridemieSx,
    typographyHTASx,
    typographyInjectieODSx,
    typographyInjectieOSSx,
    typographyInjectieSx,
    typographyInsulinaSx, typographyInSx,
    typographyLaFelODSx,
    typographyLaFelOSSx,
    typographyLaFelSx,
    typographyLaserSx, typographyLuniSx,
    typographyMaiBineODSx,
    typographyMaiBineOSSx,
    typographyMaiBineSx,
    typographyMaiRauODSx,
    typographyMaiRauOSSx,
    typographyMaiRauSx,
    typographyMaiSx, typographyMedicExaminatorSx,
    typographyModerataODSx,
    typographyModerataOSSx,
    typographyModerataSx,
    typographyNefropatieSx,
    typographyNeuropatieSx,
    typographyNrCrtSx,
    typographyNumeSiPrenumeSx,
    typographyNuSeCunoasteODSx,
    typographyNuSeCunoasteOSSx,
    typographyNuSeCunoasteSx,
    typographyPanfotocoagulareSx, typographyPesteLuniSx, typographyPesteSaptamaniSx,
    typographyRecomandariSx,
    typographyRetinopatieDiabeticaNeproliferativaSx,
    typographyRetinopatieDiabeticaProliferativaODSx,
    typographyRetinopatieDiabeticaProliferativaOSSx,
    typographyRetinopatieDiabeticaProliferativaSx,
    typographyRubeozaIrianaODSx,
    typographyRubeozaIrianaOSSx,
    typographyRubeozaIrianaSx, typographySalvarePDFSx, typographySaptamaniSx,
    typographySegmentAnteriorSx,
    typographySeveraODSx,
    typographySeveraOSSx,
    typographySeveraSx,
    typographyStadiulSx, typographySx,
    typographyTipSx,
    typographyTitluSx,
    typographyTratamentAnteriorOcularSx,
    typographyTratamentDiabetInPrezentSx, typographyTratamentRecomandatSx,
    typographyUreeSx,
    typographyUsoaraODSx,
    typographyUsoaraOSSx,
    typographyUsoaraSx,
    ureeSx
} from "./FisaMedicalaPage.styles";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {useLocation, useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CloseIcon from '@mui/icons-material/Close';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CustomizedSnackbars from "../../utils/CustomizedSnackbars";
import axios from "axios";


function handleDetaliiFundDeOchi(event, setDetaliiFundDeOchiText) {
    const text = event.target.value;
    setDetaliiFundDeOchiText(text);
}

function handleAlteModificariOculare(event, setAlteModificariOculareText) {
    const text = event.target.value;
    setAlteModificariOculareText(text);
}

const CheckedIcon = () => (
    <Box
        sx={{
            width: 20,
            height: 20,
            border: '2px solid',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <CloseIcon sx={{ fontSize: 20 }} />
    </Box>
);

const CheckedRadioIcon = () => (
    <Box
        sx={{
            width: 24,
            height: 24,
            border: '2px solid',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <CloseIcon sx={{ fontSize: 20}} /> {/* "X" inside circle */}
    </Box>
);

const UncheckedRadioIcon = () => (
    <Box
        sx={{
            width: 24,
            height: 24,
            border: '2px solid',
            borderRadius: '50%',
        }}
    />
);

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
                        setPesteLuni(null);
                        setPesteSaptamani(null);
                    }else if (value === "luni") {
                        setPesteSaptamani(null);
                    }else if (value === "saptamani") {
                        setPesteLuni(null);
                    }
                }}
            >
                <FormControlLabel
                    value="an"
                    control={<Radio icon={<UncheckedRadioIcon />} checkedIcon={<CheckedRadioIcon />} />}
                    label={""}
                />
                <Typography sx={typographyAnSx}>
                    peste 1 an;
                </Typography>
                <FormControlLabel
                    value="luni"
                    control={<Radio icon={<UncheckedRadioIcon />} checkedIcon={<CheckedRadioIcon />} />}
                    label={""}
                />
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
                <FormControlLabel
                    value="saptamani"
                    control={<Radio icon={<UncheckedRadioIcon />} checkedIcon={<CheckedRadioIcon />} />}
                    label={""}
                />
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FisaMedicalaPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {medic, fisaMedicala} = location.state;
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("")
    const [message, setMessage] = React.useState("");
    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    // BOX 1
    const [numeSiPrenume] = useState(fisaMedicala.programari.pacient.numePrenume ?? null); // String
    const [nrCrt, setNrCrt] = useState(fisaMedicala.nrCrt ?? null); // Long
    const [cnp] = useState(fisaMedicala.programari.pacient.cnp ?? null); // Long
    const [tip1DiabetZaharat, setTip1DiabetZaharat] = useState(fisaMedicala.tip1DiabetZaharat ?? false); // Boolean
    const handleChangeTip1DiabetZaharat = (event) => {
        setTip1DiabetZaharat(event.target.checked);
        setTip2DiabetZaharat(false);
    };
    const [tip2DiabetZaharat, setTip2DiabetZaharat] = useState(fisaMedicala.tip2DiabetZaharat ?? false); // Boolean
    const handleChangeTip2DiabetZaharat = (event) => {
        setTip2DiabetZaharat(event.target.checked);
        setTip1DiabetZaharat(false);
    };
    const [dataDiagnosticului, setDataDiagnosticului] = useState(fisaMedicala.dataDiagnosticului? dayjs(fisaMedicala.dataDiagnosticului) : null); // LocalDate
    const handleChangeDataDiagnosticului = (newValue) => {
        setDataDiagnosticului(newValue);
    };

    // BOX 2
    const [hbA1C, setHbA1C] = useState(fisaMedicala.hbA1C ?? null); // Double
    const [maiMic6Luni, setMaiMic6Luni] = useState(fisaMedicala.maiMic6Luni ?? false); // Boolean
    const handleChangeMaiMic6Luni = (event) => {
        setMaiMic6Luni(event.target.checked);
        setMaiMare6Luni(false);
    };
    const [maiMare6Luni, setMaiMare6Luni] = useState(fisaMedicala.maiMare6Luni ?? false); // Boolean
    const handleChangeMaiMare6Luni = (event) => {
        setMaiMare6Luni(event.target.checked);
        setMaiMic6Luni(false);
    };
    const [glicemie, setGlicemie] = useState(fisaMedicala.glicemie ?? null); // Double
    const [uree, setUree] = useState(fisaMedicala.uree ?? null); // Double
    const [creatinina, setCreatinina] = useState(fisaMedicala.creatinina ?? null); // Double
    const [eRFG, setERFG] = useState(fisaMedicala.eRFG ?? null); // Double
    const [hta, setHta] = useState(fisaMedicala.hta ?? false); // Boolean
    const handleChangeHTA = (event) => {
        setHta(event.target.checked);
    };
    const [neuropatie, setNeuropatie] = useState(fisaMedicala.neuropatie ?? false); // Boolean
    const handleChangeNeuropatie = (event) => {
        setNeuropatie(event.target.checked);
    };
    const [nefropatie, setNefropatie] = useState(fisaMedicala.nefropatie ?? false); // Boolean
    const handleChangeNefropatie= (event) => {
        setNefropatie(event.target.checked);
    };
    const [ci, setCi] = useState(fisaMedicala.ci ?? false); // Boolean
    const handleChangeCI = (event) => {
        setCi(event.target.checked);
    };
    const [avc, setAvc] = useState(fisaMedicala.avc ?? false); // Boolean
    const handleChangeAVC = (event) => {
        setAvc(event.target.checked);
    };
    const [ima, setIma] = useState(fisaMedicala.ima ?? false); // Boolean
    const handleChangeIMA = (event) => {
        setIma(event.target.checked);
    };
    const [hipercolesterolemie, setHipercolesterolemie] = useState(fisaMedicala.hipercolesterolemie ?? false); // Boolean
    const handleChangeHipercolesterolemie = (event) => {
        setHipercolesterolemie(event.target.checked);
    };
    const [hipertrigliceridemie, setHipertrigliceridemie] = useState(fisaMedicala.hipertrigliceridemie ?? false); // Boolean
    const handleChangeHipertrigliceridemie = (event) => {
        setHipertrigliceridemie(event.target.checked);
    };
    const [insulina, setInsulina] = useState(fisaMedicala.insulina ?? false); // Boolean
    const handleChangeInsulina = (event) => {
        setInsulina(event.target.checked);
        setNimic(false);
    };
    const [ado, setAdo] = useState(fisaMedicala.ado ?? false); // Boolean
    const handleChangeADO = (event) => {
        setAdo(event.target.checked);
        setNimic(false);
    };
    const [dieta, setDieta] = useState(fisaMedicala.dieta ?? false); // Boolean
    const handleChangeDieta = (event) => {
        setDieta(event.target.checked);
        setNimic(false);
    };
    const [nimic, setNimic] = useState(fisaMedicala.nimic ?? false); // Boolean
    const handleChangeNimic = (event) => {
        setNimic(event.target.checked);
        setInsulina(false);
        setAdo(false);
        setDieta(false);
    };

    // Box 3
    const [acuitateOD, setAcuitateOD] = useState(fisaMedicala.acuitateVizualaOD ?? ""); // String
    const [acuitateOS, setAcuitateOS] = useState(fisaMedicala.acuitateVizualaOS ?? ""); // String
    const [rubeozaIrianaOD, setRubeozaIrianaOD] = useState(fisaMedicala.rubeozaIrianaOD ?? false); // Boolean
    const handleChangeRubeozaIrianaOD = (event) => {
        setRubeozaIrianaOD(event.target.checked);
    };
    const [rubeozaIrianaOS, setRubeozaIrianaOS] = useState(fisaMedicala.rubeozaIrianaOS ?? false); // Boolean
    const handleChangeRubeozaIrianaOS = (event) => {
        setRubeozaIrianaOS(event.target.checked);
    };
    const [faraRetinopatieDiabeticaOD, setFaraRetinopatieDiabeticaOD] = useState(fisaMedicala.faraRetinopatieDiabeticaOD ?? false); // Boolean
    const handleChangeFaraRetinopatieDiabeticaOD = (event) => {
        setFaraRetinopatieDiabeticaOD(event.target.checked);
        setUsoaraOD(false);
        setModerataOD(false);
        setSeveraOD(false);
        setRetinopatieDiabeticaProliferativaOD(false);
        setEdemMacularOD(false);
    };
    const [faraRetinopatieDiabeticaOS, setFaraRetinopatieDiabeticaOS] = useState(fisaMedicala.faraRetinopatieDiabeticaOS ?? false); // Boolean
    const handleChangeFaraRetinopatieDiabeticaOS = (event) => {
        setFaraRetinopatieDiabeticaOS(event.target.checked);
        setUsoaraOS(false);
        setModerataOS(false);
        setSeveraOS(false);
        setRetinopatieDiabeticaProliferativaOS(false);
        setEdemMacularOS(false);
    };
    const [usoaraOD, setUsoaraOD] = useState(fisaMedicala.retinopatieDiabeticaNeproliferativaUsoaraOD ?? false); // Boolean
    const handleChangeUsoaraOD = (event) => {
        setUsoaraOD(event.target.checked);
        setFaraRetinopatieDiabeticaOD(false);
        setModerataOD(false);
        setSeveraOD(false);
        setRetinopatieDiabeticaProliferativaOD(false);
    };
    const [usoaraOS, setUsoaraOS] = useState(fisaMedicala.retinopatieDiabeticaNeproliferativaUsoaraOS ?? false); // Boolean
    const handleChangeUsoaraOS = (event) => {
        setUsoaraOS(event.target.checked);
        setFaraRetinopatieDiabeticaOS(false);
        setModerataOS(false);
        setSeveraOS(false);
        setRetinopatieDiabeticaProliferativaOS(false);
    };
    const [moderataOD, setModerataOD] = useState(fisaMedicala.retinopatieDiabeticaNeproliferativaModerataOD ?? false); // Boolean
    const handleChangeModerataOD = (event) => {
        setModerataOD(event.target.checked);
        setFaraRetinopatieDiabeticaOD(false);
        setUsoaraOD(false);
        setSeveraOD(false);
        setRetinopatieDiabeticaProliferativaOD(false);
    };
    const [moderataOS, setModerataOS] = useState(fisaMedicala.retinopatieDiabeticaNeproliferativaModerataOS ?? false); // Boolean
    const handleChangeModerataOS = (event) => {
        setModerataOS(event.target.checked);
        setFaraRetinopatieDiabeticaOS(false);
        setUsoaraOS(false);
        setSeveraOS(false);
        setRetinopatieDiabeticaProliferativaOS(false);
    };
    const [severaOD, setSeveraOD] = useState(fisaMedicala.retinopatieDiabeticaNeproliferativaSeveraOD ?? false); // Boolean
    const handleChangeSeveraOD = (event) => {
        setSeveraOD(event.target.checked);
        setFaraRetinopatieDiabeticaOD(false);
        setUsoaraOD(false);
        setModerataOD(false);
        setRetinopatieDiabeticaProliferativaOD(false);
    };
    const [severaOS, setSeveraOS] = useState(fisaMedicala.retinopatieDiabeticaNeproliferativaSeveraOS ?? false); // Boolean
    const handleChangeSeveraOS = (event) => {
        setSeveraOS(event.target.checked);
        setFaraRetinopatieDiabeticaOS(false);
        setUsoaraOS(false);
        setModerataOS(false);
        setRetinopatieDiabeticaProliferativaOS(false);
    };
    const [retinopatieDiabeticaProliferativaOD, setRetinopatieDiabeticaProliferativaOD] = useState(fisaMedicala.retinopatieDiabeticaProliferativaOD ?? false); // Boolean
    const handleChangeRetinopatieDiabeticaProliferativaOD = (event) => {
        setRetinopatieDiabeticaProliferativaOD(event.target.checked);
        setFaraRetinopatieDiabeticaOD(false);
        setUsoaraOD(false);
        setModerataOD(false);
        setSeveraOD(false);
    };
    const [retinopatieDiabeticaProliferativaOS, setRetinopatieDiabeticaProliferativaOS] = useState(fisaMedicala.retinopatieDiabeticaProliferativaOS ?? false); // Boolean
    const handleChangeRetinopatieDiabeticaProliferativaOS = (event) => {
        setRetinopatieDiabeticaProliferativaOS(event.target.checked);
        setFaraRetinopatieDiabeticaOS(false);
        setUsoaraOS(false);
        setModerataOS(false);
        setSeveraOS(false);
    };
    const [edemMacularOD, setEdemMacularOD] = useState(fisaMedicala.edemMacularClinicSemnificativOD ?? false); // Boolean
    const handleChangeEdemMacularOD = (event) => {
        setEdemMacularOD(event.target.checked);
        setFaraRetinopatieDiabeticaOD(false);
    };
    const [edemMacularOS, setEdemMacularOS] = useState(fisaMedicala.edemMacularClinicSemnificativOS ?? false); // Boolean
    const handleChangeEdemMacularOS = (event) => {
        setEdemMacularOS(event.target.checked);
        setFaraRetinopatieDiabeticaOS(false);
    };
    const [laFelOD, setLaFelOD] = useState(fisaMedicala.comparativCuUltimaExaminareLaFelOD ?? false); // Boolean
    const handleChangeLaFelOD = (event) => {
        setLaFelOD(event.target.checked);
        setMaiBineOD(false);
        setMaiRauOD(false);
        setNuSeCunoasteOD(false);
    };
    const [laFelOS, setLaFelOS] = useState(fisaMedicala.comparativCuUltimaExaminareLaFelOS ?? false); // Boolean
    const handleChangeLaFelOS = (event) => {
        setLaFelOS(event.target.checked);
        setMaiBineOS(false);
        setMaiRauOS(false);
        setNuSeCunoasteOS(false);
    };
    const [maiBineOD, setMaiBineOD] = useState(fisaMedicala.comparativCuUltimaExaminareMaiBineOD ?? false); // Boolean
    const handleChangeMaiBineOD = (event) => {
        setMaiBineOD(event.target.checked);
        setLaFelOD(false);
        setMaiRauOD(false);
        setNuSeCunoasteOD(false);
    };
    const [maiBineOS, setMaiBineOS] = useState(fisaMedicala.comparativCuUltimaExaminareMaiBineOS ?? false); // Boolean
    const handleChangeMaiBineOS = (event) => {
        setMaiBineOS(event.target.checked);
        setLaFelOS(false);
        setMaiRauOS(false);
        setNuSeCunoasteOS(false);
    };
    const [maiRauOD, setMaiRauOD] = useState(fisaMedicala.comparativCuUltimaExaminareMaiRauOD ?? false); // Boolean
    const handleChangeMaiRauOD = (event) => {
        setMaiRauOD(event.target.checked);
        setLaFelOD(false);
        setMaiBineOD(false);
        setNuSeCunoasteOD(false);
    };
    const [maiRauOS, setMaiRauOS] = useState(fisaMedicala.comparativCuUltimaExaminareMaiRauOS ?? false); // Boolean
    const handleChangeMaiRauOS = (event) => {
        setMaiRauOS(event.target.checked);
        setLaFelOS(false);
        setMaiBineOS(false);
        setNuSeCunoasteOS(false);
    };
    const [nuSeCunoasteOD, setNuSeCunoasteOD] = useState(fisaMedicala.comparativCuUltimaExaminareNuSeCunoasteOD ?? false); // Boolean
    const handleChangeNuSeCunoasteOD = (event) => {
        setNuSeCunoasteOD(event.target.checked);
        setLaFelOD(false);
        setMaiBineOD(false);
        setMaiRauOD(false);
    };
    const [nuSeCunoasteOS, setNuSeCunoasteOS] = useState(fisaMedicala.comparativCuUltimaExaminareNuSeCunoasteOS ?? false); // Boolean
    const handleChangeNuSeCunoasteOS = (event) => {
        setNuSeCunoasteOS(event.target.checked);
        setLaFelOS(false);
        setMaiBineOS(false);
        setMaiRauOS(false);
    };
    const [detaliiFundDeOchiText, setDetaliiFundDeOchiText] = useState(fisaMedicala.detaliiFundDeOchi ?? ""); // String
    const [alteModificareOculareText, setAlteModificariOculareText] = useState(fisaMedicala.alteModalitatiOculare ?? ""); // String

    // Box 4
    const [injectieNumarOD, setInjectieNumarOD] = useState(fisaMedicala.injectieNumarOD ?? null); // Long
    const [injectieDozaOD, setInjectieDozaOD] = useState(fisaMedicala.injectieDozaOD ?? ""); // String
    const [injectieNumarOS, setInjectieNumarOS] = useState(fisaMedicala.injectieNumarOS ?? null); // Long
    const [injectieDozaOS, setInjectieDozaOS] = useState(fisaMedicala.injectieDozaOS ?? ""); // String
    const [panfotocoagulareOD, setPanfotocoagulareOD] = useState(fisaMedicala.laserOD ?? false); // Boolean
    const handleChangePanfotocoagulareOD = (event) => {
        setPanfotocoagulareOD(event.target.checked);
    };
    const [panfotocoagulareOS, setPanfotocoagulareOS] = useState(fisaMedicala.laserOS ?? false); // Boolean
    const handleChangePanfotocoagulareOS = (event) => {
        setPanfotocoagulareOS(event.target.checked);
    };

    // BOX 5
    const [diagnosticOD, setDiagnosticOD] = useState(fisaMedicala.diagnosticOD ?? ""); // String
    const [diagnosticOS, setDiagnosticOS] = useState(fisaMedicala.diagnosticOS ?? ""); // String

    // BOX 6
    const [doarMonitorizare, setDoarMonitorizare] = useState(fisaMedicala.doarMonitorizare ?? false); // Boolean
    const handleChangeDoarMonitorizare = (event) => {
        setDoarMonitorizare(event.target.checked);
        setExaminareSuplimentara(false);
        setExaminareSuplimentaraField("");
    };
    const [examinareSuplimentara, setExaminareSuplimentara] = useState(fisaMedicala.examinareSuplimentara ?? false); // Boolean
    const handleChangeExaminareSuplimentara = (event) => {
        setExaminareSuplimentara(event.target.checked);
        setDoarMonitorizare(false);
        if(!doarMonitorizare && !event.target.checked) {
            setExaminareSuplimentaraField("");
        }
    };
    const [examinareSuplimentaraField, setExaminareSuplimentaraField] = useState(fisaMedicala.examinareSuplimentaraField ?? ""); // String
    const [tratament, setTratament] = useState(fisaMedicala.tratament ?? false); // Boolean
    const handleChangeTratament = (event) => {
        setTratament(event.target.checked);
        if(!event.target.checked){
            setTratamentField("");
        }
    };
    const [tratamentField, setTratamentField] = useState(fisaMedicala.tratamentField ?? ""); // String
    const [urmatorulControl, setUrmatorulControl] = useState("an")
    const [pesteLuni, setPesteLuni] = useState(fisaMedicala.pesteLuni ?? null); // Integer
    const [pesteSaptamani, setPesteSaptamani] = useState(fisaMedicala.pesteSaptamani ?? null); // Integer
    const [ambulator, setAmbulator] = useState(fisaMedicala.ambulator ?? false); // Boolean
    const handleChangeAmbulator = (event) => {
        setAmbulator(event.target.checked);
        if (!event.target.checked) {
            setAmbulatorLaField("");
            setAmbulatorInField(null);
        }
    };
    const [ambulatorLaField, setAmbulatorLaField] = useState(fisaMedicala.ambulatorLaField ?? ""); // String
    const [ambulatorInField, setAmbulatorInField] = React.useState(fisaMedicala.ambulatorInField? dayjs(fisaMedicala.ambulatorInField) : null); // LocalDate
    const handleChangeAmbulatorInField= (newValue) => {
        setAmbulatorInField(newValue);
    };

    // LAST BOX
    const [selectedData, setSelectedData] = useState(fisaMedicala.data? dayjs(fisaMedicala.data) : dayjs()); // LocalDate
    const handleDataChange = (newValue) => {
        setSelectedData(newValue);
    };
    const [medicExaminatorField, setMedicExaminatorField] = useState(fisaMedicala.medicExaminator ?? medic.nume + " " + medic.prenume);

    const [salvarePDF, setSalvarePDF] = React.useState(true);
    const handleChangeSalvarePDF = (event) => {
        setSalvarePDF(event.target.checked);
    };
    const handleSalvare = async () => {
        const esteAn = (urmatorulControl === "an")
        const fisaMedicalaDTO = {
            programari: fisaMedicala.programari,
            // Box 1
            nrCrt: nrCrt,
            tip1DiabetZaharat: tip1DiabetZaharat,
            tip2DiabetZaharat: tip2DiabetZaharat,
            dataDiagnosticului: dataDiagnosticului,
            // Box 2
            HbA1C: hbA1C,
            maiMic6Luni: maiMic6Luni,
            maiMare6Luni: maiMare6Luni,
            glicemie: glicemie,
            uree: uree,
            creatinina: creatinina,
            eRFG: eRFG,
            hta: hta,
            neuropatie: neuropatie,
            nefropatie: nefropatie,
            ci: ci,
            avc: avc,
            ima: ima,
            hipercolesterolemie: hipercolesterolemie,
            hipertrigliceridemie: hipertrigliceridemie,
            insulina: insulina,
            ado: ado,
            dieta: dieta,
            nimic: nimic,
            //box3
            acuitateVizualaOD: acuitateOD,
            acuitateVizualaOS: acuitateOS,
            rubeozaIrianaOD: rubeozaIrianaOD,
            rubeozaIrianaOS: rubeozaIrianaOS,
            faraRetinopatieDiabeticaOD: faraRetinopatieDiabeticaOD,
            faraRetinopatieDiabeticaOS: faraRetinopatieDiabeticaOS,
            retinopatieDiabeticaNeproliferativaUsoaraOD: usoaraOD,
            retinopatieDiabeticaNeproliferativaUsoaraOS: usoaraOS,
            retinopatieDiabeticaNeproliferativaModerataOD: moderataOD,
            retinopatieDiabeticaNeproliferativaModerataOS: moderataOS,
            retinopatieDiabeticaNeproliferativaSeveraOD: severaOD,
            retinopatieDiabeticaNeproliferativaSeveraOS: severaOS,
            retinopatieDiabeticaProliferativaOD: retinopatieDiabeticaProliferativaOD,
            retinopatieDiabeticaProliferativaOS: retinopatieDiabeticaProliferativaOS,
            edemMacularClinicSemnificativOD: edemMacularOD,
            edemMacularClinicSemnificativOS: edemMacularOS,
            comparativCuUltimaExaminareLaFelOD: laFelOD,
            comparativCuUltimaExaminareLaFelOS: laFelOS,
            comparativCuUltimaExaminareMaiBineOD: maiBineOD,
            comparativCuUltimaExaminareMaiBineOS: maiBineOS,
            comparativCuUltimaExaminareMaiRauOD: maiRauOD,
            comparativCuUltimaExaminareMaiRauOS: maiRauOS,
            comparativCuUltimaExaminareNuSeCunoasteOD: nuSeCunoasteOD,
            comparativCuUltimaExaminareNuSeCunoasteOS: nuSeCunoasteOS,
            detaliiFundDeOchi: detaliiFundDeOchiText,
            alteModalitatiOculare: alteModificareOculareText,
            //box4
            injectieNumarOD: injectieNumarOD,
            injectieDozaOD: injectieDozaOD,
            injectieNumarOS: injectieNumarOS,
            injectieDozaOS: injectieDozaOS,
            laserOD: panfotocoagulareOD,
            laserOS: panfotocoagulareOS,
            //box5
            diagnosticOD: diagnosticOD,
            diagnosticOS: diagnosticOS,
            //box6
            doarMonitorizare: doarMonitorizare,
            examinareSuplimentara: examinareSuplimentara,
            examinareSuplimentaraField: examinareSuplimentaraField,
            tratament: tratament,
            tratamentField: tratamentField,
            peste1An: esteAn,
            pesteLuni: pesteLuni,
            pesteSaptamani: pesteSaptamani,
            ambulator: ambulator,
            ambulatorLaField: ambulatorLaField,
            ambulatorInField: ambulatorInField,
            //last box
            data: selectedData,
            medicExaminator: medicExaminatorField
        };

        console.log(fisaMedicalaDTO);

        axios.post(`${process.env.REACT_APP_SERVER_LINK}/medici/fisaMedicala/saveFisaMedicala`, fisaMedicalaDTO, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            setOpen(true);
            setSeverity("success");
            setMessage(response.data);
            axios.post(`${process.env.REACT_APP_SERVER_LINK}/medici/fisaMedicala/getFisaMedicalaByProgramare`, fisaMedicala.programari,{
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                const stateData = { medic: medic, fisaMedicala: response.data };
                console.log(stateData.fisaMedicala)
                navigate("/OftalmologPage/CompletareScreening", { state: stateData });

            });
        });

        if (salvarePDF) {
            const pdf = new jsPDF('p', 'mm', 'a4');

            const input = document.getElementById('boxx');
            await html2canvas(input, {
                scale: 3,
                useCORS: true,
                allowTaint: true,
                scrollX: 0,
                scrollY: 0,
                width: input.scrollWidth,
                height: input.scrollHeight,
            }).then((canvas) => {
                // Convert canvas to grayscale
                const ctx = canvas.getContext('2d');
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    const gray = 0.3 * r + 0.59 * g + 0.11 * b; // Luminance formula
                    data[i] = data[i + 1] = data[i + 2] = gray; // Set RGB to the calculated grayscale value
                }

                ctx.putImageData(imageData, 0, 0);

                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 210; // Width of the A4 page in mm
                const imgHeight = canvas.height * imgWidth / canvas.width;

                pdf.addImage(imgData, 'PNG', 0, 5, imgWidth, imgHeight);
            });

            pdf.save('Fisa Medicala ' + numeSiPrenume + " " + dayjs(selectedData).format("DD/MM/YYYY") + '.pdf');
        }
    };
    const handleInapoi = () => {
        if(medic.role === "diabetolog") {
            navigate("/DiabetologPage", {state: medic});
        }else if(medic.role === "oftalmolog"){
            setOpenDialog(true);
        }else{
            navigate("/");
            localStorage.setItem('auth', 'false');
        }
    };

    const [openDialog, setOpenDialog] = useState(false);
    const [discardChanges, setDiscardChanges] = useState(false);

    const confirmInapoi = () => {
        setDiscardChanges(true);
        setOpenDialog(false);
    };

    const cancelInapoi = () => {
        setOpenDialog(false);
    };

    useEffect(() => {
        if(medic.role === "oftalmolog"){
            if (discardChanges) {
                navigate("/OftalmologPage", {state: medic});
            }
        }
    }, [discardChanges, navigate, medic]);


    return (
        <div className="oftalmologPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx}>
                <div id="boxx" style={{width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                    <Typography sx={typographySx}>
                        Spitalul Clinic Județean de Urgență Cluj-Napoca, Clinica de Oftalmologie
                    </Typography>
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
                                type="number"
                                onChange={(e) => {
                                    setNrCrt(e.target.value);
                                }}
                                inputProps={{ step: "1" }}
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
                            <Checkbox
                                checked={tip1DiabetZaharat}
                                onChange={handleChangeTip1DiabetZaharat}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyTipSx}>
                                tip 1
                            </Typography>
                            <Checkbox
                                checked={tip2DiabetZaharat}
                                onChange={handleChangeTip2DiabetZaharat}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyTipSx}>
                                tip 2
                            </Typography>
                            <Typography sx={typographyDataDiagnosticuluiSx}>
                                Data diagnosticului:
                            </Typography>
                            <Box sx={{mt: "5px"}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker
                                        label=""
                                        value={dataDiagnosticului}
                                        onChange={handleChangeDataDiagnosticului}
                                        inputFormat="DD/MM/YYYY"
                                        slotProps={{ textField: { variant: 'standard', placeholder: '' }}}
                                        format="DD/MM/YYYY"
                                    />
                                </LocalizationProvider>
                            </Box>
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
                                value={hbA1C}
                                variant="standard"
                                type="number"
                                onChange={(e) => {
                                    setHbA1C(e.target.value);
                                }}
                                inputProps={{ step: "0.01" }}
                                sx={HbA1CSx}
                            />
                            <Checkbox
                                checked={maiMic6Luni}
                                onChange={handleChangeMaiMic6Luni}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyMaiSx}>
                                {"< 6 luni"}
                            </Typography>
                            <Checkbox
                                checked={maiMare6Luni}
                                onChange={handleChangeMaiMare6Luni}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyMaiSx}>
                                {"≥ 6 luni;"}
                            </Typography>
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
                                checked={hta}
                                onChange={handleChangeHTA}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyHTASx}>
                                HTA;
                            </Typography>
                            <Checkbox
                                checked={neuropatie}
                                onChange={handleChangeNeuropatie}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyNeuropatieSx}>
                                Neuropatie;
                            </Typography>
                            <Checkbox
                                checked={nefropatie}
                                onChange={handleChangeNefropatie}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyNefropatieSx}>
                                Nefropatie;
                            </Typography>
                            <Checkbox
                                checked={ci}
                                onChange={handleChangeCI}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyCISx}>
                                CI;
                            </Typography>
                            <Checkbox
                                checked={avc}
                                onChange={handleChangeAVC}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyeAVCSx}>
                                AVC;
                            </Typography>
                            <Checkbox
                                checked={ima}
                                onChange={handleChangeIMA}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyeIMASx}>
                                IMA;
                            </Typography>
                            <Checkbox
                                checked={hipercolesterolemie}
                                onChange={handleChangeHipercolesterolemie}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyeHipercolesterolemieSx}>
                                Hipercolesterolemie;
                            </Typography>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <Checkbox
                                checked={hipertrigliceridemie}
                                onChange={handleChangeHipertrigliceridemie}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyHipertrigliceridemieSx}>
                                Hipertrigliceridemie;
                            </Typography>
                            <Typography sx={typographyTratamentDiabetInPrezentSx}>
                                Tratament diabet în prezent:
                            </Typography>
                            <Checkbox
                                checked={insulina}
                                onChange={handleChangeInsulina}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyInsulinaSx}>
                                Insulină;
                            </Typography>
                            <Checkbox
                                checked={ado}
                                onChange={handleChangeADO}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyADOSx}>
                                ADO;
                            </Typography>
                            <Checkbox
                                checked={dieta}
                                onChange={handleChangeDieta}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyeDietaSx}>
                                Dietă;
                            </Typography>
                            <Checkbox
                                checked={nimic}
                                onChange={handleChangeNimic}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
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
                                            setAcuitateOD(e.target.value);
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
                                            setAcuitateOS(e.target.value);
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyRubeozaIrianaODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={rubeozaIrianaOS}
                                        onChange={handleChangeRubeozaIrianaOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyFaraRetinopatieDiabeticaODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={faraRetinopatieDiabeticaOS}
                                        onChange={handleChangeFaraRetinopatieDiabeticaOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyUsoaraODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={usoaraOS}
                                        onChange={handleChangeUsoaraOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyModerataODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={moderataOS}
                                        onChange={handleChangeModerataOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographySeveraODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={severaOS}
                                        onChange={handleChangeSeveraOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyRetinopatieDiabeticaProliferativaODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={retinopatieDiabeticaProliferativaOS}
                                        onChange={handleChangeRetinopatieDiabeticaProliferativaOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyEdemMacularODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={edemMacularOS}
                                        onChange={handleChangeEdemMacularOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyLaFelODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={laFelOS}
                                        onChange={handleChangeLaFelOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyMaiBineODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={maiBineOS}
                                        onChange={handleChangeMaiBineOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyMaiRauODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={maiRauOS}
                                        onChange={handleChangeMaiRauOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
                                    />
                                    <Typography sx={typographyNuSeCunoasteODSx}>
                                        OD
                                    </Typography>
                                    <Checkbox
                                        checked={nuSeCunoasteOS}
                                        onChange={handleChangeNuSeCunoasteOS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{padding: "10px 10px"}}
                                        icon={<CheckBoxOutlineBlankIcon />}
                                        checkedIcon={<CheckedIcon />}
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
                                inputProps={{ step: "1" }}
                                sx={injectieODSx}
                            />
                            <TextField
                                id="injectieDozaODField"
                                name="injectieDozaODField"
                                label="Data ultimei doze"
                                value={injectieDozaOD}
                                variant="standard"
                                onChange={(e) => {
                                    setInjectieDozaOD(e.target.value);
                                }}
                                sx={injectieODSx}
                            />
                            <Typography sx={typographyInjectieODSx}>
                                OD;
                            </Typography>
                            <TextField
                                id="injectieNumarOSField"
                                name="injectieNumarOSField"
                                label="Număr"
                                value={injectieNumarOS}
                                variant="standard"
                                type="number"
                                onChange={(e) => {
                                    setInjectieNumarOS(e.target.value);
                                }}
                                inputProps={{ step: "1" }}
                                sx={injectieOSSx}
                            />
                            <TextField
                                id="injectieDozaOSField"
                                name="injectieDozaOSField"
                                label="Data ultimei doze"
                                value={injectieDozaOS}
                                variant="standard"
                                onChange={(e) => {
                                    setInjectieDozaOS(e.target.value);
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
                            <Checkbox
                                checked={panfotocoagulareOD}
                                onChange={handleChangePanfotocoagulareOD}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyLaserSx}>
                                OD
                            </Typography>
                            <Checkbox
                                checked={panfotocoagulareOS}
                                onChange={handleChangePanfotocoagulareOS}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyLaserSx}>
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
                            <Checkbox
                                checked={doarMonitorizare}
                                onChange={handleChangeDoarMonitorizare}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyDoarSx}>
                                Doar monitorizare sau
                            </Typography>
                            <Checkbox
                                checked={examinareSuplimentara}
                                onChange={handleChangeExaminareSuplimentara}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
                            />
                            <Typography sx={typographyDoarSx}>
                                Examinare suplimentară:
                            </Typography>
                            <TextField
                                id="examinareSuplimentaraField"
                                name="examinareSuplimentaraField"
                                value={examinareSuplimentaraField}
                                variant="standard"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setExaminareSuplimentaraField(value);
                                }}
                                sx={recomandareFieldSx}
                                disabled={doarMonitorizare || (!doarMonitorizare && !examinareSuplimentara)}
                            />
                        </Box>
                        <Box sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
                            <Checkbox
                                checked={tratament}
                                onChange={handleChangeTratament}
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{padding: "10px 10px"}}
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
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
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckedIcon />}
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
                            <Box sx={{mt: "5px"}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker
                                        label=""
                                        value={ambulatorInField}
                                        onChange={handleChangeAmbulatorInField}
                                        inputFormat="DD/MM/YYYY"
                                        slotProps={{ textField: { variant: 'standard', placeholder: '' }}}
                                        format="DD/MM/YYYY"
                                        disabled={ !ambulator }
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                    </Box>
                    {/* Last Box */}
                    <Box sx={lastBoxSx}>
                        <Box id="box7" sx={{display: "flex", flexDirection: 'row', width: "100%"}}>
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
                                            slotProps={{ textField: { variant: 'standard', placeholder: '' }}}
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
                                        setMedicExaminatorField(e.target.value);
                                    }}
                                    sx={medicExaminatorFieldSx}
                                />
                            </Box>
                        </Box>
                    </Box>
                </div>
                {/* Butoane pentru oftalmolog*/}
                <div hidden={medic.role === "diabetolog"} style={{width: "100%"}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        gap: "5%"
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            justifyContent: "center",
                            width: "20%"
                        }}>
                            <Button sx={buttonSx} onClick={handleSalvare}>
                                Salvare
                            </Button>
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Checkbox
                                    checked={salvarePDF}
                                    onChange={handleChangeSalvarePDF}
                                    inputProps={{'aria-label': 'controlled'}}
                                    sx={{padding: "10px 10px"}}
                                    icon={<CheckBoxOutlineBlankIcon/>}
                                    checkedIcon={<CheckedIcon/>}
                                />
                                <Typography sx={typographySalvarePDFSx}>
                                    Salvare ca PDF
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: 'column', height: "110px", width: "20%"}}>
                            <Button sx={buttonSx} onClick={handleInapoi}>
                                Înapoi
                            </Button>
                        </Box>
                    </Box>
                </div>
                {/* Butoane pentru diabetolog*/}
                <div hidden={medic.role === "oftalmolog"} style={{width:"100%"}}>
                    <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: "150px",
                            width: "20%"
                        }}>
                            <Button sx={buttonSx} onClick={handleInapoi}>
                                Înapoi
                            </Button>
                        </Box>
                    </Box>
                </div>
            </Box>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={cancelInapoi}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ '& .MuiDialog-paper': { width: '35%', maxWidth: 'none' } }}
            >
                <DialogTitle id="alert-dialog-title" sx={{color: "black", fontSize: "18px", fontWeight: "600"}}>
                    {"Confirmare revenire"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{color: "black", fontSize: "18px", fontWeight: "300"}}>
                        Ești sigur că vrei să te întorci fără să salvezi modificările?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelInapoi} sx={buttonSx}>
                        Anulare
                    </Button>
                    <Button onClick={confirmInapoi} sx={buttonSx} autoFocus>
                        Continuă fără salvare
                    </Button>
                </DialogActions>
            </Dialog>
            <CustomizedSnackbars
                open={open}
                severity={severity}
                message={message}
                onClose={handleCloseSnackbar}
            />
        </div>
    )
}

export default FisaMedicalaPage;