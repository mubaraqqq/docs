export const TableWIthLongDesc = ({ data, name, type, desc }) => (
  <div style={{ marginBlock: "30px" }} className="text-sm font-mono">
    <div
      style={{
        rowGap: "16px",
        columnGap: "2px",
        backgroundColor: "#F7F9FB",
        paddingBlock: "5px",
        paddingInline: "10px",
        color: "rgba(25,27,31,0.6)",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
      className="grid"
    >
      <div className="col-span-1 flex flex-col gap-2">
        <span>name</span>
        <span style={{ color: "rgba(25,27,31,0.8)" }}>{name}</span>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span>type</span>
        <span style={{ color: "rgba(25,27,31,0.8)" }}>{type}</span>
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <span>Description</span>
        <span style={{ color: "rgba(25,27,31,0.8)" }}>{desc}</span>
      </div>
    </div>
  </div>
);
