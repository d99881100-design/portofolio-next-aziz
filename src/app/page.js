import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";
import EkskulCard from "@/components/EkskulCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = [
  "Panahan",
  "Bermain futsal",
  "Menonton Anime",
  "Belajar Coding",
  "Berorganisasi",

];

const rencana = [
  "Menuntaskan Kelas Industri UBIG",
  "Magang di perusahaan teknologi besar seperti microsoft atau apple",
  "Bekerja sebagai Web Developer",
  "Membahagiakan orang tua dan Keluarga",
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.30", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

const ekskul = [
  { nama: "Panahan", Posisi: "Sekretaris" },
  { nama: "Pramuka", Posisi: "Pemangku Adat" },
  { nama: "Rohis", Posisi: "KO sekbid Dakwah" },
  { nama: "Jurnalstra", Posisi: "KO Humas" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-8">
      <Hero
        nama="Akhmad Roufun Aziz"
        tagline="Siswa kelas X SMK, calon Promp Engineer di Kelas Industri UBIG."
      />

      <Kartu judul="Tentang Saya">
        <p className="text-gray-700">
          Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
        </p>
      </Kartu>

      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-2 text-gray-700">
            Menjadi <strong>Promp Engineer</strong>. Langkah yang saya rencanakan:
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-gray-700">
            {rencana.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </Kartu>

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

      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-utama text-white">
              <tr>
                <th className="p-3">Hari</th>
                <th className="p-3">Waktu</th>
                <th className="p-3">Kegiatan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jadwal.map((item) => (
                <tr key={item.hari}>
                  <td className="p-3">{item.hari}</td>
                  <td className="p-3">{item.waktu}</td>
                  <td className="p-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>

    </main>
  );
}