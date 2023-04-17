import { useState } from "react";
import { ContactField } from "./../models/ContactField";

export const ContactForm =  ({ contactMe }) => {

	const [form, submitForm] = useState(new ContactField());

}
