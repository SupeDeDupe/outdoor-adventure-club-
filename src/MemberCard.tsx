import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    border: 2px solid green;
    border-radius: 10px;
    line-height: 26px;
    width: fit-content;
    width: 300px;

    .name {
        font-weight: 500;
        font-size: 18px;
    }
    .age,
    .rating,
    .activities {
        font-weight: normal;
        font-size: 14px;
    }

    .left-side {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .avatar {
            margin: 0 20px;
        }
    }
`;

export enum Activities {
    hiking = 'Hiking',
    running = 'Running',
    biking = 'Biking'
}

type MemberCardProps = {
    name: string;
    age: number;
    rating: number;
    activities: Activities[];
    removeMember: (name: string) => void;
};

export function MemberCard({
    name,
    age,
    rating,
    activities,
    removeMember
}: MemberCardProps) {
    return (
        <StyledListItem>
            <div className="name">{name}</div>
            <div className="age">Age: {age}</div>
            <div className="rating">Rated: {rating}</div>
            <div className="activities">
                Last 3 activities: {activities.join(', ')}
            </div>
            <button onClick={() => removeMember(name)}>Remove member</button>
        </StyledListItem>
    );
}
