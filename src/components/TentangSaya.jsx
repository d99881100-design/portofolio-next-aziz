import Kartu from "@/components/Kartu";

export default function TentangSaya({ deskripsi }) {
    const teksDefault =
        "Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.";

    return (
        <Kartu judul="Tentang Saya">
            <p className="text-gray-700">
                {deskripsi || teksDefault}
            </p>
        </Kartu>
    );
}
