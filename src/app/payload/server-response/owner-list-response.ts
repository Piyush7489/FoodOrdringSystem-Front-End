export class OwnerResponse {

    userId: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    mob: string = '';
    tempAddress: string = '';
    createAt: string = ''; // Assuming LocalDate is converted to string = '' in the desired format
    isActive: boolean = false;
    profilePhoto: string = '';
}
