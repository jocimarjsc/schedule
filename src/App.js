import React, { useState, useEffect } from 'react';
import './App.css';

import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

import VerifyWeek from './componets/verifyWeek'

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
  }, [])
  
  function generatedays(year, month) {
    const day = new Date(year, month + 1, 0).getDate()
    let days = []
    for (let i = 0; i < day; i++) {
      days.push(i + 1)
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
    const months = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    const d = new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    generatedays(year, month)
    setMonthActual(months[month])
    setMonthPosition(month)
    generateFirstDay(year, month, 1)
  }

  function handleNextMonth() {
    const months = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
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
    const months = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
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

  async function getService() {
    const service = [
      { id: 1, name: 'Aparecida de Almeida', status: 'Espera', date: '01/10/2020', days: '02', month: '10' },
      { id: 2, name: 'João Alberto da Silva', status: 'Aguardando', date: '01/10/2020', days: '01', month: '10' },
      { id: 3, name: 'Carlos Henrique', status: 'Entregue', date: '29/10/2020', days: '29', month: '10' },
      { id: 4, name: 'Carlos Henrique', status: 'Entregue', date: '31/10/2020', days: '31', month: '10' },
      { id: 5, name: 'Maria Aparecida', status: 'Aguardando', date: '15/10/2020', days: '15', month: '10' },
      { id: 6, name: 'Aparecida de Almeida', status: 'Espera', date: '30/10/2020', days: '30', month: '10' },
      { id: 7, name: 'Aparecida de Almeida', status: 'Entregue', date: '01/10/2020', days: '05', month: '10' },
      { id: 8, name: 'Alison Felipe', status: 'Aguardando', date: '19/10/2020', days: '19', month: '10' }
    ]
    setService(service)
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
