import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
function MuiDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [dateTime, setDateTime] = useState(null);
    console.log({ dateTime });
    return (
        <Stack
            spacing={4}
            sx={{
                width: "250px",
            }}
        >
            <DatePicker
                label="Date Picker"
                renderInput={(params) => <TextField {...params} />}
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
            />
            <TimePicker
                label="Time Picker"
                clearable
                ampm={false}
                renderInput={(params) => <TextField {...params} />}
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}
            />

            <DateTimePicker
                label="Date Time Picker"
                clearable
                ampm={false}
                renderInput={(params) => <TextField {...params} />}
                value={dateTime}
                onChange={(newValue) => setDateTime(newValue)}
            />
        </Stack>
    );
}

export default MuiDatePicker;
