import React, { useState } from 'react';
import './App.css';
import { Activities } from './MemberCard';
import { MembersList } from './MembersList';

const MEMBERS = [
    {
        name: 'Lizzy',
        age: 25,
        activities: [Activities.hiking]
    },
    {
        name: 'Sarah',
        age: 63,
        activities: [Activities.running]
    },
    {
        name: 'Andrew',
        age: 55,
        activities: [Activities.biking, Activities.hiking]
    }
];

function App() {
    const [searchText, setSearchText] = useState('');
    return (
        <div className="App">
            <label>Search list:</label>
            <input
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                type="search"
                id="members-search"
                name="q"
                value={searchText}
            ></input>
            <MembersList members={MEMBERS} />
        </div>
    );
}

export default App;
