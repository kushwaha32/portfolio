

const ContactContact = ({ image, title, contact }) => {
    return(
        <div className="contact-details">
                 <img src={image} alt="" className="contact-img" /> 
                 <div className="contact-info">
                     <p>{title}</p>
                     <span>{contact}</span>
                 </div>
        </div>
    )
}


export default ContactContact;