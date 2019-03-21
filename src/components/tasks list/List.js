import React from 'react';
import './List.css';
import { MyContext } from '../../App';


const List = (value) => (
    <MyContext.Consumer>
        {
            value => (
                
                    value.state.data.filter(a => !(a.completed || a.deleted)).map(a => (
                        <div key={a.id} className="form">
                            <p>{a.text}</p>
                            <input type="checkbox" name="completed" value="completed" className="checkBox" onChange={(e) => this.handleChange(e, a.id)} />
                            <input type="checkbox" name="deleted" value="deleted" className="checkBox" onChange={(e) => this.handleChange(e, a.id)} />
                        </div>
                    ))
                
            )
        }
    </MyContext.Consumer>
)

export default List;