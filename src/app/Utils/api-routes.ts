export class ApiRoutes {
 // BASE URL OF LOCAL SERVER
 private static BASE_URL = 'http://localhost:9090/api/v1';




 public static GENERATE_TOKEN =this.BASE_URL+'/auth/login'
 public static GET_CURRENT_USER = this.BASE_URL+'/auth/current-user'
    
}
