import React, { useState, useEffect, } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "../components/Button";
import FormInput from "../components/Input";
import Transition from "../components/Transition";
import Layer from "../components/Layer";
import Footer from "../components/Footer";
import colors from "../constants/colors";
import useFormField from "../hooks/useFormField";
import usePhoneFormat from "../hooks/usePhoneFormat";
import { CV_LINK } from "../constants/contact";


function validateEmail(email) {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

export const Contact = ({
  dispatch,
}) => {
  const [name, setName, nameError, setNameError] = useFormField();
  const [email, setEmail, emailError, setEmailError] = useFormField();
  const [phone, setPhone] = usePhoneFormat();

  const validate = () => {
    let errors = false;
    if (name.length === 0) {
      errors = true;
      setNameError("Field is required");
    }
    if (email.length === 0) {
      errors = true;
      setEmailError("Field is required");
    }
    const emailValidation = validateEmail(email);
    if (email.length > 0 && !emailValidation) {
      errors = true;
      setEmailError("Unknown email format");
    }
    if (errors) return;
    console.log("Contact", name, email, phone);
  }

  const handleCVClick = () => {
    window.open(CV_LINK, "_blank");
  };

  return (
    <Transition transition="fade-slide">
      <Layer isTop dark>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div className="ContactForm">
            <FormInput required
              label="Name, nickname, or fancy title *"
              id="contact-name"
              value={name}
              error={nameError}
              onChange={event => setName(event.target.value)}
            />
            <FormInput required
              label="Best Email to react you at *"
              id="contact-email"
              type="email"
              value={email}
              error={emailError}
              onChange={event => setEmail(event.target.value)}
            />
            <FormInput
              label="I can call people xxx-xxx-xxxx"
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />

            <div style={{
              marginTop: "7vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <Button
                id="contact-submit"
                onClick={validate}
                background={colors.contact}
                color={colors.white}
              >Contact</Button>

              <Button
                id="view-cv"
                onClick={handleCVClick}
              >View CV</Button>
            </div>
          </div>
        </div>
      </Layer>
      <Footer />
    </Transition>
  );
};

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Contact.defaultProps = {
};

export default connect()(Contact);
