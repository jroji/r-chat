import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import './Contact.css';

function Contact (props) {
    const [isFavourite, setIsFavourite] = useState(false);

    const handleClick = () => setIsFavourite(isFavourite === true ? false : true);

    return <article onClick={handleClick} className={isFavourite ? 'contact favourite' : 'contact'}>
        <Avatar image={props.image}></Avatar>
        <div className="info">
            <h1 className="name">{props.name}</h1>
            <p className="tel">{props.tel}</p>
        </div>
    </article>
}

export default Contact;