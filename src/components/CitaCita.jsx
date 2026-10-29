import Kartu from "@/components/Kartu";

const defaultRencana = [
    "Menuntaskan Kelas Industri UBIG",
    "Magang di perusahaan teknologi besar seperti microsoft atau apple",
    "Bekerja sebagai Web Developer",
    "Membahagiakan orang tua dan Keluarga",
];

export default function CitaCita({
    impian = "Promp Engineer",
    rencana = defaultRencana,
}) {
    return (
        <Kartu judul="Cita-cita">
            <p className="mb-2 text-gray-700">
                Menjadi <strong>{impian}</strong>. Langkah yang saya rencanakan:
            </p>
            <ol className="list-decimal space-y-1 pl-5 text-gray-700">
                {rencana.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ol>
        </Kartu>
    );
}
