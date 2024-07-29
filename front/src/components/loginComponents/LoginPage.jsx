import React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import {CssBaseline, TextField, Typography, Button} from "@mui/material";
import {
    buttonSx,
    centerBoxSx,
    textFieldSx,
    typographyAutentificareSx,
    typographyCreateSx,
    typographyForgotSx
} from "./LoginPage.styles";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
    const [email, setEmail] = React.useState("");
    const [parola, setParola] = React.useState("");
    const [gresit, setGresit] = React.useState({email: false, parola: false});
    const navigate = useNavigate();

    const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const validateParola = (value: string) => value.length >= 0;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const allFieldsValid = Object.values(gresit).every(value => value === false);

        if(allFieldsValid) {
            const data = new FormData(event.currentTarget);
            const loginDTO = {
                email: data.get('emailField'),
                password: data.get('parolaField'),
            }
            //console.log(loginDTO)

            axios.post("http://localhost:8080/medici/login", loginDTO, {
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                console.log(response.data)
                if(response.data.medic.role === "diabetolog"){
                    console.log(response.data)
                    navigate("/DiabetologPage");
                    // navigate("/MedicDiabetPage", { state: response.data.id })
                }else if(response.data.medic.role === "oftalmolog"){
                    console.log(response.data.medic.role)
                    navigate("/OftalmologPage");
                    // navigate("/MedicOftalmologicPage", { state: response.data.id })
                }
            }).catch((error: any) => {
                console.error(error)
                setGresit(true)
            })
        }
    }

    // const handleForgot = (event) => {
    //     event.preventDefault();
    //     navigate("/ChangePasswordPage");
    // }

    const handleCreateAccount = (event) => {
        event.preventDefault();
        navigate("/RegisterPage");
    }

    return (
      <div className="loginPage" style={{ height: '100vh', overflowY: 'auto' }}>
          <CssBaseline />
          <Box sx={centerBoxSx}>
              <Box component="form" onSubmit={handleSubmit}>
                  <Typography sx={typographyAutentificareSx}>
                      Autentificare
                  </Typography>
                  <TextField
                      id="emailField"
                      label="Email"
                      name="emailField"
                      required
                      value={email}
                      variant="standard"
                      onChange={(e) => {
                          const value = e.target.value;
                          setEmail(value);
                          setGresit({ ...gresit, email: !validateEmail(value) });
                      }}
                      error={gresit.email}
                      helperText={gresit.email ? "Email incorect." : ""}
                      sx={textFieldSx}
                  />
                  <TextField
                      id="parolaField"
                      type="password"
                      label="Parolă"
                      name="parolaField"
                      required
                      value={parola}
                      variant="standard"
                      onChange={(e) => {
                          const value = e.target.value;
                          setParola(value);
                          setGresit({ ...gresit, parola: !validateParola(value) });
                      }}
                      error={gresit.parola}
                      helperText={gresit.parola ? "Parolă incorectă." : ""}
                      sx={textFieldSx}
                  />

                  {/*<Typography sx={typographyForgotSx} onClick={handleForgot}>*/}
                  {/*    Ai uitat parola?*/}
                  {/*</Typography>*/}
                  <Button sx={buttonSx} type="submit">
                      Autentificare
                  </Button>
                  <Typography sx={typographyCreateSx} onClick={handleCreateAccount}>
                      Nu ai cont? Creează cont
                  </Typography>
              </Box>
          </Box>
      </div>
    );
}

export default LoginPage;