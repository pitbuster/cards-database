import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		es: "Donphan",
		it: "Donphan",
		pt: "Donphan",
		de: "Donphan"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sturdy",
				fr: "Fermeté",
				es: "Robustez",
				it: "Vigore",
				pt: "Robustez",
				de: "Robustheit"
			},
			effect: {
				en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d’une attaque, ce Pokémon n’est pas mis K.O. mais il ne lui reste que 10 PV.",
				es: "Si este Pokémon tiene todos sus PV y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PV restantes pasan a ser 10.",
				it: "Se questo Pokémon ha tutti i PV e sta per essere messo K.O. dal danno di un attacco, non viene messo K.O. e i suoi PV rimanenti diventano 10.",
				pt: "Se este Pokémon possuir PS cheio e estiver prestes a ser Nocauteado por danos causados por um ataque, jogue uma moeda. Se sair cara, ele não será Nocauteado e seu PS restante se tornará 10.",
				de: "Wenn dieses Pokémon volle KP hat und durch Schaden eines Angriffs kampfunfähig würde, wird dieses Pokémon nicht kampfunfähig, sondern behält 10 KP."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Spin",
				fr: "Tournis Roulis",
				es: "Giro Ondulante",
				it: "Ruzzolata",
				pt: "Giro Rolante",
				de: "Drehwalze"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Rolling Spin attack does 70 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Tournis Roulis de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Giro Ondulante de este Pokémon hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l’attacco Ruzzolata di questo Pokémon infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque Giro Rolante deste Pokémon causará 70 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Drehwalze dieses Pokémon 70 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
