import { create } from "zustand";

interface IStore {
	counter: number;
	incrementCounter: () => void;
}

export const useAppStore = create<IStore>((set) => ({
	counter: 0,
	incrementCounter: () =>
		set((state) => ({  counter: state.counter + 1 })),
}));
