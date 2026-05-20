import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonButton } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonButton, RouterLink]
})
export class DashboardPage implements OnInit {
  items: any[] = [
    // {
    //   "id": 80181649,
    //   "name": "\"A Case for K9\"",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Continuous Spell",
    //   "frameType": "spell",
    //   "desc": "When this card is activated: You can add 1 \"K9\" monster from your Deck to your hand. \"K9\" monsters you control gain 900 ATK during any turn in which your opponent has activated a monster effect in the hand or GY. If this card in the Spell & Trap Zone is destroyed by card effect: You can Set 1 \"K9\" Quick-Play Spell from your Deck or GY. You can only use this effect of \"\"A Case for K9\"\" once per turn. You can only activate 1 \"\"A Case for K9\"\" per turn.",
    //   "race": "Continuous",
    //   "archetype": "K9",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/a-case-for-k9-14990",
    //   "card_sets": [
    //     {
    //       "set_name": "Justice Hunters",
    //       "set_code": "JUSH-EN040",
    //       "set_rarity": "Starlight Rare",
    //       "set_rarity_code": "(StR)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Justice Hunters",
    //       "set_code": "JUSH-EN040",
    //       "set_rarity": "Super Rare",
    //       "set_rarity_code": "(SR)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "banlist_info": {
    //     "ban_tcg": "Limited"
    //   },
    //   "card_images": [
    //     {
    //       "id": 80181649,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/80181649.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/80181649.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/80181649.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.22",
    //       "tcgplayer_price": "0.24",
    //       "ebay_price": "0.00",
    //       "amazon_price": "0.00",
    //       "coolstuffinc_price": "0.00"
    //     }
    //   ]
    // },
    // {
    //   "id": 34541863,
    //   "name": "\"A\" Cell Breeding Device",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Continuous Spell",
    //   "frameType": "spell",
    //   "desc": "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
    //   "race": "Continuous",
    //   "archetype": "Alien",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-breeding-device-9766",
    //   "card_sets": [
    //     {
    //       "set_name": "Force of the Breaker",
    //       "set_code": "FOTB-EN043",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 34541863,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/34541863.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/34541863.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/34541863.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.22",
    //       "tcgplayer_price": "0.20",
    //       "ebay_price": "0.99",
    //       "amazon_price": "24.45",
    //       "coolstuffinc_price": "0.25"
    //     }
    //   ]
    // },
    // {
    //   "id": 64163367,
    //   "name": "\"A\" Cell Incubator",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Continuous Spell",
    //   "frameType": "spell",
    //   "desc": "Each time an A-Counter(s) is removed from play by a card effect, place 1 A-Counter on this card. When this card is destroyed, distribute the A-Counters on this card among face-up monsters.",
    //   "race": "Continuous",
    //   "archetype": "Alien",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-incubator-8856",
    //   "card_sets": [
    //     {
    //       "set_name": "Gladiator's Assault",
    //       "set_code": "GLAS-EN062",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 64163367,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/64163367.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/64163367.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/64163367.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.17",
    //       "tcgplayer_price": "0.23",
    //       "ebay_price": "1.25",
    //       "amazon_price": "0.50",
    //       "coolstuffinc_price": "0.25"
    //     }
    //   ]
    // },
    // {
    //   "id": 91231901,
    //   "name": "\"A\" Cell Recombination Device",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Quick-Play Spell",
    //   "frameType": "spell",
    //   "desc": "Target 1 face-up monster on the field; send 1 \"Alien\" monster from your Deck to the Graveyard, and if you do, place A-Counters on that monster equal to the Level of the sent monster. During your Main Phase, except the turn this card was sent to the Graveyard: You can banish this card from your Graveyard; add 1 \"Alien\" monster from your Deck to your hand.",
    //   "race": "Quick-Play",
    //   "archetype": "Alien",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-recombination-device-7614",
    //   "card_sets": [
    //     {
    //       "set_name": "Invasion: Vengeance",
    //       "set_code": "INOV-EN063",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 91231901,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/91231901.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/91231901.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/91231901.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.11",
    //       "tcgplayer_price": "0.18",
    //       "ebay_price": "0.99",
    //       "amazon_price": "0.50",
    //       "coolstuffinc_price": "0.49"
    //     }
    //   ]
    // },
    // {
    //   "id": 73262676,
    //   "name": "\"A\" Cell Scatter Burst",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Quick-Play Spell",
    //   "frameType": "spell",
    //   "desc": "Select 1 face-up \"Alien\" monster you control. Destroy it and distribute new A-Counters equal to its Level among your opponent's face-up monsters.",
    //   "race": "Quick-Play",
    //   "archetype": "Alien",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-scatter-burst-9737",
    //   "card_sets": [
    //     {
    //       "set_name": "Strike of Neos",
    //       "set_code": "STON-EN041",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 73262676,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/73262676.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/73262676.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/73262676.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.13",
    //       "tcgplayer_price": "0.19",
    //       "ebay_price": "2.00",
    //       "amazon_price": "9.76",
    //       "coolstuffinc_price": "0.25"
    //     }
    //   ]
    // },
    // {
    //   "id": 98319530,
    //   "name": "\"Infernoble Arms - Almace\"",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Equip Spell",
    //   "frameType": "spell",
    //   "desc": "While this card is equipped to a monster: You can equip 1 \"Infernoble Arms\" Equip Spell from your Deck or GY, except \"\"Infernoble Arms - Almace\"\", to 1 appropriate monster you control, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 of your FIRE Warrior monsters that is banished or in your GY; add it to your hand. You can only use 1 \"\"Infernoble Arms - Almace\"\" effect per turn, and only once that turn.",
    //   "race": "Equip",
    //   "archetype": "Infernoble Arms",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/infernoble-arms-almace-13794",
    //   "card_sets": [
    //     {
    //       "set_name": "Duelist Nexus",
    //       "set_code": "DUNE-EN056",
    //       "set_rarity": "Quarter Century Secret Rare",
    //       "set_rarity_code": "",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Duelist Nexus",
    //       "set_code": "DUNE-EN056",
    //       "set_rarity": "Ultra Rare",
    //       "set_rarity_code": "(UR)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 98319530,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/98319530.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/98319530.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/98319530.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.68",
    //       "tcgplayer_price": "0.66",
    //       "ebay_price": "0.00",
    //       "amazon_price": "0.00",
    //       "coolstuffinc_price": "0.00"
    //     }
    //   ]
    // },
    // {
    //   "id": 37478723,
    //   "name": "\"Infernoble Arms - Durendal\"",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Equip Spell",
    //   "frameType": "spell",
    //   "desc": "While this card is equipped to a monster: You can add 1 Level 5 or lower FIRE Warrior monster from your Deck to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 Level 5 or lower FIRE Warrior monster in your GY; Special Summon it, also you cannot Special Summon monsters for the rest of the turn, except Warrior monsters. You can only use 1 \"\"Infernoble Arms - Durendal\"\" effect per turn, and only once that turn.",
    //   "race": "Equip",
    //   "archetype": "Noble Knight",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/infernoble-arms-durendal-10991",
    //   "card_sets": [
    //     {
    //       "set_name": "2021 Tin of Ancient Battles",
    //       "set_code": "MP21-EN136",
    //       "set_rarity": "Super Rare",
    //       "set_rarity_code": "(SR)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Amazing Defenders",
    //       "set_code": "AMDE-EN042",
    //       "set_rarity": "Rare",
    //       "set_rarity_code": "(R)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Rise of the Duelist",
    //       "set_code": "ROTD-EN053",
    //       "set_rarity": "Ultra Rare",
    //       "set_rarity_code": "(UR)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 37478723,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/37478723.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/37478723.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/37478723.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.12",
    //       "tcgplayer_price": "0.21",
    //       "ebay_price": "0.99",
    //       "amazon_price": "2.96",
    //       "coolstuffinc_price": "0.00"
    //     }
    //   ]
    // },
    // {
    //   "id": 64867422,
    //   "name": "\"Infernoble Arms - Hauteclere\"",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Equip Spell",
    //   "frameType": "spell",
    //   "desc": "While this card is equipped to a monster: You can target 1 face-up monster you control; this turn, you cannot declare attacks, except with that monster, also it gains the ability this turn to make a second attack during each Battle Phase, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 face-up monster on the field; destroy it. You can only use 1 \"\"Infernoble Arms - Hauteclere\"\" effect per turn, and only once that turn.",
    //   "race": "Equip",
    //   "archetype": "Noble Knight",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/infernoble-arms-hauteclere-10990",
    //   "card_sets": [
    //     {
    //       "set_name": "2021 Tin of Ancient Battles",
    //       "set_code": "MP21-EN137",
    //       "set_rarity": "Super Rare",
    //       "set_rarity_code": "(SR)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Rise of the Duelist",
    //       "set_code": "ROTD-EN054",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.04"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 64867422,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/64867422.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/64867422.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/64867422.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.06",
    //       "tcgplayer_price": "0.13",
    //       "ebay_price": "0.99",
    //       "amazon_price": "0.25",
    //       "coolstuffinc_price": "0.00"
    //     }
    //   ]
    // },
    // {
    //   "id": 90861137,
    //   "name": "\"Infernoble Arms - Joyeuse\"",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Equip Spell",
    //   "frameType": "spell",
    //   "desc": "While this card is equipped to a monster: You can target 1 FIRE Warrior monster in your GY; add it to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can Special Summon 1 FIRE Warrior monster from your hand. You can only use 1 \"\"Infernoble Arms - Joyeuse\"\" effect per turn, and only once that turn.",
    //   "race": "Equip",
    //   "archetype": "Noble Knight",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/infernoble-arms-joyeuse-10989",
    //   "card_sets": [
    //     {
    //       "set_name": "2021 Tin of Ancient Battles",
    //       "set_code": "MP21-EN138",
    //       "set_rarity": "Super Rare",
    //       "set_rarity_code": "(SR)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Rise of the Duelist",
    //       "set_code": "ROTD-EN055",
    //       "set_rarity": "Super Rare",
    //       "set_rarity_code": "(SR)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 90861137,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/90861137.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/90861137.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/90861137.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.20",
    //       "tcgplayer_price": "0.15",
    //       "ebay_price": "0.99",
    //       "amazon_price": "0.45",
    //       "coolstuffinc_price": "0.00"
    //     }
    //   ]
    // },
    // {
    //   "id": 44256816,
    //   "name": "1st Movement Solo",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Normal Spell",
    //   "frameType": "spell",
    //   "desc": "If you control no monsters: Special Summon 1 Level 4 or lower \"Melodious\" monster from your hand or Deck. You can only activate 1 \"1st Movement Solo\" per turn. You cannot Special Summon monsters during the turn you activate this card, except \"Melodious\" monsters.",
    //   "race": "Normal",
    //   "archetype": "Melodious",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/1st-movement-solo-3775",
    //   "card_sets": [
    //     {
    //       "set_name": "2015 Mega-Tin Mega Pack",
    //       "set_code": "MP15-EN169",
    //       "set_rarity": "Super Rare",
    //       "set_rarity_code": "(SR)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "25th Anniversary Tin: Dueling Mirrors",
    //       "set_code": "MP24-EN038",
    //       "set_rarity": "Quarter Century Secret Rare",
    //       "set_rarity_code": "",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "The New Challengers",
    //       "set_code": "NECH-EN059",
    //       "set_rarity": "Super Rare",
    //       "set_rarity_code": "(SR)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "The New Challengers: Super Edition",
    //       "set_code": "NECH-ENS10",
    //       "set_rarity": "Super Rare",
    //       "set_rarity_code": "(SR)",
    //       "set_price": "17.04"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 44256816,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/44256816.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/44256816.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/44256816.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.02",
    //       "tcgplayer_price": "0.76",
    //       "ebay_price": "6.95",
    //       "amazon_price": "2.19",
    //       "coolstuffinc_price": "1.99"
    //     }
    //   ]
    // },
    // {
    //   "id": 86988864,
    //   "name": "3-Hump Lacooda",
    //   "typeline": [
    //     "Beast",
    //     "Effect"
    //   ],
    //   "type": "Effect Monster",
    //   "humanReadableCardType": "Effect Monster",
    //   "frameType": "effect",
    //   "desc": "If there are 3 face-up \"3-Hump Lacooda\" cards on your side of the field, Tribute 2 of them to draw 3 cards.",
    //   "race": "Beast",
    //   "atk": 500,
    //   "def": 1500,
    //   "level": 3,
    //   "attribute": "EARTH",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/3-hump-lacooda-7280",
    //   "card_sets": [
    //     {
    //       "set_name": "Ancient Sanctuary",
    //       "set_code": "AST-070",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.07"
    //     },
    //     {
    //       "set_name": "Dark Revelation Volume 2",
    //       "set_code": "DR2-EN183",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 86988864,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/86988864.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/86988864.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/86988864.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.11",
    //       "tcgplayer_price": "0.19",
    //       "ebay_price": "1.00",
    //       "amazon_price": "0.25",
    //       "coolstuffinc_price": "0.25"
    //     }
    //   ]
    // },
    // {
    //   "id": 11714098,
    //   "name": "30,000-Year White Turtle",
    //   "typeline": [
    //     "Aqua",
    //     "Normal"
    //   ],
    //   "type": "Normal Monster",
    //   "humanReadableCardType": "Normal Monster",
    //   "frameType": "normal",
    //   "desc": "''A huge turtle that has existed for over 30,000 years.''",
    //   "race": "Aqua",
    //   "atk": 1250,
    //   "def": 2100,
    //   "level": 5,
    //   "attribute": "WATER",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/30-000-year-white-turtle-1012",
    //   "card_images": [
    //     {
    //       "id": 11714098,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/11714098.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/11714098.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/11714098.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.00",
    //       "tcgplayer_price": "0.00",
    //       "ebay_price": "10.00",
    //       "amazon_price": "0.50",
    //       "coolstuffinc_price": "0.00"
    //     }
    //   ]
    // },
    // {
    //   "id": 83994646,
    //   "name": "4-Starred Ladybug of Doom",
    //   "typeline": [
    //     "Insect",
    //     "Flip",
    //     "Effect"
    //   ],
    //   "type": "Flip Effect Monster",
    //   "humanReadableCardType": "Flip Effect Monster",
    //   "frameType": "effect",
    //   "desc": "FLIP: Destroy all Level 4 monsters your opponent controls.",
    //   "race": "Insect",
    //   "atk": 800,
    //   "def": 1200,
    //   "level": 3,
    //   "attribute": "WIND",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/4-starred-ladybug-of-doom-7045",
    //   "card_sets": [
    //     {
    //       "set_name": "Dark Beginning 1",
    //       "set_code": "DB1-EN198",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Pharaoh's Servant",
    //       "set_code": "PSV-088",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.28"
    //     },
    //     {
    //       "set_name": "Pharaoh's Servant",
    //       "set_code": "PSV-E088",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0.00"
    //     },
    //     {
    //       "set_name": "Pharaoh's Servant",
    //       "set_code": "PSV-EN088",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Retro Pack 2",
    //       "set_code": "RP02-EN022",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Starter Deck: Yugi Reloaded",
    //       "set_code": "YSYR-EN010",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.38"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 83994646,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/83994646.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/83994646.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/83994646.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.04",
    //       "tcgplayer_price": "0.05",
    //       "ebay_price": "0.99",
    //       "amazon_price": "0.99",
    //       "coolstuffinc_price": "0.25"
    //     }
    //   ]
    // },
    // {
    //   "id": 67048711,
    //   "name": "7",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Continuous Spell",
    //   "frameType": "spell",
    //   "desc": "When there are 3 face-up \"7\" cards on your side of the field, draw 3 cards from your Deck. Then destroy all \"7\" cards. When this card is sent directly from the field to your Graveyard, increase your Life Points by 700 points.",
    //   "race": "Continuous",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/7-5633",
    //   "card_sets": [
    //     {
    //       "set_name": "Ancient Sanctuary",
    //       "set_code": "AST-091",
    //       "set_rarity": "Short Print",
    //       "set_rarity_code": "(SP)",
    //       "set_price": "2.29"
    //     },
    //     {
    //       "set_name": "Dark Revelation Volume 2",
    //       "set_code": "DR2-EN204",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "3.55"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 67048711,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/67048711.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/67048711.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/67048711.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.21",
    //       "tcgplayer_price": "0.79",
    //       "ebay_price": "30.99",
    //       "amazon_price": "1.58",
    //       "coolstuffinc_price": "0.49"
    //     }
    //   ]
    // },
    // {
    //   "id": 23771716,
    //   "name": "7 Colored Fish",
    //   "typeline": [
    //     "Fish",
    //     "Normal"
    //   ],
    //   "type": "Normal Monster",
    //   "humanReadableCardType": "Normal Monster",
    //   "frameType": "normal",
    //   "desc": "A rare rainbow fish that has never been caught by mortal man.",
    //   "race": "Fish",
    //   "atk": 1800,
    //   "def": 800,
    //   "level": 4,
    //   "attribute": "WATER",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/7-colored-fish-2049",
    //   "card_sets": [
    //     {
    //       "set_name": "Gold Series",
    //       "set_code": "GLD1-EN001",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Metal Raiders",
    //       "set_code": "MRD-098",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.85"
    //     },
    //     {
    //       "set_name": "Metal Raiders",
    //       "set_code": "MRD-E098",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "6.61"
    //     },
    //     {
    //       "set_name": "Metal Raiders",
    //       "set_code": "MRD-EN098",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "4.9"
    //     },
    //     {
    //       "set_name": "Speed Duel: Streets of Battle City",
    //       "set_code": "SBC1-ENC09",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Starter Deck: Joey",
    //       "set_code": "SDJ-008",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.86"
    //     },
    //     {
    //       "set_name": "Structure Deck: Fury from the Deep",
    //       "set_code": "SD4-EN002",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "2.35"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 23771716,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/23771716.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/23771716.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/23771716.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.07",
    //       "tcgplayer_price": "0.21",
    //       "ebay_price": "1.99",
    //       "amazon_price": "2.77",
    //       "coolstuffinc_price": "0.39"
    //     }
    //   ]
    // },
    // {
    //   "id": 86198326,
    //   "name": "7 Completed",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Equip Spell",
    //   "frameType": "spell",
    //   "desc": "Activate this card by choosing ATK or DEF; equip only to a Machine monster. It gains 700 ATK or DEF, depending on the choice.",
    //   "race": "Equip",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/7-completed-7222",
    //   "card_sets": [
    //     {
    //       "set_name": "Battle Pack 3: Monster League",
    //       "set_code": "BP03-EN135",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Battle Pack 3: Monster League",
    //       "set_code": "BP03-EN135",
    //       "set_rarity": "Shatterfoil Rare",
    //       "set_rarity_code": "(SHR)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Duel Terminal 2",
    //       "set_code": "DT02-EN038",
    //       "set_rarity": "Duel Terminal Normal Parallel Rare",
    //       "set_rarity_code": "(DNPR)",
    //       "set_price": "0.00"
    //     },
    //     {
    //       "set_name": "Pharaoh's Servant",
    //       "set_code": "PSV-004",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "2.19"
    //     },
    //     {
    //       "set_name": "Pharaoh's Servant",
    //       "set_code": "PSV-E004",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "7.38"
    //     },
    //     {
    //       "set_name": "Pharaoh's Servant",
    //       "set_code": "PSV-EN004",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Speed Duel: Scars of Battle",
    //       "set_code": "SBSC-EN029",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.24"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 86198326,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/86198326.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/86198326.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/86198326.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.04",
    //       "tcgplayer_price": "0.14",
    //       "ebay_price": "0.99",
    //       "amazon_price": "1.15",
    //       "coolstuffinc_price": "0.25"
    //     }
    //   ]
    // },
    // {
    //   "id": 14261867,
    //   "name": "8-Claws Scorpion",
    //   "typeline": [
    //     "Insect",
    //     "Effect"
    //   ],
    //   "type": "Effect Monster",
    //   "humanReadableCardType": "Effect Monster",
    //   "frameType": "effect",
    //   "desc": "Once per turn, you can flip this card into face-down Defense Position. When this card attacks an opponent's face-down Defense Position monster, this card's ATK becomes 2400 during damage calculation only.",
    //   "race": "Insect",
    //   "atk": 300,
    //   "def": 200,
    //   "level": 2,
    //   "attribute": "DARK",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/8-claws-scorpion-1222",
    //   "card_sets": [
    //     {
    //       "set_name": "Gold Series",
    //       "set_code": "GLD1-EN007",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Pharaonic Guardian",
    //       "set_code": "PGD-024",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.5"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 14261867,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/14261867.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/14261867.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/14261867.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.12",
    //       "tcgplayer_price": "0.13",
    //       "ebay_price": "0.99",
    //       "amazon_price": "0.20",
    //       "coolstuffinc_price": "0.25"
    //     }
    //   ]
    // },
    // {
    //   "id": 4731783,
    //   "name": "A Bao A Qu, the Lightless Shadow",
    //   "typeline": [
    //     "Fiend",
    //     "Link",
    //     "Effect"
    //   ],
    //   "type": "Link Monster",
    //   "humanReadableCardType": "Link Effect Monster",
    //   "frameType": "link",
    //   "desc": "2+ monsters, including a Fiend monster\r\nDuring the Main Phase (Quick Effect): You can discard 1 card, then activate 1 of these effects;\r\n● Destroy 1 card on the field.\r\n● Banish this card (until the End Phase), and if you do, Special Summon 1 LIGHT or DARK monster from your GY.\r\nDuring your Standby Phase: You can draw cards equal to the number of different Monster Types in your GY, then place cards from your hand on the bottom of the Deck in any order, equal to the number of cards you drew. You can only use each effect of \"A Bao A Qu, the Lightless Shadow\" once per turn.",
    //   "race": "Fiend",
    //   "atk": 2800,
    //   "def": null,
    //   "level": null,
    //   "attribute": "DARK",
    //   "linkval": 4,
    //   "linkmarkers": [
    //     "Left",
    //     "Right",
    //     "Bottom-Left",
    //     "Bottom-Right"
    //   ],
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/a-bao-a-qu-the-lightless-shadow-14802",
    //   "card_sets": [
    //     {
    //       "set_name": "Supreme Darkness",
    //       "set_code": "SUDA-EN049",
    //       "set_rarity": "Quarter Century Secret Rare",
    //       "set_rarity_code": "",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Supreme Darkness",
    //       "set_code": "SUDA-EN049",
    //       "set_rarity": "Secret Rare",
    //       "set_rarity_code": "(ScR)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 4731783,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/4731783.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/4731783.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/4731783.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "15.34",
    //       "tcgplayer_price": "19.71",
    //       "ebay_price": "0.00",
    //       "amazon_price": "0.00",
    //       "coolstuffinc_price": "0.00"
    //     }
    //   ]
    // },
    // {
    //   "id": 24140059,
    //   "name": "A Cat of Ill Omen",
    //   "typeline": [
    //     "Beast",
    //     "Flip",
    //     "Effect"
    //   ],
    //   "type": "Flip Effect Monster",
    //   "humanReadableCardType": "Flip Effect Monster",
    //   "frameType": "effect",
    //   "desc": "FLIP: Choose 1 Trap from your Deck and place it on top of your Deck, or, if \"Necrovalley\" is on the field, you can add that Trap to your hand instead.",
    //   "race": "Beast",
    //   "atk": 500,
    //   "def": 300,
    //   "level": 2,
    //   "attribute": "DARK",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/a-cat-of-ill-omen-2087",
    //   "card_sets": [
    //     {
    //       "set_name": "Dark Revelation Volume 1",
    //       "set_code": "DR1-EN018",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Pharaonic Guardian",
    //       "set_code": "PGD-070",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "3.22"
    //     },
    //     {
    //       "set_name": "Speed Duel Starter Decks: Destiny Masters",
    //       "set_code": "SS01-ENB11",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "2.51"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 24140059,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/24140059.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/24140059.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/24140059.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.25",
    //       "tcgplayer_price": "2.28",
    //       "ebay_price": "3.99",
    //       "amazon_price": "4.49",
    //       "coolstuffinc_price": "0.99"
    //     }
    //   ]
    // },
    // {
    //   "id": 6850209,
    //   "name": "A Deal with Dark Ruler",
    //   "type": "Spell Card",
    //   "humanReadableCardType": "Quick-Play Spell",
    //   "frameType": "spell",
    //   "desc": "(This card is always treated as an \"Archfiend\" card.)\nIf a Level 8 or higher monster under your control was sent to the Graveyard this turn: Special Summon 1 \"Berserk Dragon\" from your hand or Deck.",
    //   "race": "Quick-Play",
    //   "archetype": "Archfiend",
    //   "ygoprodeck_url": "https://ygoprodeck.com/card/a-deal-with-dark-ruler-591",
    //   "card_sets": [
    //     {
    //       "set_name": "Dark Crisis",
    //       "set_code": "DCR-030",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "1.87"
    //     },
    //     {
    //       "set_name": "Dark Crisis",
    //       "set_code": "DCR-EN030",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0.00"
    //     },
    //     {
    //       "set_name": "Dark Revelation Volume 1",
    //       "set_code": "DR1-EN192",
    //       "set_rarity": "Common",
    //       "set_rarity_code": "(C)",
    //       "set_price": "0"
    //     },
    //     {
    //       "set_name": "Legendary Collection 4: Joey's World Mega Pack",
    //       "set_code": "LCJW-EN241",
    //       "set_rarity": "Rare",
    //       "set_rarity_code": "(R)",
    //       "set_price": "0"
    //     }
    //   ],
    //   "card_images": [
    //     {
    //       "id": 6850209,
    //       "image_url": "https://images.ygoprodeck.com/images/cards/6850209.jpg",
    //       "image_url_small": "https://images.ygoprodeck.com/images/cards_small/6850209.jpg",
    //       "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/6850209.jpg"
    //     }
    //   ],
    //   "card_prices": [
    //     {
    //       "cardmarket_price": "0.16",
    //       "tcgplayer_price": "0.25",
    //       "ebay_price": "1.95",
    //       "amazon_price": "0.93",
    //       "coolstuffinc_price": "0.25"
    //     }
    //   ]
    // },
  ];
  carregando: boolean = false;
  erro: string = ''

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() { this.getCards() }

  getCards() {
    this.carregando = true;

    return this.api.listarCards().subscribe({
      next: (res: any) => {
        this.items = res.data.slice(0, 20);
        this.carregando = false;
      },
      error: (error) => {
        console.error(error);
        this.carregando = false;
      }
    });
  }
}
