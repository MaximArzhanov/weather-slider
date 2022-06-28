import React from 'react';
import { connect } from 'react-redux';
import WeatherPage from './WeatherPage';

const mapStateToProps = (state) => {
  return {
    cardWeatherList: state.weatherPage.weatherCards,
    currentUser: state.currentUser.currentUser,
    isPopupOpen: state.popup.isPopupOpen,
    isLoading: state.loading.isLoading,
    isLogined: state.userloginStatus.isUserLogined,
    weatherCards: state.weatherPage.weatherCards
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
