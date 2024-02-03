export class ApiRoutes {
 // BASE URL OF LOCAL SERVER
 private static BASE_URL = 'http://localhost:9090/api/v1';
// URL FOR GET IMAGE FROM BACK-END
public static IMAGE_URL= 'https://res.cloudinary.com/dxd4dtpvi/image/upload/v1706944331/';



 public static GENERATE_TOKEN =this.BASE_URL+'/auth/login'
 public static GET_CURRENT_USER = this.BASE_URL+'/auth/current-user'
    
}
