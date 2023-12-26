import { useAuth } from "contexts/Auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginAPI } from "services/api";
import { Redirect } from "react-router-dom";

const ERROR_MESSAGES = {
  "Missing password": "گذرواژه خالی می‌باشد!",
  "Missing email": "ایمیل خالی می‌باشد!",
  "user not found": "کاربری با این مشخصات یافت نشد!",
};

const LoginPage = () => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { toggleAuth, user } = useAuth();

  const history = useHistory();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = form;

    loginAPI({
      email,
      password,
    })
      .then(() => {
        // 01. Change user login state on success login
        toggleAuth();
        // 02. Redirect user to /dashboard
        <mark>history.push("/dashboard");</mark>;
      })
      .catch((err) => setError(() => err.response.data.error));
  };

  useEffect(() => {
    // 03. Check if user already logedin, redirect to dashboard
    if (user.loggedIn) {
      // Redirect to the dashboard
      history.push("/dashboard");
    }
  }, [user]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            {error && (
              <div className="alert alert-danger" role="alert">
                {ERROR_MESSAGES[error] ?? error}
              </div>
            )}
            <div className="card">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    ایمیل
                  </label>
                  <input
                    value={form.email}
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    گذرواژه
                  </label>
                  <input
                    value={form.password}
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  ورود
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
