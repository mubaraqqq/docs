export const List = ({ number, title, caption }) => {
  return (
    <div className="[&>*]:m-0 text-sm flex flex-col gap-2">
      <div className="flex gap-2">
        <p style={{ marginBlock: "0px" }}>{number}.</p>
        <span
          className="text-[#1C1C1CCC] text-base [&>*]:m-0"
          style={{ marginBlock: "0px", overflowWrap: "break-word" }}
        >
          {title}
        </span>
      </div>
      <p style={{ marginBlock: "0px" }}>{caption}</p>
    </div>
  );
};
