import { useEffect, useRef, useState } from "react";

interface DeferredVideoProps {
  src: string;
  type: string;
  poster: string;
  alt?: string;
  mediaClassName?: string;
  rootMargin?: string;
  delayMs?: number;
  priority?: boolean;
}

export default function DeferredVideo({
  src,
  type,
  poster,
  alt = "",
  mediaClassName,
  rootMargin = "200px",
  delayMs = 300,
  priority = false,
}: DeferredVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return;
    }

    const node = containerRef.current;
    if (!node) {
      return;
    }

    let timerId = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        timerId = window.setTimeout(() => {
          setShouldLoadVideo(true);
        }, delayMs);
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.clearTimeout(timerId);
    };
  }, [delayMs, rootMargin]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {shouldLoadVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload={priority ? "metadata" : "none"}
          poster={poster}
          className={mediaClassName}
        >
          <source src={src} type={type} />
        </video>
      ) : (
        <img
          src={poster}
          alt={alt}
          className={mediaClassName}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      )}
    </div>
  );
}
