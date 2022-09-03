import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from './Home.module.scss';
import { Avatar, Card, FormControl, InputLabel, Stack } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const isAuth = false;

    return (
        <>
            {isAuth ? (
                <Paper classes={{ root: styles.root }}>
                    <Card classes={{ root: styles.avatar }}>
                        <Avatar
                            alt={'Denys Derhachov'}
                            sx={{ width: 100, height: 100 }}
                        >
                            DD
                        </Avatar>
                    </Card>
                    <Typography classes={{ root: styles.title }} variant="h5">
                        Введите номер
                    </Typography>
                    <TextField
                        className={styles.field}
                        label="Номер телефона"
                        error
                        helperText="Неверно указанный номер телефона"
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            UPS
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            className={styles.dropdown}
                        >
                            <MenuItem value={10}>FMC</MenuItem>
                            <MenuItem value={20}>Миграция</MenuItem>
                            <MenuItem value={30}>TV</MenuItem>
                            <MenuItem value={40}>FMC(Смена ТП)</MenuItem>
                            <MenuItem value={50}>Смена ТП Pontis</MenuItem>
                            <MenuItem value={60}>Международные звонки</MenuItem>
                            <MenuItem value={70}>Смена ТП матрица</MenuItem>
                            <MenuItem value={80}>Супер-Сила</MenuItem>
                        </Select>
                    </FormControl>
                    <Stack
                        direction="row"
                        spacing={20}
                        classes={{ root: styles.stack }}
                    >
                        <Button size="large" variant="contained" fullwidth>
                            <DeleteOutlineOutlinedIcon color={'secondary'} />
                        </Button>
                        <Button size="large" variant="contained" fullwidth>
                            <ThumbUpAltOutlinedIcon color={'secondary'} />
                        </Button>
                    </Stack>
                </Paper>
            ) : (
                <Paper classes={{ root: styles.root }}>
                    <Typography variant={'h5'} className={styles.title}>
                        Добро пожаловать в UpCalc ✨
                    </Typography>
                    <Stack
                        fullWidth
                        direction={'column'}
                        style={{
                            justifyContent: 'space-between',
                        }}
                    >
                        <Link to="/login">
                            <Button
                                variant="outlined"
                                className={styles.button}
                                fullWidth
                            >
                                Войти
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button
                                variant="contained"
                                className={styles.button}
                                fullWidth
                            >
                                Создать аккаунт
                            </Button>
                        </Link>
                    </Stack>
                </Paper>
            )}
        </>
    );
};
