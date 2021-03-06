import { sendForm } from "@emailjs/browser";
import { Player } from "@lottiefiles/react-lottie-player";
import { FormEvent, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { RiErrorWarningLine } from "react-icons/ri";

const inputClass =
  "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-queen-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-king-500";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const btnStatusClass =
    status === "pending"
      ? "btn-loading"
      : status === "success"
      ? "btn-success"
      : status === "error"
      ? "btn-error"
      : "";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("pending");

    // Way1: https://www.emailjs.com/docs/examples/reactjs. Can define templates
    sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      "#form",
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    ).then(
      (res) => {
        setStatus("success");
      },
      (err) => {
        setStatus("error");
      }
    );

    // Way2: https://formsubmit.co/ajax-documentation. No registration
    // const formData: any = {};
    // (Array.from(event.currentTarget.elements) as HTMLFormElement[]).forEach((e) => {
    //   if (e.name) {
    //     formData[e.name] = e.value;
    //   }
    // });
    // fetch('https://formsubmit.co/ajax/mukulpal@duck.com', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  }

  return (
    <div className="container mx-auto my-10 max-w-2xl rounded-md p-5">
      <div className="mx-7 flex items-center justify-center gap-2 text-center">
        <h2 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Contact me
        </h2>
        <Player
          autoplay
          loop
          src="/lottie/envelop.json"
          className="w-32"
        ></Player>
      </div>

      <div className="m-7">
        <form id="form" onSubmit={submit}>
          <input
            type="hidden"
            name="_subject"
            value="New submission from mukul website"
          />
          <input type="hidden" name="_cc" value="mukulpal@duck.com" />
          <input type="hidden" name="_captcha" value="true" />

          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
            >
              Full Name
            </label>
            <input type="text" name="name" required className={inputClass} />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
            >
              Email Address
            </label>
            <input type="email" name="email" required className={inputClass} />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Optional"
              className={inputClass}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
            >
              Subject
            </label>
            <input type="text" name="subject" required className={inputClass} />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
            >
              Your Message
            </label>
            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              className={inputClass}
              required
            ></textarea>
          </div>
          <div className="mb-6 flex justify-center">
            <button
              className={`btn-primary ${btnStatusClass}`}
              type="submit"
              disabled={status === "pending"}
            >
              Send Message
              {status === "pending" && (
                <CgSpinner className="animate-spin" size={24} />
              )}
              {status === "success" && <BsCheckCircle size={24} />}
              {status === "error" && <RiErrorWarningLine size={24} />}
            </button>
          </div>
          <div
            className={`min-h-[1.5rem] text-center opacity-0 duration-200 ${
              status === "success" &&
              "text-green-600 opacity-100 dark:text-green-400"
            } ${
              status === "error" && "text-red-600 opacity-100 dark:text-red-400"
            }`}
          >
            {status === "success" && (
              <>
                Your email was sent successfully! I will reply you soon. Thank
                you!
              </>
            )}
            {status === "error" && (
              <>
                Something went wrong. Please send email to{" "}
                <a
                  href="mailto:mukulpal@duck.com"
                  className="text-king-600 dark:text-king-400"
                >
                  mukulpal@duck.com
                </a>{" "}
                manually.
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
