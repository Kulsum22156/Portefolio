import CvEntry from "../components/CvEntry";
import BlogEntry from "../components/blog";
import BlogBlock from "../components/blogdb";

export default function Cv() {
    return (
        <>
            <h1 className="text-center font-bold text-3xl md:text-4xl my-8">Curriculum Vitae</h1>

            <h2 className="text-2xl md:text-3xl md:text-center my-4 font-bold">Formations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 ">
            <CvEntry title="ECAM" date="2022-maintenant" description="Bachelier en Sciences de l’Ingénieur Industrielle - Secteur Génie Electrique">
            </CvEntry>

            <CvEntry title="Croix-Rouge de Belgique" date="2024" description="BEPS - Brevet Européen Premiers Secours">
            </CvEntry>

            <BlogBlock section="formations" /></div>

            <h2 className="text-2xl md:text-3xl md:text-center my-4 font-bold">Expérience</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 ">
            <CvEntry title="VFS Global" date="Mars 2022" description="Assistante & Relation client (stage)">
            </CvEntry>

            <BlogBlock section="experience"/></div>

            <h2 className="text-2xl md:text-3xl md:text-center my-4 font-bold">Projets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 ">
            <CvEntry title="Projet intégrateur" date="2022" description="Création d'une machine Low-Tech">
            </CvEntry>

            <CvEntry title="Modélisation mécanique - AutoCad" date="2022-2025" description="Conception de plans de pièces mécanique et lecture de plans">
            </CvEntry>

            <CvEntry title="Développement de jeux en Python" date="2024-2025" description="Création d'une interface graphique avec Pygame et JSON (démineur) et conception d'un jeu en réseau TCP (quarto)">
            </CvEntry>

            <CvEntry title="PCB" date="2025-2026" description="Réalisation de cartes PCB avec Altium Designer">
            </CvEntry>

            <CvEntry title="Génie logiciel" date="2025-2026" description="Création d'une gestion de création de cassiers avec C#, en méthode Agile/Scrum et SQL/MariaDB">
            </CvEntry>

            <CvEntry title="Deskop application" date="2025" description="Création d'un gestionnaire de parties d'échec (compétitions, tournois, joueurs) avec C#, Avalonia et SQLite">
            </CvEntry>
            
            <BlogBlock section="projets"/></div>
            
           
        </>
    )
}