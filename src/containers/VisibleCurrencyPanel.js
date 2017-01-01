import { connect } from 'react-redux';
import CurrencyPanel from '../components/CurrencyPanel';

const mapStateToProps = (state) => ({
  isLoaded: state.currency.isLoaded,
  currency: state.currency.data
});

const VisibleCurrencyPanel = connect(
  mapStateToProps
)(CurrencyPanel);

export default VisibleCurrencyPanel;
