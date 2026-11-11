export default function EkskulCard({ nama, Posisi }) {
    return (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-primary">{nama}</h3>
            <p className="mt-1 text-sm text-muted-foreground">Posisi: {Posisi}</p>
        </div>
    );
}