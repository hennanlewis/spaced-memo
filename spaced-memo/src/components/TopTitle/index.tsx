import styles from "./toptitle.module.css"

interface TopTitleProps {
	children: React.ReactNode
}

export default function Type({children}: TopTitleProps) {
	return (
		<div className={styles.topTitle}>
			<h1>{children}</h1>
		</div>
	)
}
