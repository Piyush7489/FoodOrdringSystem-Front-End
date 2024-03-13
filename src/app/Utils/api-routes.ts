export class ApiRoutes {

 // BASE URL OF LOCAL SERVER
 private static BASE_URL = 'http://localhost:9090/api/v1';
// URL FOR GET IMAGE FROM BACK-END
public static IMAGE_URL= 'https://res.cloudinary.com/dsazylekr/image/upload/v1706944331/';


// AUTH URLS
public static GENERATE_OTP = this.BASE_URL+'/emailAPI/sentEmail';
public static ADD_USER = this.BASE_URL+'/auth/signup';
public static SEND_EMAIL = this.BASE_URL+'/emailAPI/sentEmail';
public static CHECK_OTP = this.BASE_URL+'/otp/checkOTP';

 public static GENERATE_TOKEN =this.BASE_URL+'/auth/login'
 public static GET_CURRENT_USER = this.BASE_URL+'/auth/current-user'
  
 

 public static VERIFIED="Verified";
 public static UNVERIFIED="Unverified";
 public static BLOCK="block";
 public static UNBLOCK="Unblock";

 //Admin Service
 public static GET_ALL_RESTAURANT= this.BASE_URL+'/rest/dataOfRest';
 public static ADD_CATEGORY=this.BASE_URL+'/globalCategory/save';
 public static SIGNUP =this.BASE_URL+'/auth/signup';
 public static VIEW_ALL_CATEGORY= this.BASE_URL+'/admin/viewCategory';
 public static CATEGORY = this.BASE_URL+'/admin/all';
 public static GET_CATEGORY_BY_ID=this.BASE_URL+'/globalCategory/';
 public static UPDATE_CATEGORY=this.BASE_URL+'/globalCategory/update';
 public static DELETE_CATEGORY=this.BASE_URL+'/globalCategory/';
 public static UPDATE_STATUS=this.BASE_URL+'/globalCategory/';
 public static UPDATE_STATUS_RESTAURANT=this.BASE_URL+'/rest/'
 public static GET_VERIFIED_RESTAURANT=this.BASE_URL+'/admin/allverified'
 public static GET_DATA_OF_CAT=this.BASE_URL+'/globalCategory/data'
public static GET_ALL_Cat_NAME=this.BASE_URL+'/globalCategory/AllCatName';
public static VERIFICATION_REQUIRED_DATA=this.BASE_URL+'/admin/verificationData/';
public static VERIFIY_OF_RESTAURANT_BY_ID=this.BASE_URL+'/admin/RestaurantApprove/';
public static REJECT_RESTAURANT_BY_ID=this.BASE_URL+'/admin/RestaurantReject/'
public static BLOCK_RESTAURANT_BY_ID=this.BASE_URL+'/admin/RestaurantBlock/'
public static UNBLOCK_RESTAURANT_BY_ID=this.BASE_URL+'/admin/RestaurantUnBlock/'

//OWNER
public static REGISTER_RESTAURANT=this.BASE_URL+'/rest/save';
public static FORGET_PASS_GENERATE_OTP=this.BASE_URL+'/emailAPI/forget-pass';
public static NEW_PASS_FOR_FORGET_PASS=this.BASE_URL+'/auth/new-pass/';
public static CHANGE_PASS=this.BASE_URL+'/auth/changePass'
public static LIST_OF_CUSTOMER=this.BASE_URL+'/admin/customer-list'
public static LIST_OF_OWNER=this.BASE_URL+'/admin/owner-list'
public static  GET_REST_OF_OWNER_BY_OWNER_ID=this.BASE_URL+'/admin/owner-rest/';
public static OWNER_RESTAURANT=this.BASE_URL+'/rest/view-owner-rest'
public static UPDATE_REST_DATA_BY_REST_ID=this.BASE_URL+'/rest/get/';
public static UPDATE_RESTAURANT=this.BASE_URL+'/rest/edit-rest'
public static VIEW_FOOD=this.BASE_URL+'/food/view-food'
public static ADD_FOOD=this.BASE_URL+'/food/save'
public static UPDATE_FOOD=this.BASE_URL+'/food/update-food'
public static REST_NAME_OF_OWNER=this.BASE_URL+'/rest/rest-name-of-owner'
public static REST_CAT_NAME=this.BASE_URL+'/globalCategory/cat-name/'
  
// COMMAN URLS
public static UPDATE_USER = this.BASE_URL+'/auth/update-user/'
}
