type OrderType = "random" | "added date"

interface Deck {
	simpleID: string
	name: string
	startEaseRate: number
	intervalModifierRate: number
	hardIntervalRate: number
	easyBonusRate: number
	newCardsLimit: number
	reviewCardsLimit: number
	orderType: OrderType
	createdAt: Date
}

interface NoteType {
	simpleID: string
	name: string
	fieldsNames: string[]
}

interface Note {
	simpleID: string
	noteTypeID: string
	deckID: string
	fields: string[]
	easeValue: number
	createdAt: Date
}

type CardStatus = "new" | "review" | "wrong" 

interface Card {
	noteID: string
	name: string
	modifiedAt: Date
	status: CardStatus
}
