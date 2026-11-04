import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Andi Pratama jika Anda memiliki pertanyaan atau ingin bekerja sama.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Hubungi Saya</h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <section className="h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
                    <FormKontak />
                </section>
                <div className="h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-utama dark:text-sky-200 mb-3">
                        Temukan Saya di
                    </h2>
                    <div className="space-y-1">
                        <div>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-aksen dark:text-red-300 hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                        <div>
                            <a
                                href="mailto:akhmadroufun@gmail.com"
                                className="text-aksen dark:text-red-300 hover:underline"
                            >
                                akhmadroufun@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
