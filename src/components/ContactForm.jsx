import { useState } from "react";
import { ContactField } from "./../models/ContactField";
import Photo from "../Crazy_Cat_Lady.png"

export const ContactForm =  ({ contactMe }) => {

	const [form, submitForm] = useState(new ContactField("", "", ""));
	const [showImage, setShowImage] = useState(false);
	const [showText, setShowText] = useState(false);

	const handleChange = (e) => {
		
		submitForm({...form, [e.target.name]: e.target.value})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		contactMe(form);
	};

	const handleButtonClick = () => {
		setShowImage(true);
		setShowText(true);
	}

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
			<button onClick={handleButtonClick}>Kontakta mig!</button>
			{showImage && <img src={Photo} alt="crazycatlady" />}
			{showText && <h1>Crazy cat lady loves u</h1>}
		</form>
	);
}
