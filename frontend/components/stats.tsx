export function Stats() {
  return (
    <section className="bg-slate-300">
      <div className="container grid place-items-center md:grid-cols-2 lg:grid-cols-4 py-16 px-10 md:flex-row flex-wrap gap-16">
        <div>
          <div className="text-expertmarketinsight mb-2 text-5xl font-bold">
            210,123
          </div>
          <div className="text-expertmarketinsight uppercase tracking-widest">
            REPORTS PUBLISHED
          </div>
        </div>
        <div>
          <div className="text-expertmarketinsight mb-2 text-5xl font-bold">
            10,123
          </div>
          <div className="text-expertmarketinsight uppercase tracking-widest">
            CLIENT INQUIRIES
          </div>
        </div>
        <div>
          <div className="text-expertmarketinsight mb-2 text-5xl font-bold">
            1,123
          </div>
          <div className="text-expertmarketinsight uppercase tracking-widest">
            SATISFIED CLIENTS
          </div>
        </div>
        <div>
          <div className="text-expertmarketinsight mb-2 text-5xl font-bold">
            510
          </div>
          <div className="text-expertmarketinsight uppercase tracking-widest">
            CUSTOM STUDIES
          </div>
        </div>
      </div>
    </section>
  );
}
