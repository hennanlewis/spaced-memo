import NavBar from "../NavBar/NavBar"
import styles from "./main.module.css"

interface MainProps {
	children: React.ReactNode
}

export default function Main({ children }: MainProps) {
	return (
		<div className={styles.orientation}>
			<NavBar />
			<main className={styles.main}>
				<div>{children}</div>
			</main>
		</div>
	)
}
