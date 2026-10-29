import Kartu from "@/components/Kartu";
import EkskulCard from "@/components/EkskulCard";
import TentangSaya from "@/components/TentangSaya";
import Hobi from "@/components/Hobi";
import CitaCita from "@/components/CitaCita";
import Jadwal from "@/components/Jadwal";

export const metadata = {
    title: "Tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar Akhmad Roufun Aziz.",
};

const ekskul = [
    { nama: "Panahan", Posisi: "Sekretaris" },
    { nama: "Pramuka", Posisi: "Pemangku Adat" },
    { nama: "Rohis", Posisi: "KO sekbid Dakwah" },
    { nama: "Jurnalstra", Posisi: "KO Humas" },
];

export default function Tentang() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-8">

            <TentangSaya />

            <div className="grid gap-6 md:grid-cols-2">
                <Hobi />
                <CitaCita />
            </div>

            <Kartu judul="Ekstrakurikuler yang di ikuti">
                <div className="grid gap-4 md:grid-cols-2">
                    {ekskul.map((ekskul) => (
                        <EkskulCard
                            key={ekskul.nama}
                            nama={ekskul.nama}
                            Posisi={ekskul.Posisi}
                        />
                    ))}
                </div>
            </Kartu>

            <Jadwal />

        </main>
    );
}