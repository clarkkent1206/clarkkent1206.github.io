import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about-us');
  this.route('sign-in');
  this.route('home', function() {
    this.route('about-us');
    this.route('dashboard', {path: '/dashboard/:user_id'});
  });
  this.route('sign-up');
});

export default Router;
