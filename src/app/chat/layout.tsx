import type { Metadata } from 'next'
import { LeftBar } from '../../components/left-bar/leftBar'
import styles from './app.module.css'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <main className={styles.contentApp}>
                    <LeftBar />

                    {children}
                </main>
            </body>
        </html>
    )
}