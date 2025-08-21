import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract parameters
    const title = searchParams.get('title') || 'Aurora N&N Business Solutions Inc.'
    const description = searchParams.get('description') || 'Professional taxation services and modern web design for small businesses across Canada.'
    const service = searchParams.get('service') || 'taxation' // 'taxation' or 'web-design'
    
    // Define colors based on service
    const colors = service === 'web-design' 
      ? {
          primary: '#FF5CA8',
          secondary: '#B19CFF',
          accent: '#FF5CA8'
        }
      : {
          primary: '#3BF0E5',
          secondary: '#A6FF9A', 
          accent: '#3BF0E5'
        }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, #0B1020 0%, #070A12 100%)`,
            fontFamily: '"Inter", system-ui, sans-serif',
            position: 'relative',
          }}
        >
          {/* Background Aurora Effect */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.secondary}20 50%, transparent 100%)`,
              opacity: 0.3,
            }}
          />
          
          {/* Aurora Ribbons */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '-10%',
              right: '-10%',
              height: '60px',
              background: `linear-gradient(90deg, transparent 0%, ${colors.primary}40 30%, ${colors.secondary}40 70%, transparent 100%)`,
              borderRadius: '30px',
              transform: 'rotate(-15deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '60%',
              left: '-10%',
              right: '-10%',
              height: '40px',
              background: `linear-gradient(90deg, transparent 0%, ${colors.secondary}30 40%, ${colors.primary}30 60%, transparent 100%)`,
              borderRadius: '20px',
              transform: 'rotate(10deg)',
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              maxWidth: '1000px',
              padding: '0 80px',
              zIndex: 10,
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '40px',
                letterSpacing: '-0.02em',
              }}
            >
              Aurora N&N
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: title.length > 50 ? '56px' : '64px',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '24px',
                textAlign: 'center',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.4,
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              {description}
            </p>

            {/* Service Badge */}
            <div
              style={{
                marginTop: '40px',
                padding: '12px 32px',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                borderRadius: '50px',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
                textTransform: 'capitalize',
              }}
            >
              {service === 'web-design' ? 'Web Design' : 'Taxation Services'}
            </div>
          </div>

          {/* Bottom Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await fetch(
              new URL('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap')
            ).then((res) => res.arrayBuffer()),
            style: 'normal',
            weight: 400,
          },
        ],
      }
    )
  } catch (e: unknown) {
    console.log(`Failed to generate the image`, e)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
