import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetWalletOperations() {
  const { data: walletOperations, isLoading } = useQuery({
    queryKey: ["wallet-operations"],
    queryFn: getWalletOperations,
  });

  return { walletOperations, isLoading };
}

async function getWalletOperations() {
  try {
    const response = await axiosInstance.post("/user/get_wallet_operations");
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console(error);
    throw error;
  }
}
