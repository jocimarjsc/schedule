import React, { useState, useEffect } from 'react';
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import './App.css';
import Task from './componets/task';
import Modal from './componets/modal';
import api from './services/api';

function App() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  const [service, setService] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [DayMonth, setDayMonth] = useState([]);

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  useEffect(() => {
    getService(month + 1, year)
  },[isModalVisible])

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  async function getService(month, year) {
    await api.get(`/services/${month}/${year}`).then(response => setService(response.data));
  }
  function openModal(day, month) {
    setIsModalVisible(true)
    setDayMonth([day, month])
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  function getNextMonth() {
    setDate(new Date(year, month+1, day));
    if(month === 11) {
      return getService(month - 10, year+1)
    }
    getService(month + 2, year )
  }

  function getBeforeMonth() {
    setDate(new Date(year, month - 1, day));
    if(month === 0){
      return getService(month + 12, year -1)
    }
    if(year === year){
      getService(month, year)
    }
  }

  return (
    <>
      {isModalVisible ?
        <Modal day={DayMonth} close={() => setIsModalVisible(false)} year={year} />
        : null
      }
      <div className="container">
        <div className="content">
          <header>
            <span>Bem vindo!</span>
          </header>
          <section>
            {/*mes ano */}
            <div className="month">
              <BiChevronsLeft onClick={() => getBeforeMonth()} className="arrow" />
              <h2>{MONTHS[month]} {year}</h2>
              <BiChevronsRight onClick={() => getNextMonth()} className="arrow" />
            </div>
            {/*dia semana */}
            <div className="week-days">
              <div className='week'>
                {DAYS_OF_THE_WEEK.map(week => (
                  <div key={week} className="week-title">
                    <p>{week}</p>
                  </div>
                ))}
              </div>
              {/*dias*/}
              <div className="days">
                {Array(days[month] + (startDay - 0))
                  .fill(null)
                  .map((_, index) => {
                    const d = index - (startDay - 1);
                    return (
                      <div className="tasks">
                        <span key={index}>{d > 0 ? d : ''}</span>
                        <div className="task">
                          {service.map(service => (
                            service.day === d && service.month === month + 1 && service.year === year ?
                              <Task
                                key={service.id}
                                idService={service.id}
                              />
                              : null
                          ))}
                          {d > 0 ? 
                          <div onClick={() => openModal(d, month + 1)} className='add-modal'>
                            <p>Adicionar</p>
                          </div> : ''}

                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  );
}

export default App;
