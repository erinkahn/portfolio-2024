import { useState, type FormEvent } from "react";
import { contactData } from "../../constants/data";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const subject = encodeURIComponent(
			`Hello from ${name || "your website"}`
		);
		const body = encodeURIComponent(`${message}\n\n— ${name}`);
		window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
	};

	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<label className="field">
				<span className="field-label">Your Name</span>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</label>

			<label className="field">
				<span className="field-label">Message</span>
				<textarea
					name="message"
					rows={4}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</label>

			<button type="submit" className="send-btn">
				Send It
			</button>
		</form>
	);
}
