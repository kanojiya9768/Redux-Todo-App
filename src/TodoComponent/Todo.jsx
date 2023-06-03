import React, { useEffect, useRef, useState } from 'react'
import './css/TodoStyle.css'

import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, changeEditStatus, editTodo } from '../TodoStore/TodoSlice/TodoSlice';

function Todo() {

    const dispatch = useDispatch();
    const TodoList = useSelector((state) => state.Todo);




    const [TodoLocalStorage, setTodoLocalStorage] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('Todos'));

        if (data === null) {
            setTodoLocalStorage([]);
        } else {
            setTodoLocalStorage([...data])
        }
    }, [TodoList])



    const TodoInput = useRef();
    const [EditId, setEditID] = useState('');


    const AddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(TodoInput.current.value));
        TodoInput.current.value = ''
    }


    const EditTodo = (data, id) => {
        dispatch(changeEditStatus())
        TodoInput.current.value = data;
        setEditID(id)
        TodoInput.current.focus();
    }


    const UpdateTodo = (e) => {
        e.preventDefault();
        dispatch(editTodo({ id: EditId, newTodo: TodoInput.current.value }));
        TodoInput.current.value = '';
    }


    const DeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    }



    // console.log(TodoList)

    return (
        <>
            {/* form to add */}
            <form>
                <input type="text" placeholder='Add New Todo' ref={TodoInput} />
                {TodoList.Edit ? <input type="submit" value="Update" onClick={UpdateTodo} /> : <input type="submit" value="Add" onClick={AddTodo} />}
            </form>


            {/* //list Todos  */}
            <div className="TodoContainer">
                {
                    TodoLocalStorage.map((data, id) => {
                        return (
                            <ul className="list" key={id}>
                                <li>{data}</li>
                                <div className="buttons">
                                    <button onClick={() => EditTodo(data, id)}>Edit</button>
                                    <button onClick={() => DeleteTodo(id)}>Delete</button>
                                </div>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todo