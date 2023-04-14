const roadSymbols = [
    {
      id: 0,
      symbol_title: "Yo'l bering",
      symbol_img: "./images/signs/yol_bering.gif",
      options:[
        "O'n qolga yol' berish",
        "Yo'l bering",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 1,
      symbol_title: "Turar-joy dahasi",
      symbol_img: "./images/signs/aholi_punkti.gif",
      options:[
        "O'n qolga yol' berish",
        "Turar-joy dahasi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 2,
      symbol_title: "Asosiy yolning oxiri",
      symbol_img: "./images/signs/asosiy_tugash.gif",
      options:[
        "O'n qolga yol' berish",
        "Asosiy yolning oxiri",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 3,
      symbol_title: "Asosiy yo’lning yo’nalishi",
      symbol_img: "./images/signs/asosiy_yol_sxemasi.gif",
      options:[
        "O'n qolga yol' berish",
        "Asosiy yo’lning yo’nalishi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 4,
      symbol_title: "Asosiy yol",
      symbol_img: "./images/signs/asosiy_yol.gif",
      options:[
        "O'n qolga yol' berish",
        "Asosiy yol",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 5,
      symbol_title: "Avtomagistral",
      symbol_img: "./images/signs/avtomagistral.gif",
      options:[
        "O'n qolga yol' berish",
        "Avtomagistral",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 6,
      symbol_title: "Avtomagistral oxiri",
      symbol_img: "./images/signs/avtomagistral_tugashi.gif",
      options:[
        "O'n qolga yol' berish",
        "Avtomagistral oxiri",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 7,
      symbol_title: "Velosiped yolkasi",
      symbol_img: "./images/signs/velosiped_yolkasi.gif",
      options:[
        "O'n qolga yol' berish",
        "Velosiped yolkasi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 8,
      symbol_title: "Transport vositalarini yuvish joyi",
      symbol_img: "./images/signs/avtomoyka.gif",
      options:[
        "O'n qolga yol' berish",
        "Transport vositalarini yuvish joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 9,
      symbol_title: "Texnik xizmat ko’rsatish joyi",
      symbol_img: "./images/signs/avtoservis.gif",
      options:[
        "O'n qolga yol' berish",
        "Texnik xizmat ko’rsatish joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 10,
      symbol_title: "Aylanma harakatlanish",
      symbol_img: "./images/signs/aylanma_yol.gif",
      options:[
        "O'n qolga yol' berish",
        "Aylanma harakatlanish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 11,
      symbol_title: "Belgilangan yo’nalishli transport vositalari uchun mo’ljallangan bo’lak",
      symbol_img: "./images/signs/belgilangan_yonalishli_transport_yolak.gif",
      options:[
        "O'n qolga yol' berish",
        "Belgilangan yo’nalishli transport vositalari uchun mo’ljallangan bo’lak",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 12,
      symbol_title: "Yonilg’i shaxobchasi",
      symbol_img: "./images/signs/benzin.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Yonilg’i shaxobchasi",
        "Tezlik 30"
      ]
    },
    {
      id: 13,
      symbol_title: "Bir izli temir yo’l",
      symbol_img: "./images/signs/bir_izli_temir.gif",
      options:[
        "Bir izli temir yo’l",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 14,
      symbol_title: "Bolalar",
      symbol_img: "./images/signs/bolalar.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Bolalar"
      ]
    },
    {
      id: 15,
      symbol_title: "Oxiri berk yo’l, ko’cha",
      symbol_img: "./images/signs/boshi_berk_kocha.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Oxiri berk yo’l, ko’cha",
        "Tezlik 30"
      ]
    },
    {
      id: 16,
      symbol_title: "Boshqa xavf-xatar",
      symbol_img: "./images/signs/boshqa_xavf.gif",
      options:[
        "O'n qolga yol' berish",
        "Boshqa xavf-xatar",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 17,
      symbol_title: "Chapga burilish taqiqlanadi",
      symbol_img: "./images/signs/burilish_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Chapga burilish taqiqlanadi"
      ]
    },
    {
      id: 18,
      symbol_title: "Eng kam tezlik belgilangan yo’lning oxiri",
      symbol_img: "./images/signs/eng_kam_tezlik_oxiri.gif",
      options:[
        "Eng kam tezlik belgilangan yo’lning oxiri",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 19,
      symbol_title: "Avtomobillarni ko’rikdan o’tkazish joyi",
      symbol_img: "./images/signs/estakada.gif",
      options:[
        "O'n qolga yol' berish",
        "Avtomobillarni ko’rikdan o’tkazish joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 20,
      symbol_title: "Harakatlanish taqiqlangan",
      symbol_img: "./images/signs/faqat_odamlaga.gif",
      options:[
        "O'n qolga yol' berish",
        "Harakatlanish taqiqlangan",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 21,
      symbol_title: "Harakatlanish chapga",
      symbol_img: "./images/signs/harakatlanish_chapga.gif",
      options:[
        "O'n qolga yol' berish",
        "Harakatlanish chapga",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 22,
      symbol_title: "Harakatlanish o'nga",
      symbol_img: "./images/signs/harakatlanish_onga.gif",
      options:[
        "O'n qolga yol' berish",
        "Harakatlanish o'nga",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 23,
      symbol_title: "Harakatlanish o'nga yoki tog'riga",
      symbol_img: "./images/signs/harakatlanish_onga_togriga.gif",
      options:[
        "Harakatlanish o'nga yoki tog'riga",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 24,
      symbol_title: "Harakatlanish tasviri",
      symbol_img: "./images/signs/harakatlanish_tasviri.gif",
      options:[
        "O'n qolga yol' berish",
        "Harakatlanish tasviri",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 25,
      symbol_title: "Harakatlanish tog'riga",
      symbol_img: "./images/signs/harakatlanish_togriga.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Harakatlanish tog'riga"
      ]
    },
    {
      id: 26,
      symbol_title: "Ichimlik suvi",
      symbol_img: "./images/signs/ichimlik_suvi.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Ichimlik suvi",
        "Tezlik 30"
      ]
    },
    {
      id: 27,
      symbol_title: "Ikki tomonlama harakatlanish",
      symbol_img: "./images/signs/ikki_tomonlama_xarakatlanish.gif",
      options:[
        "O'n qolga yol' berish",
        "Ikki tomonlama harakatlanish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 28,
      symbol_title: "Dam olish joyi",
      symbol_img: "./images/signs/kemping.gif",
      options:[
        "O'n qolga yol' berish",
        "Dam olish joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 29,
      symbol_title: "Kirish taqiqlangan",
      symbol_img: "./images/signs/kirish_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Kirish taqiqlangan"
      ]
    },
    {
      id: 30,
      symbol_title: "Mehmonxona",
      symbol_img: "./images/signs/kasalxona.gif",
      options:[
        "Mehmonxona",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 31,
      symbol_title: "Kotarma koprik",
      symbol_img: "./images/signs/kotarma_koprik.gif",
      options:[
        "O'n qolga yol' berish",
        "Kotarma koprik",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 32,
      symbol_title: "Cheklangan balandlik",
      symbol_img: "./images/signs/maksimal_balandlik.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Cheklangan balandlik",
        "Tezlik 30"
      ]
    },
    {
      id: 33,
      symbol_title: "Cheklangan kenglik",
      symbol_img: "./images/signs/maksimal_kenglik.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Cheklangan kenglik"
      ]
    },
    {
      id: 34,
      symbol_title: "Vazn cheklangan",
      symbol_img: "./images/signs/maksimal_ogrlik.gif",
      options:[
        "O'n qolga yol' berish",
        "Vazn cheklangan",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 35,
      symbol_title: "Cheklangan uzunlik",
      symbol_img: "./images/signs/maksimal_uzunlik.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Cheklangan uzunlik",
        "Tezlik 30"
      ]
    },
    {
      id: 36,
      symbol_title: "Avtobus va trolleybus to’xtash joyi",
      symbol_img: "./images/signs/marshrut.gif",
      options:[
        "O'n qolga yol' berish",
        "Avtobus va trolleybus to’xtash joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 37,
      symbol_title: "Mexanik transport vositalarining harakatlanishi taqiqlangan",
      symbol_img: "./images/signs/mexanik_taqiqlangan.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Avtobus va trolleybus to’xtash joyi"
      ]
    },
    {
      id: 38,
      symbol_title: "Mototsikllar harakatlanishi taqiqlangan",
      symbol_img: "./images/signs/motosikl_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Mototsikllar harakatlanishi taqiqlangan",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 39,
      symbol_title: "Eng kam oraliq",
      symbol_img: "./images/signs/oraliq_masofa.gif",
      options:[
        "Eng kam oraliq",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 40,
      symbol_title: "Oshxona",
      symbol_img: "./images/signs/oshxona.gif",
      options:[
        "O'n qolga yol' berish",
        "Oshxona",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 41,
      symbol_title: "Ot-arava harakatlanishi taqiqlangan",
      symbol_img: "./images/signs/ot_arava_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Ot-arava harakatlanishi taqiqlangan",
        "Tezlik 30"
      ]
    },
    {
      id: 42,
      symbol_title: "To’xtab turish joyi",
      symbol_img: "./images/signs/parkovka.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "To’xtab turish joyi",
        "Tezlik 30"
      ]
    },
    {
      id: 43,
      symbol_title: "Pastlab uchuvchi samolyotlar",
      symbol_img: "./images/signs/pastlab_uchuvchi_samolyot.gif",
      options:[
        "O'n qolga yol' berish",
        "Pastlab uchuvchi samolyotlar",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 44,
      symbol_title: "Piyodalar o’tish joyi",
      symbol_img: "./images/signs/piyodalar_otish_joyi.gif",
      options:[
        "O'n qolga yol' berish",
        "Piyodalar o’tish joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 45,
      symbol_title: "Piyodalar yo’lkasi",
      symbol_img: "./images/signs/piyodalar_yolagi.gif",
      options:[
        "O'n qolga yol' berish",
        "Piyodalar yo’lkasi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 46,
      symbol_title: "Shlagbaumsiz temir yo’l kesishmasi",
      symbol_img: "./images/signs/poyezd.gif",
      options:[
        "O'n qolga yol' berish",
        "Shlagbaumsiz temir yo’l kesishmasi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 47,
      symbol_title: "Qayrilish ta'qiqlanadi",
      symbol_img: "./images/signs/qayrilish_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Qayrilish ta'qiqlanadi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 48,
      symbol_title: "Boshqa qatnov qismiga qayta tizilishning boshlang’ich ko’rsatkichi",
      symbol_img: "./images/signs/qayta_tizilish_sxemasi.gif",
      options:[
        "Boshqa qatnov qismiga qayta tizilishning boshlang’ich ko’rsatkichi",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 49,
      symbol_title: "Quvib o’tish taqiqlanadi",
      symbol_img: "./images/signs/quvib_otish_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Quvib o’tish taqiqlanadi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 50,
      symbol_title: "Quvib o’tish ta'qiqlangan hududning oxiri",
      symbol_img: "./images/signs/quvib_otish_taqiqlanadi_tugadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Quvib o’tish ta'qiqlangan hududning oxiri",
        "Tezlik 30"
      ]
    },
    {
      id: 51,
      symbol_title: "Radar",
      symbol_img: "./images/signs/radar.jpg",
      options:[
        "O'n qolga yol' berish",
        "Radar",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 52,
      symbol_title: "Ro’paradagi harakatlanishga nisbatan imtiyoz",
      symbol_img: "./images/signs/ropara_imtiyo.gif",
      options:[
        "O'n qolga yol' berish",
        "Ro’paradagi harakatlanishga nisbatan imtiyoz",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 53,
      symbol_title: "Ro’para harakatlanishning ustunligi",
      symbol_img: "./images/signs/ropara_ustunlik.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Ro’para harakatlanishning ustunligi",
        "Tezlik 30"
      ]
    },
    {
      id: 54,
      symbol_title: "Shlagbaumli temir yo'l kesishmasi",
      symbol_img: "./images/signs/shlakbaumli_temiryol.gif",
      options:[
        "O'n qolga yol' berish",
        "Shlagbaumli temir yo'l kesishmasi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 55,
      symbol_title: "Sirpanchiq yo’l",
      symbol_img: "./images/signs/sirpanchiq_yol.gif",
      options:[
        "Sirpanchiq yo’l",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 56,
      symbol_title: "Sohilga chiqish",
      symbol_img: "./images/signs/soxilga_chiqish.gif",
      options:[
        "O'n qolga yol' berish",
        "Sohilga chiqish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 57,
      symbol_title: "To’xtamasdan harakatlanish taqiqlangan",
      symbol_img: "./images/signs/stop.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "To’xtamasdan harakatlanish taqiqlangan"
      ]
    },
    {
      id: 58,
      symbol_title: "Svetofor tartibga soladi",
      symbol_img: "./images/signs/svetofor.gif",
      options:[
        "O'n qolga yol' berish",
        "Svetofor tartibga soladi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 59,
      symbol_title: "Ta’mirlash ishlari",
      symbol_img: "./images/signs/tamirlash_ishlari.gif",
      options:[
        "O'n qolga yol' berish",
        "Ta’mirlash ishlari",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 60,
      symbol_title: "Ta’sir oralig’i",
      symbol_img: "./images/signs/tasir_doirasi.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Ta’sir oralig’i",
        "Tezlik 30"
      ]
    },
    {
      id: 61,
      symbol_title: "Taksi to’xtab turish joyi",
      symbol_img: "./images/signs/taxi.gif",
      options:[
        "O'n qolga yol' berish",
        "Taksi to’xtab turish joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 62,
      symbol_title: "Telefon",
      symbol_img: "./images/signs/telefon.gif",
      options:[
        "O'n qolga yol' berish",
        "Telefon",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 63,
      symbol_title: "Temir yo’l kesishmasining yaqinligi haqida ogohlantirish",
      symbol_img: "./images/signs/temiryol_kesishmasining_yaqinligi.gif",
      options:[
        "O'n qolga yol' berish",
        "Temir yo’l kesishmasining yaqinligi haqida ogohlantirish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 64,
      symbol_title: "Yuqori tezlik cheklangan",
      symbol_img: "./images/signs/tezlik-cheklangan.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Yuqori tezlik cheklangan",
        "Tezlik 30"
      ]
    },
    {
      id: 65,
      symbol_title: "Tik nishablik",
      symbol_img: "./images/signs/tik_nishablik.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Tik nishablik"
      ]
    },
    {
      id: 66,
      symbol_title: "Tik balandlik",
      symbol_img: "./images/signs/tik_qiyalik.gif",
      options:[
        "O'n qolga yol' berish",
        "Tik balandlik",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 67,
      symbol_title: "Tirkama bilan harakatlanish taqiqlangan",
      symbol_img: "./images/signs/tirkama_taqiq.gif",
      options:[
        "O'n qolga yol' berish",
        "Tirkama bilan harakatlanish taqiqlangan",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 68,
      symbol_title: "Xojatxona",
      symbol_img: "./images/signs/toilet.gif",
      options:[
        "O'n qolga yol' berish",
        "Xojatxona",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 69,
      symbol_title: "Tonnel",
      symbol_img: "./images/signs/tonnel.gif",
      options:[
        "Tonnel", 
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 70,
      symbol_title: "Tosh otilishi",
      symbol_img: "./images/signs/tosh_otilishi.gif",
      options:[
        "O'n qolga yol' berish",
        "Tosh otilishi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 71,
      symbol_title: "Toshlar tushishi",
      symbol_img: "./images/signs/tosh_tushishi.gif",
      options:[
        "Toshlar tushishi",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 72,
      symbol_title: "To’siqni o’ngdan yoki chapdan chetlab o’tish",
      symbol_img: "./images/signs/tosiq_chap_ili_ong.gif",
      options:[
        "O'n qolga yol' berish",
        "To’siqni o’ngdan yoki chapdan chetlab o’tish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 73,
      symbol_title: "To’siqni chapdan chetlab o’tish",
      symbol_img: "./images/signs/tosiq_chapdan.gif",
      options:[
        "O'n qolga yol' berish",
        "To’siqni chapdan chetlab o’tish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 74,
      symbol_title: "To’siqni chapdan o'ngdan chetlab o'tish",
      symbol_img: "./images/signs/tosiq_ongdan.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "To’siqni chapdan o'ngdan chetlab o'tish"
      ]
    },
    {
      id: 75,
      symbol_title: "Tovush moslamalaridan foydalanish ta'qiqlangan",
      symbol_img: "./images/signs/tovushli_signal.gif",
      options:[
        "O'n qolga yol' berish",
        "Tovush moslamalaridan foydalanish ta'qiqlangan",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 76,
      symbol_title: "To’xtab turish ta'qiqlangan",
      symbol_img: "./images/signs/toxtab_turish.gif",
      options:[
        "O'n qolga yol' berish",
        "To’xtab turish ta'qiqlangan",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 77,
      symbol_title: "To’xtash taqiqlangan",
      symbol_img: "./images/signs/toxtash_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "To’xtash taqiqlangan",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 78,
      symbol_title: "Transport vositasini to’xtab turish joyiga qo’yish usuli",
      symbol_img: "./images/signs/toxtash_usuli.gif",
      options:[
        "Transport vositasini to’xtab turish joyiga qo’yish usuli",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 79,
      symbol_title: "Traktorlar harakatlanishi taqiqlangan",
      symbol_img: "./images/signs/traktor.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Traktorlar harakatlanishi taqiqlangan",
        "Tezlik 30"
      ]
    },
    {
      id: 80,
      symbol_title: "Tramvay yo’li bilan kesishuv",
      symbol_img: "./images/signs/tramvay_kesishuv.gif",
      options:[
        "O'n qolga yol' berish",
        "Tramvay yo’li bilan kesishuv",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 81,
      symbol_title: "Tramvay to’xtash joyi",
      symbol_img: "./images/signs/tramvay.gif",
      options:[
        "O'n qolga yol' berish",
        "Tramvay to’xtash joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 82,
      symbol_title: "Transport vositasining turi",
      symbol_img: "./images/signs/transport_vositasi_turi.gif",
      options:[
        "Transport vositasining turi",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 83,
      symbol_title: "Turar-joy dahasining oxiri",
      symbol_img: "./images/signs/turar_joy_tugash.gif",
      options:[
        "Turar-joy dahasining oxiri",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 84,
      symbol_title: "Mol haydab o’tish",
      symbol_img: "./images/signs/uy_hayvonlari.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Mol haydab o’tish"
      ]
    },
    {
      id: 85,
      symbol_title: "Velosipedda harakatlanish ta'qiqlangan",
      symbol_img: "./images/signs/velik_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Velosipedda harakatlanish ta'qiqlangan",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 86,
      symbol_title: "Velosiped yo’lkasi bilan kesishuv",
      symbol_img: "./images/signs/velosiped.gif",
      options:[
        "O'n qolga yol' berish",
        "Velosiped yo’lkasi bilan kesishuv",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 87,
      symbol_title: "Piyodalarning yer ostidan o’tish joyi",
      symbol_img: "./images/signs/yer_osti_yoli.gif",
      options:[
        "O'n qolga yol' berish",
        "Piyodalarning yer ostidan o’tish joyi",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 88,
      symbol_title: "Piyodalarning yer ustidan o’tish joyi",
      symbol_img: "./images/signs/yer_usti_yoli.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Piyodalarning yer ustidan o’tish joyi",
        "Tezlik 30"
      ]
    },
    {
      id: 89,
      symbol_title: "Yonlama shamol",
      symbol_img: "./images/signs/yonlama_shamol.gif",
      options:[
        "O'n qolga yol' berish",
        "Yonlama shamol",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 90,
      symbol_title: "Yovvoyi hayvonlar",
      symbol_img: "./images/signs/yovvoyi_hayvonlar.gif",
      options:[
        "O'n qolga yol' berish",
        "Yovvoyi hayvonlar",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 91,
      symbol_title: "Yuk avtomobillarida quvib o’tish taqiqlangan",
      symbol_img: "./images/signs/yuk_avtomobil_quvish_taqiqlanadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Yuk avtomobillarida quvib o’tish taqiqlangan",
        "Tezlik 30"
      ]
    },
    {
      id: 92,
      symbol_title: "Yuk avtommobillarida quvib o’tish taqiqlangan hududning oxiri",
      symbol_img: "./images/signs/yuk_avtomobil_quvish_taqiqlanadi_oxiri.gif",
      options:[
        "O'n qolga yol' berish",
        "Yuk avtommobillarida quvib o’tish taqiqlangan hududning oxiri",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 93,
      symbol_title: "Tirbandlik",
      symbol_img: "./images/signs/tirbandlik.gif",
      options:[
        "Tirbandlik",
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 94,
      symbol_title: "Notekis yo’l",
      symbol_img: "./images/signs/notekis_yol.gif",
      options:[
        "O'n qolga yol' berish",
        "Notekis yo’l",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 95,
      symbol_title: "Barcha cheklovlarning oxiri",
      symbol_img: "./images/signs/barcha.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tezlik 30",
        "Barcha cheklovlarning oxiri"
      ]
    },
    {
      id: 96,
      symbol_title: "Tavsiya etilgan tezlik",
      symbol_img: "./images/signs/tavsiya_etilgan_tezlik.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Tavsiya etilgan tezlik",
        "Tezlik 30"
      ]
    },
    {
      id: 97,
      symbol_title: "Surat va video",
      symbol_img: "./images/signs/surat_foto.png",
      options:[
        "O'n qolga yol' berish",
        "Surat va video",
        "Oldinda jarlik",
        "Tezlik 30"
      ]
    },
    {
      id: 98,
      symbol_title: "Falokatli holatlar uchun kirish yo’li",
      symbol_img: "./images/signs/xatar_yol.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Falokatli holatlar uchun kirish yo’li",
        "Tezlik 30"
      ]
    },
    {
      id: 99,
      symbol_title: "Shifoxona",
      symbol_img: "./images/signs/shifoxona.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Shifoxona",
        "Tezlik 30"
      ]
    },
    {
      id: 100,
      symbol_title: "Yuqori tezlik cheklangan hududning oxiri",
      symbol_img: "./images/signs/maksimal_tezlik_tugadi.gif",
      options:[
        "O'n qolga yol' berish",
        "Oldinda jarlik",
        "Yuqori tezlik cheklangan hududning oxiri",
        "Tezlik 30"
      ]
    },
  ]
