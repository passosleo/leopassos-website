export function useCustomForm() {
  function handleOnSubmit<T>(
    e: React.FormEvent<HTMLFormElement>,
    callback: (formData: T) => void,
  ) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());

    callback(formData as T);
  }

  return {
    handleOnSubmit,
  };
}
