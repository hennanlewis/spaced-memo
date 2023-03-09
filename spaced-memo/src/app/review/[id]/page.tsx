"use client"

import styles from "./page.module.css"

export default function Review() {
	return (
		<section className={styles.mainOptions}>
			<div className={styles.answers}>
				<span>texto Frente</span>
				<span>texto Verso</span>
			</div>
			<div className={styles.options}>
				<button className={styles.again}>Outra vez</button>
				<button className={styles.hard}>Difícil</button>
				<button className={styles.good}>Bom</button>
				<button className={styles.easy}>Fácil</button>
			</div>
		</section>
	)
}
