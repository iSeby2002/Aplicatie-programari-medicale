import React from 'react'

export const centerBoxSx: React.CSSProperties = {
    position: "relative",
    margin: "50px 0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.8)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',

};

export const typographyNumeSiPrenumeSx: React.CSSProperties = {
    padding: "10px 10px",
    color: "black",
    fontSize: "18px",
    fontWeight: "600",
};

export const numeSiPrenumeSx: React.CSSProperties = {
    padding: "10px 10px",
    width: "20%",
};

export const typographyCNPSx: React.CSSProperties = {
    padding: "10px 10px",
    color: "black",
    fontSize: "18px",
    fontWeight: "600",
};

export const CNPSx: React.CSSProperties = {
    padding: "10px 10px",
};

export const typographyWeekSx: React.CSSProperties = {
    paddingBottom: "20px",
    paddingTop: "10px",
    color: "black",
    alignContent: "center",
    fontSize: "18px",
    fontWeight: "600",
};

export const buttonSagetiSx: React.CSSProperties = {
    padding: "10px 10px",
    border: "1px solid",
    background: "#2691d9",
    borderRadius: "100px",
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

export const buttonSx: React.CSSProperties = {
    whiteSpace: 'pre-wrap',
    lineHeight: 'normal',  // Ajustează linia de bază a textului
    textAlign: 'center',   // Opțional: centrează textul
    width: "20%",
    height: "60px",
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