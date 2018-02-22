import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    addUser() {
      var firstName= this.get('firstName');
      var middleName= this.get('middleName');
      var lastName= this.get('lastName');
      var aadhaarNumber= this.get('aadhaarNumber');
      var address= this.get('address');
      var city= this.get('city');
      var pincode= this.get('pincode');
      var mobile= this.get('mobile');
      var driverLicenseNumber= this.get('driverLicenseNumber');

      //Create New Object
      var newUser = this.store.createRecord('user', {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        aadhaarNumber: aadhaarNumber,
        address:  address,
        city: city,
        pincode: pincode,
        mobile: mobile,
        driverLicenseNumber: driverLicenseNumber
      });

      //Save to firebaseio
      newUser.save();

      this.setProperties({
        firstName: '',
        middleName: '',
        lastName: '',
        aadhaarNumber: '',
        address: '',
        city: '',
        pincode: '',
        mobile: '',
        driverLicenseNumber: '',
      });
    }
  }
});
