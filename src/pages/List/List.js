import { Link } from "react-router-dom";
import Contact from "../../components/Contact/Contact";

export default function List() {
    const users = [
        { name: 'John', tel: '677777771', image: 'https://placekitten.com/200/300' },
        { name: 'Carlos', tel: '677777771', image: 'https://placekitten.com/100/100' },
        { name: 'María', tel: '677777771', image: 'https://placekitten.com/200/200' },
        { name: 'Marta', tel: '677777771', image: 'https://placekitten.com/400/400' },
      ];
    
    return users.map((contact) => <Link to={`/chat/${contact.name}`}>
        <Contact
            image={contact.image}
            name={contact.name}
            tel={contact.tel}></Contact>
    </Link>)
}
