import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  id: Yup.string().required('REQUIRED ID!'),
  password: Yup.string().min(6, 'TOO SHORT!').required('REQUIRED PASSWORD!'),
});

export interface loginInterface {
  id: string;
  password: string;
}
