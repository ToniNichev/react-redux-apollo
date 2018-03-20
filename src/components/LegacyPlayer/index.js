import React from 'react';
import PropTypes from 'prop-types';
import VideoLinks from './VideoLinks';
import proBug from '../../assets/images/probug.svg';

const styles = require('./styles.scss');

/**
 * @constructor
 * @param {object} data The response from graphql that contains all the data for
 * the Article Ticker - should include an array of articles and a title.
 */
class LegacyPlayer extends React.Component {
  /**
   * @type {object}
   * Sets up type checking for props.
   * @property {object} data The data received as a response from GraphQL.
   */
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  /**
   * Sets State to region chosen from Region dropdown in OnNow module.
   * @param {object} evt
   */
  handleRegionChange = evt => {
    this.setState({
      region: evt.target.options[evt.target.selectedIndex].value,
    });
  };

  render() {
    return (
      <section className={styles.loggedInContainer}>
        <div className={styles.main}>
          <div className={styles.videoContainerStopped}>
            <iframe title='live-player' className={styles.iframeContainer} src="https://www.cnbc.com/plain-live-player" />
          </div>

          <div className={styles.content}>
            <span className={styles.probug}>
              <img src={proBug} alt={'pro'} />
            </span>

            <h2 className={styles.title}>
              CNBC Live Stream
            </h2>            

            <p className={styles.description}>
              <a href="//www.cnbc.com/pro-story/">Pro News & Analysis</a>&nbsp;|&nbsp;
              <a href="//www.cnbc.com/protalks/">Pro Talks</a>&nbsp;|&nbsp;
              <a href="//www.cnbc.com/pro-uncut/">Pro Uncut</a>
            </p>
          </div>
        </div>
        <VideoLinks videos={this.props.data} />
      </section>
    );
  }
}

export default LegacyPlayer;
