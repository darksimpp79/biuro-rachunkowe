function Main(){
    const description = 'Współpraca Z Nami Naprawdę Się Opłaca!';
    const button = 'Skontaktuj się z nami';
    const opis = [
        {title: 'Obsługa kadrowo-płacowa', id: 1},
        {title: 'uproszczona księgowość', id: 2},
        {title: 'uproszczona księgowość', id: 3},
        {title: 'nadzór księgowy', id: 4},
        {title: 'doradztwo biznesowe', id: 5}
    ];

    const opisList = opis.map((option, index) => (
        <li key={option.id}>
          {option.title}
          {option.id < 5 && index < opis.length - 1 ? ', ' : null}
        </li>
      ));


      return (
        <main>
          <section>
            <article
              id="first"
              className="flex flex-col backdrop-brightness-50 backdrop-blur-sm justify-center backdrop"
            >
              <div className="m-40 flex flex-col">
                <h3 className="text-white text-xl italic font-extralight font-sans">{description}</h3>
                <h1 className="uppercase text-7xl font-bold text-white font-mono py-5">biuro <span className=" text-yellow-500">rachunkowe</span></h1>
                <button className="bg-yellow-300 p-4 w-60 uppercase rounded-xl my-4 koxbutton">
                  {button}
                </button>
                <ul className="flex flex-row">

                </ul>
              </div>
            </article>
            <article id="second" className="bg-white">
                <div className="flex flex-row justify-around p-24">
                    <h2 className=" basis-1/2 text-3xl my-2"><span className="underline decoration-wavy decoration-yellow-500">Nasz</span>a <span className=" font-bold ">Oferta</span></h2>
                    <button className="p-3 w-30 bg-yellow-500 text-white uppercase font-mono font-bold text-lg">Nasze oferty</button>
                </div>
                <div className="">
                    <div class="flex flex-row justify-around mx-60 my-18">
                        <div className="kebab">
                            <img src="img/1.png" className="my-24"></img>
                            <h4 className="uppercase my-8 font-bold">ksiegowość uproszczona</h4>
                            <p>Uproszczona forma księgowości dotyczy prowadzenia ewidencji podatkowej zgodnie z wymogami prawa.</p>
                            <button className="p-3 w-30 bg-yellow-500 text-white uppercase font-mono font-bold text-lg my-10">Zobacz więcej!</button>
                        </div>
                        <div className="kebab">
                            <img src="img/2.jfif" className="my-24"></img>
                            <h4 className="uppercase my-8 font-bold">pełna księgowość</h4>
                            <p>Nasza firma oferuje prowadzenie pełnych ksiąg rachunkowych zgodnie z obowiązującymi przepisami.</p>
                            <button className="p-3 w-30 bg-yellow-500 text-white uppercase font-mono font-bold text-lg my-10">Zobacz więcej!</button>
                        </div>
                        <div className="kebab">
                            <img src="img/3.jfif" className="my-24"></img>
                            <h4 className="uppercase my-8 font-bold">obsługa kadrowo-płacowa</h4>
                            <p>Powierzając nam to zadanie, zyskują Państwo pewność, że sprawy pracownicze będą prawidłowo prowadzone.</p>
                            <button className="p-3 w-30 bg-yellow-500 text-white uppercase font-mono font-bold text-lg my-16">Zobacz więcej!</button>
                        </div>
                    </div>
                </div>
            </article>
          </section>
        </main>
      )
}

export default Main;