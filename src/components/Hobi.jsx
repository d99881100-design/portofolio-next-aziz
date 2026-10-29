import Kartu from "@/components/Kartu";

const defaultHobi = [
    "Panahan",
    "Bermain futsal",
    "Menonton Anime",
    "Belajar Coding",
    "Berorganisasi",
];

export default function Hobi({ hobi = defaultHobi }) {
    return (
        <Kartu judul="Hobi">
            <ul className="list-disc space-y-1 pl-5 text-gray-700">
                {hobi.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Kartu>
    );
}
