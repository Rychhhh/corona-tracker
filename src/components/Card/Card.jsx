// pages
import SingleCard from './SingleCard/SingleCard';

//library
import { Grid, Typography } from '@mui/material';
import styles from './Card.module.css';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate} }) => {    
    if(!confirmed) {
        return 'loading...';
    }
    return ( 
        <div className={styles.container}>
            <Typography variant="h4" >Global</Typography>
            <Grid className="bg" container sx={{ m: 2 }} justify="center">
              <SingleCard 
                classNames={styles.infected}
                value={confirmed.value}
                cardTitle="Infected"
                lastUpdate={lastUpdate}
                cardSubtitle="Number of active cases COVID 19"
              />
              <SingleCard 
                classNames={styles.recovered}
                value={recovered.value}
                cardTitle="Recovered"
                lastUpdate={lastUpdate}
                cardSubtitle="Number of recovered cases COVID 19"
              />
              <SingleCard 
                classNames={styles.deaths}
                value={deaths.value}
                cardTitle="Deaths"
                lastUpdate={lastUpdate}
                cardSubtitle="Number of deaths cases COVID 19"
              />
            </Grid>
        </div>
     );
}
export default Cards;
