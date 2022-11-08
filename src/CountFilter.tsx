import { Activities } from './MemberCard';

export function CountFilter({
    count,
    countFilter,
    setCountFilter
}: {
    count: number;
    countFilter: Activities | null;
    setCountFilter: (a: Activities) => void;
}) {
    return (
        <div>
            <div>
                Count by activity: {count} {countFilter}
                <button onClick={() => setCountFilter(Activities.hiking)}>
                    {Activities.hiking}
                </button>
                <button onClick={() => setCountFilter(Activities.running)}>
                    {Activities.running}
                </button>
                <button onClick={() => setCountFilter(Activities.biking)}>
                    {Activities.biking}
                </button>
            </div>
        </div>
    );
}
