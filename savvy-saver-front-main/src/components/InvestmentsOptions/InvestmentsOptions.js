//
import React from 'react';
import './InvestmentsOptions.css';

export const InvestmentOptions = ({
  investmentOtions: [bestProfit, buyAndKeep, buyOnHigh],
}) => {
  return (
    <div className='content'>
      <header className='div-title'>
        <h2 className='text-wrapper'>Choose the best investment option</h2>
      </header>
      <div className='grid-cards'>
        <div className='line'>
          {/* Converted buttons to divs for non-interactive, informational cards */}
          {bestProfit && (
            <div className='card'>
              <div className='card-header'>Investment Option 1</div>
              <div className='best-profit'>
                <p>
                  The best profit you could have made from this investment is{' '}
                  <span className='highlight'>
                    ${bestProfit.value.toFixed(2)} USD
                  </span>
                </p>
                <p>
                  You could buy at
                  <span className='highlight'>${bestProfit.buyDate} </span>
                  and sell at
                  <span className='highlight'>${bestProfit.sellDate} USD</span>
                </p>
              </div>
            </div>
          )}
          {buyAndKeep && (
            <div className='card-2'>
              <div className='card-header'>Investment Option 2</div>
              <div className='best-profit'>
                <p>
                  The best profit you could have made from this investment is{' '}
                  <span className='highlight'>
                    ${buyAndKeep.value.toFixed(2)} USD
                  </span>
                </p>
                <p>
                  You could buy at
                  <span className='highlight'>${buyAndKeep.buyDate} </span>
                  and sell at
                  <span className='highlight'>${buyAndKeep.sellDate} USD</span>
                </p>
              </div>
            </div>
          )}
          {buyOnHigh && (
            <div className='card-3'>
              <div className='card-header'>Investment Option 3</div>
              <div className='best-profit'>
                <p>
                  The best profit you could have made from this investment is{' '}
                  <span className='highlight'>
                    ${buyOnHigh.value.toFixed(2)} USD
                  </span>
                </p>
                <p>
                  You could buy at
                  <span className='highlight'>${buyOnHigh.buyDate} </span>
                  and sell at
                  <span className='highlight'>${buyOnHigh.sellDate} USD</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentOptions;
