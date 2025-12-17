import Link from "next/link";

export default function Footbar() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-2 text-center md:flex-row md:justify-between md:text-left">
        <p>© 2025 Umme Kulsum</p>
        <p>22156@ecam.be</p>
        
      </div>
    </footer>
  );
}
