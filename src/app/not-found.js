import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
            <h1 className="text-7xl font-extrabold text-aksen dark:text-red-300 md:text-8xl">
                404
            </h1>
            <h2 className="mt-4 text-2xl font-bold text-utama dark:text-sky-200 md:text-3xl">
                Halaman tidak ditemukan
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Alamat yang kamu buka tidak ada atau sudah dipindahkan.
            </p>
            <Link
                href="/"
                className="mt-6 inline-block rounded-lg bg-utama px-6 py-2.5 font-semibold text-white transition hover:opacity-90"
            >
                Kembali ke Beranda
            </Link>
        </main>
    );
}
