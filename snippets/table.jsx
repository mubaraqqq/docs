export const Table = ({ data = [] }) => (
  <div className="text-sm font-mono">
    <div
      style={{
        gap: 10,
        display: "grid",
        padding: "5px 10px",
        backgroundColor: "#F7F9FB",
        color: "rgba(25,27,31,0.6)",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      }}
    >
      <span>name</span>
      <span>type</span>
      <span>Description</span>
    </div>
    {data?.map((item, idx) => (
      <div
        key={idx}
        style={{
          gap: 10,
          display: "grid",
          padding: "8px 10px",
          color: "rgba(25,27,31,0.8)",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        <span className="break-words">{item.name}</span>
        <span>{item.type}</span>
        <span>{item.desc}</span>
      </div>
    ))}
  </div>
);
