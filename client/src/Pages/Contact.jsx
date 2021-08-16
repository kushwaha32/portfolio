import Title from "../Components/Title";
import AlertComponent from "../Components/alert";
import phone from "../img/smartphone.png";
import Email from "../img/mail.png";
import map from "../img/map.png";
import { useContext, useEffect, useState } from "react";
import authContext from "../Context/auth/authContext";
import ContactContext from "../Context/Contact/ContactContext";
import ContactContact from "../Components/contactContact";
import { CircularProgress } from "@material-ui/core";
import alertContext from "../Context/Alert/alertContext";

const Contact = () => {
  const getAuthContext = useContext(authContext);
  const getContactContext = useContext(ContactContext);
  const getAlertContext = useContext(alertContext);

  const { addContact, loading, errors, success } = getContactContext;

  useEffect(() => {
    getAuthContext.authAndLoading();
    if (errors !== null) {
      errors.map((err) => getAlertContext.setAlert(err.msg, "error"));
    }
    if (success !== null) {
      getAlertContext.setAlert(success, "success");
    }
    // eslint-disable-next-line
  }, [errors, success]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();

    addContact(contact);
    setContact({ ...contact, name:"", email:"", phoneNo:"", message:"" });
  };
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const { name, email, phoneNo, message} = contact;
  return (
    <div className="Contact padding-comman">
      <Title title="Contact" opaceTitle="Contact" />
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14408.388310724475!2d81.78963724999998!3d25.4684337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1624271861030!5m2!1sen!2sin"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-info-d">
          <ContactContact
            image={phone}
            title={"Phone"}
            contact={"+91 8355024835"}
          />
          <ContactContact
            image={Email}
            title={"Email"}
            contact={"raj639kushwaha@gmail.com"}
          />
          <ContactContact
            image={map}
            title={"Address"}
            contact={"150A/4 chak meerapatti allahabad"}
          />
        </div>
      </div>
      <div className="contact-form">
        <Title title="Contact Me" opaceTitle="Contact Me" />
        <div className="form-control">
          <AlertComponent />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={onChange}
              value={name}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={onChange}
              value={email}
            />
            <input
              type="text"
              name="phoneNo"
              placeholder="Contact No"
              onChange={onChange}
              value={phoneNo}
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              style={{ marginBottom: "3rem", paddingTop: ".5rem" }}
              onChange={onChange}
              placeholder="enter your message"
              value={message}
            ></textarea>
            <button
              type="submit"
              className="btn btn-contact-form"
              style={{ margin: "0 auto", display: "block" }}
            >
              {loading ? (
                <CircularProgress
                  style={{ width: "25px", height: "25px", color: "white" }}
                />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
