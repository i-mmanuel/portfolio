"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { submitContactForm } from "../actions";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
	const [pending, setPending] = useState(false);
	const [status, setStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	async function handleSubmit(formData: FormData) {
		setPending(true);
		setStatus({ type: null, message: "" });

		try {
			const response = await submitContactForm(formData);

			if (response.success) {
				setStatus({
					type: "success",
					message: response.message,
				});
				// Reset the form on success
				const form = document.getElementById("contact-form") as HTMLFormElement;
				form.reset();
			} else {
				setStatus({
					type: "error",
					message: response.message,
				});
			}
		} catch (error) {
			setStatus({
				type: "error",
				message: "Something went wrong. Please try again.",
			});
		} finally {
			setPending(false);
		}
	}

	return (
		<Card className="p-6 w-full">
			<form id="contact-form" action={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-2">
						Name
					</label>
					<Input id="name" name="name" required />
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-2">
						Email
					</label>
					<Input id="email" name="email" type="email" required />
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-2">
						Message
					</label>
					<Textarea id="message" name="message" required />
				</div>
				<Button
					type="submit"
					className={`w-full ${pending ? "bg-gray-400 text-gray-700 cursor-not-allowed" : ""}`}
					disabled={pending}
				>
					{pending ? "Sending..." : "Send Message"}
				</Button>

				{status.message && (
					<div
						className={`flex items-center gap-2 p-3 rounded-md ${
							status.type === "success"
								? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
								: "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
						}`}
					>
						{status.type === "success" ? (
							<CheckCircle2 className="h-5 w-5 flex-shrink-0" />
						) : (
							<AlertCircle className="h-5 w-5 flex-shrink-0" />
						)}
						<p className="text-sm">{status.message}</p>
					</div>
				)}
			</form>
		</Card>
	);
}
