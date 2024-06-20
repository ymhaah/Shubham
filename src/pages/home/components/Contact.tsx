import Button from "@/Button";

function Contact() {
    return (
        <section aria-labelledby="contact">
            <div className="Container">
                <div className="col-1">
                    <h2 id="contact" className="hero__title">
                        Contact Me
                    </h2>
                </div>
                <div className="form">
                    <form id="main-htmlForm" method="POST">
                        <div className="input-wrapper">
                            <label
                                htmlFor="input-name"
                                className="form-label required"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="Client Name"
                                id="input-name"
                                className="form-input focus"
                                placeholder="Name"
                                minLength={2}
                                maxLength={50}
                                autoComplete="given-name"
                                required={true}
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
                                required={true}
                                minLength={6}
                                maxLength={80}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label
                                htmlFor="Massage"
                                className="form-label required"
                            >
                                Massage
                            </label>
                            <textarea
                                name="Massage"
                                id="Massage"
                                className="form-input focus"
                                placeholder="Massage"
                                required={true}
                                maxLength={5000}
                            />
                        </div>
                        <p
                            id="submit-message"
                            className="small"
                            date-form-error="waiting"
                        >
                            Please enter your information to submit.
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
