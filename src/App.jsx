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

  const [text, setText] = useState('')
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [currencyToConvert, setCurrencyToConvert] = useState('USD')

  const textCurrencyInputToConvert = (event) => {
    const value = event.target.value
    if (value === null) {
      return
    } else {
      setText(value)
    }
  }

  const inputForBaseCurrency = (event) => {
    const value = event.target.value

    setBaseCurrency(value)
  }

  const handleClickForConvert = (event) => {
    setCurrencyToConvert(baseCurrency)
  }

  console.log(baseCurrency)

  const loadCurrencyFromApi = () => {
    const url = `https://api.ratesapi.io/api/${inputDate}?base=${currencyToConvert.toUpperCase()}`
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
        className="btn btn-primary ml-5 mb-2"
        onClick={handleClickForConvert}
      >
        Convert
      </button>

      <ul className="list-group ml-5 mr-5">
        <input
          type="text"
          placeholder="Base Currency"
          value={baseCurrency}
          className="form-control mb-2"
          onChange={inputForBaseCurrency}
        />

        <input
          type="text"
          value={text}
          onChange={textCurrencyInputToConvert}
          placeholder="Currency Amount to covert"
          className="form-control mb-2"
        />
        <li className="list-group-item">
          GBP rate: {currency.rates.GBP}
          <div>Conversion Amount: {currency.rates.GBP * text}</div>
        </li>
        <li className="list-group-item">
          HKD rate: {currency.rates.HKD}
          <div>Conversion Amount: {currency.rates.HKD * text}</div>
        </li>
        <li className="list-group-item">
          IDR: {currency.rates.ILS}
          <div>Conversion Amount: {currency.rates.IDR * text}</div>
        </li>
        <li className="list-group-item">
          ILS: {currency.rates.ILS}
          <div>Conversion Amount: {currency.rates.ILS * text}</div>
        </li>
        <li className="list-group-item">
          DKK: {currency.rates.DKK}
          <div>Conversion Amount: {currency.rates.DKK * text}</div>
        </li>
        <li className="list-group-item">
          INR: {currency.rates.INR}
          <div>Conversion Amount: {currency.rates.INR * text}</div>
        </li>
        <li className="list-group-item">
          CHF: {currency.rates.CHF}
          <div>Conversion Amount: {currency.rates.CHF * text}</div>
        </li>
        <li className="list-group-item">
          MXN: {currency.rates.MXN}
          <div>Conversion Amount: {currency.rates.MXN * text}</div>
        </li>
        <li className="list-group-item">
          CZK: {currency.rates.CZK}
          <div>Conversion Amount: {currency.rates.CZK * text}</div>
        </li>
        <li className="list-group-item">
          SGD: {currency.rates.SGD}
          <div>Conversion Amount: {currency.rates.SGD * text}</div>
        </li>
        <li className="list-group-item">
          THB: {currency.rates.THB}
          <div>Conversion Amount: {currency.rates.THB * text}</div>
        </li>
        <li className="list-group-item">
          HRK: {currency.rates.HRK}
          <div>Conversion Amount: {currency.rates.HRK * text}</div>
        </li>
        <li className="list-group-item">
          EUR: {currency.rates.EUR}
          <div>Conversion Amount: {currency.rates.EUR * text}</div>
        </li>
        <li className="list-group-item">
          MYR: {currency.rates.MYR * text}
          <div>Conversion Amount: {currency.rates.MYR * text}</div>
        </li>
        <li className="list-group-item">
          NOK: {currency.rates.NOK}
          <div>Conversion Amount: {currency.rates.NOK * text}</div>
        </li>
        <li className="list-group-item">
          CNY: {currency.rates.CNY}
          <div>Conversion Amount: {currency.rates.CNY * text}</div>
        </li>
        <li className="list-group-item">
          BGN: {currency.rates.BGN}
          <div>Conversion Amount: {currency.rates.BGN * text}</div>
        </li>
        <li className="list-group-item">
          PHP: {currency.rates.PHP}
          <div>Conversion Amount: {currency.rates.PHP * text}</div>
        </li>
        <li className="list-group-item">
          PLN: {currency.rates.PLN}
          <div>Conversion Amount: {currency.rates.PLN * text}</div>
        </li>
        <li className="list-group-item">
          ZAR: {currency.rates.ZAR}
          <div>Conversion Amount: {currency.rates.ZAR * text}</div>
        </li>
        <li className="list-group-item">
          CAD: {currency.rates.CAD}
          <div>Conversion Amount: {currency.rates.CAD * text}</div>
        </li>
        <li className="list-group-item">
          ISK: {currency.rates.ISK}
          <div>Conversion Amount: {currency.rates.ISK * text}</div>
        </li>
        <li className="list-group-item">
          BRL: {currency.rates.BRL}
          <div>Conversion Amount: {currency.rates.BRL * text}</div>
        </li>
        <li className="list-group-item">
          RON: {currency.rates.RON}
          <div>Conversion Amount: {currency.rates.RON * text}</div>
        </li>
        <li className="list-group-item">
          NZD: {currency.rates.NZD}
          <div>Conversion Amount: {currency.rates.NZD * text}</div>
        </li>
        <li className="list-group-item">
          TRY: {currency.rates.TRY}
          <div>Conversion Amount: {currency.rates.TRY * text}</div>
        </li>
        <li className="list-group-item">
          JPY: {currency.rates.JPY}
          <div>Conversion Amount: {currency.rates.JPY * text}</div>
        </li>
        <li className="list-group-item">
          RUB: {currency.rates.RUB}
          <div>Conversion Amount: {currency.rates.RUB * text}</div>
        </li>
        <li className="list-group-item">
          KRW: {currency.rates.KRW}
          <div>Conversion Amount: {currency.rates.KRW * text}</div>
        </li>
        <li className="list-group-item">
          USD: {currency.rates.USD}
          <div>Conversion Amount: {currency.rates.USD * text}</div>
        </li>
        <li className="list-group-item">
          AUD: {currency.rates.AUD}
          <div>Conversion Amount: {currency.rates.AUD * text}</div>
        </li>
        <li className="list-group-item">
          HUF: {currency.rates.HUF}
          <div>Conversion Amount: {currency.rates.HUF * text}</div>
        </li>
        <li className="list-group-item">
          SEK: {currency.rates.SEK}
          <div>Conversion Amount: {currency.rates.SEK * text}</div>
        </li>
      </ul>
    </body>
  )
}

export default App
