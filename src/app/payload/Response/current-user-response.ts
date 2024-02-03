export class CurrentUserResponse {

    userId: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    mob: string = '';
    tempAddress: string = '';
    userRole: string = '';
    joinAt: string = ''; // Assuming LocalDate is converted to string = '' in the desired format
    isActive: boolean = false;
    profilePhoto: string = '';
}
