// src/pages/BandPage.jsx
import { useParams } from "react-router-dom";
import roster from "../data/roster";

export default function BandPage() {
  const { bandSlug } = useParams();
  const band = roster.find(b => b.slug === bandSlug);

  if (!band) {
    return (
      <div className="text-center text-black p-20 text-2xl">
        Band not found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[600px] py-12 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold uppercase">{band.name}</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-3 text-xl text-primary">
            {band.socials?.instagram && (
              <a href={band.socials.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" />
              </a>
            )}
            {band.socials?.facebook && (
              <a href={band.socials.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook" />
              </a>
            )}
            {band.socials?.spotify && (
              <a href={band.socials.spotify} target="_blank" rel="noreferrer">
                <i className="fab fa-spotify" />
              </a>
            )}
            {band.socials?.bandcamp && (
              <a href={band.socials.bandcamp} target="_blank" rel="noreferrer">
                <i className="fab fa-bandcamp" />
              </a>
            )}
          </div>

        </div>
      </div>

      {/* Image + Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <img
          src={band.image}
          alt={band.name}
          className="w-full h-[320px] object-cover rounded"
        />
        {band.video && (
          <iframe
            src={band.video}
            title="Video"
            allowFullScreen
            className="w-full h-[320px] rounded"
          />
        )}
      </div>

      {/* Bio */}
      {band.bio && (
        <div className="text-sm leading-relaxed text-gray-800 mt-6">
          {band.bio}
        </div>
      )}
    </div>
  );
}
