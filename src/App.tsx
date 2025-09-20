import clsx from "clsx";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";

const App = () => {
  const [num, setNum] = useState(0);

  const [pageState, setPageState] = useState("login");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerContact, setRegisterContact] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [checkPass, setCheckPass] = useState("");

  const bgColor = [
    "bg-amber-950",
    "bg-blue-950",
    "bg-orange-900",
    "bg-green-900",
    "bg-fuchsia-950",
  ];
  const borderColor = [
    "border-amber-950",
    "border-blue-950",
    "border-orange-900",
    "border-green-900",
    "border-fuchsia-950",
  ];
  const fontColor = [
    "text-amber-950",
    "text-blue-950",
    "text-orange-900",
    "text-green-900",
    "text-fuchsia-950",
  ];
  const pFontColor = [
    "placeholder:text-amber-950",
    "placeholder:text-blue-950",
    "placeholder:text-orange-900",
    "placeholder:text-green-900",
    "placeholder:text-fuchsia-950",
  ];
  const bgImage = [
    "DesertArt.jpg",
    "WinterArt.jpg",
    "SunnyArt.jpg",
    "ForestArt.jpg",
    "CityArt.jpg",
  ];

  const clearInputs = () => {
    setName("");
    setPass("");
    setRegisterName("");
    setRegisterEmail("");
    setRegisterContact("");
    setRegisterPass("");
    setCheckPass("");
  };

  const [fade, setFade] = useState(true);

  const handleBgChange = (index: number) => {
    setFade(false); 
    setTimeout(() => {
      setNum(index); 
      setFade(true); 
    }, 500); 
  };

  return (
    <div className={clsx(
      "flex",
      "w-full h-auto",
      "bg-black"
    )}>
      <div
        className={clsx(
          "relative",
          "flex flex-col justify-center items-center",
          "bg-center bg-cover bg-no-repeat",
          "w-full h-screen",
          "transition-opacity duration-500 ease-in-out",
          fade ? "opacity-100" : "opacity-0"
        )}
        style={{ backgroundImage: `url(bgImage/${bgImage[num]})` }}
      >
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "w-[27rem] h-auto p-10",
            "rounded-[.8rem]",
            "border-solid border-[.1rem]",
            "shadow-[inset_0px_0px_5px_rgba(0,0,0.2)]",
            "backdrop-blur-[1rem]",
            "bg-transparent",
            "font-medium",
            fontColor[num],
            borderColor[num]
          )}
          style={{ textShadow: "1px 1px 1px white" }}
        >
          <div
            className={clsx(
              "flex flex-col justify-center items-center",
              "w-full h-auto",
              "gap-10",
              "transition-all duration-1000 ease-in-out",
              pageState === "login"
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            {pageState === "login" && (
              <>
                <h1 className={clsx("text-[2rem]")}>Login</h1>
                <form
                  className={clsx("flex flex-col", "w-full h-auto", "gap-10")}
                  action=""
                >
                  <div className={clsx("relative", "w-full")}>
                    <i
                      className={clsx(
                        "bx bxs-user",
                        "absolute",
                        "right-3 top-1/2 -translate-y-1/2"
                      )}
                    ></i>
                    <input
                      className={clsx(
                        "w-full h-auto",
                        "rounded-[.8rem]",
                        "text-[1.1rem] p-3 pr-10",
                        "bg-transparent",
                        "border-solid border-[.1rem]",
                        "outline-none",
                        pFontColor[num],
                        borderColor[num]
                      )}
                      name="username"
                      type="text"
                      value={name}
                      autoComplete="off"
                      placeholder="Username"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={clsx("relative", "w-full")}>
                    <i
                      className={clsx(
                        "bx bxs-lock-alt",
                        "absolute",
                        "right-3 top-1/2 -translate-y-1/2"
                      )}
                    ></i>
                    <input
                      className={clsx(
                        "w-full h-auto",
                        "rounded-[.8rem]",
                        "text-[1.1rem] p-3",
                        "bg-transparent",
                        "border-solid border-[.1rem]",
                        "outline-none",
                        pFontColor[num],
                        borderColor[num]
                      )}
                      name="password"
                      type="password"
                      value={pass}
                      autoComplete="off"
                      placeholder="Password"
                      onChange={(e) => setPass(e.target.value)}
                      required
                    />
                  </div>
                  <div
                    className={clsx(
                      "flex flex-row justify-between",
                      "w-full h-auto"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex justify-center items-center",
                        "w-auto h-auto",
                        "gap-1"
                      )}
                    >
                      <input name="remember" type="checkbox" />
                      <label>Remember me</label>
                    </div>
                    <a href="#">
                      <p>Forgot Password?</p>
                    </a>
                  </div>
                  <button
                    className={clsx(
                      "w-full h-auto p-3",
                      "text-[1.5rem] text-white",
                      "rounded-[.8rem]",
                      bgColor[num]
                    )}
                    type="submit"
                  >
                    Login
                  </button>
                </form>
                <p>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={() => {
                      clearInputs();
                      setPageState("register");
                    }}
                  >
                    <strong>Register</strong>
                  </a>
                </p>
              </>
            )}
          </div>
          <div
            className={clsx(
              "flex flex-col justify-center items-center",
              "w-full h-auto",
              "gap-10",
              "transition-all duration-1000 ease-in-out",
              pageState === "register"
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            {pageState === "register" && (
              <>
                <h1 className={clsx("text-[2rem]")}>Register</h1>
                <form
                  className={clsx("flex flex-col", "w-full h-auto", "gap-5")}
                  action=""
                >
                  <div className={clsx("relative", "w-full")}>
                    <i
                      className={clsx(
                        "bx bxs-user",
                        "absolute",
                        "right-3 top-1/2 -translate-y-1/2"
                      )}
                    ></i>
                    <input
                      className={clsx(
                        "w-full h-auto",
                        "rounded-[.8rem]",
                        "text-[1.1rem] p-3 pr-10",
                        "bg-transparent",
                        "border-solid border-[.1rem]",
                        "outline-none",
                        pFontColor[num],
                        borderColor[num]
                      )}
                      name="registered-name"
                      type="text"
                      value={registerName}
                      autoComplete="off"
                      placeholder="Name"
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={clsx("relative", "w-full")}>
                    <i
                      className={clsx(
                        "bx bxs-envelope",
                        "absolute",
                        "right-3 top-1/2 -translate-y-1/2"
                      )}
                    ></i>
                    <input
                      className={clsx(
                        "w-full h-auto",
                        "rounded-[.8rem]",
                        "text-[1.1rem] p-3 pr-10",
                        "bg-transparent",
                        "border-solid border-[.1rem]",
                        "outline-none",
                        pFontColor[num],
                        borderColor[num]
                      )}
                      name="registered-email"
                      type="email"
                      value={registerEmail}
                      autoComplete="off"
                      placeholder="Email"
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={clsx("relative", "w-full")}>
                    <i
                      className={clsx(
                        "bx bxs-contact",
                        "absolute",
                        "right-3 top-1/2 -translate-y-1/2"
                      )}
                    ></i>
                    <input
                      className={clsx(
                        "w-full h-auto",
                        "rounded-[.8rem]",
                        "text-[1.1rem] p-3 pr-10",
                        "bg-transparent",
                        "border-solid border-[.1rem]",
                        "outline-none",
                        "appearance-[textfield]",
                        pFontColor[num],
                        borderColor[num]
                      )}
                      name="registered-contact"
                      type="text"
                      value={registerContact}
                      minLength={11}
                      autoComplete="off"
                      placeholder="Contact"
                      onChange={(e) =>
                        setRegisterContact(e.target.value.replace(/[^0-9]/g, ""))
                      }
                      required
                    />
                  </div>
                  <div className={clsx("relative", "w-full")}>
                    <i
                      className={clsx(
                        registerPass.length > 4 && "bx bxs-check-circle",
                        "absolute",
                        "right-3 top-1/2 -translate-y-1/2"
                      )}
                    ></i>
                    <input
                      className={clsx(
                        "w-full h-auto",
                        "rounded-[.8rem]",
                        "text-[1.1rem] p-3",
                        "bg-transparent",
                        "border-solid border-[.1rem]",
                        "outline-none",
                        pFontColor[num],
                        borderColor[num]
                      )}
                      name="registered-password"
                      type="password"
                      value={registerPass}
                      autoComplete="off"
                      placeholder="Password"
                      onChange={(e) => setRegisterPass(e.target.value)}
                      required
                    />
                  </div>
                  <div className={clsx("relative", "w-full")}>
                    <i
                      className={clsx(
                        checkPass.trim() &&
                          (checkPass === registerPass
                            ? "bx bxs-check-circle"
                            : "bx bxs-error"),
                        "absolute",
                        "right-3 top-1/2 -translate-y-1/2"
                      )}
                    ></i>
                    <input
                      className={clsx(
                        "w-full h-auto",
                        "rounded-[.8rem]",
                        "text-[1.1rem] p-3",
                        "bg-transparent",
                        "border-solid border-[.1rem]",
                        "outline-none",
                        pFontColor[num],
                        borderColor[num]
                      )}
                      name="check-password"
                      type="password"
                      value={checkPass}
                      autoComplete="off"
                      placeholder="Confirm Password"
                      onChange={(e) => setCheckPass(e.target.value)}
                      required
                    />
                  </div>
                  <div
                    className={clsx(
                      "flex flex-row justify-start",
                      "w-full h-auto"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex justify-center items-center",
                        "w-auto h-auto",
                        "gap-1"
                      )}
                    >
                      <input name="remember" type="checkbox" />
                      <label>
                        I agree to the{" "}
                        <span
                          className={clsx(
                            "font-bold",
                            "underline",
                            "cursor-pointer"
                          )}
                        >
                          Terms and Condition
                        </span>
                      </label>
                    </div>
                  </div>
                  <button
                    className={clsx(
                      "w-full h-auto p-3",
                      "text-[1.5rem] text-white",
                      "rounded-[.8rem]",
                      bgColor[num]
                    )}
                    type="submit"
                    disabled={checkPass !== registerPass}
                  >
                    Create
                  </button>
                </form>
                <p>
                  Alread have an account?{" "}
                  <a
                    href="#"
                    onClick={() => {
                      clearInputs();
                      setPageState("login");
                    }}
                  >
                    <strong>Login</strong>
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
        <div
          className={clsx(
            "absolute",
            "flex flex-row",
            "w-auto h-auto",
            "top-10 left-10",
            "gap-5"
          )}
        >
          {bgImage.map((bgI, index) => (
            <div
              className={clsx(
                "w-[3.5rem] h-[3.5rem]",
                "bg-center bg-cover bg-no-repeat",
                "rounded-[.8rem]",
                "border-solid border-[.1rem]",
                "shadow-[0px_0px_5px_black]",
                "cursor-pointer",
                num === index ? "border-white" : "border-none"
              )}
              style={{ backgroundImage: `url(bgImage/${bgI})` }}
              onClick={() => handleBgChange(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
