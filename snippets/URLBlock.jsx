export const URLBlock = ({
  url = "",
  content = [],
  cannotCopy = false,
  title = "",
}) => {
  return (
    <div
      style={{
        backgroundColor: "#6B3B900A",
        borderRadius: "8px",
        borderColor: "#F8F8F8",
      }}
      className="flex flex-col gap-4 border p-6"
    >
      {title && (
        <p
          className="font-bold text-2xl"
          style={{ color: "#1C1C1C", marginBlock: "0px" }}
        >
          {title || ""}
        </p>
      )}

      <div className="flex flex-col [&>*]:my-0 gap-2">
        <div
          className="flex items-center justify-between [&>*]:my-0"
          style={{ height: "fit-content" }}
        >
          <span
            className="font-bold"
            style={{ color: "#1C1C1CCC", marginBlock: "0px" }}
          >
            URL
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={async () => {
              await navigator.clipboard.writeText(url);
              alert("Link copied!");
            }}
          >
            <path
              d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z"
              stroke="#191B1F"
              stroke-opacity="0.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3334 6.00016C11.3318 4.02877 11.302 3.00764 10.7282 2.30845C10.6174 2.17342 10.4936 2.04962 10.3586 1.9388C9.62096 1.3335 8.52516 1.3335 6.3335 1.3335C4.14184 1.3335 3.04602 1.3335 2.30845 1.9388C2.17342 2.04961 2.04962 2.17342 1.9388 2.30845C1.3335 3.04602 1.3335 4.14184 1.3335 6.3335C1.3335 8.52516 1.3335 9.62096 1.9388 10.3586C2.04961 10.4936 2.17342 10.6174 2.30845 10.7282C3.00764 11.302 4.02877 11.3318 6.00016 11.3334"
              stroke="#191B1F"
              stroke-opacity="0.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p
          className="font-medium text-sm border-none"
          style={{ color: "#DC5695", marginBlock: "0px" }}
        >
          {url}
        </p>
      </div>

      {content.length > 0 &&
        content.map((item, idx) => (
          <div key={idx} className="flex flex-col [&>*]:my-0 gap-2 text-sm">
            <div
              className="flex items-center justify-between [&>*]:my-0"
              style={{ height: "fit-content" }}
            >
              <span
                className="font-bold"
                style={{ color: "#1C1C1CCC", marginBlock: "0px" }}
              >
                {item?.title || ""}
              </span>
              {!cannotCopy && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={async () => {
                    await navigator.clipboard.writeText(item.caption);
                    alert("content copied!");
                  }}
                >
                  <path
                    d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z"
                    stroke="#191B1F"
                    stroke-opacity="0.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3334 6.00016C11.3318 4.02877 11.302 3.00764 10.7282 2.30845C10.6174 2.17342 10.4936 2.04962 10.3586 1.9388C9.62096 1.3335 8.52516 1.3335 6.3335 1.3335C4.14184 1.3335 3.04602 1.3335 2.30845 1.9388C2.17342 2.04961 2.04962 2.17342 1.9388 2.30845C1.3335 3.04602 1.3335 4.14184 1.3335 6.3335C1.3335 8.52516 1.3335 9.62096 1.9388 10.3586C2.04961 10.4936 2.17342 10.6174 2.30845 10.7282C3.00764 11.302 4.02877 11.3318 6.00016 11.3334"
                    stroke="#191B1F"
                    stroke-opacity="0.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            {item.caption}
          </div>
        ))}
    </div>
  );
};
