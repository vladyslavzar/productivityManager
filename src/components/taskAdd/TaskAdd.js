import { useState } from "react";

const TaskAdd = (props) => {
    const [titleVal, setTitleVal] = useState('');

    const [timeVal, setTimeVal] = useState('');

    const myStorage = window.localStorage;

    let counter = 0;

    const onTaskAdd = () => {
        if (!titleVal || !timeVal || titleVal.indexOf(',') !== -1 ) return;

        const doesExist = localStorage.getItem(`${props.date}`);

        

        if (doesExist) {
            myStorage.setItem(`${props.date}`, `${doesExist},${timeVal}-${titleVal}`);

            counter+=1

    
            props.setUpdateOnAdd(!props.updateOnAdd);

            return;
        }

        myStorage.setItem(`${props.date}`, `${timeVal}-${titleVal}`);

        counter+=1

        props.setUpdateOnAdd(!props.updateOnAdd);

        
    }

    return (
        <section className="taskAdd">
            <h4>Date: {props.date}</h4>

            <div className="taskAdd__inputBlock">
                <div>
                    <input type="text" value={titleVal} placeholder="Title" onChange={(e) => {setTitleVal(e.target.value)}}/>
                    <input type="time" value={timeVal}  onChange={(e) => {setTimeVal(e.target.value)}}/>
                </div>
                
                <button onClick={onTaskAdd}>Add task</button>
            </div>
        </section>
    )
}

export default TaskAdd;