import React, { useState, useEffect } from 'react';
import './App.css';

import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

import VerifyWeek from './componets/verifyWeek';

import api from './services/api';

function App() {
  const [date, setDate] = useState([])
  const [week, setWeek] = useState([])
  const [weekPosition, setWeekPosition] = useState('')
  const [monthActual, setMonthActual] = useState('')
  const [monthPosition, setMonthPosition] = useState('')
  const [service, setService] = useState([])
  
  useEffect(() => {
    getMonth()
    getWeeks()
    getService()
  },[])

  async function getService() {
    await api.get('/services').then(response => setService([...response.data]));
  }
  
  function generatedays(year, month) {
    const day = new Date(year, month + 1, 0).getDate()
    let days = []
    for (let i = 0; i < day; i++) {
      const d = 
      days.push(i < 9 ? `0${i+1}`: i+1)
    }
    setDate(days)
  }

  function generateFirstDay(year, month) {
    const d = new Date()
    const months = d.getMonth()
    const years = d.getFullYear()
    const firstDay = new Date(year || years, month || months, 1).getDay()
    setWeekPosition(firstDay)
  }
  
  async function getMonth() {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const d = new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    generatedays(year, month)
    setMonthActual(months[month])
    setMonthPosition(month)
    generateFirstDay(year, month, 1)
  }

  function handleNextMonth() {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const d = new Date()
    const year = d.getFullYear()
    const newMonth = monthPosition + 1
    if (newMonth > 11) {
      setMonthActual(months[newMonth - 12])
      setMonthPosition(newMonth - 12)
      generateFirstDay(year + 1, newMonth - 12)
      generatedays(year + 1, newMonth - 12)
    } else {
      generateFirstDay(year, newMonth)
      generatedays(year, newMonth)
      setMonthActual(months[newMonth])
      setMonthPosition(newMonth)
    }
  }

  function handlePreviousMonth() {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const d = new Date()
    const newMonth = monthPosition - 1
    const year = d.getFullYear()
    generateFirstDay(year, newMonth)
    generatedays(year, newMonth)
    setMonthActual(months[newMonth])
    setMonthPosition(newMonth)
  }

  async function getWeeks() {
    const weeks = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    setWeek(weeks)

  }

  return (
    <div className="container">
      <div className="content">
        <header>
          <span>Bem vindo!</span>
        </header>
        <section>
          <div className="month">
            <BiChevronsLeft onClick={handlePreviousMonth} className="arrow" />
            <h2>{monthActual}</h2>
            <BiChevronsRight onClick={handleNextMonth} className="arrow" />
          </div>
          <div className="week-days">
            <div className='week'>
              {week.map(week => (
                <div key={week} className="week-title">
                  <p>{week}</p>
                </div>
              ))}
            </div>
            <div className="days">
              <VerifyWeek
                week={weekPosition}
                date={date}
                service={service}
                monthActual={monthActual}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
