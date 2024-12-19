import React, {useEffect, useState} from 'react';
import { Button, Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from "axios";

const FileUploadOS = ({ onFileSelectOS, idFisaMedicala }) => {
    const [fileNameOS, setFileNameOS] = useState('No file chosen');
    const [hasPozaOS, setHasPozaOS] = useState(false);

    const handleFileChangeOS = (event) => {
        const fileOS = event.target.files[0];
        if (fileOS) {
            setFileNameOS(fileOS.name);
            onFileSelectOS(fileOS); // Transmite fișierul selectat către componenta părinte
        }
    };

    useEffect(() => {
        if (idFisaMedicala) {
            axios.get(`${process.env.REACT_APP_SERVER_LINK}/medici/fisaMedicala/${idFisaMedicala}/downloadPozaOS`, {
                responseType: 'arraybuffer',
            }).then((response: any) => {
                setHasPozaOS(true);
            }).catch((error: any) => {
                setHasPozaOS(false);
            });
        }
    }, [idFisaMedicala]);

    const handleDownloadOS = async () => {
        if(hasPozaOS) {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_LINK}/medici/fisaMedicala/${idFisaMedicala}/downloadPozaOS`,
                    {
                        responseType: 'blob', // Asigură că răspunsul este un Blob
                    }
                );

                // Crează un URL pentru Blob
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;

                // Setează numele fișierului pentru descărcare
                link.setAttribute('download', 'pozaOS.jpg'); // Numele implicit al fișierului
                document.body.appendChild(link);

                // Declanșează descărcarea și elimină link-ul
                link.click();
                link.remove();
            } catch (error) {
                console.error('Error downloading Poza OS:', error);
            }
        }
    };

    return (
        <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center", width: "100%", gap: "5%", mt: "25px", mb: "15px"}}>
            <input
                accept="image/*"
                style={{display: 'none'}}
                id="file-upload-os"
                type="file"
                onChange={handleFileChangeOS}
            />
            <label htmlFor="file-upload-os">
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<CloudUploadIcon/>}
                    style={{width: '250px' }}
                >
                    Încarcă poza OS
                </Button>
            </label>
            <Typography variant="body2">
                {fileNameOS}
            </Typography>
            <Button
                variant="contained"
                color={hasPozaOS ? "primary" : "secondary"}
                startIcon={<CloudDownloadIcon />}
                onClick={handleDownloadOS}
                disabled={!hasPozaOS} // Disable button if file is not available
                style={{ width: '250px' }}
            >
                {hasPozaOS ? "Descarcă poza OS" : "Indisponibil poza OS"}
            </Button>
        </Box>
    );
}

export default FileUploadOS;