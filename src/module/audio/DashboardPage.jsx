import { list } from "../../api/assetApi.js";
import { Link, useLoaderData } from "react-router";

export default function DashboardPage() {
  const assets = useLoaderData();
  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <Link to="/upload-audio">Upload new file</Link>
      </section>
      <section>
        <h2>Audio list</h2>
        <ul>
          {assets.map((asset) => (
            <li key={asset.fileId}>
              <Link to={`/audio/${asset.fileId}?media=${asset.mimeType}`}>
                {asset.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
DashboardPage.loader = list;
