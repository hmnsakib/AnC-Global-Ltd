import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
                `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
                form.current,
                `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("'Send Mail' Successful !");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    toast.error("'Send Mail' Failed !");
                }
            );
    };

    return (
        <div className="px-8 lg:px-48 mt-5 lg:mt-20">
            <h1 className="text-lg lg:text-2xl font-bold text-center">
                Mail Us!
            </h1>
            <form className="" ref={form} onSubmit={sendEmail}>
                <div className=" grid lg:grid-cols-2 lg:gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="enter your name"
                            name="user_name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input
                            type="email"
                            placeholder="enter your email"
                            name="user_email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subject:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="enter mail subject"
                        name="subject"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message:</span>
                    </label>
                    <textarea
                        className="p-4"
                        name="message"
                        placeholder="enter your message"
                        required
                        rows="10"
                    />
                </div>
                <div className="form-control mt-6">
                    <input
                        className="btn bg-[#4FACD7] text-white mb-5"
                        type="submit"
                        value="Send Mail"
                    />
                </div>
            </form>
            <Toaster
                position="bottom-center"
                toastOptions={{ duration: 5000 }}
            />
        </div>
    );
};

export default Contact;
