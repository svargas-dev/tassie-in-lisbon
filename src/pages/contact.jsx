import React, { useState } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import clsx from "clsx";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  success: {
    width: "100%",
    height: "100%",
    position: " absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
  },
  failure: {
    width: `100%`,
    justifyContent: `center`,
    color: `purple`,
    textAlign: `center`,
  },
}));

export default function Contact() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        e.target,
        process.env.GATSBY_USER_ID
      )
      .then(
        (result) => {
          console.log("Success! ", result.status, result.text);
          setName("");
          setEmail("");
          setMessage("");

          setSuccess(true);
        },
        (error) => {
          console.log("Error! ", error.text);
          setFail(true);
          const failMessageTimerId = window.setTimeout(() => {
            window.clearTimeout(failMessageTimerId);
            setFail(false);
          }, 7000);
        }
      );
  };

  return (
    <>
      <SEO title="Contact" recaptcha={true} />
      <Layout>
        <div className={styles.contact}>
          <Typography component="h2" variant="h3" align="center" gutterBottom>
            Contact
          </Typography>
          <form className={styles.form} onSubmit={sendEmail}>
            <input
              name="name"
              type="text"
              placeholder="Your name..."
              value={name}
              className={styles.form__input}
              onChange={handleOnChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your email..."
              value={email}
              className={styles.form__input}
              onChange={handleOnChange}
            />
            <textarea
              name="message"
              type="text"
              rows="7"
              placeholder="Your message..."
              value={message}
              className={styles.form__input}
              onChange={handleOnChange}
            ></textarea>
            <input
              type="submit"
              value="Send"
              className={clsx(
                styles.form__input,
                styles.form__submit,
                "sans-serif"
              )}
            />
            {/* <div
              style={{ margin: `0.25em auto` }}
              className="g-recaptcha"
              data-sitekey={process.env.GATSBY_RECAPTCHA}
            ></div> */}
          </form>

          {/* Success / fail messages */}
          <div
            className={classes.success}
            style={{ display: success ? `flex` : `none` }}
          >
            Thanks for your message! I'll be in touch soon.
          </div>
          <div
            className={classes.failure}
            style={{
              display: fail ? `flex` : `none`,
            }}
          >
            Uh oh! Something went wrong. Please try again.
          </div>
        </div>
      </Layout>
    </>
  );
}
