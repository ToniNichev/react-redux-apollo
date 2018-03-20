/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import MarketMovers from './MarketMovers';
import MarketNews from './MarketNews';
import GDSMarketTable from '../Table/GDSMarketTable';
import TableHeader from '../Table/TableHeader';

const styles = require('./styles.scss');

/**
 * Pure React component function for rendering the Markets Module
 * @type {Function<Object>:React.Component}
 * @constructor
 * @augments {React.Component}
 * @param {number} pollRate the rate of polling in milliseconds.
 * @param {string} sponsoredLogo the sponsor logo.
 */
export const MarketsModule = ({pollRate, news, sponsorLogo, hasHeader}) => (

  <div className={styles.marketTable}>
    <TableHeader title={"Most Active"} link={"most-active"} />
    <GDSMarketTable
      type="most_active"            
      pollRate={pollRate} />
  </div>
  <div className={styles.marketTable}>
    <TableHeader title={"Unusual Volume"} link={"unusual-volume"} />
    <GDSMarketTable
      type="unusual_volume"
      pollRate={pollRate} />
  </div>
)

MarketsModule.defaultProps = {
  sponsorLogo: null,
  hasHeader: false,
}

MarketsModule.propTypes = {
  pollRate: PropTypes.number.isRequired,
  news: PropTypes.array.isRequired,
  sponsorLogo: PropTypes.string,
  hasHeader: PropTypes.bool,
}

export default MarketsModule;
