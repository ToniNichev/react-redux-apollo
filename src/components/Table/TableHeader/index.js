import React from 'react';
import PropTypes from 'prop-types';

let styles = require('./styles.scss');

/**
 * Pure React Component for displaying a Section Wrapper.
 * Bold text, with a top border and a themeable decorative rectangle (defaults to gold)
 * and optional link.
 * @param {string} title The Title to display. Required.
 * @param {string} link Optional link.
 * @param {string} type Type of styles used: default or buffett
 * @param {string} themeColor Optional string representing a color. Either rgb(a) or hex value.
 */
const TableHeader = ({ title, link, themeColor, type }) => {
  if (type === 'buffett') {
    const buffettStyles = require('./buffettStyles.scss'); // eslint-disable-line global-require

    styles = Object.assign(styles, buffettStyles);
  }

  if (title) {
    return (
      <section className={styles.container} style={{borderColor: themeColor}}>
        {link ?
        (<a href={link} className={styles.link}>
          <h1 className={themeColor ? styles.themeTitle : styles.title}>{title}</h1>
        </a>) :
        (<h1 className={themeColor ? styles.themeTitle : styles.title}>{title}</h1>)}
      </section>
    );
  }

  return <section className={styles.container} styles={{borderColor: themeColor}} />
}

TableHeader.defaultProps = {
  link: null,
  title: null,
  themeColor: null,
  type: '',
};

TableHeader.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  themeColor: PropTypes.string,
  type: PropTypes.string,
};

export default TableHeader;
