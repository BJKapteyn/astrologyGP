export const x4tt116 = '?code=JtUw3SPDapgS1i4TP0A9ze0CXKgqguB-smzsJ8UC2y-eAzFukFFLww==';
export const x45tt1337 = '?code=ih52hkIj4ZvxC2VwDNkynujLg_MdLo3SD7NYjuOYeDRrAzFukyqlAg%3D%3D';

export function buildIt(str) {
    let url = () => 'https://vibecollective.azurewebsites.net/api/GetItems' + str;
    
    return url;
}

export function buildIt2() {
    let url = 'https://vibecollective.azurewebsites.net/api/InsertCustomerEmail' + x45tt1337;

    return url;
}