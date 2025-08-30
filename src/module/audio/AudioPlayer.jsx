import { useParams, useSearchParams } from "react-router";

export default function AudioPlayer() {
  const { id } = useParams();
  const [queryParams] = useSearchParams();
  return (
    <div>
      <h1>Player</h1>
      <p>{queryParams.get("media")}</p>
      <div>
        <audio controls autoPlay={true} src={`/api/v1/asset/${id}`}></audio>
      </div>
    </div>
  );
}
