import React from 'react';
import { connect } from 'react-redux';
import Slider from './Slider';
import { updateActiveIndexActionCreator } from '../../store/actionCreators/actionCreators';
import deleteCityWeatherThunkCreator from '../../store/thunkMiddlwares/deleteCityWeatherThunkCreator';
import setWeatherHistoryThunkCreator from '../../store/thunkMiddlwares/setWeatherHistoryThunkCreator';

const mapStateToProps = (state) => {
  return {
    activeIndex: state.slider.activeIndex,
    currentUser: state.currentUser.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateIndex: (newIndex, children) => {
      if (newIndex < 0) {
        newIndex = React.Children.count(children) - 1;
      } else if (newIndex >= React.Children.count(children)) {
        newIndex = 0;
      }
      dispatch(updateActiveIndexActionCreator(newIndex));
    },
    deleteSlide: (cityName, currentUser, activeIndex) => {
      dispatch(deleteCityWeatherThunkCreator(cityName, currentUser, activeIndex));
    },
    showWeatherHistory: (cityName) => {
      dispatch(setWeatherHistoryThunkCreator(cityName));
    }
  }
}

const SliderContainer = ({ ...props }) => {

  return (
    <Slider {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);
