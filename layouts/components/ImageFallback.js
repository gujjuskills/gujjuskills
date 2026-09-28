import Image from "next/image";

export default function ImageFallback({
  src,
  alt = "",
  width,
  height,
  className = "",
  priority = false,
  loading,
  ...rest
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? undefined : loading || "lazy"}
      {...rest}
    />
  );
}
