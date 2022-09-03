import React from 'react'
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Avatar, FormControl, InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


import styles from "../Home/Home.module.scss";
import Button from "@mui/material/Button";


export const Register = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Paper classes={{root: styles.root}}>
            <Typography classes={{root: styles.title}}>Создание аккаунта</Typography>
            <div className={styles.avatar}>
                    <Avatar sx={{width: 80, height: 80}}/>
            </div>
            <TextField className={styles.field} label={'Полное имя'} fullWidth/>
            <TextField className={styles.field} label={'E-Mail'} fullWidth/>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">№ TT</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    className={styles.dropdown}
                >
                    <MenuItem value={10}>ТТ928</MenuItem>
                    <MenuItem value={20}>ТТ934</MenuItem>
                </Select>
            </FormControl>
            <TextField className={styles.field} label={'Пароль'} fullWidth/>
            <Button size={'large'} variant={'contained'} fullWidth >Зарегистрироватся</Button>
        </Paper>
    )
}