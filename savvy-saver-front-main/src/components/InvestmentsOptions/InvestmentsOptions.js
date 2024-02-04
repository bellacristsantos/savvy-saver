// import React from 'react';
// import './InvestmentsOptions.css';

// export const InvestmentOptions = ({
//   investmentOtions: [bestProfit, buyAndKeep, buyOnHigh],
// }) => {
//   return (
//     <div className='content'>
//       <header className='div-title'>
//         <h2 className='text-wrapper'>Choose the best investment option</h2>
//       </header>
//       <div className='grid-cards'>
//         <div className='line'>
//           {/* Converted buttons to divs for non-interactive, informational cards */}
//           {bestProfit && (
//             <div className='card'>
//               <div className='card-header'>Optimal Trade Window</div>
//               <p className='card-description'>
//                 Identifies the best buy and sell times for maximum profit within
//                 a specific period
//               </p>
//               <div className='chart-placeholder'>
//                 {/* SVG or other graphical elements go here */}
//                 <img src='../../../public/Otw.svg' alt='Trade Window Chart' />
//                 <div className='chart-point buy-point'>
//                   ${bestProfit.buyPrice}
//                 </div>
//                 <div className='chart-point sell-point'>
//                   ${bestProfit.sellPrice}
//                 </div>
//               </div>
//               <div className='profit-info'>
//                 You could have made:{' '}
//                 <span className='profit-value'>
//                   ${bestProfit.value.toFixed(2)} USD
//                 </span>
//               </div>
//             </div>
//           )}{' '}
//           ;
//           {buyAndKeep && (
//             <div className='card-2'>
//               <div className='card-header'>Historical Growth Gauge</div>
//               <div className='best-profit'>
//                 <p>
//                   The best profit you could have made from this investment is{' '}
//                   <span className='highlight'>
//                     ${buyAndKeep.value.toFixed(2)} USD
//                   </span>
//                 </p>
//                 <p>
//                   You could buy at
//                   <span className='highlight'>${buyAndKeep.buyDate} </span>
//                   and sell at
//                   <span className='highlight'>${buyAndKeep.sellDate} USD</span>
//                 </p>
//               </div>
//             </div>
//           )}
//           {buyOnHigh && (
//             <div className='card-3'>
//               <div className='card-header'>Peak Price Perspective</div>
//               <div className='best-profit'>
//                 <p>
//                   The best profit you could have made from this investment is{' '}
//                   <span className='highlight'>
//                     ${buyOnHigh.value.toFixed(2)} USD
//                   </span>
//                 </p>
//                 <p>
//                   You could buy at
//                   <span className='highlight'>${buyOnHigh.buyDate} </span>
//                   and sell at
//                   <span className='highlight'>${buyOnHigh.sellDate} USD</span>
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestmentOptions;

import React from 'react';
import './InvestmentsOptions.css';

// export const InvestmentOptions = ({
//   investmentOtions: [bestProfit, buyAndKeep, buyOnHigh],
// }) => {
//   return (

export const InvestmentOptions = ({
  investmentOptions, // Default value as an empty array
}) => {
  // Assuming investmentOptions is an array, but let's safely access its items
  const [bestProfit, buyAndKeep, buyOnHigh] = investmentOptions;

  return (
    // export const InvestmentOptions = ({
    //   investmentOptions: [bestProfit, buyAndKeep, buyOnHigh],
    // }) => {
    //   return (
    <div className='content'>
      <header className='div-title'>
        <h2 className='text-wrapper'>Choose the best investment option</h2>
      </header>
      <div className='grid-cards'>
        <div className='line'>
          {bestProfit && (
            <div className='card'>
              <div className='card-header'>Optimal Trade Window</div>
              <p className='card-description'>
                Identifies the best buy and sell times for maximum profit within
                a specific period
              </p>
              <div className='chart-placeholder'>
                <img src='./Otw.svg' alt='Trade Window Chart' />
                <div className='chart-point buy-point'>
                  ${bestProfit.buyPrice}
                </div>
                <div
                  className='chart-point sell-point'
                  style={{ position: 'absolute', top: '20px', right: '-90px' }}
                >
                  ${bestProfit.sellPrice}
                </div>
              </div>
              <div className='profit-info'>
                You could have made:{' '}
                <span className='profit-value'>
                  ${bestProfit.value.toFixed(2)} USD
                </span>
              </div>
            </div>
          )}

          {buyAndKeep && (
            <div className='card'>
              <div className='card-header'>Historical Growth Gauge</div>
              <p className='card-description'>
                This measures the long-term growth potential by analyzing past
                performance.
              </p>
              <div className='chart-placeholder'>
                <img src='./Otw2.svg' alt='Trade Window Chart' />
                <div className='chart-point buy-point'>
                  ${buyAndKeep.buyPrice}
                </div>
                <div
                  className='chart-point sell-point'
                  style={{ position: 'absolute', top: '20px', right: '-90px' }}
                >
                  ${buyAndKeep.sellPrice}
                </div>
              </div>
              <div className='profit-info'>
                The best profit:{' '}
                <span className='profit-value'>
                  ${buyAndKeep.value.toFixed(2)} USD
                </span>
              </div>
              {/* <div className='date-info'>
                Buy on: <span className='date-value'>{buyAndKeep.buyDate}</span>
                Sell on:{' '}
                <span className='date-value'>{buyAndKeep.sellDate}</span>
              </div> */}
            </div>
          )}
          {buyOnHigh && (
            <div className='card'>
              <div className='card-header'>Peak Price Perspective</div>
              <p className='card-description'>
                Focuses on the strategy of buying at historical highs under the
                assumption it will lead to higher returns.
              </p>
              <div className='chart-placeholder'>
                <img src='./Otw3.svg' alt='Trade Window Chart' />
                <div className='chart-point buy-point'>
                  ${buyOnHigh.buyPrice}
                </div>
                <div
                  className='chart-point sell-point'
                  style={{ position: 'absolute', top: '20px', right: '-90px' }}
                >
                  ${buyOnHigh.sellPrice}
                </div>
              </div>
              <div className='profit-info'>
                The best profit:{' '}
                <span className='profit-value'>
                  ${buyOnHigh.value.toFixed(2)} USD
                </span>
              </div>
              {/* <div className='date-info'>
                Buy on: <span className='date-value'>{buyOnHigh.buyDate}</span>
                Sell on:{' '}
                <span className='date-value'>{buyOnHigh.sellDate}</span>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentOptions;
