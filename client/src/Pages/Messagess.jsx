import { useEffect } from "react";
import { useContext } from "react";
import Message from "../Components/message";
import Title from "../Components/Title";
import ContactContext from "../Context/Contact/ContactContext";

const Messagess = () => {
  const useContactContext = useContext(ContactContext);
  const { contacts, loading, getContact } = useContactContext;
  useEffect(() => {
    getContact();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Portfolio padding-comman">
      <div className="portfolio-title">
        <Title title="Messagess" opaceTitle="Messagess" />
      </div>
      <div className="form-control">
        {!loading
          ? contacts &&
            contacts.map((contact) => (
              <Message key={contact._id} contact={contact} />
            ))
          : "loading..."}
      </div>
    </div>
  );
};

export default Messagess;
