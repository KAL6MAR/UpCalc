import React from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import styles from './Header.module.scss'

import {Link} from 'react-router-dom'

export const Header = () => {
    const isAuth = false;

    return (
        <div className={styles.root}>
            <Container maxWidth={'lg'}>
                <div className={styles.inner}>
                    <div></div>
                    <Link className={styles.logo} to={'/'}>
                        <div style={{fontFamily: 'Pacifico'}}>
                            UpCalc
                        </div>
                    </Link>
                    <div className={styles.button}>
                        {isAuth ? (
                            <>
                                <Link to="/statistics">
                                    <Button variant={'contained'} >
                                        Статистика
                                    </Button>
                                </Link>
                                <Link to="/statistics">
                                    <Button variant={'contained'} color={'error'} >
                                        Выйти
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant={'outlined'}>Войти</Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant={'contained'}>Создать аккаунт</Button>
                                </Link>
                            </>
                        )
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}