import React from "react";

export const centerBoxSx: React.CSSProperties = {
    position: "relative",
    margin: "7% 0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "70%",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.8)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
};

export const typographyPersonalMedialSX: React.CSSProperties = {
    padding: "20px 0px",
    borderBottom: "2px solid #adadad",
    color: "black",
    width: "100%",
    fontSize: "33px",
    fontWeight: "700",
};

export const buttonSX: React.CSSProperties = {
    marginTop: "15px",
    width: "15%",
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

export const buttonDeconectareSX: React.CSSProperties = {
    marginTop: "15px",
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