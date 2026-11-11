import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "Kontak",
    description: "Hubung Akhmad Roufun Aziz jika Anda memiliki pertanyaan atau ingin bekerja sama.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
            <p className="mt-2 text-muted-foreground">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardContent>
                        <FormKontak />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">Temukan Saya di</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com/d99881100-design"
                                    target="_blank"
                                    className="text-aksen hover:underline">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="mailto:andi.pratama@example.com"
                                    className="text-aksen hover:underline">
                                    akhmadroufun@gmail.com
                                </a>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
