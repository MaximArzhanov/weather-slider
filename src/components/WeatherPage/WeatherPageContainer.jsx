import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WeatherPage from './WeatherPage';

const mapStateToProps = (state) => {
  return {
    cardWeatherList: state.weatherPage.weatherCards,
    currentUser: state.currentUser.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const WeatherPageContainer = ({ ...props }) => {

  useEffect(() => {




    // try {
    //   const cityList = props.cardWeatherList.map((card) => {
    //     return card.location.name;
    //   })
    //   const usersInLocalStorage = JSON.parse(localStorage.getItem('users'));
    //   const users = usersInLocalStorage.map((user) => {
    //     if (user.email === props.currentUser.email) {
    //       user.cities = cityList;
    //       return user;
    //     }
    //   })
    //   localStorage.setItem('users', JSON.stringify(users));

    // } catch (error) {
    //   console.log(error);
    // }
  }, [props.cardWeatherList]);

  return (
    <WeatherPage {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPageContainer);
