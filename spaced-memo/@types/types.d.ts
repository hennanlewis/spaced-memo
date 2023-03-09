type OrderType = "random" | "added date"

interface Deck {
	simpleID: string
	name: string
	description: string
	startEaseRate: number
	intervalModifierRate: number
	hardIntervalRate: number
	easyBonusRate: number
	newCardsLimit: number
	reviewCardsLimit: number
	orderType: OrderType
	createdAt: Date
	modifiedAt?: Date
}

interface NoteType {
	simpleID: string
	name: string
	fields: { name: string }[]
}

interface Note {
	simpleID: string
	noteTypeID: string
	deckID: string
	fields: string[]
	easeValue: number
	createdAt: Date
	modifiedAt?: Date
}

type CardStatus = "new" | "review" | "wrong"

interface Card {
	noteID: string
	name: string
	modifiedAt: Date
	status: CardStatus
}

interface IconsPath {
	path: string
	text: string
	icon: JSX.Element
	outlineIcon: JSX.Element
}

interface DataCard extends Deck {
	new: number
	wrong: number
	review: number
}
