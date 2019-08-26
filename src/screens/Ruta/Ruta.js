import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 17.0669,
      lng: -96.7203
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB4z21gW8pKYI-zjubMUEgQ_LrpTkYCOtg'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={17.0998}
            lng={-96.7103}
            text="oaxaca"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;