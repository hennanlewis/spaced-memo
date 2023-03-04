import { BsGear, BsGearFill } from "react-icons/bs"
import {
	HiHome,
	HiOutlineHome,
	HiDocumentDuplicate,
	HiOutlineDocumentDuplicate,
} from "react-icons/hi"
import {
	MdSdCardAlert,
	MdOutlineSdCardAlert,
	MdTypeSpecimen,
	MdOutlineTypeSpecimen,
} from "react-icons/md"

export const IconsPath: IconsPath[] = [
	{
		path: "/",
		text: "Início",
		icon: <HiHome />,
		outlineIcon: <HiOutlineHome />,
	},
	{
		path: "/decks",
		text: "Baralhos",
		icon: <HiDocumentDuplicate />,
		outlineIcon: <HiOutlineDocumentDuplicate />,
	},
	{
		path: "/types",
		text: "Tipos",
		icon: <MdTypeSpecimen />,
		outlineIcon: <MdOutlineTypeSpecimen />,
	},
	{
		path: "/cards",
		text: "Cartões",
		icon: <MdSdCardAlert />,
		outlineIcon: <MdOutlineSdCardAlert />,
	},
	{
		path: "/settings",
		text: "Configurações",
		icon: <BsGearFill />,
		outlineIcon: <BsGear />,
	},
]
