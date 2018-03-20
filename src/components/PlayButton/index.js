import React from 'react';
import PropTypes from 'prop-types';

let styles = require('./styles.scss');

/**
 * Pure React component function for displaying play button
 * @type {Function<Object>:React.Component}
 * @constructor
 * @augments {React.Component}
 * @param {bool} isFeatured Describes whether or not the playButton is
 * on featured media and therefore larger.
 * @param {string} type The type of playButton may be "play", "playlist",
 * @param {number} dataId Data id used for testing.
 * or "lock"
 */

const PlayButton = ({ isFeatured, type }) => {
  if (type.includes('buffett')) {
    const buffettStyles = require('./buffettStyles.scss'); // eslint-disable-line global-require

    styles = Object.assign(styles, buffettStyles);
  }

  const icons = {
    cnbc: 'icon-play-triangle',
    play: 'icon-play-triangle',
    playlist: 'icon-play-triangle',
    lock: 'icon-lock',
    'buffett-video': 'icon-buffett-video',
    'buffett-playlist': 'icon-buffett-playlist',
  };

  let wrapperStyles = styles.container;
  wrapperStyles = type.includes('buffett') ? `${styles.buffett} ${wrapperStyles}` : wrapperStyles;

  if (type === 'playlist') {
    return (
      <div className={wrapperStyles}>
        <div className={isFeatured ? styles.featured : styles.base} data-type={type}>
          <span className={styles.flyout}>{type === 'lock' ? 'log in' : 'watch now'}</span>
          <span className={`${icons[type]} ${styles.icon}`} />
        </div>
        <div className={isFeatured ? styles.featuredPlaylist : styles.playlist} />
      </div>
    );
  }

  return (
    <div className={wrapperStyles}>
      <div className={isFeatured ? styles.featured : styles.base} data-type={type}>
        <span className={styles.flyout}>{type === 'lock' ? 'log in' : 'watch now'}</span>
        <span className={`${icons[type]} ${styles.icon}`} />
      </div>
    </div>
  );
};

PlayButton.defaultProps = {
  isFeatured: false,
  type: 'play',
};

PlayButton.propTypes = {
  isFeatured: PropTypes.bool,
  type: PropTypes.string,
};

export default PlayButton;
