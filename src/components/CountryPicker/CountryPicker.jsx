// import { useEffect, useState } from 'react';

// import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

// // import api
// import { countries } from '../../api/';

// const CountryPicker = ( { handleCountryChange } ) => {
//     // tambung state api countries
//     const [pickcountries, setPickCountries] = useState([]);

//     useEffect( () => {
//         const fetchApi = async () => {
//             setPickCountries(await countries());
//         }
        
//         fetchApi();
//     }, [])
    
//     return ( 
//         <FormControl sx={{ width: "10%", mb: 5 }} >
//             <InputLabel id="countries">Countries</InputLabel>
//             <Select 
//             id="countries" 
//             value="countries"
//             label="countries"
//             onChange={(e) => handleCountryChange(e.target.value)}
//             >
//                 <MenuItem>United Stated</MenuItem>
//                 {pickcountries.map((countries, i) => <MenuItem key={i} value={countries}>{countries}</MenuItem>) }
                
//             </Select>
//         </FormControl>
//      );
// }
 
// export default CountryPicker;

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";

import { fetchCountries } from '../../api/'

const CountryPicker  = ( { handleCountryChange } ) => {
    const [countries, setCountries] = useState([]);

    useEffect( async () => {
        // set data api to state local
        setCountries(await fetchCountries());
    })
    
    return ( 
       <FormControl sx={{ width: "20%",  m: 2 }}>
           <InputLabel id="countries">Countries</InputLabel>
           <Select 
            id="countries"
            label="countries"
            onChange={(e) => handleCountryChange(e.target.value)}
           >
               <MenuItem>United Stated</MenuItem>
               {countries.map((countries, i) => <MenuItem id={i} value={countries}>{countries}</MenuItem>)}

           </Select>
       </FormControl>
     );
}
 
export default CountryPicker ;