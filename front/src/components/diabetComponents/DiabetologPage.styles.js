import React from 'react'

export const centerBoxSx: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.8)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

};

export const typographyTitluSx: React.CSSProperties = {
    padding: "20px 0px",
    color: "black",
    width: "100%",
    fontSize: "25px",
    fontWeight: "600",
};

export const boxSx: React.CSSProperties = {
    width: "90%",
    background: "white",
    borderRadius: "5px",
    border: "4px solid #adadad",
    margin: "10px 0px",
    display: "flex",
    flexDirection: 'column',
};

export const typographyNumeSiPrenumeSx: React.CSSProperties = {
    padding: "10px 10px",
    color: "black",
    width: "350px",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "600",
};

export const numeSiPrenumeSx: React.CSSProperties = {
    padding: "10px 10px",
    width: "100%",
};

export const typographyNrCrtSx: React.CSSProperties = {
    padding: "10px 10px",
    color: "black",
    width: "130px",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "600",
};

export const nrCrtSx: React.CSSProperties = {
    padding: "10px 10px",
    width: "250px",
};

export const typographyCNPSx: React.CSSProperties = {
    padding: "10px 10px",
    color: "black",
    width: "70px",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "600",
};

export const CNPSx: React.CSSProperties = {
    padding: "10px 10px",
    width: "200px",
};

export const typographyDiabetZaharatSx: React.CSSProperties = {
    padding: "10px 10px",
    color: "black",
    width: "190px",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "600",
};

export const diabetZaharatSx: React.CSSProperties = {
    padding: "10px 10px",
    width: "300px",
};

export const typographyDataDiagnosticuluiSx: React.CSSProperties = {
    padding: "10px 10px",
    color: "black",
    width: "200px",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "600",
};

export const typographyProgramaerSx: React.CSSProperties = {
    padding: "10px 10px",
    color: "black",
    width: "300px",
    alignContent: "center",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "600",
};

export const buttonProgrameazaSx: React.CSSProperties = {
    marginTop: "1%",
    width: "20%",
    height: "50px",
    border: "1px solid",
    background: "#2691d9",
    borderRadius: "25px",
    fontSize: "18px",
    color: "#e9f4fb",
    fontWeight: "700",
    cursor: "pointer",
    '&:hover': {
        background: "#2691d9",
        borderColor: "#2691d9",
        transition: ".5s",
    },
};

export const buttonDeconectareSx: React.CSSProperties = {
    marginBottom: "1%",
    width: "20%",
    height: "50px",
    border: "1px solid",
    background: "#2691d9",
    borderRadius: "25px",
    fontSize: "18px",
    color: "#e9f4fb",
    fontWeight: "700",
    cursor: "pointer",
    '&:hover': {
        background: "#2691d9",
        borderColor: "#2691d9",
        transition: ".5s",
    },
};
