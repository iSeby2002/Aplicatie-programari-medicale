import React, {useEffect, useState} from 'react';
import { Button, Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const FileUploadOD = ({ onFileSelectOD, idFisaMedicala }) => {
    const [fileNameOD, setFileNameOD] = useState('No file chosen');
    const [hasPozaOD, setHasPozaOD] = useState(false);

    const handleFileChangeOD = (event) => {
        const fileOD = event.target.files[0];
        if (fileOD) {
            setFileNameOD(fileOD.name);
            onFileSelectOD(fileOD); // Transmite fișierul selectat către componenta părinte
        }
    };

    useEffect(() => {
        if (idFisaMedicala) {
            axios.get(`${process.env.REACT_APP_SERVER_LINK}/medici/fisaMedicala/${idFisaMedicala}/downloadPozaOD`, {
                responseType: 'arraybuffer',
            }).then((response: any) => {
                setHasPozaOD(true);
            }).catch((error: any) => {
                setHasPozaOD(false);
            });
        }
    }, [idFisaMedicala]);

    const handleDownloadOD = async () => {
        if(hasPozaOD) {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_LINK}/medici/fisaMedicala/${idFisaMedicala}/downloadPozaOD`,
                    {
                        responseType: 'blob', // Asigură că răspunsul este un Blob
                    }
                );

                // Crează un URL pentru Blob
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;

                // Setează numele fișierului pentru descărcare
                link.setAttribute('download', 'pozaOD.jpg'); // Numele implicit al fișierului
                document.body.appendChild(link);

                // Declanșează descărcarea și elimină link-ul
                link.click();
                link.remove();
            } catch (error) {
                console.error('Error downloading Poza OD:', error);
            }
        }
    };

    return (
        <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center", width: "100%", gap: "5%", mt: "15px"}}>
            <input
                accept="image/*"
                style={{display: 'none'}}
                id="file-upload-od"
                type="file"
                onChange={handleFileChangeOD}
            />
            <label htmlFor="file-upload-od">
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<CloudUploadIcon/>}
                    style={{width: '250px' }}
                >
                    Încarcă poza OD
                </Button>
            </label>
            <Typography variant="body2">
                {fileNameOD}
            </Typography>
            <Button
                variant="contained"
                color={hasPozaOD ? "primary" : "secondary"}
                startIcon={<CloudDownloadIcon />}
                onClick={handleDownloadOD}
                disabled={!hasPozaOD} // Disable button if file is not available
                style={{ width: '250px' }}
            >
                {hasPozaOD ? "Descarcă poza OD" : "Indisponibil poza OD"}
            </Button>
        </Box>
    );
}

export default FileUploadOD;