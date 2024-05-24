export enum CompanyTypes {
  Kakao = 1,
  Netflix = 2,
  Woowahan = 3,
}

export const CompanyTypesLabel: { [key in CompanyTypes]: string } = {
  [CompanyTypes.Kakao]: "Kakao",
  [CompanyTypes.Netflix]: "Netflix",
  [CompanyTypes.Woowahan]: "우아한형제들",
};
