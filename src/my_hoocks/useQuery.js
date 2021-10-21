import { useLocation } from "react-router";

export function useQuery() {
    return new URLSearchParams(useLocationcation().search)
  }