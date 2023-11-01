import MasterDashboardComponent from '@/components/MasterDashboardComponent'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MasterDashboardComponent>
      <Component {...pageProps} />
    </MasterDashboardComponent>
  )
}
