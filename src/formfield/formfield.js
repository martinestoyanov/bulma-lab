import React, { Component } from "react";

export default class Formfield extends Component {
  render(props) {
    return (
      <div>
        <div class="field">
          <label class="label">{this.props.label}</label>
          <div class="control">
            <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    );
  }
}
