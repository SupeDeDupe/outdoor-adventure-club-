import { useState } from 'react';
import styled from 'styled-components';
import { Activities, MemberCard } from './MemberCard';

const StyledList = styled.li`
    margin: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
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
    const filteredMembers = initialMembers.filter((m) =>
        m.name.toLowerCase().includes(searchText)
    );

    return (
        <StyledList>
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
            {filteredMembers.map((m) => {
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
        </StyledList>
    );
}
