import React, { useState } from 'react';

function Todo() {
    const [input, setInput] = useState('');
    const [arr, setArr] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

   function save() {
        setArr([...arr, input]);
    }
//check
   function Check(index) {
    let newChecked = [...checkedItems]; 
    let found = newChecked.indexOf(index);
    if (found == -1) {
        newChecked.push(index);
    } else {
        newChecked.splice(found, 1); 
    }
    setCheckedItems(newChecked);
}
//delete
    function deleteItem(index) {
    const newArr = [...arr];
    newArr.splice(index, 1); 
    let newChecked = [...checkedItems];
    let found = newChecked.indexOf(index);
    if (found !== -1) {
        newChecked.splice(found, 1); 
    }
    setArr(newArr);
    setCheckedItems(newChecked);
}

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-center text-3xl font-semibold mb-4">To Do List</h1>
            <div className="md:w-1/2 mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex mb-4">
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text"
                            className="w-full px-4 py-2 mr-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Add new task"
                        />
                        <button
                            onClick={save}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="flex flex-col gap-2">
                        {arr.map((item, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems.includes(index)}
                                        onChange={() => Check(index)}
                                    />
                                    <span className={checkedItems.includes(index) ? 'line-through text-gray-500' : ''}>
                                        {item}
                                    </span>
                                </div>
                                <button
                                    onClick={() => deleteItem(index)}
                                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded text-sm"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;