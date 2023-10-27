const Contact = () => {
    return (
        <div className="px-48 mt-20">
            <h1 className="text-3xl font-bold text-center">Mail Us!</h1>
            <form className="">
                <div className=" grid grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="enter your name"
                            name="name"
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
                            name="email"
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
                        className="btn btn-primary"
                        type="submit"
                        value="Send Mail"
                    />
                </div>
            </form>
        </div>
    );
};

export default Contact;
