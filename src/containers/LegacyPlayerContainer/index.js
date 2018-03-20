
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import LegacyPlayer from '../../components/LegacyPlayer';
import SurfWrapper from '../Authentication/surfWrapper';

import query from './query';

class LegacyPlayerContainer extends Component {

  static title = "LegacyPlayer";

  fetchBedrockToken = () => {
    // adding this function for future use
    SurfWrapper.fetchBedrockToken();
  }

  render() {
    if (this.props.authentication.user == null) {
      return null;
    }

    const assets = typeof this.props.data.section !== 'undefined' && 
                   typeof this.props.data.section.assets !== 'undefined' && 
                   Array.isArray(this.props.data.section.assets) ? this.props.data.section.assets : [];
    return (
      <div id="{title}">
        <LegacyPlayer authentication={this.props.authentication} data={assets} />
      </div>
    );
  }
}

LegacyPlayerContainer.propTypes = {
  authentication: PropTypes.PropTypes.object,
  data: PropTypes.object.isRequired,
};

LegacyPlayerContainer.defaultProps = {
  authentication: {},
};

function mapStateToProps(state) {
  return {
    authentication: state.authentication
  };
}

export default connect(mapStateToProps, null)(
  graphql(query, {
    options: props => ({
      variables: {
        id: props.id,
      },
    }),
  })(LegacyPlayerContainer),  
)


