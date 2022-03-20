import { useState, useEffect } from 'react';
import Header from "../header/Header";
import TaskAdd from '../taskAdd/TaskAdd';
import Task from '../task/Task';

const App = () => {
  const [date, setDate] = useState('');

  const [view, setView] = useState(null);

  const [updateOnAdd, setUpdateOnAdd] = useState(true);

  const myStorage = window.localStorage;

  const loadTasks = () => {
    const taskInfo = myStorage.getItem(`${date}`);

    console.log(taskInfo, 'loading... tasks', date);

    if (!taskInfo){
      setView(null);
      return;
    } 
 
    let arrOfPoses = [];

    for (let i = 0; i < taskInfo.length; i++) {
      if (taskInfo.charAt(i) === ',') {
        arrOfPoses.push(i);
      }
    }

    let view;

    console.log(arrOfPoses, 'arrodposes', taskInfo);
    

    view = arrOfPoses.map((item, i) => {
      let itemInfo = taskInfo.slice(item+1, arrOfPoses[i+1]);
      

      const title = itemInfo.slice(itemInfo.indexOf('-')+1);

      const time = itemInfo.slice(0, itemInfo.indexOf('-'));

      return (
        <Task title={title} time={time} date={date} setUpdateOnAdd={setUpdateOnAdd} updateOnAdd={updateOnAdd} key={i+1}/>
      )
    })
    let itemInfo = taskInfo.slice(0, arrOfPoses[0]);

    const title = itemInfo.slice(itemInfo.indexOf('-')+1);

    const time = itemInfo.slice(0, itemInfo.indexOf('-'));

    view.unshift(<Task title={title} time={time} date={date} setUpdateOnAdd={setUpdateOnAdd} updateOnAdd={updateOnAdd} key={0}/>)
    console.log(view[0].props, 'props');

    view.sort((a, b) => {
      let oldTimeForrmated = +a.props.time.slice(0, 2)*60+a.props.time.slice(3);
      let newTimeForrmated = +b.props.time.slice(0, 2)*60+b.props.time.slice(3);

      return oldTimeForrmated - newTimeForrmated
    });

    setView(view);
    console.log(view, 'viewview');
  }
 

  useEffect(() => {
    loadTasks();
  }, [date, updateOnAdd]);
  
  return (
    <div className="App">
      <Header date={date} setDate={setDate}/>
      <TaskAdd date={date} setUpdateOnAdd={setUpdateOnAdd} updateOnAdd={updateOnAdd}/>
      {view}
    </div>
  );
}

export default App;
