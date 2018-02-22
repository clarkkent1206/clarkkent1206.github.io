import EmberObject from '@ember/object';
import AuthenticateMixin from 'draft-51/mixins/authenticate';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticate');

// Replace this with your real tests.
test('it works', function(assert) {
  let AuthenticateObject = EmberObject.extend(AuthenticateMixin);
  let subject = AuthenticateObject.create();
  assert.ok(subject);
});
