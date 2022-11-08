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

type Member = { name: string; age: number; activities: Activities[] };

export function MembersList({
    initialMembers,
    currentSearch
}: {
    initialMembers: Member[];
    currentSearch: string;
}) {
    const [currMembers, setCurrMembers] = useState(initialMembers);
    const maxRating = 5;
    const ratedMembers = currMembers.map((m) => {
        return { ...m, rating: Math.floor(Math.random() * maxRating) };
    });

    const filteredMembers = ratedMembers.filter((m) =>
        m.name.includes(currentSearch)
    );

    const removeMember = (name: string) => {
        const newMembersList = currMembers.filter((m) => m.name !== name);
        setCurrMembers(newMembersList);
    };

    return (
        <StyledList>
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
