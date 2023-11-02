import { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';

export function useContactForm() {
  const [form, handleSubmit] = useForm('maygveqj');
  const [isSucceeded, setIsSucceeded] = useState(false);

  function goBack() {
    setIsSucceeded(false);
  }

  useEffect(() => {
    if (form.succeeded) {
      setIsSucceeded(true);
    }
  }, [form.succeeded]);

  return { handleSubmit, goBack, isSubmitting: form.submitting, isSucceeded };
}
