import React, { PropTypes, Component } from 'react';
import { Section, Tiles, Tile } from 'grommet';

export default class CustomerInfo extends Component {

  render() {
    const { data, actions } = this.props;
    var deviceItems = data.device ? data.device.map((device, index) => {
        return (
          <div key={'device_'+index} onClick={() => actions.toggleDevice(index)}>
            <a>{device.tag == null ? '(No Name)' : device.tag}</a>
            {device.isExpanded ?
              <ul>
                <li key='1'><b>Serial Number:</b> {device.serial_no}</li>
                <li key='2'><b>Created:</b> {device.createdAt}</li>
              </ul> : null}
          </div>

        );
      }) : [];

    return (
      <div>
        <Section primary={true}>
          <Tiles fill={true} flush={false}>
            <Tile align="center">
              <h3>{this.props.data.name}</h3>
              <ul>
                <li key='1'><b>Schema:</b> {this.props.data.schema_name}</li>
                <li key='2'><b>Status:</b> {this.props.data.status}</li>
                <li key='3'><b>Created:</b> {this.props.data.createdAt}</li>
              </ul>
            </Tile>
            <Tile align="start">
              <h3>Devices</h3>
              { deviceItems }
            </Tile>
          </Tiles>
        </Section>
      </div>
    );
  }
}

CustomerInfo.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


