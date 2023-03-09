"use client"
import TopTitle from "../../../components/TopTitle"
import { decks } from "@/utils/decks"
import styles from "./page.module.css"
import Link from "next/link"
import { convertTime } from "@/utils/convertTime"

interface PageProps {
	params: {
		id: string
	}
}

export default function ReviewInfo({ params }: PageProps) {
	const [deck] = decks.filter((item) => item.simpleID == params.id)

	return (
		<section className={styles.mainOptions}>
			<TopTitle>Baralho: {deck.name}</TopTitle>
			<div className={styles.info}>
				<div className={styles.quantityInfo}>
					<div className={styles.dataInfo}>
						<span>Novos</span>
						<span>{deck.new}</span>
					</div>
					<div className={styles.dataInfo}>
						<span>Revisar</span>
						<span>{deck.review}</span>
					</div>
					<div className={styles.dataInfo}>
						<span>Erros</span>
						<span>{deck.wrong}</span>
					</div>
				</div>
				<div className={styles.dataInfo}>
					<span>Tempo estimado</span>
					<span>
						{convertTime(deck.new + deck.wrong + deck.review)}
					</span>
				</div>
				<div className={styles.description}>
					<span>Descrição:</span>
					<span>{deck.description}</span>
				</div>
				<Link href={`/review/${deck.simpleID}`}>Iniciar estudo</Link>
			</div>
		</section>
	)
}
