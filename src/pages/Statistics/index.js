import React from 'react'
import Paper from "@mui/material/Paper";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {ShopStatistic, MyStatistic} from "../../components";

import styles from './Statistics.module.scss'

export const Statistics = () => {
    const [statistic, setStatistic] = React.useState(0)
   return (
       <>
           <Paper fullWidth classes={{root: styles.root}}>
               <ButtonGroup aria-label={'Set Statistic'}>
                   <Button variant={`${statistic == 0 ? 'contained' : 'outlined' }`} onClick={() =>setStatistic(0)}>Общая статистика</Button>
                   <Button variant={`${statistic == 1 ? 'contained' : 'outlined' }`} onClick={() => setStatistic(1)}>Моя статистика</Button>
               </ButtonGroup>
           </Paper>
           {statistic === 0 ? (
                   <ShopStatistic/>
               )
               : (
                   <MyStatistic/>
               )
           }
       </>
   )
}
