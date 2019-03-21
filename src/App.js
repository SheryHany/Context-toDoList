import React from 'react';
//components
import InputData from './components/input for add/Input';
import ListTasks from './components/tasks list/List';
import Completed from './components/completed task/Completed';
// import Deleted from './components/deleted task/Deleted';

export const MyContext = React.createContext('light');
class App extends React.Component{
  state = {
      data: []
  }

  addToDo = (toDo) => {
    const {data} = this.state;
    this.setState({data: [...data, toDo]})
  }

  

  render(){
    const value = {
      state: this.state,
      addToDo: this.addToDo
    }
    return(
    <MyContext.Provider value={value}>
        <InputData />
        <ListTasks />
        <Completed />
        {/* <Deleted /> */}
    </MyContext.Provider>
    )
  }  
}
export default App;
