import Kartu from "@/components/Kartu";

const defaultJadwal = [
    { hari: "Senin", waktu: "19.00 - 20.30", kegiatan: "Membaca ulang modul" },
    { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
    { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

export default function Jadwal({ jadwal = defaultJadwal }) {
    return (
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
    );
}

export { Jadwal as JadwalBelajar };
