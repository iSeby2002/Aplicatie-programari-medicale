import React from 'react';
import axios from 'axios';
import {CssBaseline, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {
    centerBoxSx,
    cinciBoxSx,
    doiBoxSx, nrCrtSx, numeSiPrenumeSx, patruBoxSx,
    saseBoxSx,
    treiBoxSx, typographyCNPSx, typographyNrCrtSx, typographyNumeSiPrenumeSx,
    typographyTitluSx,
    unuBoxSx
} from "./OftalmologPage.styles";
import {FormControl} from "@mui/base";


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
                <FormControlLabel value="tip 1" control={<Radio />} label="tip 1" />
                <FormControlLabel value="tip 2" control={<Radio />} label="tip 2" />
            </RadioGroup>
        </FormControl>
    );
}

const OftalmologPage = () => {
    const [numeSiPrenume, setNumeSiPrenume] = React.useState("asaASDADAaa asdaA a daJDA");
    const [nrCrt, setNrCrt] = React.useState(0);

    return (
        <div className="oftalmologPage">
            <CssBaseline />
            <Box sx={centerBoxSx}>
                <Typography sx={typographyTitluSx}>
                    SCREENING RETINOPATIE DIABETICĂ
                </Typography>
                <Box sx={unuBoxSx}>
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
                    </Box>
                    {/*<Typography sx={typographyInBoxSx}>*/}
                    {/*    Diabet zaharat:*/}
                    {/*</Typography>*/}
                    {/*<RadioButtonsGroup/>*/}
                    {/*<Typography sx={typographyInBoxSx}>*/}
                    {/*    Data diagnosticului:*/}
                    {/*</Typography>*/}
                </Box>
                <Box sx={doiBoxSx}>
                    <Typography>

                    </Typography>
                </Box>
                <Box sx={treiBoxSx}>
                    <Typography>

                    </Typography>
                </Box>
                <Box sx={patruBoxSx}>
                    <Typography>

                    </Typography>
                </Box>
                <Box sx={cinciBoxSx}>
                    <Typography>

                    </Typography>
                </Box>
                <Box sx={saseBoxSx}>
                    <Typography>

                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default OftalmologPage;