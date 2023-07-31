import { toast } from 'react-hot-toast';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('Cabin Successfully Deleted');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
};

export default useDeleteCabin;
