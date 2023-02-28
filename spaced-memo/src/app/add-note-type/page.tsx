"use client"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form/dist/types"

import styles from "./note-type.module.css"

export default function AddNote() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Note>()
	const onSubmit: SubmitHandler<Note> = (data) => console.log(data)

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<label>
				<span>Baralho: </span>
				<input type="text" {...register("deckID")} />
			</label>
			<label>
				<span>Tipo de nota: </span>
				<input type="text" {...register("noteTypeID")} />
			</label>
			<button type="submit">Adicionar nota</button>
		</form>
	)
}