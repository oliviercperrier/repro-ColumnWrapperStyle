import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

const storage = {
  saveItem: async (key: string, item: string) => {
    if (isWeb) {
      window.localStorage.setItem(key, item);
    } else {
      await SecureStore.setItemAsync(key, item);
    }
  },

  getItem: async (key: string) => {
    if (isWeb) {
      return window.localStorage.getItem(key);
    }

    const item = await SecureStore.getItemAsync(key);
    return item;
  },

  removeItem: async (key: string) => {
    if (isWeb) {
      window.localStorage.removeItem(key);
    } else {
      await SecureStore.deleteItemAsync(key);
    }
  },
};

export default storage;
