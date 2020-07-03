import React, { useState } from 'react'

function App() {
  const [currency, setCurrency] = useState({
    base: 'USD',
    rates: {
      GBP: 0.8074107143,
      HKD: 7.7507142857,
      IDR: 14265.0,
      ILS: 3.4557142857,
      DKK: 6.6542857143,
      INR: 75.5553571429,
      CHF: 0.9482142857,
      MXN: 22.946875,
      CZK: 23.8125,
      SGD: 1.3955357143,
      THB: 30.9901785714,
      HRK: 6.7540178571,
      EUR: 0.8928571429,
      MYR: 4.2865178571,
      NOK: 9.6192857143,
      CNY: 7.0670535714,
      BGN: 1.74625,
      PHP: 49.8133928571,
      PLN: 3.980625,
      ZAR: 17.2263392857,
      CAD: 1.3586607143,
      ISK: 138.9285714286,
      BRL: 5.4428571429,
      RON: 4.3183928571,
      NZD: 1.5501785714,
      TRY: 6.8550892857,
      JPY: 107.4196428571,
      RUB: 71.1422321429,
      KRW: 1203.4285714286,
      USD: 1.0,
      AUD: 1.4525,
      HUF: 316.5178571429,
      SEK: 9.371875,
    },
    date: '2020-07-01',
  })

  const [text, setText] = useState('')

  const textCurrencyInputToConvert = (event) => {
    const value = event.target.value

    setText(value)
  }

  return (
    <>
      <div className="jumbotron m-5">
        <h1 className="display-4">Currency Calculator!</h1>
        <p className="lead">Convert your currency to any in the world!</p>
        <p>Bulls only, no Bears allowed</p>
      </div>
      <ul className="list-group ml-5 mr-5">
        <input
          type="text"
          value={text}
          onChange={textCurrencyInputToConvert}
          placeholder="Currency Amount in USD"
          className="form-control mb-2"
        />
        <li className="list-group-item active">
          GBP: {currency.rates.GBP * text}
        </li>
        <li className="list-group-item">HKD: {currency.rates.HKD * text}</li>
        <li className="list-group-item">IDR: {currency.rates.ILS * text}</li>
        <li className="list-group-item">ILS: {currency.rates.ILS * text}</li>
        <li className="list-group-item">DKK: {currency.rates.DKK * text}</li>
        <li className="list-group-item">INR: {currency.rates.INR * text}</li>
        <li className="list-group-item">CHF: {currency.rates.CHF * text}</li>
        <li className="list-group-item">MXN: {currency.rates.MXN * text}</li>
        <li className="list-group-item">CZK: {currency.rates.CZK * text}</li>
        <li className="list-group-item">SGD: {currency.rates.SGD * text}</li>
        <li className="list-group-item">THB: {currency.rates.THB * text}</li>
        <li className="list-group-item">HRK: {currency.rates.HRK * text}</li>
        <li className="list-group-item">EUR: {currency.rates.EUR * text}</li>
        <li className="list-group-item">MYR: {currency.rates.MYR * text}</li>
        <li className="list-group-item">NOK: {currency.rates.NOK * text}</li>
        <li className="list-group-item">CNY: {currency.rates.CNY * text}</li>
        <li className="list-group-item">BGN: {currency.rates.BGN * text}</li>
        <li className="list-group-item">PHP: {currency.rates.PHP * text}</li>
        <li className="list-group-item">PLN: {currency.rates.PLN * text}</li>
        <li className="list-group-item">ZAR: {currency.rates.ZAR * text}</li>
        <li className="list-group-item">CAD: {currency.rates.CAD * text}</li>
        <li className="list-group-item">ISK: {currency.rates.ISK * text}</li>
        <li className="list-group-item">BRL: {currency.rates.BRL * text}</li>
        <li className="list-group-item">RON: {currency.rates.RON * text}</li>
        <li className="list-group-item">NZD: {currency.rates.NZD * text}</li>
        <li className="list-group-item">TRY: {currency.rates.TRY * text}</li>
        <li className="list-group-item">JPY: {currency.rates.JPY * text}</li>
        <li className="list-group-item">RUB: {currency.rates.RUB * text}</li>
        <li className="list-group-item">KRW: {currency.rates.KRW * text}</li>
        <li className="list-group-item">USD: {currency.rates.USD * text}</li>
        <li className="list-group-item">AUD: {currency.rates.AUD * text}</li>
        <li className="list-group-item">HUF: {currency.rates.HUF * text}</li>
        <li className="list-group-item">SEK: {currency.rates.SEK * text}</li>
      </ul>
    </>
  )
}

export default App
