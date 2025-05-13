import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ferraz Contabilidade | Soluções Contábeis Inteligentes para o Sucesso do Seu Negócio',
  description: 'A Ferraz Contabilidade oferece serviços contábeis completos para empresas e profissionais autônomos. Especialistas em abertura de empresas, gestão fiscal, folha de pagamento, consultoria tributária e muito mais. Atendimento personalizado e foco em resultados.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
