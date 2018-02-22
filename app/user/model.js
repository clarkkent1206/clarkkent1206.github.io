import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  lastName: DS.attr('string'),
  aadhaarNumber: DS.attr('number'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  pincode: DS.attr('number'),
  mobile: DS.attr('number'),
  driverLicenseNumber: DS.attr('string'),
  created: DS.attr('string', {
    defaultValue() {
      return new Date();
    }
  }),
  penalty: DS.attr('number', {
    defaultValue() {
      return 0;
    }
  }),
  balance: DS.attr('number', {
    defaultValue() {
      return 500;
    }
  })
});
