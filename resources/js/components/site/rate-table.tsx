import { FLEET_ENGINE, FLEET_SIZE, RATES, TOUR_SCHEDULE } from './data';

/**
 * One guided-tour price. Every moped in the fleet is the same 50cc model.
 */
export function RateTable() {
    return (
        <section className="ratetable" id="fleet">
            <div className="wrap">
                <div className="ratetable-head" data-reveal>
                    <div>
                        <span className="label">Moped tours</span>
                        <h2 className="h2">Tour details</h2>
                    </div>
                    <p>
                        Reserve as an individual or a group. Every tour has {FLEET_SIZE} automatic{' '}
                        {FLEET_ENGINE} mopeds, with helmets included.
                    </p>
                </div>

                <div className="ratetable-wrap" data-reveal>
                    <table>
                        <caption className="sr-only">Guided moped tour price</caption>
                        <thead>
                            <tr>
                                <th scope="col">Tour</th>
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
                        {TOUR_SCHEDULE}. Individual riders and groups welcome.
                    </span>
                    <a
                        className="btn btn-gold"
                        href="mailto:atlantic.ave.cruisers@gmail.com?subject=Tour%20reservation"
                    >
                        Reserve a tour
                    </a>
                </div>
            </div>
        </section>
    );
}
