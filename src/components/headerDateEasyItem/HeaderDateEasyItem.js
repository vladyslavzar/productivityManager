const HeaderDateEasyItem = (props) => {
    const actuallDay= `${(props.day === -1) ? 'Sun' : (props.day === 0) ? 'Mon' : (props.day === 1) ? 'Tue' : (props.day === 2) ? 'Wed' : (props.day === 3) ? 'Thu' : (props.day === 4) ? 'Fri' : (props.day === 5) ? 'Sat' : (props.day === 6) ? 'Sun' : (props.day === 7) ? 'Mon' : (props.day === 8) ? 'Tue' : (props.day === 9) ? 'Wed' : (props.day === 10) ? 'Thu' : (props.day === 11) ? 'Fri' : (props.day === 12) ? 'Sat' : (props.day === 13) ? 'Sun' : (props.day === 14) ? 'Mon' : (props.day === 15) ? 'Tue' : (props.day === 16) ? 'Wed' : (props.day === 17) ? 'Thu' : (props.day === 18) ? 'Fri' : (props.day === 19) ? 'Sat' : (props.day === 20) ? 'Sun' : (props.day === 21) ? 'Mon' : (props.day === 22) ? 'Tue' : (props.day === 23) ? 'Wed' : (props.day === 24) ? 'Thu' : (props.day === 25) ? 'Fri' : (props.day === 26) ? 'Sat' : (props.day === 27) ? 'Sun' : (props.day === 28) ? 'Mon' : (props.day === 29) ? 'Tue' : (props.day === 30) ? 'Wed' : (props.day === 31) ? 'Thu' : (props.day === 32) ? 'Fri' : null}`;

    const setDateOnClick = () => {
        props.setDate(props.fullDate);
    }
    let daySelected;
    if (props.date){
        daySelected = props.date.slice(8);

        if (daySelected.indexOf('0') === 0){
            daySelected=daySelected.slice(1);
        }
    }

    let fullfulldate= props.fullDate.slice(5);
    let seconddasmda= props.date.slice(5);

    return (
        <div tabIndex='1' className={fullfulldate === `${seconddasmda}` ? "header__calendar__easy__item header__calendar__easy__item__active" : "header__calendar__easy__item"}onClick={setDateOnClick}>
            <div>
                <span>{props.num}</span>
                <p onClick={() => {console.log(props.day)}}>{actuallDay}</p>
            </div>
        </div>
    )
}

export default HeaderDateEasyItem;