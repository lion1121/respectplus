@section('title', 'О нас' )

@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-12">
                {{ Breadcrumbs::render('about')}}
            </div>
        </div>
    </div>

    <section class="container-fluid no-gutters p-0 no_pd main_section first_section bg-white">

        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-12 mt-3">
                    <h3 class="mail_title">Пр нас</h3>
                    <img src="{{asset('/img/handshake.jpg')}}" class="img_responsive mb-3" alt="">
                    <p>Агентство нерухомості «РЕСПЕКТ +» допомагає нашим клієнтам
                        придбати нерухомість у м. Дніпрі і Дніпропетровській області, а також
                        вигідно інвестувати гроші в цю нерухомість. Наші фахівці агентства
                        прекрасно знають процедуру оформлення документів на купівлю-продаж,
                        оренду, обмін нерухомості, а також особливості законодавства України.</p>
                    <p>АН «РЕСПЕКТ +» надає широкий спектр послуг, пов'язаних з
                        нерухомістю, зокрема:</p>
                    <ul>
                        <li>купівля-продаж, оренда, обмін нерухомості;</li>
                        <li>пошук продавців і покупців, орендодавців і орендаторів;</li>
                        <li>юридичний супровід угоди;</li>
                        <li>реєстрація або інше оформлення в державних чи інших органах об'єкта
                            по угоді;</li>
                        <li>консультації з питань угод, пов'язаних з нерухомістю;</li>
                        <li>узаконення змін в об'єкті нерухомості;</li>
                        <li>консультації щодо визначення ринкової вартості об'єктів нерухомості
                            (будинок, котедж, квартира, гараж, земельна ділянка, будівля,
                            приміщення, офіс і т. п .);
                        </li>
                        <li>проведення комплексу рекламних заходів щодо просування об'єкта на
                            ринку нерухомості;
                        </li>
                        <li>підготовка, отримання та реєстрація повного пакета документів для
                            всіх видів операцій з нерухомістю;
                        </li>
                        <li>терміновий викуп нерухомості.</li>
                    </ul>
                    <p>Під час індивідуальних показів при купівлі нерухомості ми Вам
                        допоможемо:</p>
                    <p>1. Покажемо Вам об'єкти нерухомості і пояснимо плюси і мінуси.</p>
                    <p>2. Вибрати відповідну нерухомість.</p>
                    <p>3. Попередимо від можливих помилок:</p>
                    <p>&#8212; у виборі розташування нерухомості;</p>
                    <p>&#8212; у виборі об'єкта нерухомості;</p>
                    <p>&#8212; в процесі переговорів з продавцем;</p>
                    <p>&#8212; в процесі оформлення документів.</p>
                    <p>4. Будучи офіційним агентством нерухомості, ми без додаткових
                        посередників будемо представляти Ваші інтереси в процесі купівлі-продажу,
                        обміну нерухомості та простежимо всі формальності в оформленні
                        документів на передачу прав власності.</p>
                    <div>
                        <p class="">Якщо Ви готові продати, купити, здати в оренду, орендувати, обміняти
                            свою нерухомість у м. Дніпрі і Дніпропетровській області або у Вас виникли
                            питання, зв'яжіться з нами прямо зараз за телефонами
                            <b><i><u><a class="phone_number" href="tel:+380985579292" target="_blank" rel="noopener">+380985579292</a>, <a class="phone_number"
                                                href="tel:+380635579292" target="_blank"
                                                rel="noopener">+380635579292</a></u> , +<u><a class="phone_number" href="tel:+380505579292"
                                                                                              target="_blank"
                                                                                              rel="noopener">380505579292 </a></u></i></b>або
                           <span class="send_message" style="color: #D84949; cursor: pointer"><strong> надішліть заявку.</strong></span> </p>
                    </div>
                    <div>
                        <p class="">АН «РЕСПЕКТ+» &#8212; <span>гарантія якісної, професійної, прозорої і вигідної операції з нерухомістю.</span><b></b>
                        </p>
                        <p class=""><b>Ми завжди раді допомогти Вам.</b></p>
                        <p class=""><strong><span>З повагою, директор АН &#171;Респект плюс&#187; Прошенкова Тетяна Георгіївна.</span></strong>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    </section>

@endsection