import React from 'react';
import axios from 'axios';
import {CssBaseline, FormControlLabel, Radio, RadioGroup, TextField, Typography} from "@mui/material";
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
    typographyADOSx, dietaSx, typographyeDietaSx, nimicSx, typographyeNimicSx
} from "./OftalmologPage.styles";
import {FormControl} from "@mui/base";


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

function RadioButtonsGroup2({ tipHbA1C, setTipHbA1C }) {
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

const OftalmologPage = () => {
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


    return (
        <div className="oftalmologPage">
            <CssBaseline />
            <Box sx={centerBoxSx}>
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
                    <Box sx={{display: "flex", flexDirection: 'row'}}>
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
                        <RadioButtonsGroup2 tipHbA1C={tipHbA1C} setTipHbA1C={setTipHbA1C}/>
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
                <Box sx={boxSx}>

                </Box>
                <Box sx={boxSx}>

                </Box>
                <Box sx={boxSx}>

                </Box>
                <Box sx={boxSx}>

                </Box>
            </Box>
        </div>
    )
}

export default OftalmologPage;