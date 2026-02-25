import logoMoi from '../../src/assets/logowbg.png'
import logoNoz from "../assets/logo/logotype-noz.png"
import logovs from "../assets/logo/viasante-logo.svg"
import logoedokial from "../assets/logo/edokial-logo-page.png"

export const experiences = [
    {
        title: 'Stagiaire à la DSI de ',
        name: 'Viasanté',
        lieu: 'Rodez, Aveyron, France',
        date: '2022 Avril - Juin',
        resume: `J'ai adoré cette expérience, elle m'a permis d'en apprendre beaucoup sur le métier 
            d'architecte SI, mais aussi sur de nombreux autres métiers que l'on peut retrouver au sein d'une DSI`,
        point: [
            'Rédaction de documents',
            'Recensement d’applications et de technologies sur Hopex',
            'Travaux de recherche / réflexion sur la cartographie d’un SI',
            'Organisation et animation de réunions',
            'Modélisation de systèmes applicatifs',
        ],
        technologie: [
            'Xmind',
            'Microsoft office',
            'Hopex',
            'GLPI',
            'Bwise',
            'Orchestra'
        ],
        logo: logovs,
        lien: 'https://www.viasante.fr/nos-agences/rodez',
    },
    {
        title: 'Emploi saisonnier ',
        name: 'NOZ',
        lieu: 'Bozouls, Aveyron, France',
        date: '2021 et 2022 Juillet - Septembre',
        resume: `Ce travail m'a permis de prendre conscience des conditions de travail que l'on peut
        retrouver dans des emplois pas forcément faciles, et me permet de confirmer que je souhaite bien
        faire du développement plus tard`,
        point: [
            'Répartition de colis',
            'Etiquetage de colis',
            'Déchargement de camion'
        ],
        technologie: [
            'Terminal - Scanner',
            'Transpalette',
            'Etiqueteuse',
        ],
        logo: logoNoz,
        lien: 'https://www.noz.fr/',
    },
    {
        title: 'Stagiaire en classe de 3ième ',
        name: 'Edokial',
        lieu: 'Bozouls, Aveyron, France',
        date: '2016 Janvier - Janvier',
        resume: `1ère réelle expérience en entreprise, j'ai beaucoup apprécié la faire et beaucoup appris
                 des multiples collaborateurs qui m'ont encadré au sein d'Edokial`,
        point: [
            'Visite des locaux',
            "Découverte des corps métiers de l'entreprise",
            "Rangement d'archives",
            "Exposé et compte rendu à l'école"
        ],
        technologie: [
            "Power Point",
            "Microsoft Word"
        ],
        logo: logoedokial,
        lien: 'https://www.doxio.com/',
    },
    {
        title: 'Jardinier à temps perdu ',
        name: 'Particuliers',
        lieu: 'Bozouls, Aveyron, France',
        date: '2015 - 2022',
        resume: `Il est bien de varier les activités, afin d'apprendre à se connaitre.
                 Je ne pense pas qu'il y ait meilleure manière pour se lancer dans ses
                 premières activités professionnelles`,
        point: [
            'Entretien de pelouse',
            'Entretien de haie',
            'Jardinnage',
            'Arrosage'
        ],
        technologie: [
            'Tondeuse',
            'Fourche',
            'Rateau',
            'Pelle',
            'Arrosoir',
            `Tuyaux d'arrosage`,
            'taille haie',
            'hache & tronçonneuse'
        ],
        logo: logoMoi,
        lien: 'guillaume-helg.netlify.app',
    }
]




