import React, { useState, useEffect } from 'react';

export default ({ src, alt, className, height }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, [src]);
  const content = (
    <>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={className}
        height={height}
        style={{ display: loading ? 'none' : 'inline' }}
      />
    </>
  );

  return content;
};
