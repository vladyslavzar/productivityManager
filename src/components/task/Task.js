const Task = (props) =>{
    const myStorage=window.localStorage;

    const delItem = () => {
        const dateInfo = myStorage.getItem(props.date);
        
        const itemPos = dateInfo.indexOf(`${props.time}-${props.title}`);

        let firstNewDateInfo = dateInfo.slice(0, (itemPos));

        const secondNewDateInfo = dateInfo.slice((itemPos+`${props.time}-${props.title}`.length+1));

        console.log(firstNewDateInfo,'   ', secondNewDateInfo, '+++++++++++++++++++++++++++++++++++++++++++++++++++++++');

        myStorage.setItem(props.date, (firstNewDateInfo + secondNewDateInfo));

        if (myStorage.getItem(props.date).charAt(myStorage.getItem(props.date).length-1) === ','){
            let newSlice=myStorage.getItem(props.date).slice(0, myStorage.getItem(props.date).length-1);

            myStorage.setItem(props.date, newSlice);
        }

        props.setUpdateOnAdd(!props.updateOnAdd);
    }

    return (
        <div className="task">
            <div className="task__main">
                <h5>{props.title}</h5>
                <h6>{props.time}</h6>
            </div>
            <div className="task__btns">
                <button onClick={delItem}>Delete</button>
            </div>
        </div>
    )
}

export default Task;