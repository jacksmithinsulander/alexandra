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
				placeholder="Full name"
				type="text"
				value={form.email}
				onChange={handleChange}
				name="email"
			/>
			<div className="form2">
			<input className="email"
				placeholder="Email"
				type="text"
				value={form.message}
				onChange={handleChange}
				name="message"
			/>
			<input className="phone"
			placeholder="iPhone"
				type="text"
				value={form.name}
				onChange={handleChange}
				name="name"
			/>
			</div>
			<button>Kontakta mig!</button>
		</form>
	);
}
