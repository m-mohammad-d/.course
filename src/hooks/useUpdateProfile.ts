import { useMutation } from '@tanstack/react-query';
import { updateProfile, UpdateProfileType } from '../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateProfile() {
  const mutation = useMutation({
    mutationFn: (profileData: UpdateProfileType) => updateProfile(profileData),
    onError: (error: unknown) => {
      console.error("Profile update failed:", error);
    },
    onSuccess: () => {
        toast.success("Profile updated successfully");
    },
  });

  return {
    handleUpdateProfile: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error ? (mutation.error as Error).message : null,
  };
}
