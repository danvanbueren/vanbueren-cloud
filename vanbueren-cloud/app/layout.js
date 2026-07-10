import packageJson from '../package.json'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import EmotionRegistry from './EmotionRegistry'
import Providers from './providers'

const PROJECT_NAME = packageJson.name
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ')

export const metadata = {
  title: PROJECT_NAME,
  description: `${PROJECT_NAME} - A simple quick-access link tree directing visitors to subdomains and external services hosted under the vanbueren.cloud domain.`,
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
    title: PROJECT_NAME,
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

