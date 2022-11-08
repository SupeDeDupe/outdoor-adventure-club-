import React from 'react';
import './App.css';
import { Activities, MemberCard } from './MemberCard';

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
    const maxRating = 5;
    const ratedMembers = MEMBERS.map((m) => {
        return { ...m, rating: Math.floor(Math.random() * maxRating) };
    });
    return (
        <div className="App">
            {ratedMembers.map((m) => {
                return (
                    <MemberCard
                        name={m.name}
                        age={m.age}
                        activities={m.activities}
                        rating={m.rating}
                    />
                );
            })}
        </div>
    );
}

export default App;
