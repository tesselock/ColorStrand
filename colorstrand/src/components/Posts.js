import React from 'react'
import {useState} from 'react';

function Posts({addTodo}) {
    const [value,setValue] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        //prevent default 
        //dont submit empty value
        if (!value) return;
        addTodo(value);
        console.log(value);
        setValue(''); //this clears the form out

    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" className="input" value={value} onChange={e=>setValue(e.target.value)}></input> 
                {/* on change fnction that takes in paramater e, and setvalues to the target */}
            </form>
        </div>
    )
}

export default Posts;
