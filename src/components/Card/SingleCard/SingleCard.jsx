import { Card, Grid, CardContent, Typography} from '@mui/material';
import CountUp from 'react-countup';

const SingleCard = ({ classNames, value, cardTitle, lastUpdate, cardSubtitle }) => {
    return ( 
        <Grid sx={{ border: 1, borderColor: 'primary.main',  m : 2 }} components={Card} className={classNames}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{cardTitle}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{cardSubtitle}</Typography>
            </CardContent>
        </Grid>
     );
}
 
export default SingleCard;