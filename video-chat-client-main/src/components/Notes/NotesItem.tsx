import Button from '@mui/material/Button/Button';
import Card from '@mui/material/Card/Card';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import {Edit, PlusOne} from "@mui/icons-material";

const NotesItem = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: '20px', height: '200px', minWidth: '300px' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Notes Example
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum dolor doloremque eos et, facere facilis ipditate dicta doloribus explicabo id perferendis qui quia voluptates!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Edit />
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, margin: '20px', height: '200px', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                    <Button size="small" color="primary">
                        <PlusOne />
                    </Button>
            </Card>
        </>

    );
};

export default NotesItem;
