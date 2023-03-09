import Link from "next/link"
import { convertTime } from "@/utils/convertTime"
import { decks } from "@/utils/decks"
import styles from "./page.module.css"

export default function Home() {
	const totalCards = decks.reduce((total, item) => {
		return total + item.new + item.review + item.wrong
	}, 0)

	const totalTime = convertTime(totalCards)

	return (
		<section className={styles.mainOptions}>
			<div className={styles.topInfo}>
				<h1>Revisão</h1>

				<div className={styles.infoTotalTime}>
					<span>Cartões totais</span>
					<span>{totalCards}</span>
				</div>

				<div className={styles.infoTotalCards}>
					<span>Tempo estimado</span>
					<span>{totalTime}</span>
				</div>
			</div>
			{decks.map((deck) => (
				<Link
					key={deck.simpleID}
					href={`/review-info/${deck.simpleID}`}
					className={styles.deckDataCard}>
					<div className={styles.totalCards}>
						<span>Total</span>
						<span>{deck.new + deck.review + deck.wrong}</span>
					</div>
					<div>
						<h2>{deck.name}</h2>
						<div className={styles.todayCardsInfo}>
							<div className={styles.todayCards}>
								<span>Novos</span>
								<span>{deck.new}</span>
							</div>

							<div className={styles.todayCards}>
								<span>Outros</span>
								<span>{deck.review + deck.wrong}</span>
							</div>

							<div className={styles.todayCards}>
								<span>Estimativa</span>
								<span>
									{convertTime(
										deck.new + deck.review + deck.wrong
									)}
								</span>
							</div>
						</div>
					</div>
				</Link>
			))}
		</section>
	)
}
