function Footer(){
    const days = [
        {dzien: 'Poniedziałek', godziny: '09.00 - 17.00', id: 1},
        {dzien: 'Wtorek', godziny: '09.00 - 17.00', id: 2},
        {dzien: 'Środa', godziny: '09.00 - 17.00', id: 3},
        {dzien: 'Czwartek', godziny: '09.00 - 17.00', id: 4},
        {dzien: 'Piątek', godziny: '09.00 - 17.00', id: 5},
        {dzien: 'Sobota', godziny: '09.00 - 17.00', id: 6},
        {dzien: 'Niedziela', godziny: '09.00 - 17.00', id: 7},
    ];

    const daysList = days.map( dzien => (
        <tr className="flex justify-between text-slate-300">
            <th className="p-1">{dzien.dzien}</th>
            <th className="p-1">{dzien.godziny}</th>
        </tr>
    ))
    return(
        <footer className="kurczak bg-slate-600">
            <section className="flex flex-row justify-around p-20">
                <article>
                   1 
                </article>
                <article>
2
                </article>
                <article>
                    <h2 className="text-3xl font-bold text-white py-10">Godziny otwarcia</h2>
                    <table className="flex flex-col">
                        {daysList}
                    </table>
                    
                </article>
                <article>
                    4
                </article>
            </section>
        </footer>
    )
}

export default Footer;