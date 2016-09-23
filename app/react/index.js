import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

import configureStore from 'store';
import DevTools from 'containers/DevTools';
import Counter from 'containers/Counter';
import CounterModifier from 'containers/CounterModifier';
import UserCreator from 'containers/UserCreator';
import UserTable from 'containers/UserTable';
import PostsList from 'components/posts/posts-list';

RWR.run();

integrationsManager
  .register('redux-store', RWRRedux.storeIntegrationWrapper);
integrationsManager
  .register('redux-container', RWRRedux.containerIntegrationWrapper);

RWR.registerComponent('PostsListComponent', PostsList);

RWRRedux.registerStore('Store', configureStore);

RWRRedux.registerContainer('DevTools', DevTools);
RWRRedux.registerContainer('Counter', Counter);
RWRRedux.registerContainer('CounterModifier', CounterModifier);
RWRRedux.registerContainer('UserCreator', UserCreator);
RWRRedux.registerContainer('UserTable', UserTable);
