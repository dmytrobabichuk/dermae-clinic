import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#171918',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F7F5F0',
          fontFamily: 'serif',
          fontWeight: 600,
          border: '1px solid rgba(142, 155, 140, 0.4)',
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}
