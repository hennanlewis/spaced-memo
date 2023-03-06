"use client"
import Main from "@/components/Main"
import { ChangeEvent, FormEvent, useState } from "react"

import { deckDefaultValues } from "utils/defaultValues"
import { generateSimpleID } from "utils/generateSimpleID"

import styles from "./page.module.css"

export default function AddDeck() {
	const [deck, setDeck] = useState(deckDefaultValues)

	const handleName = (event: ChangeEvent<HTMLInputElement>) => {
		setDeck((values) => ({ ...values, name: event.target.value }))
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		if (deck.name == "") return
		setDeck((values) => ({
			...values,
			simpleID: generateSimpleID(4),
			createdAt: new Date(),
		}))
	}

	return (
		<section className={styles.mainOptions}>
			<div className={styles.topInfo}>
				<h1>Baralhos</h1>
			</div>

			<form className={styles.form} onSubmit={handleSubmit}>
				<label className={styles.labelSet}>
					<span className={styles.labelText}>Nome: </span>
					<input
						type="text"
						name="name"
						className={styles.input}
						onChange={handleName}
						value={deck.name}
					/>
				</label>
				<button type="submit">Criar baralho</button>
			</form>
		</section>
	)
}
