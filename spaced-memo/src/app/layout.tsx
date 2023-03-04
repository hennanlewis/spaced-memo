import Main from "@/components/Main"
import { Signika } from "next/font/google"

import "./globals.css"

export const metadata = {
	title: "Spaced Memo",
	description: "Aplicação da técnica da memorização espaçada para passar uma memória de curto prazo para a memória de longo prazo ",
}

const signika = Signika({ subsets: ["latin"], variable: "--font-signika" })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body className={signika.variable}>
				<Main>
				{children}
				</Main>
			</body>
		</html>
	)
}
