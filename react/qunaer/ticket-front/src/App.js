import { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CitySelector from './components/city-selector/CitySelector.jsx';
import './App.css';
import Header from './components/header/Header.jsx';
import Journey from './components/journey/Journey.jsx';
import {
  exchangeFromTo,
  showCitySelector,
  fetchCityData,
  setSelectedCity,
  hideCitySelector
} from './store/actions';


function App(props) {
  const {
    from,
    to,
    cityData,
    isCitySelectorVisible,
    isLoadingCityData,
    dispatch
  }  = props;
  // 性能优化 
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const cbs = useMemo(() => {
    return bindActionCreators(
        {
            exchangeFromTo,
            showCitySelector,
        },
        dispatch
    );
  }, []);

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
        {
            onBack: hideCitySelector,
            fetchCityData,
            onSelect: setSelectedCity,
        },
        dispatch
    );
  }, []);

  return (
    <div>
      <div className="header-wrapper">
          <Header title="火车票" onBack={onBack} />
      </div>
      <form action="./query.html" className="form">
        <Journey from={from} to={to} {...cbs} />
      </form>
      <CitySelector
          show={isCitySelectorVisible}
          cityData={cityData}
          isLoading={isLoadingCityData}
          {...citySelectorCbs}
      />
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
      return { dispatch };
  }
)(App);