import React from 'react';
import Card from "@mui/material/Card/Card";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import CardActions from "@mui/material/CardActions/CardActions";
import Button from "@mui/material/Button/Button";
import {Edit, PlusOne} from "@mui/icons-material";

const NewsItem = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: '20px', height: '200px', minWidth: '300px' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            News 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
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

export default NewsItem;
