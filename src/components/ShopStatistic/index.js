import React from 'react'
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import styles from './ShopStatistic.module.scss'
import {PersonalStatistic} from "../PersonalStatistic";
/* eslint-disable react/prop-types */

export const ShopStatistic = () => {
    return (
        <Container>
            <Paper fullWidth classes={{root: styles.root}}>
               <PersonalStatistic name={'Denys Derhachov'} lastActivity={'Миграция'} upsell={145}/>
                <PersonalStatistic name={'Vadim Danilov'} lastActivity={'FMC'} upsell={380}/>
                <PersonalStatistic name={'Zhenya Zhuk'} lastActivity={'Международные звонки'} upsell={59}/>
                <PersonalStatistic name={'Denis Zabul'} lastActivity={'Смена TП'} upsell={0}/>
            </Paper>
        </Container>
    )
}

