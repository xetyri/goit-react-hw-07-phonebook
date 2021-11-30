import s from './ContactForm.module.css';
import {useAddContactMutation,useGetContactsQuery} from "../../Api/Api";

export default function ContactForm() {
    const [addContact] = useAddContactMutation();
    const { data: contacts } = useGetContactsQuery();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.currentTarget.name.value;
        const phone = e.currentTarget.phone.value;
        const newContact = {
            name,
            phone,
        };
        
        if (contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase())){
            alert('Contact is already added !!!');
            e.currentTarget.reset();
            return;
        }
        addContact(newContact);
        e.currentTarget.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={s.elem}>
                <label>
                <input
                type="text"
                name="name"
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                />
            </label>
            <label>
                <input
                type="tel"
                name="phone"
                placeholder="Enter number"
                pattern="38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                title="Номер может состоять только из цифр. Например 380956665557."
                required
                />
            </label>
            <button type="submit">Save</button>
        </form> 
        </>
    )
}