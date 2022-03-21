import HeaderDateEasyItem from "../headerDateEasyItem/HeaderDateEasyItem";
import { useEffect } from "react";
import logo4 from '../../assets/images/icon4.png'

const Header = (props) => {

    const date = new Date();

    let monthFormatted = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;

    let dayFormatted = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

    let currentParsed = date.getFullYear()+'-'+(monthFormatted)+'-'+(dayFormatted);

    const tenDaysArr = [];

    const day = date.getDay();

    for (let i = 0; i < 10; i++) {
        tenDaysArr.push((date.getDate() + i));
    }

    useEffect(() => {
        props.setDate(currentParsed);
    }, [])
    


    const view = tenDaysArr.map((item, i) => {

        const month = `${date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`}`

        const days = `${date.getDate()+i < 10 ? `0${date.getDate()+i}` : `${date.getDate()+i}`}`


        return (
            <HeaderDateEasyItem tabIndex='1' date={props.date} setDate={props.setDate} num={item} key={i} day={(day + i - 1)} fullDate={date.getFullYear()+'-'+(month)+'-'+(days)} />
        ) 
    })
    

    return (
        <header className="header">
            <div className="header__top">
                <img src={logo4} alt="logo" />
                <h1>Productivity Manager</h1>
            </div>
            <h4>Calendar</h4>
            <div className="header__calendar">
                <div className="header__calendar__easy">
                    {view}
                </div>
                <div className="header__calendar__manual">
                    <input type="date" name="datepicker" value={props.date} onChange={(e => {
                        e.preventDefault();

                        props.setDate(e.target.value);
                    })}/>
                </div>
            </div>
        </header>
    )
}

export default Header;