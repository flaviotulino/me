import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    isArticlePage: /\/articles/.test(ownProps.location.pathname)
});

export default withRouter(connect(mapStateToProps)(NavBar));
