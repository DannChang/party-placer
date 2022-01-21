import {
  useProduct,
  MediaFile,
  SelectedVariantImage,
} from '@shopify/hydrogen/client';

// import model from '../models/casino-table.glb';
import './gallery.css';
/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export default function Gallery() {
  const {media, selectedVariant} = useProduct();

  const featuredMedia = selectedVariant.image || media[0].image;
  const featuredMediaSrc = featuredMedia.url.split('?')[0];

  let modelPath = '';
  if (featuredMediaSrc.includes('casino-table')) {
    modelPath = 'casino-table';
  }
  if (featuredMediaSrc.includes('roulette')) {
    modelPath = 'roulette';
  }
  if (featuredMediaSrc.includes('pinball')) {
    modelPath = 'pinball';
  }
  if (featuredMediaSrc.includes('air-hockey')) {
    modelPath = 'air-hockey';
  }
  if (featuredMediaSrc.includes('bball-arcade')) {
    modelPath = 'bball-arcade';
  }
  if (featuredMediaSrc.includes('pacman')) {
    modelPath = 'pacman';
  }
  if (featuredMediaSrc.includes('racing-arcade')) {
    modelPath = 'racing-arcade';
  }
  if (featuredMediaSrc.includes('darts')) {
    modelPath = 'dart-machine';
  }

  const galleryMedia = media.filter((med) => {
    if (
      med.mediaContentType === MODEL_3D_TYPE ||
      med.mediaContentType === VIDEO_TYPE
    ) {
      return true;
    }

    return !med.image.url.includes(featuredMediaSrc);
  });

  if (!media.length) {
    return null;
  }

  return (
    <div
      className="gap-4 flex md:grid md:grid-cols-2 overflow-x-scroll no-scrollbar scroll-snap-x scroll-smooth h-[485px] md:h-auto place-content-start"
      tabIndex="-1"
    >
      <SelectedVariantImage className="w-[80vw] md:w-full h-full md:h-auto object-cover object-center flex-shrink-0 md:flex-shrink-none snap-start md:col-span-2 border border-gray-200 rounded-lg" />
      {/* Adjust CORS config here: https://cloud.google.com/storage/docs/configuring-cors#gsutil */}
      <model-viewer
        alt="casino table"
        src={`https://storage.googleapis.com/partyplacer-models/${modelPath}.glb`}
        ios-src={`https://storage.googleapis.com/partyplacer-models/${modelPath}.usdz`}
        poster={`https://storage.googleapis.com/partyplacer-models/${modelPath}.png`}
        ar
        ar-modes="webxr scene-viewer quick-look"
        shadow-intensity="0.5"
        auto-rotate
        camera-controls
        xr-environment
        className="3d-viewer"
      >
        <button slot="ar-button" className="ar-button">
          View in AR
          {/* <Image
            src="../ar-icon.png"
            alt="ar-icon"
            width="10px"
            height="10px"
          /> */}
        </button>
      </model-viewer>
      {galleryMedia.map((med) => {
        let extraProps = {};

        if (med.mediaContentType === MODEL_3D_TYPE) {
          extraProps = MODEL_3D_PROPS;
        }

        return (
          <MediaFile
            tabIndex="0"
            key={med.id || med.image.id}
            className="w-[80vw] md:w-auto h-full md:h-auto object-cover object-center transition-all snap-start border border-gray-200 flex-shrink-0 rounded-lg"
            media={med}
            options={{
              height: '485',
              crop: 'center',
            }}
            {...extraProps}
          />
        );
      })}
    </div>
  );
}

const MODEL_3D_TYPE = 'MODEL_3D';
const MODEL_3D_PROPS = {
  interactionPromptThreshold: '0',
};
const VIDEO_TYPE = 'VIDEO';
