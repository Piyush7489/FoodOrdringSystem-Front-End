import { FssaiRegistrationRequest } from "./fssai-license-request";
import { GstRegistrationRequest } from "./gst-licence-request";
import { RestAddressRequest } from "./rest-address-request";

export class RestaurantSaveRequest {
    restId: string='';
    restName: string='';
    restCloseTime: string='';
    restOpenTime: string='';
    restDescription: string='';
    imageName!: File;
    addressrequest: RestAddressRequest =new RestAddressRequest // Use the Address class/interface
    fsseiLicenseRequest: FssaiRegistrationRequest=new FssaiRegistrationRequest;
    gstRegistrationRequest: GstRegistrationRequest=new GstRegistrationRequest;
    gstlicensePhoto: any;
    fssaiLicensePhoto: any;
    restCategory: string[]=[];

}
