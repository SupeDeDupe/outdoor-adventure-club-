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
    const [currMembers, setCurrMembers] = useState(MEMBERS);
    const maxRating = 5;
    const ratedMembers = currMembers.map((m) => {
        return { ...m, rating: Math.floor(Math.random() * maxRating) };
    });
    const removeMember = (name: string) => {
        const newMembersList = currMembers.filter((m) => m.name !== name);
        setCurrMembers(newMembersList);
    };
    return (
        <div className="App">
            <MembersList
                initialMembers={ratedMembers}
                removeMember={removeMember}
            />
        </div>
    );
}

export default App;
