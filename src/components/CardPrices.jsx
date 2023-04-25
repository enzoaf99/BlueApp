import React, { useState, useEffect } from 'react';
import dollarBlue from "../img/dollarBlue.png";
import dollarOff from "../img/dollarOficial.png";
import euroOff from "../img/euroOficial.png";
import euroBlue from "../img/euroBlue.png";
import '../css/CardPrices.css'

function CurrencyCard({ name, buy, sell, imgSrc }) {
  return (
    <div className="currency-card">
      <div className='currency-title'>
        <h2>{name}</h2>
        <img src={imgSrc} alt={name} />
      </div>
      <div className='currency-prices'>
        <div className='buy-price'>
          <h2>Compra</h2>
          <p>${buy}</p>
        </div>
        <div className='sell-price'>
          <h2>Venta</h2>
          <p>${sell}</p>
        </div>
      </div>
    </div>
  );
}

function LastUpdate({ date }) {
  const formattedDate = new Date(date).toLocaleString('es-AR', {
    dateStyle: 'short',
    timeStyle: 'medium'
  });
  return <p>Última actualización: {formattedDate}</p>;
}

export function CardPrices() {
  const [currencies, setCurrencies] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    fetch('https://api.bluelytics.com.ar/v2/latest')
      .then(response => response.json())
      .then(data => {
        setCurrencies([
          {
            name: 'Dólar oficial',
            buy: data.oficial.value_buy.toFixed(2),
            sell: data.oficial.value_sell.toFixed(2),
            imgSrc: dollarOff
          },
          {
            name: 'Dólar blue',
            buy: data.blue.value_buy.toFixed(2),
            sell: data.blue.value_sell.toFixed(2),
            imgSrc: dollarBlue
          },
          {
            name: 'Euro oficial',
            buy: data.oficial_euro.value_buy.toFixed(2),
            sell: data.oficial_euro.value_sell.toFixed(2),
            imgSrc: euroOff
          },
          {
            name: 'Euro blue',
            buy: data.blue_euro.value_buy.toFixed(2),
            sell: data.blue_euro.value_sell.toFixed(2),
            imgSrc: euroBlue
          }
        ]);
        setLastUpdate(data.last_update);
      });
  }, []);

  return (
    <div>

      {/*Cards*/}
      <div className="currency-list">
        {currencies.map(currency => (
          <CurrencyCard
            key={currency.name}
            name={currency.name}
            buy={currency.buy}
            sell={currency.sell}
            imgSrc={currency.imgSrc}
          />
        ))}
      </div>

      {/*LastUpdate*/}
      <div className='last-update'>{lastUpdate && <LastUpdate date={lastUpdate} />}</div>
    </div>
  );
};

