import React from "react";

const FormUser = () => {
  return (
    <div class="card__form">
      <span class="card__title__form">Subscribe</span>
      <p class="card__content__form">
        Get fresh web design resources delivered straight to your inbox every
        week.
      </p>
      <div class="card__form">
        <input placeholder="Your Email" type="text" />
        <button class="sign-up"> Sign up</button>
      </div>
    </div>
  );
};

export default FormUser;
