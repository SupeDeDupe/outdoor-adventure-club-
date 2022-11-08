import { Activities } from './MemberCard';

export function Filter({
    filterByActivity
}: {
    // oops, this could have been done with a filter state variable
    filterByActivity: (a: Activities | null) => void;
}) {
    return (
        <div>
            <div>
                Filter by:
                <button onClick={() => filterByActivity(Activities.hiking)}>
                    {Activities.hiking}
                </button>
                <button onClick={() => filterByActivity(Activities.running)}>
                    {Activities.running}
                </button>
                <button onClick={() => filterByActivity(Activities.biking)}>
                    {Activities.biking}
                </button>
                <button onClick={() => filterByActivity(null)}>
                    clear filters
                </button>
            </div>
        </div>
    );
}
