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
    medicExaminatorFieldSx, buttonDeconectareSx,
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