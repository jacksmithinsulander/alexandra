import { useState } from "react";
import { ContactField } from "./../models/ContactField";

export const ContactForm =  ({ contactMe }) => {

	const [form, submitForm] = useState(new ContactField("", "", ""));

	const handleChange = (e) => {
		
		submitForm({...form, [e.target.name]: e.target.value})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		contactMe(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={form.email}
				onChange={handleChange}
				name="email"
			/>
			<input
				type="text"
				value={form.message}
				onChange={handleChange}
				name="message"
			/>
			<input
				type="text"
				value={form.name}
				onChange={handleChange}
				name="name"
			/>
			<button>Kontakta mig!</button>
		</form>
	);
}
