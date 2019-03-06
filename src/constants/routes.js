import SignInPage from '../pages/SignInPage';
import FormsPage from '../pages/FormsPage';
import NewFormPage from '../pages/NewFormPage';
import ViewFormPage from '../pages/ViewFormPage';

export const SIGN_IN = '/signin';
export const HOME = '/';
export const FORMS = '/forms';
export const NEW_FORM = '/newform';
export const VIEW_FORM = '/viewform/:formId';

export const routes = [
  {
    path: SIGN_IN,
    component: SignInPage,
  },
  {
    path: FORMS,
    component: FormsPage
  },
  {
    path: NEW_FORM,
    component: NewFormPage
  },
  {
    path: VIEW_FORM,
    component: ViewFormPage
  },
];