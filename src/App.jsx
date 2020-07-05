import React, { useState, useEffect } from 'react'

function App() {
  const [currency, setCurrency] = useState({
    base: undefined,
    rates: {
      GBP: undefined,
      HKD: undefined,
      IDR: undefined,
      ILS: undefined,
      DKK: undefined,
      INR: undefined,
      CHF: undefined,
      MXN: undefined,
      CZK: undefined,
      SGD: undefined,
      THB: undefined,
      HRK: undefined,
      EUR: undefined,
      MYR: undefined,
      NOK: undefined,
      CNY: undefined,
      BGN: undefined,
      PHP: undefined,
      PLN: undefined,
      ZAR: undefined,
      CAD: undefined,
      ISK: undefined,
      BRL: undefined,
      RON: undefined,
      NZD: undefined,
      TRY: undefined,
      JPY: undefined,
      RUB: undefined,
      KRW: undefined,
      USD: undefined,
      AUD: undefined,
      HUF: undefined,
      SEK: undefined,
    },
    date: undefined,
  })

  const goodCurrency = [
    'GBP',
    'HKD',
    'IDR',
    'ILS',
    'DKK',
    'INR',
    'CHF',
    'MXN',
    'CZK',
    'SGD',
    'THB',
    'HRK',
    'EUR',
    'MYR',
    'NOK',
    'CNY',
    'BGN',
    'PHP',
    'PLN',
    'ZAR',
    'CAD',
    'ISK',
    'BRL',
    'RON',
    'NZD',
    'TRY',
    'JPY',
    'RUB',
    'KRW',
    'USD',
    'AUD',
    'HUF',
    'SEK',
  ]

  const [amountToConvert, setAmountToConvert] = useState('')
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [currencyToConvert, setCurrencyToConvert] = useState('USD')

  const textCurrencyInputToConvert = (event) => {
    const value = event.target.value
    if (value === null) {
      return
    } else {
      setAmountToConvert(value)
    }
  }

  const inputForBaseCurrency = (event) => {
    const value = event.target.value

    setBaseCurrency(value)
  }

  const handleClickForConvert = (event) => {
    const upperBaseCurrency = baseCurrency.toUpperCase()

    if (goodCurrency.includes(upperBaseCurrency) === false) {
      setCurrencyToConvert('USD')
    } else {
      setCurrencyToConvert(baseCurrency)
    }
  }

  const loadCurrencyFromApi = () => {
    const url = `https://api.ratesapi.io/api/${realInputDate}?base=${currencyToConvert.toUpperCase()}`
    console.log(`Loading from ${url}`)

    fetch(url)
      .then((response) => response.json())
      .then((apiData) => {
        setCurrency(apiData)
      })
  }

  function today() {
    const isoDate = new Date().toISOString()

    return isoDate.slice(0, 10)
  }

  const date = currency.date || today()
  const [inputDate, setInputDate] = useState(date)
  const realInputDate = inputDate || today()

  useEffect(loadCurrencyFromApi, [currencyToConvert, inputDate])

  return (
    <body>
      <div className="jumbotron m-5">
        <h1 className="display-4 mb-5">Currency Calculator!</h1>
        <p className="lead">Convert your currency to any in the world!</p>
        <p>Bulls only, no Bears allowed</p>
      </div>
      <input
        type="date"
        className="ml-5"
        value={inputDate}
        onChange={(event) => {
          setInputDate(event.target.value)
        }}
      />
      <button
        type="button"
        className="btn btn-primary ml-5 mb-2 mt-2"
        onClick={handleClickForConvert}
      >
        Change base currency
      </button>

      <ul className="list-group ml-5 mr-5">
        <input
          type="amountToConvert
    "
          placeholder="Base Currency"
          value={baseCurrency}
          className="form-control mb-2"
          onChange={inputForBaseCurrency}
        />

        <input
          type="amountToConvert
    "
          value={amountToConvert}
          onChange={textCurrencyInputToConvert}
          placeholder="Currency Amount to covert"
          className="form-control mb-2"
        />
        <li className="list-group-item">
          GBP rate: {currency.rates.GBP}
          <div>Conversion Amount: {currency.rates.GBP * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          HKD rate: {currency.rates.HKD}
          <div>Conversion Amount: {currency.rates.HKD * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          IDR: {currency.rates.ILS}
          <div>Conversion Amount: {currency.rates.IDR * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          ILS: {currency.rates.ILS}
          <div>Conversion Amount: {currency.rates.ILS * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          DKK: {currency.rates.DKK}
          <div>Conversion Amount: {currency.rates.DKK * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          INR: {currency.rates.INR}
          <div>Conversion Amount: {currency.rates.INR * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          CHF: {currency.rates.CHF}
          <div>Conversion Amount: {currency.rates.CHF * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          MXN: {currency.rates.MXN}
          <div>Conversion Amount: {currency.rates.MXN * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          CZK: {currency.rates.CZK}
          <div>Conversion Amount: {currency.rates.CZK * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          SGD: {currency.rates.SGD}
          <div>Conversion Amount: {currency.rates.SGD * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          THB: {currency.rates.THB}
          <div>Conversion Amount: {currency.rates.THB * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          HRK: {currency.rates.HRK}
          <div>Conversion Amount: {currency.rates.HRK * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          EUR: {currency.rates.EUR}
          <div>Conversion Amount: {currency.rates.EUR * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          MYR: {currency.rates.MYR * amountToConvert}
          <div>Conversion Amount: {currency.rates.MYR * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          NOK: {currency.rates.NOK}
          <div>Conversion Amount: {currency.rates.NOK * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          CNY: {currency.rates.CNY}
          <div>Conversion Amount: {currency.rates.CNY * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          BGN: {currency.rates.BGN}
          <div>Conversion Amount: {currency.rates.BGN * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          PHP: {currency.rates.PHP}
          <div>Conversion Amount: {currency.rates.PHP * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          PLN: {currency.rates.PLN}
          <div>Conversion Amount: {currency.rates.PLN * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          ZAR: {currency.rates.ZAR}
          <div>Conversion Amount: {currency.rates.ZAR * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          CAD: {currency.rates.CAD}
          <div>Conversion Amount: {currency.rates.CAD * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          ISK: {currency.rates.ISK}
          <div>Conversion Amount: {currency.rates.ISK * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          BRL: {currency.rates.BRL}
          <div>Conversion Amount: {currency.rates.BRL * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          RON: {currency.rates.RON}
          <div>Conversion Amount: {currency.rates.RON * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          NZD: {currency.rates.NZD}
          <div>Conversion Amount: {currency.rates.NZD * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          TRY: {currency.rates.TRY}
          <div>Conversion Amount: {currency.rates.TRY * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          JPY: {currency.rates.JPY}
          <div>Conversion Amount: {currency.rates.JPY * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          RUB: {currency.rates.RUB}
          <div>Conversion Amount: {currency.rates.RUB * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          KRW: {currency.rates.KRW}
          <div>Conversion Amount: {currency.rates.KRW * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          USD: {currency.rates.USD}
          <div>Conversion Amount: {currency.rates.USD * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          AUD: {currency.rates.AUD}
          <div>Conversion Amount: {currency.rates.AUD * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          HUF: {currency.rates.HUF}
          <div>Conversion Amount: {currency.rates.HUF * amountToConvert}</div>
        </li>
        <li className="list-group-item">
          SEK: {currency.rates.SEK}
          <div>Conversion Amount: {currency.rates.SEK * amountToConvert}</div>
        </li>
      </ul>
    </body>
  )
}

export default App
