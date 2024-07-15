import { axiosInstance } from "@/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { GET_AUCTION_LIVE } from "../../endpoints";
import { LiveAuctionResponse } from "./types";

interface AuctionsParams {
  page: number;
  pageSize: number;
  status: string;
  enabled: boolean;
}

async function getLiveAuctions(
  params: AuctionsParams,
): Promise<AxiosResponse<LiveAuctionResponse>> {
  const filterParams = {
    page: params.page + 1,
    limit: params.pageSize,
    status: params.status,
  };

  const response = await axiosInstance.get(GET_AUCTION_LIVE, {
    params: filterParams,
  });

  return response.data;
}

export const useGetLiveAuctions = (params: AuctionsParams) => {
  return useQuery({
    queryKey: ["live-auctions", params],
    queryFn: () => getLiveAuctions(params),
    enabled: Boolean(params.enabled),
  });
};
