import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

const mapStateToProps = (state, ownProps) => ({
  isArticlePage: /\/articles/.test(ownProps.location.pathname),
});

export default withRouter(connect(mapStateToProps)(NavBar));
