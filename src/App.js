import './App.css';
import React, {useEffect, useState} from "react";
import moment from "moment";
import {Table} from "antd"

const App = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/WeatherForecast")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Temp (C)',
      dataIndex: 'temperatureC',
      key: 'temperatureC',
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        {isLoaded && error && <p>{error}</p>}
        {isLoaded && !error && <Table className="my-table" columns={columns} dataSource={items}/>}
      </header>
    </div>
  );
}

export default App;
