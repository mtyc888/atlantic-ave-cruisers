import { FLEET_ENGINE, FLEET_SIZE, RATES, SHOP_MAP_URL } from './data';

/**
 * The whole price list. Every moped in the fleet is the same 50cc model, so
 * rates depend only on how long you keep it.
 */
export function RateTable() {
    return (
        <section className="ratetable" id="fleet">
            <div className="wrap">
                <div className="ratetable-head" data-reveal>
                    <div>
                        <span className="label">The fleet</span>
                        <h2 className="h2">Rates</h2>
                    </div>
                    <p>
                        {FLEET_SIZE} mopeds, all {FLEET_ENGINE} and automatic, serviced weekly and
                        fuelled before you arrive. One price list for the whole fleet.
                    </p>
                </div>

                <div className="ratetable-wrap" data-reveal>
                    <table>
                        <caption className="sr-only">Moped rental rates by length of hire</caption>
                        <thead>
                            <tr>
                                <th scope="col">Length</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RATES.map((r) => (
                                <tr key={r.id}>
                                    <th scope="row">{r.label}</th>
                                    <td>${r.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="ratetable-foot" data-reveal>
                    <span className="label">
                        Per moped. First come, first served. Groups welcome, just ask.
                    </span>
                    <a
                        className="btn btn-gold"
                        href={SHOP_MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Find the shop
                        <span className="sr-only"> (opens Google Maps in a new tab)</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
