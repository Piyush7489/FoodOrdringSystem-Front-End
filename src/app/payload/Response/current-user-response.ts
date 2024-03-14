export class CurrentUserResponse {

    userId: string = '';
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    mob: string = '';
    tempAddress: string = '';
    userRole: string = '';
    createAt: string = ''; // Assuming LocalDate is converted to string = '' in the desired format
    isActive: boolean = false;
    profilePhoto: string = '';
}
