export default function StatNum(props) {
    return (
        <>
            {props.statsProp.stat.map((stat, n) => (
                <li key={`stat-${n}`}>
                    <p className="stat-title">{stat.statText}</p>
                    <h2 className="stat-num">{stat.plus}{stat.statNum}{stat.percent}</h2>
                </li>
            ))}
        </>
    )
}