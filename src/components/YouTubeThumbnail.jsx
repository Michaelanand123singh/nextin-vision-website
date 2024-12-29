import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const YouTubeThumbnail = ({ videoUrl, alt, className }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  useEffect(() => {
    const extractVideoId = (url) => {
      const patterns = [
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
          return match[1];
        }
      }
      return null;
    };

    const videoId = extractVideoId(videoUrl);

    if (videoId) {
      const thumbnailOptions = [
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      ];

      const loadThumbnail = (urls) => {
        if (urls.length === 0) {
          // If no thumbnails load, use a placeholder
          setThumbnailUrl('/api/placeholder/400/320');
          return;
        }

        const img = new Image();
        img.onload = () => setThumbnailUrl(img.src);
        img.onerror = () => loadThumbnail(urls.slice(1));
        img.src = urls[0];
      };

      loadThumbnail(thumbnailOptions);
    } else {
      // Use placeholder if no valid YouTube URL
      setThumbnailUrl('/api/placeholder/400/320');
    }
  }, [videoUrl]);

  if (!thumbnailUrl) {
    return (
      <div className={`${className} bg-gray-800 animate-pulse relative flex items-center justify-center`}>
        <Play className="w-16 h-16 text-gray-600" />
      </div>
    );
  }

  return (
    <img
      src={thumbnailUrl}
      alt={alt}
      className={`${className} object-cover`}
    />
  );
};

export default YouTubeThumbnail;