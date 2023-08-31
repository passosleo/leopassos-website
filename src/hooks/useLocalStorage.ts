export function useLocalStorage() {
  function storeValue(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new Error(error as string);
    }
  }

  function getStoredValue(key: string, defaultValue: any = null) {
    try {
      const item = localStorage.getItem(key);
      if (!item) return defaultValue;
      return JSON.parse(item);
    } catch (error) {
      return null;
    }
  }

  function clearStorage() {
    try {
      localStorage.clear();
    } catch (error) {
      throw new Error(error as string);
    }
  }
  return { storeValue, getStoredValue, clearStorage };
}
