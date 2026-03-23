import React from 'react';
import './index.css';

const sanitizeExternalUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return null;
  }

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
};

const Circle = ({ name, image, description, homeUrl, xUrl }) => {
  const handleButtonClick = (url) => {
    const safeUrl = sanitizeExternalUrl(url);
    if (safeUrl) {
      window.open(safeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="card-container">
      <img className="img" src={image} alt={name} loading="lazy" />
      <h4>{name}</h4>
      <p>{description}</p>
      <div className="button">
        {homeUrl && (
          <button
            type="button"
            className="card-link"
            onClick={() => handleButtonClick(homeUrl)}
          >
            ホームページ
          </button>
        )}
        {xUrl && (
          <button
            type="button"
            className="card-link secondary"
            onClick={() => handleButtonClick(xUrl)}
          >
            𝕏(Twitter)
          </button>
        )}
      </div>
    </div>
  );
};

const Group = ({ groups }) => {
  if (groups.length === 0) {
    return <p className="no-result">一致する団体は見つかりませんでした。</p>;
  }

  return (
    <div className="group-container">
      <div className="group">
        {groups.map((group) => (
          <Circle
            key={group.name}
            name={group.name}
            image={group.image}
            description={group.description}
            homeUrl={group.homeUrl}
            xUrl={group.xUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Group;
