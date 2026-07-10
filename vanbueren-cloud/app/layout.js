import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import EmotionRegistry from './EmotionRegistry'
import Providers from './providers'

export const metadata = {
  title: 'vanbueren.cloud - Dashboard',
  description: 'Dashboard',
  icons: {
    icon: [
      { url: '/icon/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon/icon1.png', type: 'image/png' },
    ],
    shortcut: '/icon/favicon.ico',
    apple: '/icon/apple-icon.png',
  },
  manifest: '/icon/manifest.json',
  appleWebApp: {
    title: 'vanbueren.cloud',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EmotionRegistry>
          <Providers>
            {children}
          </Providers>
        </EmotionRegistry>
      </body>
    </html>
  )
}

