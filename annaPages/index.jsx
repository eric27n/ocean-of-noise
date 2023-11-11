import React from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <p className="subtitle">Some description or intro to whatever our website does</p>
      <div className="title">Ocean of Noise 🐋</div>
      <div className="input">
        <div className="overlap-group">
          <div className="placeholder">Search song</div>
        </div>
      </div>
      <ButtonPrimary
        className="button-primary-instance"
        text="Spotify Sign In"
        textClassName="design-component-instance-node"
      />
      <div className="logo">🐋</div>
      <ButtonPrimary className="button-primary-2" text="V" textClassName="button-primary-3" />
      <ButtonSecondary className="button-secondary-instance" text="Category" textClassName="button-secondary-2" />
    </div>
  );
};
