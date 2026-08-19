function StatsRow({ items }) {
  return (
    <ul className="stats-row">
      {items.map((item) => (
        <li key={item.label} className="stats-row__item">
          <p className="stats-row__number">{item.number}</p>
          <p className="stats-row__label">{item.label}</p>
        </li>
      ))}
    </ul>
  );
}

export default StatsRow;
