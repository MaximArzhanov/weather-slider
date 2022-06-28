import React from 'react';
import { connect } from 'react-redux';
import WeatherPage from './WeatherPage';

const mapStateToProps = (state) => {
  return {
    cardWeatherList: state.weatherPage.weatherCards,
    currentUser: state.currentUser.currentUser,
    isPopupOpen: state.popup.isPopupOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const WeatherPageContainer = ({ ...props }) => {
  return (
    <WeatherPage {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPageContainer);
