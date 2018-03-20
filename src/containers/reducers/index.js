import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dataByMarketBanner, selectedMarketBanner } from './marketsBanner';
import { selectedMarketModule, dataByMarketMover } from './marketMovers';
import dataByMarketActive from './marketsActive';
import dataByMarketVolume from './marketsVolume';
import VideoInfoReducer from '../components/Video/UniversalVideoPlayer/reducers/reducer-video-information';
import VideoPlayerConfigReducer from '../components/Video/UniversalVideoPlayer/reducers/reducer-video-player-config';
import VIDEO_PLACEHOLDER_CONNECT from '../components/Video/UniversalVideoPlayer/reducers/reducer-position';
import navStatus from './navStatus';
import authentication from './authentication'

module.exports = combineReducers({
  routing: routerReducer,
  navStatus,
  dataByMarketBanner,
  selectedMarketBanner,
  selectedMarketModule,
  dataByMarketMover,
  dataByMarketActive,
  dataByMarketVolume,
  videoInfo: VideoInfoReducer,
  videoPlayerConfig: VideoPlayerConfigReducer,
  videoPlaceholderConnect : VIDEO_PLACEHOLDER_CONNECT,
  authentication
});
