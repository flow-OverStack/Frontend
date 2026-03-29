import { useDispatch, useSelector } from "react-redux";
import { resp, RegisterUserProps, LoginUserProps } from "../pages/types";
import { PropsStore } from "../store/store";
import { setError } from "../slices/errorSlice";

const API_URL = "http://localhost:8085/api/v1.0/auth";

export async function registerUser({
  username,
  email,
  password,
  dispatch,
}: RegisterUserProps): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (!data.isSuccess) {
      const err = new Error(`${data.errorMessage}`);
      err.name = `${data.errorCode}`;
      throw err;
    }
  } catch (error) {
    if (error instanceof Error) {
      switch (error.message) {
        case "User alredy exists":
          dispatch(setError("Такой пользователь уже существует"));
          break;
      }
    }
  }
}

export async function loginUser({
  email,
  password,
  dispatch,
}: LoginUserProps): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/login-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data: resp = await response.json();
    if (!data.isSuccess) {
      const err = new Error(`${data.errorMessage}`);
      err.name = `${data.errorCode}`;
      throw err;
    } else {
      getUser();
    }
  } catch (error) {
    if (error instanceof Error) {
      switch (error.message) {
        case "User not found":
          dispatch(setError("Пользователь не найден"));
          break;
        case "Password is wrong":
          dispatch(setError("Неверный пароль"));
          break;
      }
    } else {
      alert("Проблема с сервером");
    }
  }
}

export async function getUser() {
  const response = fetch("http://localhost:8085/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: "query { user (id: 30) {username, email}}",
    }),
  });

  console.log((await response).json());
}
