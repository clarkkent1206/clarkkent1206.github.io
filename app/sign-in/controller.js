import Controller from '@ember/controller';

export default Controller.extend({
  authenticated: false,

  actions: {
    checkLogin(){
      var aadhaarNumber= this.get('aadhaarNumber');
      // var driverLicenseNumber= this.get('password');

      this.get('model').findBy("aadhaarNumber", "aadhaarNumber").then(function(user) {
        alert(user);
      });
    }
  }
});
