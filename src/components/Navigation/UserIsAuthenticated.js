import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import * as ROUTES from '../../constants/routes';
import Loader from '../Loading/Loading';

const userIsAuthenticated = connectedRouterRedirect( {
  allowRedirectBack: true,
  AuthenticatingComponent: Loader,
  authenticatedSelector: state => false === state.firebase.auth.isEmpty && null !== state.firebase.auth.uid,
  authenticatingSelector: state => !state.firebase.auth.isLoaded,
  redirectPath: ROUTES.SIGN_IN,
  wrapperDisplayName: 'UserIsAuthenticated',
} );

export default userIsAuthenticated;
