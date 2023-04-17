import { useState } from "react";
import { ContactField } from "./../models/ContactField";

export const ContactForm =  ({ contactMe }) => {

	const [form, submitForm] = useState(new ContactField("", "", ""));

	const handleChange = (e) => {
		if (e.target.typ === "text") {
			submitForm({...form, })
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		cpmtactMe(form);
	};
}
