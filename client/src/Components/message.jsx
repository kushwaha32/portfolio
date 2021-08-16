import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useContext } from "react";
import ContactContext from "../Context/Contact/ContactContext";

const Message = ({ contact }) => {
  const useContactContext = useContext(ContactContext);
  const { deleteContact, loading  } = useContactContext;
  
  

  const [open, setOpen] = useState(false);
  const { name, email, phoneNo, message, _id } = contact;
  const handleClick = () => {
    setOpen(!open);
  };
 
  const [state, setState] = useState({
    snackOpen: false,
    Transition: Fade,
  });

  const snackHandleClick = (Transition) => () => {
    setState({
      snackOpen: true,
      Transition,
    });
  };

  const snackHandleClose = () => {
    setState({
      ...state,
      snackOpen: false,
    });
  };
  return (
    <>
      <Snackbar
        open={state.snackOpen}
        onClose={snackHandleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        className="snackbar-style"
      >
        <div className="alert-modal">
          <div className="modal-body">
            <div className="icon"></div>
            <div className="modal-content">Are sure you want to Delete.</div>
          </div>
          <div className="modal-footer" style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              onClick={snackHandleClose}
              color="secondary"
            >
              Close
            </Button>
            <Button
              onClick={() => deleteContact(_id)}
              variant="contained"
              color="primary"
              style={{ marginLeft: "12px" }}
            >
              {
                loading ? ("loading..") : ("Delete")
              }
              
            </Button>
          </div>
        </div>
      </Snackbar>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={{ background: "#fff", marginBottom: "12px" }}
      >
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={name} />
          {open ? (
            <ExpandLess onClick={handleClick} />
          ) : (
            <ExpandMore onClick={handleClick} />
          )}
          <CloseIcon
            style={{ marginLeft: "1rem", fontSize: "20px" }}
            onClick={snackHandleClick(Fade)}
          />
        </ListItem>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          style={{ padding: "0rem 11% 1rem 11%" }}
        >
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <PhoneAndroidIcon />
              </ListItemIcon>
              <ListItemText primary={phoneNo} />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <p>{message}</p>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default Message;
