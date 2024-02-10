import './TimeTravel.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  MagnifyingGlass,
  Calendar,
  Coins,
  X,
  CaretDown,
} from '@phosphor-icons/react';
import CurrencyInput from 'react-currency-input-field';
import { fetchStockData } from '../../TimeTravelService';
import {
  SetDateMaxLimit,
  calculateCurInvestment,
  calculateBuyAndKeep,
  calculateBestProfit,
  buyOnHigh,
} from '../../utilities/timeTravelUtil';
import LineChart from '../Chart/LineChart';
import dayjs from 'dayjs';
import handleSearch from './handleSearch';

const TimeTravel = ({ setInvestmentOptions }) => {
  const [ChartData, setChartData] = useState(null);
  const [company, setCompany] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [investmentReturn, setInvestmentReturn] = useState(null);
  const [investmentReturnPercentage, setInvestmentReturnPercentage] =
    useState(null);
  const [companySuggestions, setCompanySuggestions] = useState([
    'Apple',
    'Meta',
    'Amazon',
    'Tesla',
    'Microsoft',
    'Intel',
  ]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const yesterday = SetDateMaxLimit();

  async function handleTimeTravel() {
    const investmentDate = dayjs(selectedDate).format('YYYY-MM-DD');
    const StockData = await fetchStockData(company);
    setChartData([[StockData['timeSeriesDaily']], company]);
    const investment = calculateCurInvestment(
      investmentAmount,
      StockData,
      investmentDate,
    );
    setInvestmentReturn(investment.investmentReturn);
    setInvestmentReturnPercentage(investment.investmentReturnPercentage);

    let option1 = calculateBestProfit(
      StockData['timeSeriesDaily'],
      investmentAmount,
    );
    let option2 = calculateBuyAndKeep(
      StockData['timeSeriesDaily'],
      investmentAmount,
    );
    let option3 = buyOnHigh(StockData['timeSeriesDaily'], investmentAmount);
    setInvestmentOptions([option1 || {}, option2 || {}, option3 || {}]);
    setShowModal(true);
  }

  // const handleSearch = () => {
  //   //handleSearch logic
  // };

  const handleIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSuggestionClick = (selectedcompany) => {
    setCompany(selectedcompany);
    setDropdownVisible(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='time-travel-container' id='time-travel'>
      <div className='time-travel-box'>
        <p>
          Take a <span className='highlight'>financial time travel</span>{' '}
          journey to explore the 'what ifs' of financial choices and discover
          the amount you could have earn from investments that you didn't make.
        </p>
      </div>

      <div className='time-travel-form'>
        <div className='input-group'>
          <MagnifyingGlass className='icon' />
          <input
            type='text'
            id='companyInput'
            placeholder='Search for a company'
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              handleSearch(e.target.value);
            }}
            onFocus={() => setDropdownVisible(true)}
            onBlur={() => {
              setTimeout(() => setDropdownVisible(false), 100);
            }}
          />
          {dropdownVisible && companySuggestions.length > 0 && (
            <ul className='suggestions-dropdown'>
              {companySuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <CaretDown className='arrow-icon' onClick={handleIconClick} />
        </div>

        <div className='input-group'>
          <Calendar className='icon' />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText='Select a date'
            maxDate={new Date(yesterday)}
            minDate={new Date('1999-01-01')}
          />
        </div>

        <div className='input-group'>
          <Coins className='icon' />
          <CurrencyInput
            id='investmentAmount'
            name='investmentAmount'
            placeholder='Investment amount'
            value={investmentAmount}
            onValueChange={(value) => setInvestmentAmount(value)}
            allowDecimals
            prefix='$'
          />
        </div>
      </div>

      <div className='button-container'>
        <button onClick={handleTimeTravel}>TIME TRAVEL</button>
      </div>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal'>
            <div className='modal-content'>
              <X className='close-icon' onClick={closeModal} />

              <p className='modal-text'>
                Your investment return would have been:
              </p>
              {investmentReturn && investmentReturnPercentage ? (
                <div className='modal-amount'>
                  <div className='result-container'>
                    <p className='result'>${investmentReturn.toFixed(0)} USD</p>
                  </div>
                  <div className='percentage-container'>
                    <p className='percentage'>
                      {investmentReturnPercentage.toFixed(2)}%
                    </p>
                  </div>
                </div>
              ) : (
                <p className='modal-text'>
                  No data available for the selected date / API is overused
                </p>
              )}
              <div className='chart-container'>
                {ChartData ? (
                  <LineChart ChartData={ChartData} />
                ) : (
                  <>
                    <p className='no-data'>No data available</p>
                  </>
                )}
              </div>
              <div className='modal-button'>
                <button onClick={closeModal}>BACK TO REALITY</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeTravel;
