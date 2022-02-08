// library
import { useEffect, useState } from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2'

// api
import { fetchDailyData } from '../../api/';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered,  deaths}, country }) => {
  
    const [dailyData, setDailyData] = useState({});

    useEffect( () => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
  
        setDailyData(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);

    // func for country picker
    const barChart = (
      confirmed ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [confirmed.value, recovered.value, deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
          }}
        />
      ) : null
    );

    // func for chart
    const lineChart = ( 
          dailyData.length ?
          (
          <Line 
          data={{ 
            labels: dailyData.map(({ date } ) => new Date(date).toLocaleDateString()), 
            datasets: [{
              data: dailyData.map(({ confirmed } ) => confirmed),
              label: 'Infected',
              borderColor: '#333fff',
              fill: true
            },
            {
              data: dailyData.map(({recovered}) => recovered),
              label: 'Recovered',
              borderColor: 'green',
              fill: true
            },
            {
              data: dailyData.map(({ death }) => death),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true
            },],
           }}
       /> 
          ) : null
    )

    
    return ( 
        <div className={styles.container}>
            {country ? barChart : lineChart}

        </div>
     );
}
 
export default Chart;


