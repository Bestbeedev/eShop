import { create } from "zustand";
type UserState = {
  user: userData | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (
    user: { username: string; email: string; role: "user" | "admin"},
    token: string
  ) => void;
  logout: () => void;
  setLoading: (state: boolean) => void;
};

type userData = {
  username: string;
  email: string;
  role: "user" | "admin";
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  token: null,
  isAuthenticated: false,
  login: (user, token) => {
    localStorage.setItem("token", token);
    set({ user, token, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, isAuthenticated: false });
  },
  setLoading: (state) => set({ loading: state }),
}));
