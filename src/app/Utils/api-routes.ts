export class ApiRoutes {

 // BASE URL OF LOCAL SERVER
 private static BASE_URL = 'http://localhost:9090/api/v1';
// URL FOR GET IMAGE FROM BACK-END
public static IMAGE_URL= 'https://res.cloudinary.com/dxd4dtpvi/image/upload/v1706944331/';


// AUTH URLS
public static GENERATE_OTP = this.BASE_URL+'/emailAPI/sentEmail';
public static ADD_USER = this.BASE_URL+'/auth/signup';
public static SEND_EMAIL = this.BASE_URL+'/emailAPI/sentEmail';
public static CHECK_OTP = this.BASE_URL+'/otp/checkOTP';

 public static GENERATE_TOKEN =this.BASE_URL+'/auth/login'
 public static GET_CURRENT_USER = this.BASE_URL+'/auth/current-user'
  
 


 //Admin Service
 public static GET_ALL_RESTAURANT= this.BASE_URL+'/admin/all';
 public static ADD_CATEGORY=this.BASE_URL+'/globalCategory/save';
 public static SIGNUP =this.BASE_URL+'/auth/signup'
}
