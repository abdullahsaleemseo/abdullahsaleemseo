import { ImageResponse } from 'next/og';
import { person, hero } from '@/content/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#08090A',
          color: '#F4F2EC',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: '#C6FF4A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 700,
              color: '#08090A',
            }}
          >
            A
          </div>
          <span style={{ fontSize: 26, color: '#A7A8AD', letterSpacing: 2 }}>
            {person.name.toUpperCase()}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 76, fontWeight: 600, lineHeight: 1.05 }}>
          {hero.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: 30, fontSize: 26, color: '#A7A8AD' }}>
          {person.roleLong}
        </div>
      </div>
    ),
    { ...size }
  );
}
