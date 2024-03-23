import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { currency, conversion_Rates } from './123';
import './Converter.css'; 
import './styles.css';

import ThemeContext from './ThemeContext';

function Converter() {
  const { theme } = useContext(ThemeContext); 

  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [isValidAmount, setIsValidAmount] = useState(true);

  useEffect(() => {
    const currencyList = Object.keys(conversion_Rates);
    setCurrencies(currencyList);
  }, []);

  useEffect(() => {
    fetchExchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  const fetchExchangeRate = () => {
    const exchangeRate = conversion_Rates[toCurrency];
    const convertedAmount = parseFloat(amount) * exchangeRate;
    setConvertedAmount((amount !== '' && isValidAmount) ? convertedAmount.toFixed(2) : '');
  };

  // useEffect(() => {
  //   fetch('https://v6.exchangerate-api.com/v6/91fc39eb6a2f85438e31eabf/latest/USD')
  //     .then(response => response.json())
  //     .then(data => {
  //       const currencies = Object.keys(data.conversion_rates);
  //       setCurrencies(currencies);
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // useEffect(() => {
  //   setCurrencies(currency)
  //   (error => console.error('Error fetching data:', error));
  // }, []);

  // const fetchExchangeRate = () => {
  //  const apiUrl = `https://v6.exchangerate-api.com/v6/91fc39eb6a2f85438e31eabf/latest/${fromCurrency}`;
  //  fetch(apiUrl)
  //   fetch()
  //   .then(response => response.json())
  //    .then(data => {
  //      const exchangeRate = data.conversion_rates[toCurrency];
  //      const convertedAmount = parseFloat(amount) * exchangeRate;
  //     // console.log(data)
  //      setConvertedAmount((amount !== '' && isValidAmount) ? convertedAmount.toFixed(2) : '');
  //    })
  //    .catch(error => {
  //      console.error('Error fetching data:', error);
  //      setConvertedAmount('Error fetching data. Please try again.');
  //    });
  //  };

  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const handleChangeAmount = (event) => {
    const inputValue = event.target.value;
    const currencyRegex = /^\d+(\.\d{0,2})?$/;
    setIsValidAmount(currencyRegex.test(inputValue));
    setAmount(inputValue);
  };

  return (
    // text-${theme === 'light' ? 'gray' : 'white'} font-[sans-serif]
    <div className={`w-full h-full font-sans antialiased leading-normal tracking-wider bg-slate-100 text-center md:px-20 md:py-20 lg:px-40 lg:py-40 Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div id="converter" className={`flex flex-col window md:border bg-white text-xl leading-8 tracking-wider mx-auto sm:px-0 sm:py-0 md:px-5 md:py-5 lg:px-10 lg:py-10 md:rounded-xl lg:rounded-3xl shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <h1 className=" flex justify-center px-2 py-2 text-xl items-center">
          <label htmlFor="amount" className="flex-col sm:flex-row  flex justify-center px-2 py-2 ">
            <div className="flex  mx-5 justify-center px-2 py-2  items-center text-3xl font-extrabold">From:</div>
              <input className="flex input input-bordered w-full max-w-xs" type="text" placeholder="Enter Amount"  id="amount"  value={amount}  onChange={handleChangeAmount} style={{ borderColor: isValidAmount ? 'inherit' : 'red' }} step="0.01" min="0"/>
            <div className="flex   mx-5 justify-center px-2 py-2 text-3xl font-extrabold items-center"> To:</div>
              <input className="flex input input-bordered w-full max-w-xs" type="text" placeholder="Result" value={convertedAmount} readOnly/>
          </label>  
        </h1>

        {!isValidAmount && <p className="flex justify-center px-2 py-2  text-xl items-center">Please enter a valid amount (e.g., 10.00)</p>}

        <h2 className="flex flex-col sm:flex-row justify-center px-3 py-3    items-center">
          
          <label htmlFor="from" className="flex  justify-center px-10 py-2 ">
            <Select id="currencySelectFrom" className=" select-bordered w-full max-w-xs border border-gray-300 rounded-md" value={{ label: fromCurrency, value: fromCurrency }} onChange={selectedOption => setFromCurrency(selectedOption.value)} options={currency.map(currency => ({ label: currency, value: currency }))}/>
          </label>
        
          <div className="flex  justify-center px-2 py-2  text-xl  items-center">
            <button  className=" btn btn-md bg-slate-600" onClick={handleSwapCurrencies}>
              <svg class=" h-10 w-10 text-gray-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" /> <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" /></svg>
            </button>
          </div>       

          <label htmlFor="to" className="flex  items-center justify-center text-xl px-10 py-2 ">
            <Select id="currencySelectTo" className=" select-bordered w-full max-w-xs border border-gray-300 rounded-md" value={{ label: toCurrency, value: toCurrency }} onChange={selectedOption => setToCurrency(selectedOption.value)} options={currency.map(currency => ({ label: currency, value: currency }))}/>
          </label>
        
        </h2>


        <h3 className="flex  justify-center px-2 py-2 text-xl items-center">
          <div className="flex "> 1 {fromCurrency} = {conversion_Rates[toCurrency]} {toCurrency}</div>
        </h3>

      </div>

    </div>
  );
}

export default Converter;     