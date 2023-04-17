import { myAxios } from "./helperPatient";

export const PSignUp = (Patient) => {
  return myAxios
    .post("/api-patients/signUp", Patient)
    .then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post("/api-patients/login", loginDetail)
    .then((response) => response.data);
};
