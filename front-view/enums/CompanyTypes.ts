export enum CompanyTypes {
  Kakao = 1,
  Netflix = 2,
  //Woowahan = 3,
  Google_AI = 4,
  Google_Mobile = 5,
  // Google_Web_Cloud = 6,
  Nvidia_ComputerVision = 7,
  Nvidia_Cloud = 8,
  Naver_D2 = 9,
}

export const CompanyTypesLabel: { [key in CompanyTypes]: string } = {
  [CompanyTypes.Kakao]: "Kakao",
  [CompanyTypes.Netflix]: "Netflix",
  //[CompanyTypes.Woowahan]: "우아한형제들",
  [CompanyTypes.Google_AI]: "Google AI",
  [CompanyTypes.Google_Mobile]: "Google Mobile",
  // [CompanyTypes.Google_Web_Cloud]: "Google Web Cloud",
  [CompanyTypes.Nvidia_ComputerVision]: "Nvidia Computer Vision",
  [CompanyTypes.Nvidia_Cloud]: "Nvidia Cloud",
  [CompanyTypes.Naver_D2]: "Naver D2",
};
