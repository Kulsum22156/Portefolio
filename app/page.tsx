import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl text-gray-300 font-bold">Umme Kulsum</h1>

        <p className="mt-4 text-lg text-gray-300">Étudiante en ingénierie industrielle – Secteur Génie électrique</p>

        <p className="mt-4 text-lg text-gray-300">En recherche de stage 🔍 </p>
      </section>
    </main>
  );
}

