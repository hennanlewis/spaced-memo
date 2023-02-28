export const deckDefaultValues: Deck = {
	simpleID: "",
	name: "",
	startEaseRate: 2.5,
	intervalModifierRate: 1,
	hardIntervalRate: 1.2,
	easyBonusRate: 1.3,
	newCardsLimit: 20,
	reviewCardsLimit: 20,
	orderType: "added date",
	createdAt: new Date(),
}


export const noteDefaultValues : Note = {
	simpleID: "",
	noteTypeID: "",
	deckID: "",
	fields: [],
	easeValue: 2.5,
	createdAt: new Date()
}