import React from 'react';
import './Input.css';
import uuidv1 from 'uuid';
import {MyContext} from '../../App';
import { throws } from 'assert';


class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, addToDo) {
        e.preventDefault();
        const input = e.target[0].value;
        const myState = {
            text: input,
            id: uuidv1(),
            completed: false,
            deleted: false,
        }
        addToDo(myState);
    }

    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <form onSubmit={(e) => this.handleSubmit(e, value.addToDo)}>
                            <br />
                            <input type="task" placeholder="Add Task..." className="txtBox" onChange={this.handleChange} /><br />
                            <button variant="primary" type="submit">
                                Add
                            </button>
                            <br />
                        </form>
                    )
                }
            </MyContext.Consumer>

        )
    }
}
export default AddToDo;

