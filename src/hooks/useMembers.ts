import axios from "axios";
import { useQuery } from "react-query";
import { Member } from "../types/member";

const fetchMembers = async (): Promise<Member[]> => {
  const { data } = await axios.get("/api/members");
  return data;
};

export function useMembers() {
  return useQuery("members", () => fetchMembers());
}
