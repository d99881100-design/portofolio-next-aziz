export default function EkskulCard({ nama, Posisi }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-utama">{nama}</h3>
            <p className="mt-1 text-sm text-gray-600">Posisi: {Posisi}</p>
        </div>
    );
}