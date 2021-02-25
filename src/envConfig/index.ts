import development from './development';
import test from './test';
import production from './production';

const configs = {
  development,
  test,
  production,
};

const env = process.env.NODE_ENV || 'development';
export default () => configs[env];
