import { useState } from 'react';
import styled from 'styled-components';
import { Filter } from './Filter';
import { Activities, MemberCard } from './MemberCard';

const StyledList = styled.ul`
    margin: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .member-cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`;

type Member = {
    name: string;
    age: number;
    activities: Activities[];
    rating: number;
};

export function MembersList({
    initialMembers,
    removeMember
}: {
    initialMembers: Member[];
    removeMember: (name: string) => void;
}) {
    const [searchText, setSearchText] = useState('');
    // TODO: rename filteredMembers to reflect the search purpose.. redundant naming..
    const filteredMembers = initialMembers.filter((m) =>
        m.name.toLowerCase().includes(searchText)
    );
    const [members, setMembers] = useState(filteredMembers);
    // TODO: should have used a filter state
    // const [filteredActivity, setFilteredActivity] = useState(null);

    const filterByActivity = (activity: Activities | null) => {
        if (activity) {
            setMembers(
                filteredMembers.filter((m) => {
                    return m.activities.includes(activity);
                })
            );
        } else {
            setMembers(filteredMembers);
        }
    };

    return (
        <StyledList>
            <Filter filterByActivity={filterByActivity} />
            <div>
                <label>Search list:</label>
                <input
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    type="search"
                    id="members-search"
                    name="q"
                    value={searchText}
                />
            </div>
            <div className="member-cards">
                {members.map((m) => {
                    return (
                        <MemberCard
                            name={m.name}
                            age={m.age}
                            activities={m.activities}
                            rating={m.rating}
                            key={m.name}
                            removeMember={removeMember}
                        />
                    );
                })}
            </div>
        </StyledList>
    );
}
