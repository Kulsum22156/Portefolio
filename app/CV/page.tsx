import CvEntry from "../components/CvEntry";

export default function Cv() {
    return (
        <>
            <h1 className="text-center text-3xl my-8">Curriculum Vitae</h1>
            <h2 className="text-2xl my-8">Expérience</h2>
            <CvEntry title="Etudiante en informatique/électronique" employer="ECAM">
                <ul>
                    <li>Prend des cours</li>
                </ul>
            </CvEntry>
            <CvEntry title="bbbb" employer="ECAM">
                <ul>
                    <li>Prend des cours</li>
                </ul>
            </CvEntry>
            <CvEntry title="hiri" employer="ECAM">
                <ul>
                    <li>Prend des cours</li>
                </ul>
            </CvEntry>
        </>
    )
}