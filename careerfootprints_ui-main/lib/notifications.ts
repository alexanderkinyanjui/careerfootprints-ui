import { toast } from 'sonner';

export const notify = {
  success: (message: string) => {
    toast.success(message);
  },
  error: (message: string) => {
    toast.error(message);
  },
  warning: (message: string) => {
    toast.warning(message);
  },
  info: (message: string) => {
    toast.info(message);
  },
  promise: async (
    promise: Promise<any>,
    {
      loading = 'Loading...',
      success = 'Success!',
      error = 'Something went wrong',
    }: {
      loading?: string;
      success?: string;
      error?: string;
    }
  ) => {
    toast.promise(promise, {
      loading,
      success,
      error,
    });
  },
}; 