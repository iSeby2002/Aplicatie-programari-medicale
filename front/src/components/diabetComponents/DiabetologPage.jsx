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
} from "./DiabetologPage.styles";
import axios from "axios";
import CustomizedSnackbars from "../../utils/CustomizedSnackbars";

const daysOfWeek = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];
const timeSlots = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45"];

const DiabetologPage = () => {
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
        if (!selectedSlot) {
            setOpen(true);
            setSeverity("error");
            setMessage("Selectați un slot de timp înainte de a programa!");
        }else if(numeSiPrenume === "" || cnp === "") {
            setOpen(true);
            setSeverity("error");
            setMessage("Câmpurile trebuie completate!");
        }else{
            const allFieldsValid = Object.values(gresit).every(value => value === false);

            if (allFieldsValid) {
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

                console.log(programareDTO)

                axios.post(`${process.env.REACT_APP_SERVER_LINK}/programari/programare`, programareDTO,{
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((response: any) => {
                    if(response.data === "Programare reușită"){
                        setOpen(true);
                        setSeverity("success");
                        setMessage(response.data);
                    }else{
                        setOpen(true);
                        setSeverity("warning");
                        setMessage(response.data);
                    }

                    setAppointments({
                        ...appointments,
                        [`${day}-${time}`]: {
                            numePrenume: numeSiPrenume,
                            cnp: cnp
                        }  // Salvează numele, prenumele și CNP-ul în celula selectată
                    });

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
    };

    const handleAnuleazaProgramare = () => {
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
        if (day === "Sâmbătă" || day === "Duminică") return;

        const slotKey = `${day}-${time}`;
        const appointment = appointments[slotKey];

        if (appointment) {
            // Slotul este ocupat, completează câmpurile cu informațiile existente
            setNumeSiPrenume(appointment.numePrenume);
            setCnp(appointment.cnp);

            // Poți adăuga și o logică pentru a preveni editarea, dacă este necesar
            setSelectedSlot({ day, time, isOccupied: true });
        } else {
            // Slotul este liber, golește câmpurile și permite selecția
            setNumeSiPrenume("");
            setCnp("");
            setSelectedSlot({ day, time, isOccupied: false });
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
        if (dayjs(date).day() === 0) {
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
        if (currentDate.day() === 6 || currentDate.day() === 0) {
            return false; // Nu aplica highlight pentru sâmbătă și duminică
        }

        if (!selectedDate) return false;

        return currentDate.isSame(selectedDate, 'day');
    };

    const getWeekInterval = () => {
        const startOfWeek = getCurrentWeekDates()[0];
        const endOfWeek = getCurrentWeekDates()[6];
        return `${startOfWeek.format('MMM D')} - ${endOfWeek.format('MMM D, YYYY')}`;
    };

    useEffect(() => {
        const startWeek = weekStartDate.format('YYYY-MM-DD'); // Formatează startWeek pentru a o trimite la backend

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
    }, [weekStartDate]); // Re-execută useEffect când weekStartDate se schimbă

    return (
        <div className="diabetologPage" style={{ height: '100vh', overflowY: 'auto' }}>
            <CssBaseline />
            <Box sx={centerBoxSx}>
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

                                        return (
                                            <td
                                                key={`${day}-${time}`}
                                                className={`calendar-cell ${day === "Sâmbătă" || day === "Duminică" ? "disabled-cell" : ""}
                            ${isSelected ? "selected-cell" : ""}
                            ${!isSelected && isOccupied ? "occupied-cell" : ""}`} // Prioritizează clasa "selected-cell" dacă slotul este selectat
                                                onClick={() => handleCellClick(day, time)}
                                            >
                                                {isOccupied ? appointment.numePrenume : ""} {/* Afișează doar numele și prenumele */}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </LocalizationProvider>
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
                <Box sx={{display: "flex", justifyContent: "center", width: "100%", padding: "10px 10px", gap: "20px"}}>
                    <Button sx={buttonSx} onClick={handleProgrameaza}>
                        Programează
                    </Button>
                    <Button sx={buttonSx} onClick={handleEditeazaProgramare}>
                        Editează Programare
                    </Button>
                    <Button sx={buttonSx} onClick={handleAnuleazaProgramare}>
                        Anulează Programare
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

export default DiabetologPage;