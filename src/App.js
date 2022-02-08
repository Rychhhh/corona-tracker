// libraries
import { Component } from 'react';
import styled from './App.module.css';

// pages
import { Cards, CountryPicker, Chart } from './components/';
import images from './images/images.png'

// api 
import {  fetchData } from "./api/";

class App extends Component {
  state = { 
    data: {},
    country: '',
   } 
   
   async componentDidMount() {
     const fetchDataInThis = await fetchData();

      this.setState({data : fetchDataInThis});

    }
    
    handleCountryChange = async (country) => {
      const data = await fetchData(country);

      this.setState( { data,  country : country  });
    }

  render() { 
    const { data, country } = this.state;

    return (
      <div className={styled.container}>
        <img src={images} alt="image_logo_covid" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}
 
export default App;