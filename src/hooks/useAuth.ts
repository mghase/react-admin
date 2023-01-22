import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { UserInfo } from "../types/userInfo";

const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<string> => {
  const { data } = await axios.post("/api/login", { email, password });
  return data;
};

export function useLogin() {
  const { isLoading, mutateAsync } = useMutation(login);

  return { isLoggingIn: isLoading, login: mutateAsync };
}

const logout = async (): Promise<string> => {
  const { data } = await axios.post("/api/logout");
  return data;
};

export function useLogout() {
  const { isLoading, mutateAsync } = useMutation(logout);

  return { isLoggingOut: isLoading, logout: mutateAsync };
}

const register = async (userInfo: UserInfo): Promise<UserInfo> => {
  const { data } = await axios.post("/api/register", userInfo);
  return data;
};

export function useRegister() {
  const { isLoading, mutateAsync } = useMutation(register);
  return { isRegistering: isLoading, register: mutateAsync };
}

const fetchUserInfo = async (key?: string): Promise<UserInfo> => {
  const { data } = await axios.get("/api/user-info", { params: { key } });
  return data;
};

export function useUserInfo(key?: string) {
  return useQuery(["user-info", key], () => fetchUserInfo(key), {
    enabled: !!key
  });
}
