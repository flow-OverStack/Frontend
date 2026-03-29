import { AppDispatch } from "../store/store";

type RegisterUserProps = {
  username: string | null;
  email: string;
  password: string;
  dispatch: AppDispatch;
};

type LoginUserProps = {
  email: string;
  password: string;
  dispatch: AppDispatch;
};

interface resp {
  isSuccess: true;
  data: {
    accessToken: string;
    refreshToken: string;
    accessExpires: string;
    refreshExpires: string;
  };
  errorMessage: null;
  errorCode: null;
}

export { RegisterUserProps, LoginUserProps, resp };
