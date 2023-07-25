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

      const wartUslugi = [
        {option: 'dlaczego warto skorzystać z usług firmy: x', id: 1},
        {option: 'na czym polega księgowość uproszczona i pełna księgowość, czyli usługi świadczone przez firmę x', id: 2},
        {option: 'jakie są zalety skorzystania z obsługi kadrowo-płacowej, czyli usługi, która świadczona jest przez firmę: x', id: 3},
      ];
      const wartUslugiList = wartUslugi.map(option => 
        <li key={option.id}>
          {option.option}
        </li>
        );
      const uslugi = [
        {usluga: 'odprowadzanie zaliczek na podatek dochodowy', id: 1},
        {usluga: 'obsługa rozliczeń ZUS', id: 2},
        {usluga: 'przygotowywanie umów oraz ich rozliczanie', id: 3},
        {usluga: 'rozliczanie delegacji, zwolnień lekarskich i urlopów.', id: 4},
      ];

      const uslugiList = uslugi.map(x => 
        <li key={x.id}>
          {x.usluga + ','}
        </li>
        );


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
          <section className="bg-white">
            <article>
              <div className="p-24 mx-60">
                <h2 className="text-3xl my-2"><span className="underline decoration-wavy decoration-yellow-500">O <span className="font-bold">na</span></span><span className="font-bold">s</span></h2>
                <div className="flex justify-around">
                  <div className="">
                    <h2 className="text-2xl my-3 font-bold">Stawiamy na nowoczesne rozwiązania, dlatego oferujemy cyfrowy obieg dokumentów – z myślą o ekologii i dbałością o środowisko naturalne.</h2>
                    <p>Serdecznie zapraszamy do zapoznania się z naszą ofertą. Współpraca z nasza firmą jest
                      dla Państwa gwarancją bezpieczeństwa, gdyż ponosimy pełną odpowiedzialność za
                      prawidłowość prowadzenia ksiąg oraz rozliczeń. Jesteśmy terminowi i profesjonalni, co
                      doceniają nasi klienci. Choć nie jest to łatwe, staramy się być na bieżąco z ciągłymi zmianami wprowadzanymi przez polski rząd, aby ułatwić naszym klientom odnalezienie się w gąszczu ciągłych zmian w przepisach. Jesteśmy także terminowi i profesjonalni. Wszystko to doceniają nasi klienci. Jeżeli chcą Państwo skorzystać z oferowanych usług, to zachęcamy do bezpośredniego kontaktu.</p>
                    <p className="my-5">Biuro rachunkowe Asset oferuje kompleksowe usługi księgowe: prowadzenie księgowości uproszczonej oraz pełnej, obsługę kadrowo-płacową, nadzór księgowy oraz doradztwo biznesowe. Wszystkie nasze usługi są realizowane profesjonalnie i dostosowane do specyfiki danej branży.</p>
                    <button className="p-3 w-30 bg-yellow-500 text-white uppercase font-mono font-bold text-lg my-16">Oferta!</button>
                  </div>
                  <div className="p-10">
                    <img src="img/4.jpg" id="zdj"></img>
                  </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row">
                    <img src="img/5.jpg" className="zdj3"></img>
                    <img src="img/6.jpg" className="zdj3"></img>
                  </div>
                  <div className="mx-10">
                    <h2 className="text-3xl font-bold my-12">Cyfrowy obieg dokumentów</h2>
                    <p className="my-5 ">Do każdego klienta podchodzimy w sposób indywidualny i staramy się spełnić wszystkie Państwa oczekiwania. Jesteśmy prężnie rozwijającą się firmą, która stawia na nowoczesne rozwiązania, dlatego oferujemy cyfrowy obieg dokumentów – z myślą o ekologii, dbałością o środowisko naturalne i troską o cenny czas naszych klientów.</p>
                    <button className="p-3 w-30 bg-yellow-500 text-white uppercase font-mono font-bold text-lg my-5">Skontaktuj się z nami!</button>
                  </div>
                </div>  
              </div>
            </article>
            <article className="p-24 mx-60">
                <h2 className="text-3xl"><span className="underline decoration-wavy decoration-yellow-500">Dlacz</span>ego warto korzystać z usług profesjonalistów <span className="font-bold">z Biura Rachunkowego?</span></h2>
                <p className="my-10">W przypadku, jeśli prowadzisz firmę i nie znasz się na księgowości, bardzo dobrym rozwiązaniem jest skorzystać z pomocy profesjonalnej firmy takiej jak: Biuro Rachunkowe Asset. Możesz skorzystać z usług takich jak np. księgowość uproszczona, pełna księgowość, obsługa kadrowo-płacowa, nadzór księgowy i doradztwo biznesowe.</p>
                <p className="my-5 font-bold">Z tego artykułu dowiesz się: </p>
                <ul className="list-disc list-inside">
                  {wartUslugiList}
                </ul>
            </article>
            <article className="px-24 mx-60">
                <h2 className="text-3xl"><span className="underline decoration-wavy decoration-yellow-500">Co wart</span>o wiedzieć o usługach świadczonych przez firmę <span className="font-bold">z Biura Rachunkowego?</span></h2>
                <p className="my-10">Jedną z usług, jaka świadczona jest przez Biuro Rachunkowe Asset, jest księgowość uproszczona. Co ją charakteryzuje? Opiera się ona na prowadzeniu ewidencji przeprowadzanych operacji gospodarczych. W tym celu stosuje się jedną z trzech form, czyli: ryczałt od przychodów ewidencjonowanych, karty podatkowe i podatkowe księgi przychodów i rozchodów. Firma ASSET oferuje także pełną księgowość. Związana jest ona z prowadzeniem ksiąg rachunkowych. Mamy tu również do czynienia z ewidencjonowaniem obrotów i sald dla księgi głównej oraz ksiąg pomocniczych oraz inwentaryzacją aktywów i pasywów. Należy zaznaczyć, że pełna księgowość pozwala na precyzyjną analizę sytuacji finansowej przedsiębiorstwa. Jednak musisz wiedzieć, że ta forma prowadzenia rachunkowości jest skomplikowana. </p>
                <h3 className="text-xl font-semibold my-5">Usługi kadrowo-płacowe w ofercie firmy</h3>
                <p className="my-10">Warto także wspomnieć o <span className=" text-blue-400 italic hover:underline">obsłudze kadrowo-płacowej</span>, czyli usłudze, która oferowana jest przez Wolsztyn Biuro Rachunkowe. W ramach jej wykonywane są takie czynności jak np.:</p>
                <ul className="list-disc list-inside">
                  {wartUslugiList}
                </ul>
                <p className="py-10">Warto podkreślić, że powierzenie tych zadań: Biurze Rachunkowemu Asset, wiąże się z wieloma korzyściami! Przede wszystkim zyskujesz pewność, że cała dokumentacja prowadzona jest w sposób prawidłowy. Eksperci z profesjonalnej firmy, są na bieżąco z aktualnymi przepisami. Warto zdecydować się na bezpośredni kontakt z zespołem.</p>
            </article>
          </section>
        </main>
      )
}

export default Main;