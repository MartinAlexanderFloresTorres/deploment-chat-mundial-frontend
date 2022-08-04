const Mensaje = ({ mensaje }) => {
  return (
    <p className={`${mensaje?.user === "yo" ? "rigth" : "left"}`}>
      <span className={`aff`}>
        {mensaje?.user !== "yo" ? (
          <svg viewBox="0 0 8 13" width="8" height="13">
            <path
              opacity=".13"
              fill="#0000000"
              d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
            ></path>
            <path
              fill="currentColor"
              d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
            ></path>
          </svg>
        ) : (
          <svg viewBox="0 0 8 13" width="8" height="13">
            <path
              opacity=".13"
              d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
            ></path>
            <path
              fill="currentColor"
              d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
            ></path>
          </svg>
        )}
      </span>
      {mensaje?.user === "yo" ? (
        <span className="sms">
          <span className="sms_text">{mensaje?.body}</span>
          <span className="sms_time">{mensaje?.time}</span>
          <span>
            <svg viewBox="0 0 16 15" width="16" height="15">
              <path
                fill="currentColor"
                d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
              ></path>
            </svg>
          </span>
        </span>
      ) : (
        <span className="sms">
          <span className="sms">
            <span className="sms_text">
            <span className="bold">
            {mensaje.user}
            <span style={{ width: "15px" }}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#53bdeb"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </span>
              {mensaje?.body}</span>
            <span className="sms_time">{mensaje?.time}</span>
          </span>
        </span>
      )}
    </p>
  );
};

export default Mensaje;
