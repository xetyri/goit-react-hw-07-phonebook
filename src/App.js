import Container from './components/Container';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import { useState } from "react";
import { useGetContactsQuery } from "./Api/Api";

export default function App() {
  const { data } = useGetContactsQuery("");

  const [filter, setFilter] = useState("");

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return data.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };
  return (
    <>
       <Container>
      {data && <ContactForm contacts={data} />}
      <Filter value={filter} onChange={changeFilter} />
      {data && <ContactList contacts={getVisibleContacts()} />}
      </Container>
    </>
  );
}