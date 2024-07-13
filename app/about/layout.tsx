import './about.css';

interface LayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
          <div />
          {children}
          <div />
        </main>
      </body>
    </html>
  )
}  