import { ImageIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getImageUrl } from '../api/client.js';

export default function DiaryImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [src]);

  if (failed) {
    return (
      <div className={`${className} diary-image-fallback`} role="img" aria-label="圖片無法載入">
        <ImageIcon size={20} />
        <span>圖片無法載入</span>
      </div>
    );
  }

  return <img className={className} src={getImageUrl(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
