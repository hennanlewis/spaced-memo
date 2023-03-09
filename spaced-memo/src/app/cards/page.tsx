"use client"
import { ChangeEvent, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { noteDefaultValues } from "utils/defaultValues"
import { generateSimpleID } from "utils/generateSimpleID"

import styles from "./page.module.css"

const decksNames = [
	{ simpleID: "asdf", name: "Padrão" },
	{ simpleID: "isne", name: "Opção 2" },
]

const noteType = [
	{
		simpleID: "oabh",
		name: "Padrão",
		fields: [{ name: "Verso" }, { name: "Frente" }],
	},
	{
		simpleID: "asdf",
		name: "Opção 01",
		fields: [{ name: "Frente" }, { name: "Verso" }],
	},
]

export default function AddNote() {
	const [selectedOption, setSelectedOption] = useState<NoteType | null>(
		noteType[0]
	)
	const {
		formState: { errors, dirtyFields },
		handleSubmit,
		register,
	} = useForm()

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedNote = noteType.find(
			(note) => note.simpleID === event.target.value
		)

		if (selectedNote) setSelectedOption(selectedNote)
	}

	const handleNoteType = (event: ChangeEvent<HTMLSelectElement>) => {
		handleChange(event)
		setSelectedOption(
			noteType.find((note) => note.simpleID === event.target.value)!
		)
	}

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log({
			...noteDefaultValues,
			...data,
			simpleID: generateSimpleID(5),
		})
	}

	return (
		<section className={styles.mainOptions}>
			<div className={styles.TopTitle}>
				<h1>Cartões</h1>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<label>
					<span>Baralho: </span>
					<select {...register("deckID", { required: true })}>
						{decksNames.map((deck) => (
							<option key={deck.simpleID} value={deck.simpleID}>
								{deck.name}
							</option>
						))}
					</select>
					{errors.deckID && <span>Campo obrigatório</span>}
				</label>

				<label>
					<span>Tipo de nota: </span>
					<select
						{...register("noteTypeID", { required: true })}
						onChange={handleNoteType}>
						{noteType.map((noteTypeID) => (
							<option
								key={noteTypeID.simpleID}
								value={noteTypeID.simpleID}>
								{noteTypeID.name}
							</option>
						))}
					</select>
					{errors.noteTypeID && <span>Campo obrigatório</span>}
				</label>

				{selectedOption?.fields?.map((fieldName, index) => (
					<label key={index}>
						<span>{fieldName.name}</span>
						<input
							{...register(`fields[${index}]`, {
								required: true,
							})}
						/>
						{errors.fields && errors.fields[index] && (
							<span>Campo obrigatório</span>
						)}
					</label>
				))}
				<button type="submit">Adicionar nota</button>
			</form>
		</section>
	)
}
