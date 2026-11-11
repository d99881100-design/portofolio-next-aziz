import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero({ nama, tagline }) {
    return (
        <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left ">
            <Image
                src="/profil_keren.jpeg"
                alt={`Foto profil ${nama}`}
                width={180}
                height={180}
                loading="eager"
                className="h-[180px] w-[180px] shrink-0 aspect-square rounded-full border-4 border-aksen object-cover"
            />
            <div>
                <h1 className="text-3xl font-bold text-primary md:text-5xl">Halo, saya {nama}!</h1>
                <p className="mt-3 text-lg text-muted-foreground">{tagline}</p>
            </div>
            <div className="mt-5 flex justify-center gap-3 md:justify-start">
                <Link href="/proyek" className={buttonVariants({ size: "lg" })}>
                    Lihat Proyek
                </Link>
                <Link href="/kontak" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    Hubungi Saya
                </Link>
            </div>
        </section>
    );
}