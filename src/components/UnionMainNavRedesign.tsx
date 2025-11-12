const menus = [
  {
    label: "О Союзе",
    items: [
      { label: "История", href: "#history" },
      { label: "Миссия", href: "#mission" },
      { label: "Устав", href: "#charter" },
      { label: "Руководство", href: "#leadership" }
    ]
  },
  {
    label: "Членство",
    items: [
      { label: "Как вступить", href: "#join" },
      { label: "Преимущества", href: "#benefits" },
      { label: "Оплата взносов", href: "#payment" }
    ]
  },
  {
    label: "Обучение",
    items: [
      { label: "Программы", href: "#programs" },
      { label: "Расписание", href: "#schedule" },
      { label: "Преподаватели", href: "#teachers" }
    ]
  },
  {
    label: "Реестр специалистов",
    href: "#registry"
  },
  {
    label: "Конференции",
    items: [
      { label: "Предстоящие", href: "#upcoming" },
      { label: "Архив", href: "#archive" }
    ]
  },
  {
    label: "Этика",
    items: [
      { label: "Кодекс", href: "#code" },
      { label: "Комиссия", href: "#committee" }
    ]
  }
];

export default function UnionMainNavRedesign() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/f0369a09-9f21-4c14-9cc2-d39eeee872fa.jpg" 
                alt="РПА" 
                className="h-12 w-auto" 
              />
            </div>
            <button className="md:hidden rounded-lg border px-3 py-2" aria-label="Меню">
              Меню
            </button>
          </div>
        </div>
      </header>

      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4">
          <div className="sr-only">Быстрая навигация по направлениям Союза</div>
          <nav className="relative">
            <ul className="flex items-stretch gap-2 overflow-x-auto whitespace-nowrap py-2 md:py-0 md:h-12">
              {menus.map((m, idx) => (
                <li key={idx} className="group relative">
                  <a
                    href={m.href || "#"}
                    className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm leading-none hover:bg-gray-50 md:h-8 md:mt-2"
                    aria-haspopup={m.items ? "true" : undefined}
                    aria-expanded="false"
                  >
                    <span className="truncate max-w-[15ch] md:max-w-none">{m.label}</span>
                    {m.items && (
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" className="opacity-70 group-hover:opacity-100 fill-current">
                        <path d="M7 10l5 5 5-5z"/>
                      </svg>
                    )}
                  </a>

                  {m.items && (
                    <div className="absolute left-0 top-full z-50 mt-2 hidden w-[280px] rounded-xl border bg-white p-2 shadow-lg group-hover:block">
                      <ul className="max-h-[70vh] overflow-auto">
                        {m.items.map((it, i) => (
                          <li key={i}>
                            <a
                              href={it.href}
                              className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
                            >
                              {it.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!m.items && (
                    <div className="absolute left-0 top-full z-40 mt-2 hidden rounded-md bg-white px-2 py-1 text-xs text-gray-600 shadow group-hover:block">
                      Переход на страницу с перечнем проверенных специалистов
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold mb-4">Российская Психотерапевтическая Ассоциация</h1>
          <p className="text-lg text-gray-600">Объединяем профессионалов в области психического здоровья</p>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Союз охраны психического здоровья</div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Поиск, языки и переключатель ролей удалены по ТЗ</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
