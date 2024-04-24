import { create } from "zustand";

type State = {
  isLoading: boolean;
};

const globalStore = create<State>(() => ({
  isLoading: false,
}));

export default globalStore;
