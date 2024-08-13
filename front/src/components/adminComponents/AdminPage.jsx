import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, CssBaseline } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {buttonDeconectareSX, buttonSX, centerBoxSx, typographyPersonalMedialSX} from "./AdminPage.styles";
import { GridColDef } from "@mui/x-data-grid";
import CustomizedSnackbars from "../../utils/CustomizedSnackbars";


function DataTable({columns, rows, onSelectUser }: { columns: GridColDef[], rows: any[], onSelectUser: (user: any) => void }) {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={rows.length}
            disableColumnMenu={true}
            hideFooter
            checkboxSelection
            disableMultipleRowSelection={true}
            onRowSelectionModelChange={(newSelection: any[]) => {
                const selectedID = newSelection[0];
                const selectedMedic = rows.find((row) => row.id === selectedID);
                onSelectUser(selectedMedic);
            }}
        />
    );
}

const AdminPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("")
    const [message, setMessage] = React.useState("");
    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    const [medici, setMedici] = useState([]);
    const [selectedMedic, setSelectedMedic] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_LINK}/admin/getMedici`, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            setMedici(response.data);
        })
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'nume', headerName: 'Nume', width: 250 },
        { field: 'prenume', headerName: 'Prenume', width: 250 },
        { field: 'email', headerName: 'Email', width: 350 },
        { field: 'phoneNumber', headerName: 'Telefon', width: 150 },
    ];

    const handleSelectMedic = (med) => {
        if (med) {
            setSelectedMedic(med);
        } else {
            setSelectedMedic(null);
        }
    };

    const handleAdaugare = () => {
        navigate("/AdminPage/RegisterPage", { state: location.state });
    };

    const handleEditare = () => {
        if(selectedMedic == null) {
            setOpen(true);
            setSeverity("error");
            setMessage("Trebuie selectat un medic!");
        }else{
            const stateData = { admin: location.state, medic: selectedMedic };
            navigate("/AdminPage/EditarePage", { state: stateData});
        }
    };

    const handleStergere = () => {
        if(selectedMedic == null) {
            setOpen(true);
            setSeverity("error");
            setMessage("Trebuie selectat un medic!");
        }else{
            axios.post(`${process.env.REACT_APP_SERVER_LINK}/admin/delete`, selectedMedic,{
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                setOpen(true);
                setSeverity("success");
                setMessage(response.data);

                axios.get(`${process.env.REACT_APP_SERVER_LINK}/admin/getMedici`, {
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((response: any) => {
                    setMedici(response.data);
                })

            }).catch((error: any) => {
                setOpen(true);
                setSeverity("error");
                setMessage(error.response.data);
            });
        }
    };

    const handleDeconectare = () => {
        navigate("/");
        localStorage.setItem('auth', 'false');
    };

    return (
        <div className="adminPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx}>
                <Typography sx={typographyPersonalMedialSX}>
                    Personalul medical
                </Typography>
                <Box style={{ height: 400, width: '90%', padding: "10px 10px" }}>
                    <DataTable columns={columns} rows={medici} onSelectUser={handleSelectMedic}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    padding: "10px 10px"
                }}>
                    <Button onClick={handleAdaugare} sx={buttonSX}>
                        Adăugare
                    </Button>
                    <Button onClick={handleEditare} sx={buttonSX}>
                        Editare
                    </Button>
                    <Button onClick={handleStergere} sx={buttonSX}>
                        Ștergere
                    </Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    padding: "10px 10px"
                }}>
                    <Button onClick={handleDeconectare} sx={buttonDeconectareSX}>
                        Deconectare
                    </Button>
                </Box>
            </Box>
            <CustomizedSnackbars
                open={open}
                severity={severity}
                message={message}
                onClose={handleCloseSnackbar}
            />
        </div>
    );
};

export default AdminPage;
