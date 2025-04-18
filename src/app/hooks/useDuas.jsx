import { useQuery } from "@tanstack/react-query";
import axiosInstence from "../../../lib/axios";

const useDuas = (catId) => {
  console.log(catId, "fron inside useDuas");
  const { data: duas = [] } = useQuery({
    enabled: !!catId,
    queryKey: ["duas", catId],
    queryFn: async () => {
      const res = await axiosInstence.get(`/api/dua/${catId}`);
      return res.data;
    },
  });
  return { duas };
};

export default useDuas;
