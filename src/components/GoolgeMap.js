import React, { Component } from 'react';

export default class GoogleMap extends Component {
	const divStyle = {
	  height: 300px;
	  width: 100%;
	}
	
	getDefaultProps () {
        return {
            initialZoom: 6,
            mapCenterLat: 53.5333,
            mapCenterLng: -113.4073126
        };
    }

    componentDidMount (rootNode) {
        var mapOptions = {
                center: this.mapCenterLatLng(),
                zoom: this.props.initialZoom
            },
            map = new google.maps.Map(this.getDOMNode(), mapOptions);
        var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
        this.setState({map: map});
    }

    mapCenterLatLng () {
        var props = this.props;

        return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
    }

    render () {
        return (
            <div style={divStyle}></div>
            );
    }
  
}
