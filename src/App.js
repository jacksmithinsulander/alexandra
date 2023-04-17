import './App.css';

import {ContactForm} from "./components/ContactForm";

function App() {

  const contact = (form) => {

    localStorage.setItem("contact",JSON.stringify([ form.email, form.message, form.name,])); //lägger
    console.log(form);
  }

  return (
    <section className="App">
      <h1>Alexandra</h1>
      <h2>Kontakta mig!</h2>
      <ContactForm contactMe={contact}/>

    </section>
  );
}

export default App;
