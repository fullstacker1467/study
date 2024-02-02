import React from "react";

export const Form = () => {
  return (
    <>
      <h1>Send Us Question</h1>
      <hr />
      <div className="form-container">
        <form>
          <label>
            <span>Your Email:</span>
            <input type="text" />
          </label>
          <label>
            <span>Your Email:</span>
            <textarea></textarea>
          </label>
          <button className="button">Send</button>
        </form>
      </div>
    </>
  );
};
