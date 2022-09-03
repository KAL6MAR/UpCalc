
import React from 'react'
import {Avatar, Box, LinearProgress, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
/* eslint-disable react/prop-types */
export const PersonalStatistic = ({name, upsell, lastActivity}) => {
    return (
        <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 1, sm: 2, md: 4}} style={{alignItems: 'center', margin: 15}}>
            <Avatar sx={{width: 20, height: 20}}/>
            <Box minWidth={130}>
                {name}
            </Box>
            <Box sx={{width: '50%', mr: 1}}>
                <LinearProgress variant={'determinate'} value={46}/>
            </Box>

            <Box sx={{minWidth: 35}}>
                <Typography variant={'body2'} color={'black'}>
                    {upsell} / 250
                </Typography>
            </Box>
            <Typography variant={'body2'} color={'black'}>{lastActivity}</Typography>
        </Stack>
    )
}
