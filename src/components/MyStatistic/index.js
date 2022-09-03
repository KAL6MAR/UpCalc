import React from 'react'
import Container from "@mui/material/Container";
import {FormControl, InputLabel, Stack} from "@mui/material";
import Select from "@mui/material/Select";
import styles from "../../pages/Home/Home.module.scss";
import MenuItem from "@mui/material/MenuItem";
import dayjs from 'dayjs';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {PhoneTable} from "../PhoneTable";

export const MyStatistic = () => {
    const [age, setAge] = React.useState('');
    const [startDate, setStartDate] = React.useState(dayjs());
    const [date, setDate] = React.useState(dayjs());

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container>
           <Stack direction={{sm: 'column',md: 'row'}} spacing={3}>
              <FormControl style={{minWidth: 160}}>
               <InputLabel id="demo-simple-select-label">Выберите период</InputLabel>
               <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={age}
                   label="Выберите период"
                   onChange={handleChange}
                   className={styles.dropdown}
               >
                   <MenuItem value={10}>За период</MenuItem>
                   <MenuItem value={20}>За день</MenuItem>
               </Select>
           </FormControl>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <DatePicker
                       disableFuture
                       label="Responsive"
                       openTo="month"
                       views={['year', 'month', 'day']}
                       value={startDate}
                       onChange={(newValue) => {
                           setStartDate(newValue);
                       }}
                       renderInput={(params) => <TextField {...params} />}
                   />
                   <span> - </span>

                   <DatePicker
                       disableFuture
                       label="Responsive"
                       openTo="month"
                       views={['year', 'month', 'day']}
                       value={date}
                       onChange={(newValue) => {
                           setDate(newValue);
                       }}
                       renderInput={(params) => <TextField {...params} />}
                   />
               </LocalizationProvider>
               <Button variant={'contained'} style={{margin: 10}}>Применить</Button>
           </Stack>
            <PhoneTable/>
        </Container>
    )
}
