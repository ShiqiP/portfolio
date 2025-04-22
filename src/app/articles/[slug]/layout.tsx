export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="page flex justify-center">
            <div className="container prose dark:prose-invert md:prose-lg lg:prose-xl">
                {children}
            </div>
        </section>
    )
}