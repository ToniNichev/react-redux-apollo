import React from 'react';
import PropTypes from 'prop-types';

import PlayButton from '../../PlayButton';
/* import/no-extraneous-dependencies, react/no-array-index-key, react/forbid-prop-types  */
const styles = require('./styles.scss');

/**
 * Pure React component function for displaying video links in a row.
 * @type {Function<Object>:React.Component}
 * @constructor
 * @augments {React.Component}
 * @param {array} videos An array of story objects. This param is required.
 */
const VideoLinks = ({ videos }) => (
  <div className={styles.container}>
    {videos.map((elem, i) => (
      <a href={elem.url} className={styles.link} key={i}>
        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoContent}>
              {elem.type === 'cnbcvideo' && (<PlayButton />)}
              <img src={elem.promoImage.url} alt={elem.linkHeadline} />
              <span className={styles.videoLength}>
                {elem.type === 'cnbcvideo' && (<time>10</time>)}
              </span>
            </div>
          </div>
        </div>
        <p className={styles.description}>{elem.title}</p>
      </a>
    ))}
  </div>
);

VideoLinks.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default VideoLinks;
