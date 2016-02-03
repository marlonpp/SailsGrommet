import React, { Component, PropTypes } from 'react';
import { App, Header, Footer, Title } from 'grommet';
import { fetchCustomer } from '../actions';
import { connect } from 'react-redux';
import  CustomerInfo  from '../components/CustomerInfo';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions';

class CloudMaster extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCustomer(6));
  }

  render() {
    const { customerData, actions } = this.props;
    return (
      <div>
        <App centered={false}>
          <Header direction="row" justify="between"
                  large={true} pad={{horizontal: 'medium'}}>
            <Title>Cloud Master App Test</Title>
          </Header>
          <CustomerInfo data={customerData} actions={actions}/>
          <Footer appCentered={true} direction="column"
                  align="center" pad="small" colorIndex="grey-1">
            <p>Hewlett Packard Enterprise</p>
          </Footer>
        </App>
      </div>
    );
  }
}

CloudMaster.propTypes = {
  //isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  customerData: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    customerData: state.customer.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    actions: bindActionCreators(AppActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CloudMaster);

