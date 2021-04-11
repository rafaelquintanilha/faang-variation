import React from "react"
import SEO from "./seo"
import "./layout.css"
import { DateTime } from "luxon"

const Home = ({ pageContext: { prices, buildTime } }) => {
  return (
    <div className="container">
      <SEO title="FAANG Stock Price Variation" />
      <main className="content">
        <h1>FAANG Stock Price Variation</h1>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Last Price</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(prices).map(symbol => (
              <tr key={symbol}>
                <td>{symbol}</td>
                <td>{prices[symbol].price.shortName}</td>
                <td>{prices[symbol].price.regularMarketPrice}</td>
                <td
                  style={{
                    color:
                      prices[symbol].price.regularMarketChangePercent < 0
                        ? "indianred"
                        : "green",
                  }}
                >
                  {(
                    100 * prices[symbol].price.regularMarketChangePercent
                  ).toFixed(2)}
                  %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={"disclaimer"}>
          All prices are for regular market times. Last update{" "}
          {DateTime.fromISO(buildTime).toRelative()}.
        </div>
      </main>
      <footer className="footer">
        Created by{" "}
        <a href="https://rafaelquintanilha.com">Rafael Quintanilha</a>
      </footer>
    </div>
  )
}

export default Home
