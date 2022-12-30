import React from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";
import BasicLayout from "../components/Layout/BasicLayout";
import SettingsForm from "../components/Form/SettingsForm";
import NewsItem from '../components/News/NewsItem';
import NotesItem from '../components/Notes/NotesItem';

const Settings = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ width: '100%'}}>
            <BasicLayout>
                <Grid container spacing={1}>
                    <NotesItem />
                </Grid>

            </BasicLayout>
        </Box>
    );
};

export default Settings;
