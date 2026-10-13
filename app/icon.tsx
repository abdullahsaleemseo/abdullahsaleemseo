import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#C6FF4A',
          borderRadius: '50%',
          fontSize: 34,
          fontWeight: 700,
          fontFamily: 'sans-serif',
          color: '#08090A',
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
