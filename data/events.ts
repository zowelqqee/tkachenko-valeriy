/**
 * HOW TO ADD A NEW EVENT
 * ----------------------
 * 1. Copy any existing event object below.
 * 2. Update every field — pay attention to:
 *    - `id` and `slug`: must be unique (slug is used in URLs)
 *    - `datetimeISO`: must be valid ISO 8601, e.g. "2026-09-15T20:00:00+03:00"
 *    - `published: true` — set to false to hide from the site
 *    - `featured: true` — makes this event appear in the hero/featured slot
 *      (only the nearest featured event is shown; others become normal cards)
 * 3. Add the poster image to /public/images/posters/<slug>.<ext>
 *    (if omitted, a genre-colored gradient is shown instead)
 * 4. `priceFrom` and `ageRating` are optional — omit them if there is no
 *    confirmed information yet.
 *
 * GENRE OPTIONS: Концерт | Творческий вечер | Моноспектакль | Детям
 *              | Джаз | Поп | Классика | Фолк | Рок | Блюз
 * AGE RATINGS:   0+ | 6+ | 12+ | 16+ | 18+ (optional)
 */

import type { Event } from '@/types/event'

export const events: Event[] = [
  {
    id: 'evt-20260425-grishaeva',
    slug: 'nonna-grishaeva-2026-04-25',
    title: 'Творческий вечер-концерт заслуженной артистки Нонны Гришаевой',
    description:
      'Творческий вечер-концерт заслуженной артистки Нонны Гришаевой пройдет 25 апреля 2026 года в 19:00 в концертном зале «Колизей» в Санкт-Петербурге.',
    genre: 'Творческий вечер',
    date: '2026-04-25',
    time: '19:00',
    datetimeISO: '2026-04-25T19:00:00+03:00',
    venue: 'Концертный зал «Колизей»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/koncert/tvorcheskiy-vecher-kontsert-zaslujennoy-artistki-nonnyi-grishaevoy?type=A&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=265870',
    posterImage: '/images/posters/nonna-grishaeva-2026-04-25.jpeg',
    featured: true,
    published: true,
  },
  {
    id: 'evt-20260710-bulanova',
    slug: 'tatyana-bulanova-2026-07-10',
    title: 'Концерт Татьяны Булановой',
    description:
      'Концерт Татьяны Булановой пройдет 10 июля 2026 года в 19:00 на площадке Roof Place в Санкт-Петербурге.',
    genre: 'Поп',
    date: '2026-07-10',
    time: '19:00',
    datetimeISO: '2026-07-10T19:00:00+03:00',
    venue: 'Roof Place',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://spb.kassir.ru/frame/event/3793018?key=e032c72c-da36-caea-8039-53dcef0e2a09&WIDGET_1988132384=ic6cf0ana5hoal83hlb97bpo2s',
    posterImage: '/images/posters/tatyana-bulanova-2026-07-10.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261002-asadov',
    slug: 'vladimir-glazunov-asadov-2026-10-02',
    title: 'Авторский моноспектакль Владимира Глазунова «АСАДОВ. СЛЕПОЙ ПОЭТ, КОТОРЫЙ ВИДЕЛ СЕРДЦЕМ»',
    description:
      'Авторский моноспектакль Владимира Глазунова «АСАДОВ. СЛЕПОЙ ПОЭТ, КОТОРЫЙ ВИДЕЛ СЕРДЦЕМ» пройдет 2 октября 2026 года в 19:00 в концертном зале «У Финляндского» в Санкт-Петербурге.',
    genre: 'Моноспектакль',
    date: '2026-10-02',
    time: '19:00',
    datetimeISO: '2026-10-02T19:00:00+03:00',
    venue: 'Концертный зал «У Финляндского»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://spb.kassir.ru/frame/event/3781853?key=e032c72c-da36-caea-8039-53dcef0e2a09&WIDGET_1988132384=ic6cf0ana5hoal83hlb97bpo2s',
    posterImage: '/images/posters/vladimir-glazunov-asadov-2026-10-02.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261008-peregudov',
    slug: 'sergey-peregudov-2026-10-08',
    title: 'Творческая встреча с актером театра и кино Сергеем Перегудовым',
    description:
      'Творческая встреча с актером театра и кино Сергеем Перегудовым состоится 8 октября 2026 года в 19:00 в концертном зале «У Финляндского» в Санкт-Петербурге.',
    genre: 'Творческий вечер',
    date: '2026-10-08',
    time: '19:00',
    datetimeISO: '2026-10-08T19:00:00+03:00',
    venue: 'Концертный зал «У Финляндского»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/koncert/tvorcheskaya-vstrecha-s-akterom-teatra-i-kino-sergeem-peregudovyim?type=A&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=225521',
    posterImage: '/images/posters/sergey-peregudov-2026-10-08.png',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261015-muravyova',
    slug: 'irina-muravyova-2026-10-15',
    title: 'Творческий вечер народной артистки Ирины Муравьевой',
    description:
      'Творческий вечер народной артистки Ирины Муравьевой пройдет 15 октября 2026 года в 19:00 в концертном зале «У Финляндского» в Санкт-Петербурге.',
    genre: 'Творческий вечер',
    date: '2026-10-15',
    time: '19:00',
    datetimeISO: '2026-10-15T19:00:00+03:00',
    venue: 'Концертный зал «У Финляндского»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/teatr/tvorcheskiy-vecher-irinyi-muravevoy?type=A&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=584',
    posterImage: '/images/posters/irina-muravyova-2026-10-15.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261017-siniy-traktor',
    slug: 'siniy-traktor-2026-10-17-1200',
    title: 'Синий трактор',
    description:
      'Семейное шоу «Синий трактор» пройдет 17 октября 2026 года в 12:00 в концертном зале «У Финляндского» в Санкт-Петербурге.',
    genre: 'Детям',
    date: '2026-10-17',
    time: '12:00',
    datetimeISO: '2026-10-17T12:00:00+03:00',
    venue: 'Концертный зал «У Финляндского»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/detyam/siniy-traktor?type=A&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=22061',
    posterImage: '/images/posters/siniy-traktor-2026-10-17.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261017-rutberg',
    slug: 'yuliya-rutberg-13-voprosov-k-ahmatovoy-2026-10-17',
    title: 'Юлия Рутберг. 13 вопросов к Ахматовой',
    description:
      'Моноспектакль Юлии Рутберг «13 вопросов к Ахматовой» пройдет 17 октября 2026 года в 19:00 в концертном зале «У Финляндского» в Санкт-Петербурге.',
    genre: 'Моноспектакль',
    date: '2026-10-17',
    time: '19:00',
    datetimeISO: '2026-10-17T19:00:00+03:00',
    venue: 'Концертный зал «У Финляндского»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://afisha.yandex.ru/saint-petersburg/monoperformance/iuliia-rutberg-13-voprosov-k-akhmatovoi?utm_source=admitad&utm_content=36b9a108b00927a6784edd86fe59e9ef&utm_campaign=1609569&source=suggest',
    posterImage: '/images/posters/yuliya-rutberg-13-voprosov-k-ahmatovoy-2026-10-17.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261021-zhilin',
    slug: 'sergey-zhilin-russkie-kompozitory-2026-10-21',
    title: 'Сергей Жилин и «Фонограф Джаз-Бэнд». Хит-коллекция музыки великих русских композиторов',
    description:
      'Концерт Сергея Жилина и «Фонограф Джаз-Бэнд» пройдет 21 октября 2026 года в 19:00 в Филармонии им. Д.Д. Шостаковича в Санкт-Петербурге.',
    genre: 'Джаз',
    date: '2026-10-21',
    time: '19:00',
    datetimeISO: '2026-10-21T19:00:00+03:00',
    venue: 'Филармония им. Д.Д. Шостаковича',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/koncert/filarmoniya-im-d-d-shostakovicha/sergey-jilin-i-fonograf-djaz-bend-russkoe-izbrannoe-hit-kollektsiya-muzyiki-velikih-russkih-kompozit_2026-10-21?type=E&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=3524403',
    posterImage: '/images/posters/sergey-zhilin-russkie-kompozitory-2026-10-21.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261104-kovalchuk',
    slug: 'anna-kovalchuk-2026-11-04',
    title: 'Творческий вечер Анны Ковальчук',
    description:
      'Творческий вечер Анны Ковальчук пройдет 4 ноября 2026 года в 19:00 в концертном зале «Колизей» в Санкт-Петербурге.',
    genre: 'Творческий вечер',
    date: '2026-11-04',
    time: '19:00',
    datetimeISO: '2026-11-04T19:00:00+03:00',
    venue: 'Концертный зал «Колизей»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/koncert/tvorcheskiy-vecher-annyi-kovalchuk?type=A&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=149813',
    posterImage: '/images/posters/anna-kovalchuk-2026-11-04.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261231-semenovsky-1500',
    slug: 'semenovsky-orchestra-2026-12-31-1500',
    title: 'Концерт симфонического оркестра «Семеновский»',
    description:
      'Концерт симфонического оркестра «Семеновский» пройдет 31 декабря 2026 года в 15:00 в концертном зале «Колизей» в Санкт-Петербурге.',
    genre: 'Классика',
    date: '2026-12-31',
    time: '15:00',
    datetimeISO: '2026-12-31T15:00:00+03:00',
    venue: 'Концертный зал «Колизей»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://spb.kassir.ru/frame/action/128416?key=e032c72c-da36-caea-8039-53dcef0e2a09&WIDGET_1988132384=ic6cf0ana5hoal83hlb97bpo2s',
    posterImage: '/images/posters/semenovsky-orchestra-2026-12-31.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261231-admiralty-1500',
    slug: 'admiralty-orchestra-2026-12-31-1500',
    title: 'Новогодний концерт Адмиралтейского оркестра',
    description:
      'Новогодний концерт Адмиралтейского оркестра пройдет 31 декабря 2026 года в 15:00 в концертном зале «У Финляндского» в Санкт-Петербурге.',
    genre: 'Классика',
    date: '2026-12-31',
    time: '15:00',
    datetimeISO: '2026-12-31T15:00:00+03:00',
    venue: 'Концертный зал «У Финляндского»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://afisha.yandex.ru/saint-petersburg/concert/novogodniy-kontsert-admiralteyskogo-orkestra-2026-12-31?utm_source=admitad&utm_content=36b9a108b00927a6784edd86fe59e9ef&utm_campaign=1609569&source=search-page',
    posterImage: '/images/posters/admiralty-orchestra-2026-12-31.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261231-semenovsky-1800',
    slug: 'semenovsky-orchestra-2026-12-31-1800',
    title: 'Концерт симфонического оркестра «Семеновский»',
    description:
      'Концерт симфонического оркестра «Семеновский» пройдет 31 декабря 2026 года в 18:00 в концертном зале «Колизей» в Санкт-Петербурге.',
    genre: 'Классика',
    date: '2026-12-31',
    time: '18:00',
    datetimeISO: '2026-12-31T18:00:00+03:00',
    venue: 'Концертный зал «Колизей»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://spb.kassir.ru/frame/action/128416?key=e032c72c-da36-caea-8039-53dcef0e2a09&WIDGET_1988132384=ic6cf0ana5hoal83hlb97bpo2s',
    posterImage: '/images/posters/semenovsky-orchestra-2026-12-31.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20261231-admiralty-1800',
    slug: 'admiralty-orchestra-2026-12-31-1800',
    title: 'Новогодний концерт Адмиралтейского оркестра',
    description:
      'Новогодний концерт Адмиралтейского оркестра пройдет 31 декабря 2026 года в 18:00 в концертном зале «У Финляндского» в Санкт-Петербурге.',
    genre: 'Классика',
    date: '2026-12-31',
    time: '18:00',
    datetimeISO: '2026-12-31T18:00:00+03:00',
    venue: 'Концертный зал «У Финляндского»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://afisha.yandex.ru/saint-petersburg/concert/novogodniy-kontsert-admiralteyskogo-orkestra-2026-12-31?utm_source=admitad&utm_content=36b9a108b00927a6784edd86fe59e9ef&utm_campaign=1609569&source=search-page',
    posterImage: '/images/posters/admiralty-orchestra-2026-12-31.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20270101-bessonov',
    slug: 'ivan-bessonov-2027-01-01',
    title: 'Концерт пианиста Ивана Бессонова',
    description:
      'Концерт пианиста Ивана Бессонова пройдет 1 января 2027 года в 19:00 в Филармонии им. Д.Д. Шостаковича в Санкт-Петербурге.',
    genre: 'Классика',
    date: '2027-01-01',
    time: '19:00',
    datetimeISO: '2027-01-01T19:00:00+03:00',
    venue: 'Филармония им. Д.Д. Шостаковича',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/koncert/kontsert-pobeditelya-konkursa-evrovidenie-2018-klassicheskaya-muzyika-ivana-bessonova?type=A&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=17548',
    posterImage: '/images/posters/ivan-bessonov-2027-01-01.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20270102-zhilin',
    slug: 'sergey-zhilin-a-sneg-idet-2027-01-02',
    title: 'Сергей Жилин и «Фонограф Джаз-Бэнд» — «А снег идет»',
    description:
      'Концерт Сергея Жилина и «Фонограф Джаз-Бэнд» «А снег идет» пройдет 2 января 2027 года в 19:00 в Филармонии им. Д.Д. Шостаковича в Санкт-Петербурге.',
    genre: 'Джаз',
    date: '2027-01-02',
    time: '19:00',
    datetimeISO: '2027-01-02T19:00:00+03:00',
    venue: 'Филармония им. Д.Д. Шостаковича',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://spb.kassir.ru/frame/event/3765829?key=e032c72c-da36-caea-8039-53dcef0e2a09&WIDGET_1988132384=ic6cf0ana5hoal83hlb97bpo2s',
    posterImage: '/images/posters/sergey-zhilin-a-sneg-idet-2027-01-02.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20270103-papoyan',
    slug: 'ilya-papoyan-2027-01-03',
    title: 'Концерт лауреата Международного конкурса пианистов им. П.И. Чайковского Ильи Папояна',
    description:
      'Концерт Ильи Папояна пройдет 3 января 2027 года в 19:00 в Капелле в Санкт-Петербурге.',
    genre: 'Классика',
    date: '2027-01-03',
    time: '19:00',
    datetimeISO: '2027-01-03T19:00:00+03:00',
    venue: 'Капелла',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/koncert/kontsert-laureata-mejdunarodnogo-konkursa-pianistov-im-pi-chaykovskogo-ili-papoyana?type=A&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=199645',
    posterImage: '/images/posters/ilya-papoyan-2027-01-03.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20270104-mikhaylov',
    slug: 'alexander-mikhaylov-2027-01-04',
    title: 'Творческий вечер Александра Михайлова',
    description:
      'Творческий вечер Александра Михайлова пройдет 4 января 2027 года в 19:00 в концертном зале «У Финляндского» в Санкт-Петербурге.',
    genre: 'Творческий вечер',
    date: '2027-01-04',
    time: '19:00',
    datetimeISO: '2027-01-04T19:00:00+03:00',
    venue: 'Концертный зал «У Финляндского»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://spb.kassir.ru/frame/event/3824396?key=e032c72c-da36-caea-8039-53dcef0e2a09&WIDGET_1988132384=1frrcm6i1vu2r97mahs43re4ak',
    posterImage: '/images/posters/alexander-mikhaylov-2027-01-04.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20270105-pesnyary',
    slug: 'pesnyary-2027-01-05',
    title: 'Концерт ансамбля «Песняры»',
    description:
      'Концерт ансамбля «Песняры» пройдет 5 января 2027 года в 19:00 в концертном зале «Колизей» в Санкт-Петербурге.',
    genre: 'Фолк',
    date: '2027-01-05',
    time: '19:00',
    datetimeISO: '2027-01-05T19:00:00+03:00',
    venue: 'Концертный зал «Колизей»',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://spb.kassir.ru/frame/action/16267?key=e032c72c-da36-caea-8039-53dcef0e2a09&WIDGET_1988132384=ic6cf0ana5hoal83hlb97bpo2s',
    posterImage: '/images/posters/pesnyary-2027-01-05.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'evt-20270223-ansambl',
    slug: 'ansambl-leningradskogo-voennogo-okruga-2027-02-23',
    title: 'Концерт Ансамбля песни и пляски Ленинградского военного округа',
    description:
      'Концерт Ансамбля песни и пляски Ленинградского военного округа пройдет 23 февраля 2027 года в 15:00 в Филармонии им. Д.Д. Шостаковича в Санкт-Петербурге.',
    genre: 'Концерт',
    date: '2027-02-23',
    time: '15:00',
    datetimeISO: '2027-02-23T15:00:00+03:00',
    venue: 'Филармония им. Д.Д. Шостаковича',
    city: 'Санкт-Петербург',
    currency: 'RUB',
    buyTicketUrl:
      'https://widget.kassir.ru/koncert/kontsert-ansamblya-pesni-i-plyaski-leningradskogo-voennogo-okruga?type=A&key=e032c72c-da36-caea-8039-53dcef0e2a09&domain=spb.kassir.ru&id=15522',
    posterImage: '/images/posters/ansambl-leningradskogo-voennogo-okruga-2027-02-23.jpg',
    featured: false,
    published: true,
  },
]
