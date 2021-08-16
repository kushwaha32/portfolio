import { useContext } from "react";
import alertContext from "../Context/Alert/alertContext";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
const AlertComponent = () => {
  const useAlertContext = useContext(alertContext);
  const { alerts } = useAlertContext;
  return (
    alerts.length > 0 &&
    alerts.map((alrt) => (
      <div
        className={`alert-box alert-${alrt.type}`}
        key={alrt.id}
        style={{ marginBottom: "1rem" }}
      >
        {alrt.type === "error" ? (
          <ErrorOutlineIcon
            style={{ color: "#f44336", fontSize: "19px" }}
          ></ErrorOutlineIcon>
        ) : (
          <CheckCircleOutlineIcon
            style={{ color: "#4caf50", fontSize: "19px" }}
          ></CheckCircleOutlineIcon>
        )}

        <span style={{ marginLeft: "6px" }}>{alrt.msg}</span>
      </div>
    ))
  );
};

export default AlertComponent;
