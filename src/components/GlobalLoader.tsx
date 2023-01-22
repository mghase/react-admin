import { useIsFetching } from "react-query";

export default function GlobalLoader() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null;
}
