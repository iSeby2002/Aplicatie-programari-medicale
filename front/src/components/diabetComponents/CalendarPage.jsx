import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { Button, CssBaseline, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {
    buttonSagetiSx, buttonSx,
    centerBoxSx, CNPSx,
    numeSiPrenumeSx, typographyCNPSx,
    typographyNumeSiPrenumeSx,
    typographyWeekSx
} from "./CalendarPage.styles";
import axios from "axios";
import CustomizedSnackbars from "../../utils/CustomizedSnackbars";
import {useNavigate, useLocation} from "react-router-dom";


const daysOfWeek = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];
const timeSlots = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45"];

const CalendarPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("")
    const [message, setMessage] = React.useState("");
    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    const [gresit, setGresit] = React.useState({ numeSiPrenume: false, cnp: false });
    const validateNumeSiPrenume = (value: string) => /^[a-zA-Z\s-]+$/.test(value);
    const validateCNP = (value: string) => /^[0-9]{13}$/.test(value);

    const [numeSiPrenume, setNumeSiPrenume] = React.useState("");
    const [cnp, setCnp] = React.useState("");
    const [selectedSlot, setSelectedSlot] = useState(null);  // Pentru a stoca celula selectată

    const handleProgrameaza = () => {
        if( !selectedSlot ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot!");
        }else if( selectedSlot.isBlocked ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Acest slot este blocat. Nu se poate face programare!");
        }else if( numeSiPrenume === "" || cnp === "" ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Câmpurile trebuie completate!");
        }else {
            const allFieldsValid = Object.values(gresit).every(value => value === false);

            if( allFieldsValid ) {
                const { day, time } = selectedSlot;
                const dayIndex = daysOfWeek.indexOf(day);
                const selectedDayDate = getCurrentWeekDates()[dayIndex];

                // Construiește data și ora în formatul "YYYY-MM-DDTHH:MM"
                const startTime = `${selectedDayDate.format('YYYY-MM-DD')}T${time}`;

                const programareDTO = {
                    pacient: {
                        numePrenume: numeSiPrenume,
                        cnp: cnp,
                    },
                    startTime: startTime  // Data și ora slotului selectat în formatul necesar
                };

                axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/saveProgramare`, programareDTO,{
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((response: any) => {
                    if( response.data === "Programare reușită" ) {
                        setOpen(true);
                        setSeverity("success");
                        setMessage(response.data);
                    }else {
                        setOpen(true);
                        setSeverity("warning");
                        setMessage(response.data);
                    }

                    getProgramariByWeek(weekStartDate.format('YYYY-MM-DD'));

                    setNumeSiPrenume("");
                    setCnp("");
                    setSelectedSlot(null);
                }).catch((error) => {
                    setOpen(true);
                    setSeverity("error");
                    setMessage(error.response.data);
                });
            }
        }
    };

    const handleEditeazaProgramare = () => {
        if( !selectedSlot ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot!");
        }else if( selectedSlot.isBlocked ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Acest slot este blocat. Nu se poate edita!");
        }else if( !selectedSlot.isOccupied ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot cu o programare existentă înainte de a edita!");
        }else if( numeSiPrenume === "" || cnp === "" ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Câmpurile trebuie completate!");
        }else {
            const allFieldsValid = Object.values(gresit).every(value => value === false);

            if(allFieldsValid) {
                const { day, time } = selectedSlot;
                const dayIndex = daysOfWeek.indexOf(day);
                const selectedDayDate = getCurrentWeekDates()[dayIndex];

                // Construiește data și ora în formatul "YYYY-MM-DDTHH:MM"
                const startTime = `${selectedDayDate.format('YYYY-MM-DD')}T${time}`;

                const programareDTO = {
                    pacient: {
                        numePrenume: numeSiPrenume,
                        cnp: cnp,
                    },
                    startTime: startTime  // Data și ora slotului selectat în formatul necesar
                };

                axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/updateProgramare`, programareDTO,{
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((response: any) => {
                    if( response.data === "Editare programare realizată cu succes!" ) {
                        setOpen(true);
                        setSeverity("success");
                        setMessage(response.data);
                    }else {
                        setOpen(true);
                        setSeverity("warning");
                        setMessage(response.data);
                    }

                    getProgramariByWeek(weekStartDate.format('YYYY-MM-DD'));

                    setNumeSiPrenume("");
                    setCnp("");
                    setSelectedSlot(null);
                }).catch((error) => {
                    setOpen(true);
                    setSeverity("error");
                    setMessage(error.response.data);
                });
            }
        }
    };

    const handleAnuleazaProgramare = () => {
        if( !selectedSlot ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot!");
        }else if( selectedSlot.isBlocked ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Acest slot este blocat. Nu se poate face anulare!");
        }else if ( !selectedSlot.isOccupied ) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot cu o programare existentă înainte de a anula!");
        }else {
            const { day, time } = selectedSlot;
            const dayIndex = daysOfWeek.indexOf(day);
            const selectedDayDate = getCurrentWeekDates()[dayIndex];

            // Construiește data și ora în formatul "YYYY-MM-DDTHH:MM"
            const startTime = `${selectedDayDate.format('YYYY-MM-DD')}T${time}`;

            const programareDTO = {
                pacient: {
                    numePrenume: numeSiPrenume,
                    cnp: cnp,
                },
                startTime: startTime  // Data și ora slotului selectat în formatul necesar
            };

            axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/deleteProgramare`, programareDTO,{
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                setOpen(true);
                setSeverity("success");
                setMessage(response.data);

                getProgramariByWeek(weekStartDate.format('YYYY-MM-DD'));

                setNumeSiPrenume("");
                setCnp("");
                setSelectedSlot(null);
            }).catch((error) => {
                setOpen(true);
                setSeverity("error");
                setMessage(error.response.data);
            });
        }
    };

    const [blockedSlots, setBlockedSlots] = useState({});

    const handleBlocareSlot = () => {
        if(!selectedSlot) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot!");
        }else if( selectedSlot.isOccupied || selectedSlot.isBlocked) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot deblocat si fară programare!");
        }else {
            const { day, time } = selectedSlot;
            const dayIndex = daysOfWeek.indexOf(day);
            const selectedDayDate = getCurrentWeekDates()[dayIndex];

            // Construiește data și ora în formatul "YYYY-MM-DDTHH:MM"
            const startTime = `${selectedDayDate.format('YYYY-MM-DD')}T${time}`;

            axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/blocareSlot`, startTime,{
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                setOpen(true);
                setSeverity("success");
                setMessage(response.data);

                getSloturiBlocateByWeek(weekStartDate.format('YYYY-MM-DD'));

            }).catch((error) => {
                setOpen(true);
                setSeverity("error");
                setMessage(error.response.data);
            });

            setSelectedSlot(null); // Deselectează slotul după blocare
        }
    };

    const handleDeblocareSlot = () => {
        if(!selectedSlot) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot!");
        }else if(!selectedSlot.isBlocked) {
            setOpen(true);
            setSeverity("error");
            setMessage("Slotul selectat nu este blocat!");
        }else {
            const { day, time } = selectedSlot;
            const dayIndex = daysOfWeek.indexOf(day);
            const selectedDayDate = getCurrentWeekDates()[dayIndex];

            // Construiește data și ora în formatul "YYYY-MM-DDTHH:MM"
            const startTime = `${selectedDayDate.format('YYYY-MM-DD')}T${time}`;

            axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/deblocareSlot`, startTime,{
                headers: {
                    "content-type": "application/json"
                }
            }).then((response: any) => {
                setOpen(true);
                setSeverity("success");
                setMessage(response.data);

                getSloturiBlocateByWeek(weekStartDate.format('YYYY-MM-DD'));

            }).catch((error) => {
                setOpen(true);
                setSeverity("error");
                setMessage(error.response.data);
            });

            setSelectedSlot(null); // Deselectează slotul după deblocare
        }
    };

    const [appointments, setAppointments] = useState({});
    const [weekStartDate, setWeekStartDate] = useState(dayjs().startOf('week'));
    const [selectedDate, setSelectedDate] = useState(dayjs());

    useEffect(() => {
        // Setează săptămâna curentă și ziua curentă când pagina este încărcată
        const currentDay = dayjs();
        setSelectedDate(currentDay);
        setWeekStartDate(currentDay.startOf('week').add(1, 'day'));
    }, []);

    const handleCellClick = (day, time) => {
        if(day === "Sâmbătă" || day === "Duminică") return;

        const slotKey = `${day}-${time}`;
        const appointment = appointments[slotKey];
        const isBlocked = blockedSlots[slotKey];

        if(appointment) {
            // Slotul este ocupat
            setNumeSiPrenume(appointment.numePrenume);
            setCnp(appointment.cnp);
            setSelectedSlot({ day, time, isOccupied: true, isBlocked: false });
        }else if (isBlocked) {
            // Slotul este blocat
            setNumeSiPrenume("");
            setCnp("");
            setSelectedSlot({ day, time, isOccupied: false, isBlocked: true });
        }else {
            // Slotul este liber
            setNumeSiPrenume("");
            setCnp("");
            setSelectedSlot({ day, time, isOccupied: false, isBlocked: false });
        }
    };

    const handlePrevWeek = () => {
        setWeekStartDate(weekStartDate.subtract(7, 'day'));
        setSelectedDate(null); // Resetează highlighting-ul când navighezi în săptămâni diferite
        setAppointments({}); // Resetează programările atunci când schimbi săptămâna
        setNumeSiPrenume("");
        setCnp("");
        setSelectedSlot(null);
    };

    const handleNextWeek = () => {
        setWeekStartDate(weekStartDate.add(7, 'day'));
        setSelectedDate(null); // Resetează highlighting-ul când navighezi în săptămâni diferite
        setAppointments({}); // Resetează programările atunci când schimbi săptămâna
        setNumeSiPrenume("");
        setCnp("");
        setSelectedSlot(null);
    };

    const handleDateChange = (date) => {
        // Dacă este selectată duminica, asigură-te că rămâne în săptămâna curentă
        if( dayjs(date).day() === 0 ) {
            date = dayjs(date).subtract(1, 'day');
        }
        setSelectedDate(date);
        const startOfWeek = dayjs(date).startOf('week').add(1, 'day');
        setWeekStartDate(startOfWeek);
        setNumeSiPrenume("");
        setCnp("");
        setSelectedSlot(null);
    };

    const getCurrentWeekDates = () => {
        const dates = [];
        const startDate = dayjs(weekStartDate);
        for (let i = 0; i < 7; i++) {
            dates.push(startDate.add(i, 'day'));
        }
        return dates;
    };

    const isHighlighted = (dayIndex) => {
        const currentDate = getCurrentWeekDates()[dayIndex];

        // Verifică dacă ziua este sâmbătă (dayIndex = 5) sau duminică (dayIndex = 6)
        if( currentDate.day() === 6 || currentDate.day() === 0 ) {
            return false; // Nu aplica highlight pentru sâmbătă și duminică
        }

        if(!selectedDate) return false;

        return currentDate.isSame(selectedDate, 'day');
    };

    const getWeekInterval = () => {
        const startOfWeek = getCurrentWeekDates()[0];
        const endOfWeek = getCurrentWeekDates()[6];
        return `${startOfWeek.format('MMM D')} - ${endOfWeek.format('MMM D, YYYY')}`;
    };

    const getProgramariByWeek = (startWeek) => {
        axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/getProgramariByWeek`, startWeek, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const programari = response.data;
            const updatedAppointments = {};

            // Parcurge lista de programări și actualizează appointments
            programari.forEach((programare) => {
                const dateTime = dayjs(programare.startTime);
                const day = daysOfWeek[dateTime.day() - 1]; // Extrage ziua săptămânii, -1 pentru că duminică are indexul 0
                const time = dateTime.format('HH:mm');

                // Cheie pentru a găsi slotul corespunzător
                const slotKey = `${day}-${time}`;
                updatedAppointments[slotKey] = {
                    numePrenume: programare.pacient.numePrenume,
                    cnp: programare.pacient.cnp
                };
            });

            setAppointments(updatedAppointments); // Actualizează starea cu noile programări
        }).catch((error) => {
            console.error("Eroare la obținerea programărilor:", error);
        });
    };

    const getSloturiBlocateByWeek = (startWeek) => {
        axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/getSloturiBlocateByWeek`, startWeek, {
            headers: {
                "content-type": "application/json"
            }
        }).then((response: any) => {
            const sloturiBlocate = response.data;
            const updatedBlockedSlots = {};

            sloturiBlocate.forEach(slotBlocat => {
                const dateTime = dayjs(slotBlocat.slot);
                const day = daysOfWeek[dateTime.day() - 1];
                const time = dateTime.format('HH:mm');
                const slotKey = `${day}-${time}`;
                updatedBlockedSlots[slotKey] = true;
            });

            setBlockedSlots(updatedBlockedSlots); // Actualizează starea cu sloturile blocate
        }).catch((error) => {
            console.error("Eroare la obținerea sloturilor blocate:", error);
        });
    };

    useEffect(() => {
        getProgramariByWeek(weekStartDate.format('YYYY-MM-DD'));
        getSloturiBlocateByWeek(weekStartDate.format('YYYY-MM-DD'));
    }, [weekStartDate]); // Re-execută useEffect când weekStartDate se schimbă

    const handleDeconectare = () => {
        navigate("/");
        localStorage.setItem('auth', 'false');
    };

    return (
        <div className="diabetologPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx}>
                {/* Calendar*/}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="calendar-container">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                paddingTop: "20px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                gap: "10px",
                            }}>
                            <Button sx={buttonSagetiSx} onClick={handlePrevWeek}>
                                {"<"}
                            </Button>
                            <DatePicker
                                label="Select Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                slotProps={{ textField: { variant: 'standard' } }}
                                format="DD/MM/YYYY"  // Schimbă formatul la DD/MM/YYYY
                            />
                            <Button sx={buttonSagetiSx} onClick={handleNextWeek}>
                                {">"}
                            </Button>
                        </Box>
                        <Typography className="week-interval" sx={typographyWeekSx}>
                            {getWeekInterval()}
                        </Typography>
                        <table className="calendar-table">
                            <thead>
                            <tr>
                                <th></th>
                                {daysOfWeek.map((day, index) => (
                                    <th
                                        key={day}
                                        className={isHighlighted(index) ? "highlighted-day" : ""}
                                    >
                                        {day} <br/> {getCurrentWeekDates()[index].format('MMM D, YYYY')}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {timeSlots.map((time) => (
                                <tr key={time}>
                                    <td className="time-slot">{time}</td>
                                    {daysOfWeek.map((day, index) => {
                                        const slotKey = `${day}-${time}`;
                                        const appointment = appointments[slotKey];
                                        const isOccupied = Boolean(appointment);
                                        const isSelected = selectedSlot && selectedSlot.day === day && selectedSlot.time === time;
                                        const isBlocked = blockedSlots[slotKey];

                                        return (
                                            <td
                                                key={`${day}-${time}`}
                                                className={`calendar-cell ${day === "Sâmbătă" || day === "Duminică" ? "disabled-cell" : ""}
                                                    ${isSelected ? "selected-cell" : ""}
                                                    ${!isSelected && isOccupied ? "occupied-cell" : ""}
                                                    ${!isSelected && isBlocked ? "blocked-cell" : ""}`} // Adaugă clasa "blocked-cell" dacă slotul este blocat
                                                onClick={() => handleCellClick(day, time)} // Ignoră click-ul dacă slotul este blocat
                                            >
                                                {isOccupied ? appointment.numePrenume : ""}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </LocalizationProvider>
                {/* Typography si TextField*/}
                <Box sx={{display: "flex", justifyContent: "center", width: "100%", padding: "10px 10px"}}>
                    <Typography sx={typographyNumeSiPrenumeSx}>
                        Nume și prenume:
                    </Typography>
                    <TextField
                        id="numeSiPrenumeField"
                        name="numeSiPrenumeField"
                        value={numeSiPrenume}
                        variant="standard"
                        required
                        onChange={(e) => {
                            const value = e.target.value;
                            setNumeSiPrenume(value);
                            setGresit({...gresit, numeSiPrenume: !validateNumeSiPrenume(value)});
                        }}
                        error={gresit.numeSiPrenume}
                        helperText={gresit.numeSiPrenume ? "Nume si prenume incorect." : ""}
                        sx={numeSiPrenumeSx}
                    />
                    <Typography sx={typographyCNPSx}>
                        CNP:
                    </Typography>
                    <TextField
                        id="CNPField"
                        name="CNPField"
                        value={cnp}
                        variant="standard"
                        required
                        onChange={(e) => {
                            const value = e.target.value;
                            setCnp(value);
                            setGresit({ ...gresit, cnp: !validateCNP(value) });
                        }}
                        error={gresit.cnp}
                        helperText={gresit.cnp ? "CNP incorect." : ""}
                        sx={CNPSx}
                    />
                </Box>
                {/* Butoane pentru diabetolog*/}
                <div hidden={location.state.role === "oftalmolog"} style={{width: "100%"}}>
                    <Box  sx={{display: "flex", justifyContent: "center", width: "100%", padding: "10px 10px", gap: "20px"}}>
                        <Button sx={buttonSx} onClick={handleProgrameaza}>
                            Programează
                        </Button>
                        <Button sx={buttonSx} onClick={handleEditeazaProgramare}>
                            {"Editează\nProgramare"}
                        </Button>
                        <Button sx={buttonSx} onClick={handleAnuleazaProgramare}>
                            {"Anulează\nProgramare"}
                        </Button>
                    </Box>
                </div>
                {/* Butoane pentru oftalmolog*/}
                <div hidden={location.state.role === "diabetolog"} style={{width: "100%"}}>
                    <Box  sx={{display: "flex", justifyContent: "center", width: "100%", padding: "10px 10px", gap: "20px"}}>
                        <Button sx={buttonSx}>
                            {"Completează\nscreening-ul"}
                        </Button>
                        <Button sx={buttonSx} onClick={handleBlocareSlot}>
                            {"Blochează\nslotul"}
                        </Button>
                        <Button sx={buttonSx} onClick={handleDeblocareSlot}>
                            {"Deblochează\nslotul"}
                        </Button>
                    </Box>
                </div>
                {/* Buton deconectare*/}
                <Box sx={{display: "flex", justifyContent: "center", width: "100%", padding: "10px 10px", gap: "20px"}}>
                    <Button sx={buttonSx} onClick={handleDeconectare}>
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

export default CalendarPage;