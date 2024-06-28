import { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../actions";
import { connect } from "react-redux";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Emaily"
        description="Buy 5 emaily credits for 5$"
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
