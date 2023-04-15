import { myAxios } from "./helperPatient";

export const PatientSignUp = (patient) => {
  return myAxios
    .post("/api-patients/signUp", patient)
    .then((response) => response.data);
};

// export const loginUser = (loginDetail) => {
//   return myAxios
//     .post("/api/v1/auth/login", loginDetail)
//     .then((response) => response.data);
// };
