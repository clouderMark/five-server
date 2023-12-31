import UserModel from '../models/User.js';

export const regions = {
  1: {
    surnameLength: UserModel.americanSurnameLength,
    maleNameLength: UserModel.americanMaleNameLength,
    femaleNameLength: UserModel.americanFemaleNameLength,
    cityLength: UserModel.americanCityLength,
    streetLength: UserModel.americanStreetLength,
    maleName: UserModel.getAmericanMaleName,
    femaleName: UserModel.getAmericanFemaleName,
    surname: UserModel.getAmericanSurname,
    cityName: UserModel.getAmericanCityName,
    sreetName: UserModel.getAmericanStreetName,
  },
  2: {
    surnameLength: UserModel.surnameLength,
    maleNameLength: UserModel.maleNameLength,
    femaleNameLength: UserModel.femaleNameLength,
    cityLength: UserModel.cityLength,
    streetLength: UserModel.streetLength,
    maleName: UserModel.getMaleName,
    femaleName: UserModel.getFemaleName,
    surname: UserModel.getSurname,
    cityName: UserModel.getCityName,
    sreetName: UserModel.getSreetName,
  },
  3: {
    surnameLength: UserModel.germanSurnameLength,
    maleNameLength: UserModel.germanMaleNameLength,
    femaleNameLength: UserModel.germanFemaleNameLength,
    cityLength: UserModel.germanCityLength,
    streetLength: UserModel.germanStreetLength,
    maleName: UserModel.getGermanMaleName,
    femaleName: UserModel.getAmericanFemaleName,
    surname: UserModel.getGermanSurname,
    cityName: UserModel.getGermanCityName,
    sreetName: UserModel.getGermanStreetName,
  },
};