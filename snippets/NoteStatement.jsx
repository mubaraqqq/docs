export const NoteStatement = ({ label, message }) => (
  <div
    className="relative text-sm"
    style={{
      borderRadius: 16,
      padding: "1px 20px",
      backgroundColor: "rgba(252,155,28,.06)",
    }}
  >
    <p style={{ marginBlock: 0 }}>
      {label && (
        <span>
          <span className="font-bold" style={{ color: "#fc9b1c" }}>
            {label || "PS"}
          </span>
          {message && `: `}
        </span>
      )}
      {message}
    </p>
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-e-full"
      style={{ width: 2, height: 35, backgroundColor: "#fc9b1c" }}
    />
  </div>
);
