import { useState } from 'react';
import './App.css';
import { weekNamesEn, gregMonthsAr, gregMonthsEn, getDaysInMonth } from './funcs/functions';


function App() {

	const [currentDate, setCurrentDate] = useState(new Date());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth()+1);
  const [today, setToday] = useState(currentDate.getDate());

	const prevMonthDaysCount = getDaysInMonth(year, month-1)
	const monthDaysCount = getDaysInMonth(year, month)
	const firstDayOfMonth = new Date(year, month, 1).getDay();
	const currentMonthDays = [];
	const prevMonthReminingDays = []
	for (let pDay = prevMonthDaysCount - firstDayOfMonth; pDay <= prevMonthDaysCount; pDay++) {
		prevMonthReminingDays.push(pDay)
	}
	for(let day = 1; day<= monthDaysCount; day++) {
		currentMonthDays.push(day)
	}

	const changeYear = (n) => {
		if (year >= 2050) return
		if (year <= 1970) return
		setYear(year + n)
	}
	

  return (
    <div className="App">

			< div className='calendar'>
				<div className="calendar-header">

				<button onClick={()=>changeYear(-10)}>&lt;&lt;</button>
				<button onClick={()=>changeYear(-1)}>&lt;</button>
				<input type="text" value={year} onChange={(e)=>setYear(+(e.target.value))} />
				<button onClick={()=>changeYear(1)}>&gt;</button>
				<button onClick={()=>changeYear(10)}>&gt;&gt;</button>
			</div>
			<div className='calendar-body'>
				<div className='the-month'>
					<select value={month} onChange={(e)=>setMonth(e.target.value)}>
					{
					gregMonthsEn.map((mo, i)=>{
							return <option  value={i} key={i}>{mo}</option>
						}
					)
				}
					</select>
					{gregMonthsAr[month]}
				</div>
				<div className='week-names'>
					{
					weekNamesEn.map((we, i)=>{
							return <span key={i}>{we.slice(0,3)}</span>
						}
					)
				}
					
				</div>
					{today}
				<div className='month-days'>
					{ firstDayOfMonth < 6 &&
					prevMonthReminingDays.map((dom, i)=>{
                return <span key={i}>{dom}</span>
            })}
					{currentMonthDays.map((dom, i)=>{
                return <span key={i}>{dom}</span>
            })}
				</div>
			</div>
			</div>
    </div>
  );
}

export default App;
