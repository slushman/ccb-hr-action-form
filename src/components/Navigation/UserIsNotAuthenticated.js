import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import * as ROUTES from '../../constants/routes';
import Loader from '../Loading/Loading';

const locationHelper = locationHelperBuilder( {} );

const userIsNotAuthenticated = connectedRouterRedirect( {
  allowRedirectBack: false,
  AuthenticatingComponent: Loader,
  authenticatedSelector: state => true === state.firebase.auth.isEmpty,
  authenticatingSelector: state => !state.firebase.auth.isLoaded,
  redirectPath: ( state, ownProps ) => locationHelper.getRedirectQueryParam( ownProps ) || ROUTES.FORMS,
  wrapperDisplayName: 'UserIsNotAuthenticated',
} );

export default userIsNotAuthenticated;
