const login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="card w-1/3 shadow-2xl bg-base-100">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="enter admin email"
                            name="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="enter your password"
                            name="password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default login;
