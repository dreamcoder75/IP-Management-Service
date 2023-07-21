
type Props = {
  images: File[];
};

const ImagePreview = ({ images }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 my-2">
        {images.map((image) => {
          const src = URL.createObjectURL(image);
          return (
            <div className="relative aspect-video col-span-4" key={image.name}>
              <img src={src} alt={image.name} className="object-cover"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePreview;