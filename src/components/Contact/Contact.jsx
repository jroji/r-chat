import Avatar from "../Avatar/Avatar";
import './Contact.css';

function Contact (props) {
    return <article class="contact">
        <Avatar image={props.image}></Avatar>
        <div className="info">
            <h1 className="name">{props.name}</h1>
            <p className="tel">{props.tel}</p>
        </div>
    </article>
}

export default Contact;