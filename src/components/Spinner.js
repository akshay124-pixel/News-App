import React, { Component } from "react";
const Spinner = () => {
  return (
    <div className="text-center text-secondary">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
