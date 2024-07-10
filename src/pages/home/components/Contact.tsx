import { useRef, FormEvent, useState } from "react";
import Button from "@/Button";

const URL = "";

function Contact() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [submitMessage, setSubmitMessage] = useState<{
        message: string;
        error: boolean | undefined;
    }>({
        message: "Please enter your information to submit.",
        error: undefined,
    });

    function resetInput() {
        window.setTimeout(() => {
            if (nameRef.current) nameRef.current.value = "";
            if (emailRef.current) emailRef.current.value = "";
            if (messageRef.current) messageRef.current.value = "";
            setSubmitMessage({
                message: "Please enter your information to submit.",
                error: undefined,
            });
        }, 2000);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const name = nameRef.current?.value.trim();
        const email = emailRef.current?.value.trim();
        const message = messageRef.current?.value.trim();

        if (!name && !email && !message) return;

        const formData = {
            Name: name,
            Email: email,
            Message: message,
        };

        // ? Convert form data to URL-encoded string
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formDataString = new URLSearchParams(formData as any).toString();

        console.log(formDataString);

        try {
            const response = await fetch(URL, {
                method: "POST",
                body: formDataString,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            if (response.ok) {
                resetInput();
                setSubmitMessage({
                    message: "Form submitted successfully.",
                    error: false,
                });
            } else {
                throw new Error("Failed to submit the form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitMessage({
                message:
                    "There was an error submitting the form. Please try again later.",
                error: true,
            });
        }
    }

    return (
        <section aria-labelledby="contact">
            <div className="Container">
                <div className="col-1">
                    <h2 id="contact" className="hero__title">
                        Contact Me
                    </h2>
                </div>
                <div className="form">
                    <form
                        id="main-htmlForm"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div className="input-wrapper">
                            <label
                                htmlFor="input-name"
                                className="form-label required"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="Name"
                                id="input-name"
                                className="form-input focus"
                                placeholder="Name"
                                minLength={2}
                                maxLength={50}
                                autoComplete="given-name"
                                required
                                ref={nameRef}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label
                                htmlFor="input-email"
                                className="form-label required"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="Email"
                                id="input-email"
                                className="form-input focus"
                                placeholder="Email"
                                autoComplete="email"
                                required
                                minLength={6}
                                maxLength={80}
                                ref={emailRef}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label
                                htmlFor="Message"
                                className="form-label required"
                            >
                                Message
                            </label>
                            <textarea
                                name="Message"
                                id="Message"
                                className="form-input focus"
                                placeholder="Message"
                                required
                                maxLength={5000}
                                ref={messageRef}
                            />
                        </div>
                        <p
                            id="submit-message"
                            className={`small ${
                                submitMessage.error === true
                                    ? "error"
                                    : submitMessage.error === false
                                    ? "success"
                                    : "waiting"
                            }`}
                        >
                            {submitMessage.message}
                        </p>
                        <Button
                            type="submit"
                            className="btn-mono"
                            id="form-submit-btn"
                        >
                            SUBMIT
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
