import { create } from 'zustand';

const apiUrl = import.meta.env.VITE_API_URL;

export const useFeedbackStore = create((set, get) => ({
  feedbackData: null,
  loading: false,
  error: null,

  // Метод для получения данных
  fetchFeedback: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${apiUrl}/feedback`);
      if (!response.ok) throw new Error('Ошибка сервера');

      const data = await response.json();
      set({ feedbackData: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Можно добавить другие методы, например, сброс данных
  resetFeedback: () => set({ feedbackData: null, error: null }),
}));
