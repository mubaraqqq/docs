export const DocStep = ({ title, label }) => {
  return (
    <div className="[&>*]:m-0 text-sm">
      {title} <br />
      <span className="font-bold text-[#1C1C1CCC] text-base [&>*]:m-0">
        {label}
      </span>
    </div>
  );
};
