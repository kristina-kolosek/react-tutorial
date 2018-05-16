import React, { Component } from 'react';

// Check this out: https://kolosek.com/react-jsx-conditions/

class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      flight: {
        destination: "Tokyo",
        departureTime: "20:30",
        arrivalTime: "22:30",
        cancelled: true,
      },
    };
  }

  renderStatus = () => {
    const { flight } = this.state;

    let status;
    if (flight.cancelled) {
      status = 'Cancelled';
    } else if (flight.arrived) {
      status = 'Arrived';
    } else {
      status = 'Regular';
    }
    return status;
  }

  alreadyCancelled = () => {
    alert("Vec cancellovan");
  }

  alreadyArrived = () => {
    alert("Ne mozes otkazati gotov let");
  }

  cancel = () => {
    this.setState((prevState) => {
      const flight = prevState.flight;
      flight.cancelled = true;
      return {
        flight: flight,
      }
    });

    // BAD WAY!!!!
    // const flight = clone(this.state.flight);
    // flight.cancelled = true;
    // this.setState({
    //   flight: flight,
    // });
  }

  handleClick = () => {
    const { flight } = this.state;
    if(flight.cancelled) {
      return this.alreadyCancelled();
    } else if (flight.arrived) {
        return this.alreadyArrived();
    } else {
        return this.cancel();

    }
  }

  render() {
    const { flight } = this.state;
     return (
         <div>
             <p>
                 Destination: { flight.destination }
             </p>
             <p>
                 Departure time: { flight.departureTime }
             </p>
             <p>
                 Arrival time: { flight.arrivalTime }
             </p>
             <p>
                 Flight status: { this.renderStatus() }
             </p>

             <button onClick={this.handleClick}>
               Cancel
             </button>
         </div>
     )
  }
}

export default ConditionalRendering;
