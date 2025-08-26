import React from "react";

export default function ApiCards() {
    const articles = [
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Ariel Zilber",
            "title": "‘Silicon Valley’ star Kumail Nanjiani says Elon Musk hated the HBO comedy’s depiction of parties",
            "description": "Kumail Nanjiani said Musk complained to him that the tech gatherings depicted on the HBO comedy were nothing like his exclusive billionaire bashes.",
            "url": "https://nypost.com/2025/08/19/business/silicon-valley-star-kumail-nanjiani-says-elon-musk-hated-hbo-satire/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/08/like-parties-i-go-much-109798383.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2025-08-19T14:45:37Z",
            "content": "Elon Musk hated HBO’s “Silicon Valley” so much that he reportedly felt compelled to gripe about its satirical portrayal of lame “tech bro” parties — and brag to the show’s star about the superior shi… [+5437 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Sam Boughedda",
            "title": "Jackson Hole 2025 FAQs: You ask, BofA answers",
            "description": "Investing.com -- Markets are turning their attention to the Federal Reserve’s annual Jackson Hole symposium, with investors looking to Fed Chair Jerome...",
            "url": "https://finance.yahoo.com/news/jackson-hole-2025-faqs-ask-144240109.html",
            "urlToImage": "https://s.yimg.com/cv/apiv2/cv/apiv2/social/images/yahoo-finance-default-logo.png",
            "publishedAt": "2025-08-19T14:42:40Z",
            "content": "Investing.com -- Markets are turning their attention to the Federal Reserves annual Jackson Hole symposium, with investors looking to Fed Chair Jerome Powells August 22 speech for signals on policy d… [+1951 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hwupgrade.it"
            },
            "author": null,
            "title": "Robot che corrono, ballano e cadono: la prima Olimpiade dei robot umanoidi in Cina è già storia",
            "description": "A Pechino si è conclusa la prima edizione dei World Humanoid Robot Games: tre giorni di gare con 280 squadre provenienti da 16 Paesi. Tra acrobazie riuscite e rovinose cadute, i protagonisti sono stati i robot di Unitree, UBTECH e X-Humanoid, capaci di conqui…",
            "url": "https://smarthome.hwupgrade.it/news/robot/robot-che-corrono-ballano-e-cadono-la-prima-olimpiade-dei-robot-umanoidi-in-cina-gia-storia_142316.html",
            "urlToImage": "https://www.hwupgrade.it/i/n/whrgoc_720.jpg",
            "publishedAt": "2025-08-19T14:41:41Z",
            "content": "Lo scorso weekend Pechino ha ospitato la prima edizione dei World Humanoid Robot Games, un evento sportivo che ha visto sfidarsi più di 280 team provenienti da 16 Paesi. Per tre giorni la capitale ci… [+2319 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "cnbc.com",
            "title": "Why Tesla Cybertruck sales are falling short of expectations",
            "description": "Sales of Tesla's flashy Cybertruck are a fraction of the more than a million reservations the company had a month before deliveries began rolling out in November 2023.\nSo far, U.S. sales total just over 52,000 units, according to Cox Automotive.\n\"It's a reall…",
            "url": "https://biztoc.com/x/53e8cb03f3c43127",
            "urlToImage": "https://biztoc.com/cdn/53e8cb03f3c43127_s.webp",
            "publishedAt": "2025-08-19T14:39:59Z",
            "content": "Sales of Tesla's flashy Cybertruck are a fraction of the more than a million reservations the company had a month before deliveries began rolling out in November 2023.So far, U.S. sales total just ov… [+139 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew J. Hawkins",
            "title": "Tesla will sell you back the turn signal stalk it removed from the Model 3",
            "description": "For a company that likes to fire a bunch of people, only to later regret the decision and try to hire those same people back, this latest news shouldn’t come as much of a surprise: Tesla is selling a retrofit turn signal stalk to replace the one it removed fr…",
            "url": "https://www.theverge.com/tesla/761325/tesla-turn-sginal-stalk-model-3-retrofit-price-china",
            "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/08/Screenshot-2025-08-19-at-10.25.33%E2%80%AFAM.png?quality=90&strip=all&crop=4.8569454042847%2C0%2C90.286109191431%2C100&w=1200",
            "publishedAt": "2025-08-19T14:34:55Z",
            "content": "<ul><li></li><li></li><li></li></ul>\r\nFor now, the retrofit turn signal stalk is only available in China for approximately $348.\r\nFor now, the retrofit turn signal stalk is only available in China fo… [+2831 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "Indiana Jones får bättre hår nästa månad",
            "description": "Med hjälp av Nvidias RTX Hair\n\n\n\n\n\n\nNvidia har visat upp hur Indiana Jones hår kommer att förbättras med Nvidias nya teknik RTX Hair i spelet Indiana Jones and the Great Circle.\n\nRTX Hair använder sig av sfärer istället för trianglar när håret på karaktärerna…",
            "url": "https://feber.se/spel/indiana-jones-far-battre-har-nasta-manad/482469/",
            "urlToImage": "https://static.feber.se/article_images/62/54/54/625454.jpg",
            "publishedAt": "2025-08-19T14:30:00Z",
            "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n19 idag\r\n28 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIkea har gjort en tallrik för köttbullar\r\nMed Gustaf Westman\r\n-95kg\r\n0\r\nAnnons från \r\nAnnons\r\nMSNBC byter nam… [+24489 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": null,
            "title": "Why Tesla Cybertruck sales are falling short of expectations",
            "description": "Tesla said Cybertruck demand was \"off the charts\". Sales never met expectations, and have been falling.  But some owners love their trucks. So, what happened?",
            "url": "https://www.cnbc.com/2025/08/19/tesla-cybertruck-sales-musk.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108134675-1745324912221-gettyimages-2210779954-TESLA_SHARES.jpeg?v=1745324973&w=1920&h=1080",
            "publishedAt": "2025-08-19T14:27:56Z",
            "content": "Sales of Tesla's flashy Cybertruck are a fraction of the more than a million reservations the company had a month before deliveries began rolling out in November 2023.\r\nSo far, U.S. sales total just … [+2608 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lucas Handley",
            "title": "Los más grandes ganadores de los Juegos Mundiales Robóticos Humanoides de China",
            "description": "Las firmas chinas dominaron los primeros juegos olímpicos robóticos del mundo.",
            "url": "https://es.gizmodo.com/los-mas-grandes-ganadores-de-los-juegos-mundiales-roboticos-humanoides-de-china-2000186785",
            "urlToImage": "https://es.gizmodo.com/app/uploads/2025/08/Diseno-sin-titulo-4-20-1200x675.jpg",
            "publishedAt": "2025-08-19T14:25:15Z",
            "content": "En China terminaron los primeros Juegos Mundiales Robóticos Humanoides, que básicamente son juegos olímpicos, pero de robots.\r\nEl evento duró tres días y comenzó el jueves 14 de agosto dentro del Nat… [+3346 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Donanimhaber.com"
            },
            "author": "",
            "title": "Tesla, Model 3'e sinyal kolunu geri getirdi",
            "description": "Güncellenen Tesla Model 3 ile ilgili en büyük eleştirilerden biri, geleneksel sinyal kolunun kaldırılıp yerine düğme konmasıydı. Eleştirileri dinleyen Tesla, Çin'de sinyal kolunu geri getirdi.",
            "url": "https://www.donanimhaber.com/tesla-model-3-e-sinyal-kolunu-geri-getirdi--195154",
            "urlToImage": "https://www.donanimhaber.com/images/images/haber/195154/src_340x1912xtesla-model-3-e-sinyal-kolunu-geri-getirdi.jpg",
            "publishedAt": "2025-08-19T14:25:00Z",
            "content": "a').click(); event.preventDefault();\"&gt;Tam Boyutta GörGüncellenen Tesla Model 3 Highland, Austos 2023te piyasaya sürülmi ve birçok yenilik getirmiti. Ancak baz deiiklikler tartmalara yol açmt. Vite… [+1836 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Peter Johnson",
            "title": "Hyundai halts production of another luxury EV",
            "description": "Another one bites the dust. Hyundai Motor has halted production of another luxury EV in the US to focus on more popular models like its best-selling Tucson SUV.\n\n\n\n more…",
            "url": "http://electrek.co/2025/08/19/hyundai-halts-production-of-another-luxury-ev/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/06/Genesis-EV-lease-prices.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2025-08-19T14:21:21Z",
            "content": "Another one bites the dust. Hyundai Motor has halted production of another luxury EV in the US to focus on more popular models like its best-selling Tucson SUV.\r\nThe move is part of a broader shift i… [+3323 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Jalopnik"
            },
            "author": "staff@jalopnik.com (Andy Kalmowitz)",
            "title": "Tesla Wants To Lure Back Chinese Customers With Longer Model Y L",
            "description": "Can a stretched Model Y turn around Tesla's fortunes in China, or is bigger not automatically better?",
            "url": "https://www.jalopnik.com/1944243/tesla-model-y-l-china-launch/",
            "urlToImage": "https://www.jalopnik.com/img/gallery/tesla-wants-to-lure-back-chinese-customers-with-longer-model-y-l/l-intro-1755612523.jpg",
            "publishedAt": "2025-08-19T14:06:10Z",
            "content": "Chinese companies involved with its electric vehicle industry actually spent more money overseas than they did at home for the first time last year. Companies along the EV supply chain invested about… [+2172 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Unwire.hk"
            },
            "author": "藍骨",
            "title": "Model 3 方向燈撥桿有官方改裝　中國 Tesla 率先提供盛惠 2,499 人民幣",
            "description": "Tesla 新版 Model 3 推出後，最為人詬病的就是取消了方向燈撥桿，之後在新版 Model Y 重新加入，很多新版 Model 3 車主也希望可以改裝加回。有見及此，中國 Tesla 就推出官方改裝服務，預期之後其他地區也會推出。",
            "url": "https://unwire.hk/2025/08/19/tesla-model-3-turn-signal-stalk-retrofit/life-tech/auto/",
            "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2025/08/fb_photo4-3.png",
            "publishedAt": "2025-08-19T14:04:51Z",
            "content": "Tesla Model 3 Model Y Model 3 Tesla \r\nTesla 2,499 2025 2 7 Model 3 \r\n Tesla App 3 Tesla Tesla Tesla \r\n2023 Model 3 \r\n 2025 Model Y JuniperTesla Model Y \r\nTesla Lars Moravy Model 3 \r\n Tesla Model 3 \r\n… [+35 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Caroline Ceniza-Levine, Senior Contributor, \n Caroline Ceniza-Levine, Senior Contributor\n https://www.forbes.com/sites/carolinecenizalevine/",
            "title": "4 Work From Home Negotiation Tips To Persuade A Reluctant Manager",
            "description": "Companies are demanding return to office for collaboration and productivity. You need to be seen as a team player. Your manager needs a graceful way buck the RTO trend.",
            "url": "https://www.forbes.com/sites/carolinecenizalevine/2025/08/19/4-work-from-home-negotiation-tips-to-persuade-a-reluctant-manager/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/68a3243b6aa8c8508fb536db/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-08-19T14:00:00Z",
            "content": "4 Work From Home Negotiation Tips To Persuade A Reluctant Manager\r\ngetty\r\nCompanies across a variety of industries are increasing their return to office (RTO) demands Goldman Sachs and Deutsche Bank … [+4138 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tjock.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "Ronnie Rondell Jr. har gått bort",
            "description": "Stuntman på klassiskt skivomslag\n\n\n\n\n\n\n\n\n\n\n\n\nStuntmannen Ronnie Rondell Jr. har gått bort vid en ålder av 88 år. Rondell ska ha medverkat i över 200 filmer under sin karriär, bland annat storfilmer som How The West Was Won, Lethal Weapon, Twister och The Matr…",
            "url": "https://tjock.se/sinnet/-ronnie-rondell-jr-har-gatt-bort/482467/",
            "urlToImage": "https://static.feber.se/article_images/62/54/53/625453.jpg",
            "publishedAt": "2025-08-19T14:00:00Z",
            "content": "Välkommen!\r\nSkaffa Feber+\r\nRonnie Rondell Jr. har gått bort\r\nStuntman på klassiskt skivomslag\r\nFoto: Pink Floyd\r\nDen här artikeln publiceras om -52 minuter.Med Feber+ får du läsa den redan nu!\r\nFrån … [+21930 chars]"
        },
        {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": "Андрей Ставицкий",
            "title": "Tesla выпустила новый кроссовер",
            "description": "Американская корпорация Tesla запустила продажи модели Model YL. На это обратило внимание издание Electrek",
            "url": "https://lenta.ru/news/2025/08/19/model-yl/",
            "urlToImage": "https://icdn.lenta.ru/images/2025/08/19/14/20250819143712782/share_72364eb1cdfc0b9d71972e01938777cb.jpg",
            "publishedAt": "2025-08-19T13:58:59Z",
            "content": "Tesla Model YL. Electrek.\r\n , YL Model Y . . 750 .\r\n. Tesla Model YL 339 , 3,9 . Tesla , 2539 .\r\n« Model YL Tesla», Electrek. , Tesla , . , Onvo L90 58 , 650 .\r\n Tesla , . , , ."
        },
        {
            "source": {
                "id": null,
                "name": "Pravda.sk"
            },
            "author": "volajte112",
            "title": "Všetko sa dá zneužiť, a preto ak sa nedá ľudstvo vyhubiť vírusmi, dá sa uvažovať o likvidácií občanov živelnými pohromami ?",
            "description": "HAARP býva spájaný aj v súvislosti s prácou Nikolu Tesla, nie je prístupný pre verejnosť a komplex je je veľmi dobre strážený. Raz za dva roky však orgány usporadúvajú na Aljaške akýsi „deň otvorených dverí v HAARP-e“. HAARP prevádzkuje University of Alaska, …",
            "url": "https://volajte112.blog.pravda.sk/2025/08/19/vsetko-sa-da-zneuzit-a-preto-ak-sa-neda-ludstvo-vyhubit-virusmi-da-sa-uvazovat-o-likvidacii-obcanov-zivelnymi-pohromami/",
            "urlToImage": "https://blog.pravda.sk/wp-content/default-avatar-blog-256.png",
            "publishedAt": "2025-08-19T13:56:25Z",
            "content": "HAARP býva spájaný aj v súvislosti s prácou Nikolu Tesla, nie je prístupný pre verejnos a komplex je je vemi dobre stráený. Raz za dva roky vak orgány usporadúvajú na Aljake akýsi „de otvorených dver… [+12330 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Daniel Howley",
            "title": "An Apple robot will need a lot of AI help",
            "description": "Apple's robot efforts will need some AI help.",
            "url": "https://finance.yahoo.com/news/an-apple-robot-will-need-a-lot-of-ai-help-135116585.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/xwQLfyrEuvvS8dnq_Jgwhw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2025-01/4aae2830-dda3-11ef-9f5f-9631a8d45eb7",
            "publishedAt": "2025-08-19T13:51:16Z",
            "content": "Apple (AAPL) is reportedly planning a push into robotics as it continues its search for its next hit product. That includes developing a robotic arm outfitted with an iPad-like display and exploring … [+5311 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Who is Trump’s trade guru giving gyan to India?",
            "description": "Peter Navarro, a key architect of Trump's trade policies, criticizes India's purchase of Russian oil, deeming it detrimental to isolating Russia's economy. He warns that India's actions could jeopardize its strategic partnership with the US, while also highli…",
            "url": "https://economictimes.indiatimes.com/news/economy/foreign-trade/who-is-peter-navarro-trumps-trade-guru-giving-gyan-to-india/articleshow/123389280.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-123389275,width-1200,height-630,imgsize-11108,overlay-economictimes/articleshow.jpg",
            "publishedAt": "2025-08-19T13:50:50Z",
            "content": "Peter Navarro, US President Donald Trump's trade adviser who is considered the brain behind Trump tariffs, has written an article in the Financial Times, lashing out at India for buying Russian oil, … [+8568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Sanji Feng",
            "title": "Amazon優惠｜Insta360 GO 3S 限時 8 折，歷史低價 HK$2,500 購 4K 拇指相機玩水必備",
            "description": "Yahoo編輯團隊致力為你精選優質產品及優惠價格，文章中部份商品、平台與Yahoo有合作關係，定價及供應量均會隨市場變動，請以平台最新資料為準。\r\nInsta360 GO 3S 限時 8 折，歷史低價 HK$2,500 購 4K 拇指相機玩水必備\r\n溫馨提示：Amazon 已開通香港滿額免運費，可在購買頁面標價的位置見到「無進口費用且免費送貨至香港」。看到「無進口費用且 HKD XXX 運費配送至香港」字眼的話，就代表官方會直送貨品至香港，但會收取運費。假如貨品不直送香港，也可以選用集運服務。\r\n Amazo…",
            "url": "https://hk.news.yahoo.com/amazon%E5%84%AA%E6%83%A0%EF%BD%9Cinsta360-go-3s-%E9%99%90%E6%99%82-8-%E6%8A%98%EF%BC%8C%E6%AD%B7%E5%8F%B2%E4%BD%8E%E5%83%B9-hk2500-%E8%B3%BC-4k-%E6%8B%87%E6%8C%87%E7%9B%B8%E6%A9%9F%E7%8E%A9%E6%B0%B4%E5%BF%85%E5%82%99-134941312.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2025-08/fb04f210-7d01-11f0-adef-d08eff9cef9e",
            "publishedAt": "2025-08-19T13:49:42Z",
            "content": "Amazon HKD XXX \r\nAmazonPrime Day 2025 \r\n Amazon US$320 Insta360 GO 3S HK$2,500\r\nInsta360 GO 3S64GB\r\nAmazon US$320 HK$2,500 \r\nUS$550\r\n Prime \r\nAmazon Prime Day 2025 \r\nAmazon Prime 30 \r\nPrime Day 2025A… [+723 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Conversation Africa"
            },
            "author": "Esther Kuehn, Professor of Neuroscience, University of Tübingen",
            "title": "Part of your brain gets bigger as you get older – here is what that means for you",
            "description": "This new study could change the way we think about ageing.",
            "url": "https://theconversation.com/part-of-your-brain-gets-bigger-as-you-get-older-here-is-what-that-means-for-you-257156",
            "urlToImage": "https://images.theconversation.com/files/674519/original/file-20250616-56-o9fl2f.jpg?ixlib=rb-4.1.0&rect=0%2C412%2C3300%2C1650&q=45&auto=format&w=1356&h=668&fit=crop",
            "publishedAt": "2025-08-19T13:48:49Z",
            "content": "Orla/Shutterstock\r\nI recently asked myself if I’ll still have a healthy brain as I get older. I hold a professorship at a neurology department. Nevertheless, it is difficult for me to judge if a part… [+5788 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Hugo Engström",
            "title": "Spotify får nytt DJ-verktyg för spellistor",
            "description": "Skapa snyggare övergångar\n\n\n\n\n\n\nSpotify har börjat rulla ett nytt verktyg som låter Premium-användare skapa snygga övergångar mellan låtar i sina spellistor, likt en DJ. När du har skapat en spellista dyker ett nytt \"Mix\"-alternativ upp, där kan du antingen l…",
            "url": "https://feber.se/internet/spotify-far-nytt-dj-verktyg-for-spellistor/482475/",
            "urlToImage": "https://static.feber.se/article_images/62/54/97/625497.jpg",
            "publishedAt": "2025-08-19T13:40:00Z",
            "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n18 idag\r\n28 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIkea har gjort en tallrik för köttbullar\r\nMed Gustaf Westman\r\n-57kg\r\n0\r\nAnnons från \r\nAnnons\r\nBilligare ChatG… [+25693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Blockspace.media"
            },
            "author": "Colin Harper",
            "title": "The big difference between bitcoin and crypto treasury companies",
            "description": "Not all bitcoin treasury and crypto treasury companies are created equal.",
            "url": "https://blockspace.media/insight/the-big-difference-between-bitcoin-and-crypto-treasury-companies/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/VpZ2XEHUU7vPCMe4rQm.6A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/blockspace_702/8bdb14b4b64b9cd2429fc5257c916fc2",
            "publishedAt": "2025-08-19T13:34:49Z",
            "content": "The future is on\r\n off-chain. Thats right, we spent the past 15 years telling you to get your money onto the blockchain and now were telling you to pull it out and put it into Charles Schwab so that … [+4180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gadgethacks.com"
            },
            "author": "Gadget Hacks",
            "title": "Why Musk's Apple Threat Could Reshape Your iPhone's AI Future",
            "description": "Here we go again. Elon Musk is wielding his legal sword at another tech giant, and this time it's Apple in the crosshairs. The Tesla CEO is threatening immediate legal action against Apple over what he calls \"unequivocal antitrust violations\" in how the App S…",
            "url": "https://ios.gadgethacks.com/news/why-musks-apple-threat-could-reshape-your-iphones-ai-future/",
            "urlToImage": "https://assets.content.technologyadvice.com/photo_1679896949191_dc62950076ba_cceed2624b.webp",
            "publishedAt": "2025-08-19T13:24:34Z",
            "content": "Here we go again. Elon Musk is wielding his legal sword at another tech giant, and this time it's Apple in the crosshairs. The Tesla CEO is threatening immediate legal action against Apple over what … [+9575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "247wallst.com",
            "title": "Tesla’s (TSLA) Next Quarter Could Be A Complete Monster",
            "description": "Key Points\n \n \n \n \nTesla (NASDAQ: TSLA) may see a strong Q3 boost in U.S. unit sales as buyers rush to claim the $7,500 federal EV tax credit before it expires at the end of September.\n \n \n \nInvestors must weigh whether this demand surge is a one-time pull-fo…",
            "url": "https://biztoc.com/x/dc43f51823738f57",
            "urlToImage": "https://biztoc.com/cdn/950/og.png",
            "publishedAt": "2025-08-19T13:22:15Z",
            "content": "Key Points\r\nTesla (NASDAQ: TSLA) may see a strong Q3 boost in U.S. unit sales as buyers rush to claim the $7,500 federal EV tax credit before it expires at the end of September.\r\nInvestors must weigh… [+129 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CHIP Online Deutschland"
            },
            "author": "Tobias Stahl",
            "title": "Neue Studie zeigt: E-Auto-Ladesäulen verschmutzen die Luft",
            "description": "Während E-Autos für sauberere Luft in den Städten sorgen, kann man das Gleiche offenbar nicht über Schnellladesäulen sagen: US-Forschende haben herausgefunden, dass öffentliche Ladepunkte zur Feinstaubbelastung beitragen können. Es gibt aber schon Lösungsansä…",
            "url": "https://www.chip.de/news/auto-fahrrad/neue-studie-zeigt-e-auto-ladesaeulen-verschmutzen-die-luft_94228dce-f3ab-4cf8-93d5-64115f6a6e7b.html",
            "urlToImage": "https://quadro.burda-forward.de/ctf/bf05d297-48cb-42f9-959c-848ede37fdf9.e75b13df-5562-42ec-bc68-9d73472b2389.jpeg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%281461%2C468%29&hash=097879ef6011418d0cc12d632d647671fa014163f2d50fc2c41d0be5f8652b08",
            "publishedAt": "2025-08-19T13:22:00Z",
            "content": "Forschende der Fielding School of Public Health an der Universität von Kalifornien (UCLA) haben herausgefunden, dass die Feinstaubkonzentration in der Luft in der Nähe von Schnellladestationen im ges… [+6579 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Tom Carter",
            "title": "Ford CEO Jim Farley's favorite Chinese EV is coming to Europe",
            "description": "The move marks the first overseas foray for Xiaomi's cars, which have proved enormously popular in China and wowed Western auto executives.",
            "url": "https://www.businessinsider.com/xiaomi-europe-launch-ford-ceo-favorite-chinese-ev-coming-2025-8",
            "urlToImage": "https://i.insider.com/68a470e9194a2d49b8aec56b?width=1200&format=jpeg",
            "publishedAt": "2025-08-19T13:21:41Z",
            "content": "Xiaomi sold over 135,000 SU7 sedans in China last year.VCG/Getty Images\r\n<ul><li>Xiaomi's EVs are crushing it in China and wowing Western auto execs, and now they're coming to Europe.</li><li>The com… [+2265 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "Idag drar Gamescom igång",
            "description": "Kolla in öppningen live här\n\n\n\n\n\n\n\n\n\n\nIdag öppnar världens största spelmässa Gamescom i tyska Köln, något som lär innebära en hel del kul för gamingintresserade.\n\nKlockan 20:00 öppnar mässan med en keynote från Geoff Keighley. Då lär det antagligen bli förhan…",
            "url": "https://feber.se/spel/idag-drar-gamescom-igang/482478/",
            "urlToImage": "https://i.ytimg.com/vi/74oh7zD_jxI/hqdefault.jpg",
            "publishedAt": "2025-08-19T13:20:00Z",
            "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n18 idag\r\n28 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIkea har gjort en tallrik för köttbullar\r\nMed Gustaf Westman\r\n-57kg\r\n0\r\nAnnons från \r\nAnnons\r\nBilligare ChatG… [+25263 chars]"
        },
        {
            "source": {
                "id": "il-sole-24-ore",
                "name": "Il Sole 24 Ore"
            },
            "author": "di Alberto Annicchiarico",
            "title": "XPeng accelera, Leapmotor sorprende: in Cina corre la selezione darwiniana",
            "description": "XPeng ha chiuso il secondo trimestre con numeri da primato, confermandosi tra i pochi costruttori capaci di trasformare la corsa all’elettrico cinese in crescita sostenibile. I ricavi sono balzati a...",
            "url": "https://www.ilsole24ore.com/art/xpeng-accelera-leapmotor-sorprende-cina-corre-selezione-darwiniana-AHFRilEC",
            "urlToImage": "https://i2.res.24o.it/images2010/S24/Documenti/2025/08/20/Immagini/Ritagli/2025-08-19T103747Z_13477296_RC2I3EAC5WX7_RTRMADP_5_XPENG-RESULTS-U22378170687DyI-1440x752@IlSole24Ore-Web.JPG?r=1170x507",
            "publishedAt": "2025-08-19T13:19:56Z",
            "content": "Ascolta la versione audio dell'articolo\r\nXPeng ha chiuso il secondo trimestre con numeri da primato, confermandosi tra i pochi costruttori capaci di trasformare la corsa allelettrico cinese in cresci… [+2988 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Neil Winton, Senior Contributor, \n Neil Winton, Senior Contributor\n https://www.forbes.com/sites/neilwinton/",
            "title": "Returning European Vacationers In Their EVs Should Slow Down-Report",
            "description": "As Europeans return from vacations, electric vehicle owners may be worrying about hot weather and batteries. Geotab said EV drivers have more to worry about from speed.",
            "url": "https://www.forbes.com/sites/neilwinton/2025/08/19/returning-european-vacationers-in-their-evs-should-slow-down-report/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/68a438d5c63ef25dd5c7568e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-08-19T13:19:52Z",
            "content": "Low battery warning light on black screen instrument panel of EV electric vehicle.\r\ngetty\r\nAs northern Europeans prepare for the big return from hot southern summer beach vacations, electric vehicle … [+3828 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Frandroid"
            },
            "author": "Jean-Baptiste Passieux",
            "title": "Le nouveau Tesla Model Y L se dote de ces deux équipements très rares sur les voitures",
            "description": "Le lancement du Tesla Model Y L à six places en Chine permet de découvrir tous les détails de cette nouvelle version. Et on comprend vite qu'il s'agit d'une des voitures électriques les plus accueillantes pour les familles...",
            "url": "https://www.frandroid.com/marques/tesla/2764397_le-nouveau-tesla-model-y-l-se-dote-de-ces-deux-equipements-tres-rares-sur-les-voitures",
            "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/08/model-y-l-handling-desktop-copie.jpg?resize=1600,900&key=8aab63dd&watermark",
            "publishedAt": "2025-08-19T13:12:20Z",
            "content": "Le lancement du Tesla Model Y L à six places en Chine permet de découvrir tous les détails de cette nouvelle version. Et on comprend vite qu’il s’agit d’une des voitures électriques les plus accueill… [+2549 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "barrons.com",
            "title": "XPeng Stock Pops After Earnings. Why the Tesla Rival’s EV Sales Wowed Wall Street",
            "description": "",
            "url": "https://biztoc.com/x/d3e4773f3cd844a8",
            "urlToImage": "https://biztoc.com/cdn/950/og.png",
            "publishedAt": "2025-08-19T13:10:39Z",
            "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is SoftBank investing $2 billion in Intel? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;What impact will Nvidia's … [+716 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "Tesla Prices New Six-Seat Model in Competitive Chinese Market",
            "description": "",
            "url": "https://biztoc.com/x/c02fbf0f69851b1e",
            "urlToImage": "https://biztoc.com/cdn/950/og.png",
            "publishedAt": "2025-08-19T13:10:29Z",
            "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is SoftBank investing $2 billion in Intel? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;What impact will Nvidia's … [+756 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Numerama"
            },
            "author": "Robin San Vicente",
            "title": "« Prévenez-moi quand Tesla lancera un robotaxi » : l’ancien patron de Waymo se moque ouvertement du service d’Elon Musk",
            "description": "Alors que Tesla vient de lancer son service de robotaxis à San Francisco, l'ancien patron de Waymo ne croit pas capable la marque d'Elon Musk de proposer une expérience 100 % autonome. Un nouveau taquet. Initialement pensé avec une voiture électrique deux pla…",
            "url": "https://www.numerama.com/vroom/2055773-prevenez-moi-quand-tesla-lancera-un-robotaxi-lancien-patron-de-waymo-se-moque-ouvertement-du-service-delon-musk.html",
            "urlToImage": "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2025/06/tesla-robotaxi-austin-launch.jpg?resize=1600,900&key=4c571fd3&watermark",
            "publishedAt": "2025-08-19T13:09:26Z",
            "content": "Alors que Tesla vient de lancer son service de robotaxis à San Francisco, l’ancien patron de Waymo ne croit pas capable la marque d’Elon Musk de proposer une expérience 100 % autonome. Un nouveau taq… [+3411 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "William Blair says Tesla robotaxi half the cost of Uber",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id4185643/TSLA;UBER-William-Blair-says-Tesla-robotaxi-half-the-cost-of-Uber",
            "urlToImage": "https://thefly.com/images/meta/streetresearch_recommendations.jpg",
            "publishedAt": "2025-08-19T13:08:59Z",
            "content": "Earnings calls, analyst events, roadshows and more"
        },
        {
            "source": {
                "id": null,
                "name": "mobiFlip.de"
            },
            "author": "Oliver Schwuchow",
            "title": "Tesla Model 3: Neues Zubehör beseitigt einen großen Kritikpunkt",
            "description": "Tesla ist dafür bekannt, dass man sehr minimalistisch bei den Fahrzeugen vorgeht, das hat aber oft nichts mit dem Design, sondern mit den Kosten zu tun. Je weniger verbaut ist, […]",
            "url": "https://www.mobiflip.de/tesla-model-3-neues-zubehoer-beseitigt-einen-grossen-kritikpunkt/",
            "urlToImage": "https://www.mobiflip.de/wp-content/uploads/2023/11/tesla-model-3-2023-detail-header.jpg",
            "publishedAt": "2025-08-19T13:02:55Z",
            "content": "Tesla ist dafür bekannt, dass man sehr minimalistisch bei den Fahrzeugen vorgeht, das hat aber oft nichts mit dem Design, sondern mit den Kosten zu tun. Je weniger verbaut ist, desto geringer der Ein… [+868 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Tesla Making Yet Another Desperate Move in Europe",
            "description": "How can Tesla fix its European slump?",
            "url": "https://gizmodo.com/tesla-making-yet-another-desperate-move-in-europe-2000644686",
            "urlToImage": "https://gizmodo.com/app/uploads/2025/05/Tesla-elon-musk-protest-1200x675.jpg",
            "publishedAt": "2025-08-19T13:00:52Z",
            "content": "Tesla has been struggling in Europe, where its sales are down across the continent. In the United Kingdom, the company’s sales reportedly dropped 60 percent last month. With those cratering numbers, … [+2218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sapo.pt"
            },
            "author": "Ana Sofia Neto",
            "title": "“Tesla Mustang 3”: entusiasta transformou um clássico americano num elétrico",
            "description": "Dando forma à sua criatividade, um entusiasta transformou um modelo clássico num elétrico, utilizando vários componentes da Tesla. Se a Ford imaginava que o seu Mustang de 1966 algum dia seria alimentado por uma...",
            "url": "https://pplware.sapo.pt/motores/tesla-mustang-3-entusiasta-transformou-um-classico-americano-num-eletrico/",
            "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2025/08/ford_mustang.jpg",
            "publishedAt": "2025-08-19T13:00:32Z",
            "content": "Dando forma à sua criatividade, um entusiasta transformou um modelo clássico num elétrico, utilizando vários componentes da Tesla. Se a Ford imaginava que o seu Mustang de 1966 algum dia seria alimen… [+2054 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Harvard Business Review"
            },
            "author": null,
            "title": "How to Bring More Rigor to Your Long-Term Thinking",
            "description": "Amid great economic, political, and technological change, it can feel impossible to predict what might happen next. Nick Foster, a futurist and designer who has worked at Google X, Sony, and elsewhere, says that most of us struggle because we tend to fall int…",
            "url": "https://hbr.org/podcast/2025/08/how-to-bring-more-rigor-to-your-long-term-thinking",
            "urlToImage": "https://hbr.org/resources/images/article_assets/2025/02/wide-ideacast_25.png",
            "publishedAt": "2025-08-19T13:00:23Z",
            "content": "ALISON BEARD: I’m Alison Beard.\r\nADI IGNATIUS: And I’m Adi Ignatius. This is the HBR IdeaCast.\r\nALISON BEARD: Adi, how good are you at predicting the future?\r\nADI IGNATIUS: I am very bad at predictin… [+33658 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Faz.net"
            },
            "author": "Tobias Piller",
            "title": "Zukunft des E-Autos: Einmal aufladen in 19 Minuten",
            "description": "Zur Beurteilung von Elektroautos blicken bisher viele auf die Reichweite. Doch mit viel Ladeleistung werden sie auch für die Langstrecke attraktiv.",
            "url": "https://www.faz.net/aktuell/wirtschaft/unternehmen/wie-elektroautos-auch-fuer-die-langstrecke-attraktiv-werden-110643038.html",
            "urlToImage": "https://media1.faz.net/ppmedia/w1200/aktuell/737659356/1.10643035/facebook_teaser/vorbild-fuer-schnelles-laden.jpg.webp",
            "publishedAt": "2025-08-19T13:00:08Z",
            "content": "Spätestens die bevorstehende Automesse IAA in München wird es zeigen: Für Elektroautos wird die Ladegeschwindigkeit und damit die Ladeleistung immer bedeutender. Noch geben manche Autoher­steller in … [+11042 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "Nisar har fällt ut sin jätteantenn",
            "description": "USA:s och Indiens unika radarsatellit\n\n\n\n\n\n\n\n\n\n\n\n\nNasa och deras indiska motsvarighet Isro har nu rullat ut reflektorn till den radaranläggning som kommer att användas av deras gemensamma radarsatellit Nisar (NASA-ISRO Synthetic Aperture Radar). \n\nNisars refl…",
            "url": "https://feber.se/vetenskap/nisar-har-fallt-ut-sin-jatteantenn/482465/",
            "urlToImage": "https://static.feber.se/article_images/62/54/51/625451.jpg",
            "publishedAt": "2025-08-19T13:00:00Z",
            "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n16 idag\r\n28 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIkea har gjort en tallrik för köttbullar\r\nMed Gustaf Westman\r\n-12kg\r\n0\r\nAnnons från \r\nAnnons\r\nBilligare ChatG… [+27831 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abertoatedemadrugada.com"
            },
            "author": "Carlos Martins",
            "title": "Tesla lança Model Y L de 6 lugares na China",
            "description": "A Tesla oficializou o lançamento do Model Y L (Longo) de 6 lugares na China, que é maior e conta com diversas melhorias.",
            "url": "https://abertoatedemadrugada.com/2025/08/tesla-lanca-model-y-l-de-6-lugares-na.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZa6GyFbNM9pp4k9vYI-QML7WOHMlGH7WvNGJoHORFmjmvfNEhE-gkcCXpDUUW6MP92KH_dcy1JWkyep1uXUqvqFdtuYK86C1tztBrisUdZ9p445qDWSnXpof197AdEO1_Z2tbpRc0BGYrJrs2WkSkZX464aKpdfyGo50PKN7rMxQedxritT-AP_84whgC/w1200-h630-p-k-no-nu/modelYL.jpg",
            "publishedAt": "2025-08-19T13:00:00Z",
            "content": "A Tesla oficializou o lançamento do Model Y L (Longo) de 6 lugares na China, que é maior e conta com diversas melhorias.\n\n\nA Tesla lançou oficialmente na China o Model Y L, uma nova versão de seis lu… [+2253 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Nio Cuts Prices, Expands Global Reach In Strategic Push Against Tesla",
            "description": "Nio Inc. (NYSE:NIO) shares ticked higher in premarket trading Tuesday as the Chinese electric vehicle maker announced price cuts across its long-range lineup following Tesla Inc. (NASDAQ:TSLA) ‘s launch of a new six-seat Model Y L SUV.\nThe automaker confirmed…",
            "url": "https://biztoc.com/x/ebb1e2c953ce8d57",
            "urlToImage": "https://biztoc.com/cdn/ebb1e2c953ce8d57_s.webp",
            "publishedAt": "2025-08-19T12:59:27Z",
            "content": "Nio Inc. (NYSE:NIO) shares ticked higher in premarket trading Tuesday as the Chinese electric vehicle maker announced price cuts across its long-range lineup following Tesla Inc. (NASDAQ:TSLA) s laun… [+144 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lesswrong.com"
            },
            "author": "Zvi",
            "title": "Monthly Roundup #33: August 2025",
            "description": "Published on August 19, 2025 12:40 PM GMTI got suckered into paying attention to multiple non-AI political stories this month: The shooting of the messenger, in violation of the most sacred principles, via firing the head of the USA’s Bureau of Labor Statisti…",
            "url": "https://www.lesswrong.com/posts/Sqrt2FC3c45QpX3Au/monthly-roundup-33-august-2025",
            "urlToImage": "https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/Sqrt2FC3c45QpX3Au/rdwxgmmwf7omvm7po0bs",
            "publishedAt": "2025-08-19T12:40:10Z",
            "content": "I got suckered into paying attention to multiple non-AI political stories this month: The shooting of the messenger, in violation of the most sacred principles, via firing the head of the USAs Bureau… [+94719 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bleichmar Fonti & Auld",
            "title": "SJM SECURITIES: J.M. Smucker Co. Shareholders that Lost Money may have been Affected by Fraud -- Contact BFA Law (NYSE:SJM)",
            "description": "The J.M. Smucker Co. investors that lost money are notified to contact BFA Law about its ongoing securities fraud class action investigation.......",
            "url": "https://www.globenewswire.com/news-release/2025/08/19/3135714/0/en/SJM-SECURITIES-J-M-Smucker-Co-Shareholders-that-Lost-Money-may-have-been-Affected-by-Fraud-Contact-BFA-Law-NYSE-SJM.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
            "publishedAt": "2025-08-19T12:38:00Z",
            "content": "NEW YORK, Aug. 19, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces an investigation into The J.M. Smucker Company (NYSE: SJM) for potential violations of… [+2872 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bleichmar Fonti & Auld",
            "title": "SLP SECURITIES: Simulations Plus, Inc. Shareholders that Lost Money may have been Affected by Fraud -- Contact BFA Law (NASDAQ:SLP)",
            "description": "Simulations Plus, Inc. investors that lost money are notified to contact BFA Law about its ongoing securities fraud class action investigation.......",
            "url": "https://www.globenewswire.com/news-release/2025/08/19/3135709/0/en/SLP-SECURITIES-Simulations-Plus-Inc-Shareholders-that-Lost-Money-may-have-been-Affected-by-Fraud-Contact-BFA-Law-NASDAQ-SLP.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
            "publishedAt": "2025-08-19T12:36:00Z",
            "content": "NEW YORK, Aug. 19, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces an investigation into Simulations Plus, Inc. (NASDAQ: SLP) for potential violations of… [+4436 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bleichmar Fonti & Auld",
            "title": "FLYW SECURITIES: Flywire Corporation Shareholders that Lost Money may have been Affected by Fraud -- Contact BFA Law before the Class Action Deadline (NASDAQ:FLYW)",
            "description": "Flywire Corporation investors that lost money are notified to contact BFA Law before the September 23, 2025 securities fraud class action deadline.......",
            "url": "https://www.globenewswire.com/news-release/2025/08/19/3135710/0/en/FLYW-SECURITIES-Flywire-Corporation-Shareholders-that-Lost-Money-may-have-been-Affected-by-Fraud-Contact-BFA-Law-before-the-Class-Action-Deadline-NASDAQ-FLYW.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
            "publishedAt": "2025-08-19T12:36:00Z",
            "content": "NEW YORK, Aug. 19, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against Flywire Corporation (NASDAQ: FLYW) and certain o… [+3523 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bleichmar Fonti & Auld",
            "title": "CNC SECURITIES: Centene Corporation Shareholders that Lost Money may have been Affected by Fraud -- Contact BFA Law before the Class Action Deadline (NYSE:CNC)",
            "description": "Centene Corporation investors that lost money are notified to contact BFA Law before the September 8, 2025 securities fraud class action deadline.......",
            "url": "https://www.globenewswire.com/news-release/2025/08/19/3135711/0/en/CNC-SECURITIES-Centene-Corporation-Shareholders-that-Lost-Money-may-have-been-Affected-by-Fraud-Contact-BFA-Law-before-the-Class-Action-Deadline-NYSE-CNC.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
            "publishedAt": "2025-08-19T12:36:00Z",
            "content": "NEW YORK, Aug. 19, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against Centene Corporation (NYSE: CNC) and certain of t… [+3752 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bleichmar Fonti & Auld",
            "title": "SRPT SECURITIES: Sarepta Therapeutics, Inc. Shareholders that Lost Money may have been Affected by Fraud -- Contact BFA Law before the Class Action Deadline (NASDAQ:SRPT)",
            "description": "Sarepta Therapeutics, Inc. investors that lost money are notified to contact BFA Law before the August 25, 2025 securities fraud class action deadline.......",
            "url": "https://www.globenewswire.com/news-release/2025/08/19/3135712/0/en/SRPT-SECURITIES-Sarepta-Therapeutics-Inc-Shareholders-that-Lost-Money-may-have-been-Affected-by-Fraud-Contact-BFA-Law-before-the-Class-Action-Deadline-NASDAQ-SRPT.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
            "publishedAt": "2025-08-19T12:36:00Z",
            "content": "NEW YORK, Aug. 19, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against Sarepta Therapeutics, Inc. (NASDAQ: SRPT) and ce… [+3797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bleichmar Fonti & Auld",
            "title": "BRBR SECURITIES: BellRing Brands, Inc. Shareholders that Lost Money may have been Affected by Fraud -- Contact BFA Law (NYSE:BRBR)",
            "description": "BellRing Brands, Inc. investors that lost money are notified to contact BFA Law about its ongoing securities fraud class action investigation.......",
            "url": "https://www.globenewswire.com/news-release/2025/08/19/3135708/0/en/BRBR-SECURITIES-BellRing-Brands-Inc-Shareholders-that-Lost-Money-may-have-been-Affected-by-Fraud-Contact-BFA-Law-NYSE-BRBR.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
            "publishedAt": "2025-08-19T12:36:00Z",
            "content": "NEW YORK, Aug. 19, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces an investigation into BellRing Brands, Inc. (NYSE: BRBR) for potential violations of t… [+3475 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lesswrong.com"
            },
            "author": "ykevinzhang",
            "title": "Capital and Industry",
            "description": "Published on August 19, 2025 12:35 PM GMTThis is a cross-post from my Substack, East WindWith Alphabet recently announcing that it would increase capital expenditures from $75B to $85B after blowout earnings and Meta’s Mark Zuckerberg promising to spend hundr…",
            "url": "https://www.lesswrong.com/posts/WKbuv5ecnh5NGh8sJ/capital-and-industry",
            "urlToImage": "https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/WKbuv5ecnh5NGh8sJ/fafv2ty9u79kjp8wtopt",
            "publishedAt": "2025-08-19T12:35:31Z",
            "content": "This is a cross-post from my Substack, East Wind\r\nWith Alphabet recently announcing that it would increase capital expenditures from $75B to $85B after blowout earnings and Metas Mark Zuckerberg prom… [+17409 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bleichmar Fonti & Auld",
            "title": "RXST SECURITIES: RxSight, Inc. Shareholders that Lost Money may have been Affected by Fraud -- Contact BFA Law before the Class Action Deadline (NASDAQ:RXST)",
            "description": "RxSight, Inc. investors that lost money are notified to contact BFA Law before the September 22, 2025 securities fraud class action deadline.......",
            "url": "https://www.globenewswire.com/news-release/2025/08/19/3135707/0/en/RXST-SECURITIES-RxSight-Inc-Shareholders-that-Lost-Money-may-have-been-Affected-by-Fraud-Contact-BFA-Law-before-the-Class-Action-Deadline-NASDAQ-RXST.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
            "publishedAt": "2025-08-19T12:35:00Z",
            "content": "NEW YORK, Aug. 19, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against RxSight, Inc. (NASDAQ: RXST) and certain of the … [+3686 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Economictimes.com"
            },
            "author": "Surbhi+Khanna, ET Online",
            "title": "Foreign equity holdings by mutual funds increase by Rs 3,100 crore in July",
            "description": "Indian mutual funds raised foreign equity holdings by Rs 3,101 crore in July to Rs 51,705 crore, led by PPFAS, ICICI Prudential, Motilal Oswal and others.",
            "url": "https://m.economictimes.com/mf/web-stories/foreign-equity-holdings-by-mutual-funds-increase-by-rs-3100-crore-in-july/slideshow/123387806.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-123387857,width-900,height-1200,resizemode-6.cms",
            "publishedAt": "2025-08-19T12:33:09Z",
            "content": "The fund house increased its foreign equity holding by Rs 191 crore on a monthly basis from Rs 4,341 crore in June to Rs 4,532 crore in July. The portfolio had 82 such stocks which includes Netflix, … [+69 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bleichmar Fonti & Auld",
            "title": "LINE SECURITIES: Lineage, Inc. Shareholders that Lost Money may have been Affected by Fraud -- Contact BFA Law before the Class Action Deadline (NASDAQ:LINE)",
            "description": "Lineage, Inc. investors that lost money are notified to contact BFA Law before the September 30, 2025 securities fraud class action deadline......",
            "url": "https://www.globenewswire.com/news-release/2025/08/19/3135706/0/en/LINE-SECURITIES-Lineage-Inc-Shareholders-that-Lost-Money-may-have-been-Affected-by-Fraud-Contact-BFA-Law-before-the-Class-Action-Deadline-NASDAQ-LINE.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
            "publishedAt": "2025-08-19T12:33:00Z",
            "content": "NEW YORK, Aug. 19, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against Lineage, Inc. (NASDAQ: LINE) and certain of the … [+3690 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Shiftdelete.net"
            },
            "author": "Alperen Esin",
            "title": "Yeni Tesla Model Y L satışa sunuldu",
            "description": "Tesla, Çin’deki pazar varlığını yeni bir modelle güçlendiriyor. Şirket, Model Y ailesine Model Y L adında altı koltuklu, uzun bir versiyon ekledi ve bu aracı satışa sundu. Başlangıç fiyatı 47.120 dolar olan aracın teslimatları eylül ayında başlıyor. Yeni Tesl…",
            "url": "https://shiftdelete.net/yeni-tesla-model-y-l-satisa-sunuldu",
            "urlToImage": "https://ares.shiftdelete.net/2025/08/Tesla-Model-Y-L-1.webp",
            "publishedAt": "2025-08-19T12:30:00Z",
            "content": "Tesla, Çin’deki pazar varln yeni bir modelle güçlendiriyor. irket, Model Y ailesine Model Y L adnda alt koltuklu, uzun bir versiyon ekledi ve bu arac sata sundu. Balangç fiyat 47.120 dolar olan aracn… [+1568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "GeForce NOW får RTX 5080 GPU:er",
            "description": "Kommer att ge högre bildkvalitet på speltjänsten\n\n\n\n\n\n\nI morgon drar spelmässan Gamescom igång och inför det har Nvidia presenterat lite grejer som man planerar att visa upp där. Nvidias speltjänst GeForce Now kommer att få en stor uppgradering där hårdvaran …",
            "url": "https://feber.se/spel/geforce-now-far-rtx-5080-gpuer/482464/",
            "urlToImage": "https://static.feber.se/article_images/62/54/50/625450.jpg",
            "publishedAt": "2025-08-19T12:30:00Z",
            "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n15 idag\r\n28 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIkea har gjort en tallrik för köttbullar\r\nMed Gustaf Westman\r\n-1kg\r\n0\r\nAnnons från \r\nAnnons\r\nIngen bakdörr fö… [+27515 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "newsweek.com",
            "title": "Judges Hand Elon Musk Double Legal Blow",
            "description": "Voice is AI-generated. Inconsistencies may occur.\nElon Musk and Tesla suffered a pair of legal setbacks on Monday after federal judges in California and Maryland certified separate class action lawsuits against the carmaker and its CEO personally.\nThe rulings…",
            "url": "https://biztoc.com/x/793ea89cbd4ed3c4",
            "urlToImage": "https://biztoc.com/cdn/793ea89cbd4ed3c4_s.webp",
            "publishedAt": "2025-08-19T12:25:28Z",
            "content": "Voice is AI-generated. Inconsistencies may occur.Elon Musk and Tesla suffered a pair of legal setbacks on Monday after federal judges in California and Maryland certified separate class action lawsui… [+142 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "forbes.com",
            "title": "Bitcoin Price Crash Fears Gather As Crypto Braces For A Fed Shock",
            "description": "08/19 update below. This post was originally published on August 18\nBitcoin—alongside other major cryptocurrencies ethereum and XRP—have fallen sharply, raising fears of a crypto market crash after it bubbled up to an all-time high of $4.2 trillion this month…",
            "url": "https://biztoc.com/x/e2561c952425f7eb",
            "urlToImage": "https://biztoc.com/cdn/e2561c952425f7eb_s.webp",
            "publishedAt": "2025-08-19T12:25:13Z",
            "content": "08/19 update below. This post was originally published on August 18Bitcoinalongside other major cryptocurrencies ethereum and XRPhave fallen sharply, raising fears of a crypto market crash after it b… [+147 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Rimmi Singhi",
            "title": "Can Tesla's New Model Y L Boost its Sales Volumes in China?",
            "description": "TSLA launches the six-seat Model Y L in China to regain ground as sales slip and competition from local players rises.",
            "url": "https://finance.yahoo.com/news/teslas-model-y-l-boost-121700379.html",
            "urlToImage": "https://media.zenfs.com/en/zacks.com/31bd29e54b1564eed55c540c698fcb76",
            "publishedAt": "2025-08-19T12:17:00Z",
            "content": "Tesla TSLA is facing a slowdown in one of its most important markets China. The worlds biggest car market is in the middle of a brutal price war, and local players are giving global names a run for t… [+4842 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Robert Alexander",
            "title": "Judges Hand Elon Musk Double Legal Blow",
            "description": "Courts greenlight class actions on Tesla's autonomy marketing and USAID funding.",
            "url": "https://www.newsweek.com/judges-hand-elon-musk-double-legal-blow-usaid-tesla-2115518",
            "urlToImage": "https://d.newsweek.com/en/full/2705076/elon-musk-wearing-doge-cap.jpg",
            "publishedAt": "2025-08-19T12:16:58Z",
            "content": "Elon Musk and Tesla suffered a pair of legal setbacks on Monday after federal judges in California and Maryland certified separate class action lawsuits against the carmaker and its CEO personally.\r\n… [+6621 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kommersant.ru"
            },
            "author": "Коммерсантъ",
            "title": "Корпоративные новости на “Ъ FM”",
            "description": "«МегаФон» запустил услугу по переносу тарифа. Абоненты любых операторов могут оформить сим-карту в «МегаФоне» и перенести на нее «копию» своего действующего тарифа. Сделать это можно через мобильное приложение или в салоне связи. Это первое и абсолютно уникал…",
            "url": "https://www.kommersant.ru/doc/7973962",
            "urlToImage": "https://iy.kommersant.ru/SocialPics/7973962_49_0_124518425",
            "publishedAt": "2025-08-19T12:11:57Z",
            "content": "«» . - «» «» . . -. «». , , -. .\r\nTesla Model Y L . 339 . (3,8 .). . Model Y L . , .\r\n - 2,6 2025 . . 1,6 , 4,9 . 32,4%, 15,5 . , , IPO, , ."
        },
        {
            "source": {
                "id": null,
                "name": "Observer"
            },
            "author": "Abigail Bassett, Abigail Bassett",
            "title": "Ford’s Big-Truck Legacy Could Be a Problem for Its New $30,000 EV Ambition",
            "description": "With slowing Lightning sales, rising tariffs and fierce EV competition, Ford’s $30,000 electric pickup could be its boldest risk yet.",
            "url": "https://observer.com/2025/08/ford-ev-truck-analysis/",
            "urlToImage": "https://observer.com/wp-content/uploads/sites/2/2025/08/GettyImages-1247113019.jpg?quality=80",
            "publishedAt": "2025-08-19T12:00:53Z",
            "content": "Ford CEO Jim Farley calls the $30,000 EV pickup a new Model T moment, but analysts question whether Ford can scale fast enough to survive. Bill Pugliano/Getty Images\r\nLast week, under the blistering … [+4213 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Roger Åberg",
            "title": "Gordon Murray har gjort en ny McLaren F1 GTR",
            "description": "Typ...\n\n\n\n\n\n\n\n\n\n\n\n\nGordon Murray är kanske mest känd som skaparen av McLaren F1. Nu för tiden driver han Gordon Murray Automotive där han sänker två bilar, T.50 och T.33. \n\nNu har han startat en ny business som en avdelning av den andra bilfirman som han kall…",
            "url": "https://feber.se/bil/gordon-murray-har-gjort-en-ny-mclaren-f1-gtr/482473/",
            "urlToImage": "https://static.feber.se/article_images/62/54/86/625486.jpeg",
            "publishedAt": "2025-08-19T12:00:00Z",
            "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n16 idag\r\n28 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIkea har gjort en tallrik för köttbullar\r\nMed Gustaf Westman\r\n-12kg\r\n0\r\nAnnons från \r\nAnnons\r\nBilligare ChatG… [+27698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "Earnings live: Home Depot results miss, Palo Alto Networks stock pops, Tesla rival Xpeng rises",
            "description": "In this article:\nSecond quarter earnings season is winding down, and with most of the reports in, the results have been mostly positive.\nOver 92% of S&P 500 index companies have reported results, and as of Aug. 18, analysts expected S&P 500 companies to repor…",
            "url": "https://biztoc.com/x/aca8b0c2b59fe407",
            "urlToImage": "https://biztoc.com/cdn/aca8b0c2b59fe407_s.webp",
            "publishedAt": "2025-08-19T11:52:11Z",
            "content": "In this article:Second quarter earnings season is winding down, and with most of the reports in, the results have been mostly positive.Over 92% of S&amp;P 500 index companies have reported results, a… [+158 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "barrons.com",
            "title": "Tesla Stock Is Down as Analyst Compares Tesla And Waymo. The Winner Is Surprising",
            "description": "",
            "url": "https://biztoc.com/x/fb19578a1c685d61",
            "urlToImage": "https://biztoc.com/cdn/fb19578a1c685d61_s.webp",
            "publishedAt": "2025-08-19T11:51:41Z",
            "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is SoftBank investing $2 billion in Intel? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;What impact will Nvidia's … [+717 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "Tesla вернула рычаг указателя поворотов в Model 3 — в уже проданные электромобили его установят за $350",
            "description": "Эксцентричность главы Tesla Илона Маска (Elon Musk) порой оборачивается не самыми последовательными техническими решениями в области эргономики. Вопиющий минимализм органов управления электромобилей Tesla давно является едва ли не главным поводом для критики.…",
            "url": "https://3dnews.ru/1127868/tesla-vernula-richag-ukazatelya-povorotov-v-model-3-v-uge-prodannie-elektromobili-ego-ustanovyat-za-350",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/08/19/1127868/model_3.jpg",
            "publishedAt": "2025-08-19T11:51:00Z",
            "content": "Tesla (Elon Musk) . Tesla . Model 3 , $350.\r\n : Tesla\r\nCarNewsChina, Tesla Model 3, - , . , Tesla Model Y , .\r\n Tesla Model 3 , , . -, $350. -, Model 3 . , , 7 2025 . .\r\nTesla. Model S Model X 2022 ,… [+21 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "LADbible"
            },
            "author": "Emma Rosemurgey",
            "title": "Elon Musk plots Tesla takeover of your house 'to avoid nationwide blackouts'",
            "description": "Tech mogul Elon Musk has submitted plans to launch his Tesla Powerwall in the UK",
            "url": "https://www.ladbible.com/news/technology/elon-musk-energy-tesla-powerwall-uk-electric-255656-20250819",
            "urlToImage": "https://images.ladbible.com/ogimage/v3/assets/bltcd74acc1d0a99f3a/blta0d39c615cf14a66/68a45c06bf5e2a690634d947/GettyImages-471774210.jpg",
            "publishedAt": "2025-08-19T11:44:52Z",
            "content": "Elon Musk's electric vehicle and engineering firm Tesla has applied to provide power to people in the UK, vowing to put an end to 'nationwide blackouts.'\r\nThe tech mogul applied to the gas and electr… [+2161 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CHIP Online Deutschland"
            },
            "author": "Meara-Sophia Betz",
            "title": "Ford bläst zur Attacke: Neuer Elektro-Lkw soll billiger als Autos sein",
            "description": "Ford arbeitet an einem neuen Elektro-Lkw, der 2027 auf den Markt kommen soll. Das Modell soll deutlich günstiger werden als viele heutige Autos.",
            "url": "https://www.chip.de/news/auto-fahrrad/ford-blaest-zur-attacke-neuer-elektro-lkw-soll-billiger-als-autos-sein_635439a0-b4d7-44b3-9dc7-ecfd42b55df6.html",
            "urlToImage": "https://quadro.burda-forward.de/ctf/17a714f6-73ec-4f71-8c2e-f9cded2d8f43.4de74021-2045-4e93-85a8-a7f45281f077.jpg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%281323%2C513%29&hash=9a68955df7fdd13b7b1d9c802355f2caccbd3df6fe28ced81c0f38af49a3e9e7",
            "publishedAt": "2025-08-19T11:44:00Z",
            "content": "Ford will den Elektroauto-Markt neu aufmischen. Ab 2027 bringt der US-Hersteller einen mittelgroßen Elektro-Lkw auf den Markt, der rund 25.800 Euro kosten soll. Damit soll das Modell günstiger werden… [+2750 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Jordan King",
            "title": "Ashley St. Clair Launches 'Bad Advice' Podcast, Says She's Being Evicted",
            "description": "Ashley St. Clair made headlines this year after she said Elon Musk was the father of her child.",
            "url": "https://www.newsweek.com/ashley-st-clair-elon-musk-podcast-bad-advice-2115503",
            "urlToImage": "https://d.newsweek.com/en/full/2705048/ashley-st-clair.png",
            "publishedAt": "2025-08-19T11:41:54Z",
            "content": "Ashley St. Clair, who publicly identified Elon Musk as the father of her son Romulus earlier this year, has launched a podcast, Bad Advice with Ashley St. Clair, saying she was financially strained a… [+4435 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Finance",
            "title": "Earnings live: Home Depot results miss, Palo Alto Networks stock pops, Tesla rival Xpeng rises",
            "description": "The gush of second quarter earnings reports is beginning to slow to a trickle, and with most of the reports in, the results have been mostly positive.",
            "url": "https://finance.yahoo.com/news/live/earnings-live-home-depot-results-miss-palo-alto-networks-stock-pops-tesla-rival-xpeng-rises-114118253.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/TY6.riMivxtdPX6iYFH9wQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2025-08/5c6c4f50-7cf1-11f0-bfff-3ba786bff4ad",
            "publishedAt": "2025-08-19T11:41:18Z",
            "content": "Second quarter earnings season is winding down, and with most of the reports in, the results have been mostly positive.\r\nOver 92% of S&amp;P 500 index companies have reported results, and as of Aug. … [+13118 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CHIP Online Deutschland"
            },
            "author": "Sophia  Tomulla",
            "title": "Erster Eindruck des neuen Model Y: Der Anblick ist gewöhnungsbedürftig",
            "description": "Ein koreanischer Tesla-Blogger sammelt erste Eindrücke vom neuen Tesla Model Y L. Vor allem die Optik sorgt für Stirnrunzeln.",
            "url": "https://www.chip.de/news/auto-fahrrad/erster-eindruck-des-neuen-model-y-der-anblick-ist-gewoehnungsbeduerftig_236068d0-9271-4f12-952a-30dc56200b42.html",
            "urlToImage": "https://quadro.burda-forward.de/ctf/d079dcc7-2ba7-4761-8065-920053be7afa.2ec7ff7c-2349-4f90-b2b0-b1729c63ee7f.jpg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%282625%2C1847%29&hash=13d8aa80911d792e814e9635a82609edeec448538bd66a1c95448f49107dc68a",
            "publishedAt": "2025-08-19T11:39:00Z",
            "content": "Tesla bringt mit dem Model Y L eine neue Variante seines beliebten Elektro-SUVs auf die Straße. In China wurde das Modell nun erstmals ohne Tarnung gesichtet. Die Aufnahmen stammen sowohl aus einem X… [+1605 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Just-auto.com"
            },
            "author": "GlobalData",
            "title": "Tesla slashes UK lease prices amid sales decline – report",
            "description": "The necessity for these price cuts has been partly attributed to Tesla's lack of storage capacity for unsold vehicles in the UK.",
            "url": "https://www.just-auto.com/news/tesla-slashes-uk-lease-prices-amid-sales-decline-report/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/vi.Mexu6Fo9vj3rmSl0y3w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03Mzg-/https://media.zenfs.com/en/just_auto_187/bda49d7d3f05e6b12897d50f68e04c82",
            "publishedAt": "2025-08-19T11:36:11Z",
            "content": "Tesla is offering reductions in the monthly lease fees for its electric vehicles in the UK, with rates now just over 50% of what they were a year ago, The Times reported, citing sources within the in… [+2073 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tjock.se"
            },
            "author": "Hugo Engström",
            "title": "Ikea har gjort en tallrik för köttbullar",
            "description": "Med Gustaf Westman\n\n\n\n\n\n\nNu har vi fått vårt första smakprov av Ikeas samarbete med den svenske designern Gustaf Westman. Den första produkten är en specialdesignad porslinstallrik för köttbullar. Tallriken har en minst sagt okonventionell form som är skrädda…",
            "url": "https://tjock.se/hemmet/ikea-har-gjort-en-tallrik-for-kottbullar/482474/",
            "urlToImage": "https://static.feber.se/article_images/62/54/95/625495.jpeg",
            "publishedAt": "2025-08-19T11:30:00Z",
            "content": "Välkommen!\r\nSkaffa Feber+\r\nIkea har gjort en tallrik för köttbullar\r\nMed Gustaf Westman\r\nFoto: Ikea\r\nDen här artikeln publiceras om 26 minuter.Med Feber+ får du läsa den redan nu!\r\nFrån 25 kr/månad\r\n… [+22908 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Elijah McKee",
            "title": "Tesla owner shares frustrating photos of disturbing trend growing across the country: 'This won't be the last time this will happen'",
            "description": "\"Sorry that happened to you.\"",
            "url": "https://www.yahoo.com/lifestyle/articles/tesla-owner-shares-frustrating-photos-112000961.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8ldGR81TBqwUkt0ylTu2Cg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MTk7Y2Y9d2VicA--/https://media.zenfs.com/en/the_cool_down_737/8d2d16513b31c9bf683b68cbe2f08d13",
            "publishedAt": "2025-08-19T11:20:00Z",
            "content": "However you feel about what kind of car someone else drives, it's never cool to intentionally damage it.\r\nUnfortunately, not everyone believes that, as one Redditor in Colorado proved with pictures o… [+2127 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "Bitcoin Price Crash Fears Gather As Crypto Braces For A Fed Shock",
            "description": "Bitcoin—alongside other major cryptocurrencies ethereum and XRP—have fallen sharply, raising fears of a crypto market crash...",
            "url": "https://www.forbes.com/sites/digital-assets/2025/08/19/wall-street-issues-serious-66-trillion-crypto-warning-as-price-crash-fears-hit-bitcoin-ethereum-and-xrp/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6370de05a5ef5d13ce2144b3/0x0.jpg?format=jpg&crop=1185,667,x201,y88,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-08-19T11:19:22Z",
            "content": "08/19 update below. This post was originally published on August 18\r\nBitcoinalongside other major cryptocurrencies ethereum and XRPhave fallen sharply, raising fears of a crypto market crash after it… [+8198 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Tesla Rival XPeng Deliveries Growth Accelerates To 103,181, Margins Expand",
            "description": "Chinese EV maker XPeng (NYSE:XPEV) reported its fiscal second-quarter results on Tuesday.\nThe company reported quarterly sales growth of 125.3% year-on-year (Y/Y) to 18.27 billion Chinese yuan ($2.55 billion), topping the analyst consensus estimate of 17.92 b…",
            "url": "https://biztoc.com/x/2f0a31ca33331b33",
            "urlToImage": "https://biztoc.com/cdn/2f0a31ca33331b33_s.webp",
            "publishedAt": "2025-08-19T11:18:12Z",
            "content": "Chinese EV maker XPeng (NYSE:XPEV) reported its fiscal second-quarter results on Tuesday.The company reported quarterly sales growth of 125.3% year-on-year (Y/Y) to 18.27 billion Chinese yuan ($2.55 … [+146 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Malte Kirchner",
            "title": "Model 3: Tesla bietet erstmals Blinkerhebel zum Nachrüsten an",
            "description": "Der Wegfall des Blinkerhebels beim Tesla Model 3 sorgte für viele Diskussionen. In China bietet der US-Autohersteller jetzt einen nachträglichen Einbau an.",
            "url": "https://www.heise.de/news/Model-3-Tesla-bietet-erstmals-Blinkerhebel-zum-Nachruesten-an-10547478.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/9/1/9/0/0/4/M3-Stalk-In-Situ-Hero-a2df31a3003bfe6d.avif",
            "publishedAt": "2025-08-19T11:18:00Z",
            "content": "Tesla bietet für das Model 3 erstmals einen Blinkerhebel zum Nachrüsten an. Das Angebot gilt zunächst nur in China und ist auf den dortigen Seiten des US-Autoherstellers zu finden. Ob weitere Länder … [+2338 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Aktualne.cz"
            },
            "author": "Radek Vičík",
            "title": "Skynet přichází, v Číně závodili skuteční Terminatoři. Běhali, přišli také o hlavu",
            "description": "Humanoidní hry v Číně přinesly naději i komiku: roboti závodili, hráli fotbal, ale i teatrálně padali.",
            "url": "https://sport.aktualne.cz/ostatni-sporty/svetove-hry-humanoidnich-robotu-2025/r~25dee4787cd011f0bf960cc47ab5f122/",
            "urlToImage": "https://cdn.xsd.cz/original/33f999b3d30639cdb6ca51ccca8480ea.jpg",
            "publishedAt": "2025-08-19T11:11:03Z",
            "content": "Diváci si museli připadat jako v dalším pokračování legendární ságy Terminator. Ale tenhle Skynet  byl skutečný.\r\nV Číně se odehrálo to, co vypadá jako futuristická olympiáda smíchu s příchutí paniky… [+3329 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Anusuya Lahiri",
            "title": "Tesla Rival XPeng Deliveries Growth Accelerates To 103,181, Margins Expand",
            "description": "Chinese EV maker XPeng (NYSE:XPEV) reported its fiscal second-quarter results on Tuesday. The company reported quarterly sales growth of 125.3% year-on-year ...",
            "url": "https://finance.yahoo.com/news/tesla-rival-xpeng-deliveries-growth-111025763.html",
            "urlToImage": "https://media.zenfs.com/en/Benzinga/e731dec5ab7b3d25469229f99f19f03b",
            "publishedAt": "2025-08-19T11:10:25Z",
            "content": "Chinese EV maker XPeng (NYSE:XPEV) reported its fiscal second-quarter results on Tuesday.\r\nThe company reported quarterly sales growth of 125.3% year-on-year (Y/Y) to 18.27 billion Chinese yuan ($2.5… [+2089 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ig.com.br"
            },
            "author": "Pedro Emerenciano, Pedro Emerenciano",
            "title": "Carregadores rápidos de veículos elétricos elevam poluição do ar",
            "description": "Pesquisadores identificam partículas finas em níveis acima do recomendado em quase metade dos pontos de recarga avaliados",
            "url": "https://carros.ig.com.br/veiculos-eletricos/2025-08-19/carregadores-rapidos-veiculos-eletricos-elevam-poluicao-do-ar.html",
            "urlToImage": "https://i0.statig.com.br/bancodeimagens/7v/ds/rb/7vdsrbgh6s4umd4jh92k3p9rg.jpg",
            "publishedAt": "2025-08-19T11:06:55Z",
            "content": "Os carregadores rápidos de veículos elétricos, vistos como símbolos da transição para uma mobilidade mais limpa, também podem ser fonte de poluição do ar.\r\nUm levantamento realizado em 50 estações de… [+1972 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Geek Show"
            },
            "author": "Eric Rafidiarimanana",
            "title": "Elon Musk les a évincés, ils construisent dans l’ombre le réseau qui pourrait renverser Tesla : « Ce n’est que le début”",
            "description": "Trois anciens de Tesla créent un nouveau réseau de recharge ultra-rapide pour les pros. Leur startup Hubber cible les taxis, livreurs et VTC, là où Tesla a laissé un vide en ville. Une stratégie audacieuse, née d'un licenciement brutal.\nThe post Elon Musk les…",
            "url": "https://dailygeekshow.com/?p=987194",
            "urlToImage": "https://dailygeekshow.com/wp-content/uploads/2025/06/elon-musk-mort-tesla.webp",
            "publishedAt": "2025-08-19T11:06:00Z",
            "content": "Elon Musk et limage symbolique de la chute de Tesla : logo brisé, Cybertruck ensablé, horizon bouché – DailyGeekShow\r\nTrois anciens de Tesla créent un nouveau réseau de recharge ultra-rapide pour les… [+2797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caschys Blog"
            },
            "author": "André Westphal",
            "title": "Tesla Model Y L mit sechs Sitzen startet in China",
            "description": "Tesla hat noch vor dem gemunkelten Herbst 2025 das neue E-Auto-Modell namens Model Y L vorgestellt. Man ergänzt gegenüber dem regulären Model Y eine weitere Sitzreihe, sodass das Fahrzeug inzwischen auf insgesamt sechs Sitze kommt.  Wie Felix schon aufgegriff…",
            "url": "https://stadt-bremerhaven.de/tesla-model-y-l-mit-sechs-sitzen-startet-in-china/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2025/08/Tesla-Model-Y-L.jpg",
            "publishedAt": "2025-08-19T11:00:31Z",
            "content": "Tesla hat noch vor dem gemunkelten Herbst 2025 das neue E-Auto-Modell namens Model Y L vorgestellt. Man ergänzt gegenüber dem regulären Model Y eine weitere Sitzreihe, sodass das Fahrzeug inzwischen … [+1684 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Frode Wikesjö",
            "title": "Gandalf och Frodo återvänder i nya Sagan om ringen-filmen",
            "description": "AI-hob?\n\n\n\n\n\n\nI den nya Sagan om ringen-filmen The Hunt for Gollum kommer både Gandalf och Frodo att dyka upp. Detta avslöjades under en panel på ett event i London, där både Ian McKellen (Gandalf) och Elijah Wood (Frodo) var närvarande.\n\nMcKellen berättade a…",
            "url": "https://feber.se/film/gandalf-och-frodo-atervander-i-nya-sagan-om-ringen-filmen/482455/",
            "urlToImage": "https://static.feber.se/article_images/62/54/12/625412.jpeg",
            "publishedAt": "2025-08-19T11:00:00Z",
            "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n10 idag\r\n28 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIngen bakdörr för Apple i Storbritannien\r\nFör spioneri på amerikanska användare\r\n43.7°\r\n0\r\nAnnons från \r\nAnno… [+25848 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Olhardigital.com.br"
            },
            "author": "Bruna Barone",
            "title": "Tesla lança carro de seis lugares na China com 750 km de autonomia",
            "description": "Nova versão da empresa americana vai enfrentar a concorrência direta de pelo menos dois outros fabricantes chineses\nO post Tesla lança carro de seis lugares na China com 750 km de autonomia apareceu primeiro em Olhar Digital.",
            "url": "https://olhardigital.com.br/2025/08/19/carros-e-tecnologia/tesla-lanca-carro-de-seis-lugares-na-china-com-750-km-de-autonomia/",
            "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2025/08/Tesla-Model-YL.png",
            "publishedAt": "2025-08-19T10:53:15Z",
            "content": "A Tesla vai iniciar em setembro a entrega do novo Model YL na China. O modelo de seis lugares será vendido com um preço quase 30% maior do que a edição básica, chegando a 339.000 yuans (cerca de R$ 2… [+2419 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hotnews.ro"
            },
            "author": "Sebastian Jucan",
            "title": "Producătorii de mașini electrice din China au ajuns să investească mai mult în străinătate decât în țară, o premieră de când există date",
            "description": "Companiile chineze de mașini electrice își cresc investițiile în fabrici din străinătate, pe măsură ce competiția cu Tesla și alți producători auto globali se intensifică, relatează CNBC. Lanțul de aprovizionare din China al mașinilor electrice…",
            "url": "http://hotnews.ro/producatorii-de-masini-electrice-din-china-au-ajuns-sa-investeasca-mai-mult-in-strainatate-decat-in-tara-o-premiera-de-cand-exista-date-2048195",
            "urlToImage": "https://hotnews.ro/wp-content/uploads/2025/08/profimedia-0901610437.jpg",
            "publishedAt": "2025-08-19T10:51:53Z",
            "content": "Companiile chineze de maini electrice îi cresc investiiile în fabrici din strintate, pe msur ce competiia cu Tesla i ali productori auto globali se intensific, relateaz CNBC.\r\nLanul de aprovizionare … [+2999 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Unwire.hk"
            },
            "author": "Lawton",
            "title": "Tesla 中國推出 6 座 Model Y L SUV 售價 33.9 萬人民幣搶攻家庭市場",
            "description": "美國電動車大廠 Tesla 8 月 19 日在中國市場推出 6 座多功能運動車 Model YL，售價 33.9 萬人民幣（約港幣 HK$366,120）。這款車型是熱門 SUV Model Y 的衍生版本，專門針對中國多孩家庭市場需求，預計 9 月開始交車。",
            "url": "https://unwire.hk/2025/08/19/tesla-model-yl-china-launch-6-seater-suv/life-tech/auto/",
            "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2025/08/teslaxyl.jpeg",
            "publishedAt": "2025-08-19T10:46:54Z",
            "content": "Tesla 8 19 6 Model YL 33.9 HK$366,120 SUV Model Y 9 \r\n6 \r\nModel YL 3 Model Y 3,040mm0-100km/h 4.5 201km/h CLTC 751 2,088kg 2,539 \r\n6 Model YL \r\nSUV SUVYU7 Model Y \r\nTesla Model YL Model YL Tesla 9 \r\n… [+18 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Habr.com"
            },
            "author": "M-Semyonov (Cloud.ru)",
            "title": "Нечеловеческий фактор: кто ответит, если ваш AI накосячит? Смотрим кейсы правоприменения и строим прогнозы",
            "description": "Искусственный интеллект уже здесь и он повсюду: от производственных линий трубопрокатных заводов до брейнрот-контента в вашей ленте. С вами снова Михаил Семенов, ведущий юрисконсульт Cloud.ru и человек, который 6 лет прослужил в прокуратуре. Сегодня предлагаю…",
            "url": "https://habr.com/ru/companies/cloud_ru/articles/937256/#post-content-body",
            "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/e7a/def/435/e7adef43555d502f22672cde483f8492.png",
            "publishedAt": "2025-08-19T10:46:40Z",
            "content": ": - . , Cloud.ru , 6 . \r\n , : , AI, , , . , , AI , , . . \r\nAI \r\n , AI . 2018 Tesla . , Tesla , . 2023 AI Amazon : , . , ( ). AI « », AI, . \r\n 2025 FTC ( ) AI , , (, Section 5 FTC Act, ) AI/ML-. , . ,… [+1535 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Volkswagen launches 'upgrade' plan at as low as Rs 2,000 per month. Check cars eligible for this upgrade",
            "description": "Volkswagen has introduced a subscription model in the UK for its electric ID.3 and ID.4 cars, allowing customers to unlock increased horsepower for a monthly, annual, or one-time fee. This move, offering a boost from 201 to 228 horsepower, has faced criticism…",
            "url": "https://economictimes.indiatimes.com/news/new-updates/volkswagen-launches-upgrade-plan-at-as-low-as-rs-2000-per-month-check-cars-eligible-for-this-upgrade/articleshow/123385173.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-123385268,width-1200,height-630,imgsize-94718,overlay-economictimes/articleshow.jpg",
            "publishedAt": "2025-08-19T10:45:53Z",
            "content": "Volkswagen has introduced a subscription-based model in the UK that allows customers of its electric cars to unlock higher horsepower by paying extra, the BBC reported. The system applies to the ID.3… [+1858 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Tesla Records 14K New Insured Registrations In China From August 11 To 17 — 60% Surge Over Last Quarter",
            "description": "Tesla Inc. (NASDAQ:TSLA) sales in China experienced a 4.5% surge for the week of August 11 to 17, as the automaker struggles with declining sales globally.\n60% Growth Over Last Quarter Despite YoY Decline\nThe company recorded 14k new insured registrations in …",
            "url": "https://biztoc.com/x/2fb26381be73f937",
            "urlToImage": "https://biztoc.com/cdn/2fb26381be73f937_s.webp",
            "publishedAt": "2025-08-19T10:44:36Z",
            "content": "Tesla Inc. (NASDAQ:TSLA) sales in China experienced a 4.5% surge for the week of August 11 to 17, as the automaker struggles with declining sales globally.60% Growth Over Last Quarter Despite YoY Dec… [+143 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "I started one of the largest Tesla clubs in the US. Here's why I believe in Elon Musk and his vision",
            "description": "John Stringer started Tesla Owners of Silicon Valley in 2018 and grew the club to 6,000 members and 1.2 million X followers.\nCourtesy John Stringer\nJohn Stringer, a Bay Area resident, started Tesla Owners of Silicon Valley in 2018.\nStringer grew the organizat…",
            "url": "https://biztoc.com/x/773d88077573e590",
            "urlToImage": "https://biztoc.com/cdn/950/og.png",
            "publishedAt": "2025-08-19T10:33:30Z",
            "content": "John Stringer started Tesla Owners of Silicon Valley in 2018 and grew the club to 6,000 members and 1.2 million X followers.Courtesy John StringerJohn Stringer, a Bay Area resident, started Tesla Own… [+150 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Roger Åberg",
            "title": "MSNBC byter namn till MS NOW",
            "description": "Trots att man inte skulle göra det\n\n\n\n\n\n\nMSNBC startade 1996 som ett samarbete mellan Microsoft och tv-bolaget NBC. Tanken var att mixa tv med internet, i det här fallet alltså NBC med MSN, Microsofts nyhetssatsning som fortfarande lever. Microsoft sålde dock…",
            "url": "https://feber.se/samhalle/msnbc-byter-namn-till-ms-now/482457/",
            "urlToImage": "https://static.feber.se/article_images/62/54/30/625430.jpeg",
            "publishedAt": "2025-08-19T10:30:00Z",
            "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n12 idag\r\n28 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIngen bakdörr för Apple i Storbritannien\r\nFör spioneri på amerikanska användare\r\n44.1°\r\n0\r\nAnnons från \r\nAnno… [+25542 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Les Numériques"
            },
            "author": "Alexandre Scotti",
            "title": "Actualité : Tesla : la recharge gratuite à vie est de retour avec une version “Luxe” des Model S et Model X",
            "description": "Tesla ressort une arme de séduction massive : la recharge gratuite à vie. Un privilège désormais réservé aux Model S et Model X achetées avec le pack d’options “Luxe”.",
            "url": "https://www.lesnumeriques.com/voiture-electrique/tesla-la-recharge-gratuite-a-vie-est-de-retour-avec-une-version-luxe-des-model-s-et-model-x-n241140.html",
            "urlToImage": "https://cdn.lesnumeriques.com/optim/news/24/241140/6757482d-tesla-annonce-une-version-luxe-de-ses-model-s-et-model-x-avec-la-recharge-gratuite-a-vie__1200_678__237-152-1943-1047.jpg",
            "publishedAt": "2025-08-19T10:30:00Z",
            "content": "En bref<ul><li>Tesla propose un pack Luxe exclusif aux États-Unis pour ses Model S et Model X.</li><li>Il inclut conduite autonome, connexion premium, entretien complet et recharge gratuite à vie.</l… [+2640 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Notebookcheck.net"
            },
            "author": "Daniel Zlatev",
            "title": "Model Y L review shows how all rear seats in the 3-row SUV fold flat automatically to fit cargo",
            "description": "The first Tesla Model Y L reviews demonstrate how the third row of seats folds automatically with the touch of a button, unlike the six-seat Model X whose rear seats can't fold. The exact passenger and cargo space measureents convey that it's either six adult…",
            "url": "https://www.notebookcheck.net/Model-Y-L-review-shows-how-all-rear-seats-in-the-3-row-SUV-fold-flat-automatically-to-fit-cargo.1090823.0.html",
            "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/Tesla-Model-Y-L-review-cargo-passenger-space.jpg",
            "publishedAt": "2025-08-19T10:30:00Z",
            "content": "The first Model Y L reviews are out, and Tesla has apparently done a much better job with passenger seating and cargo space with what can now be considered its first 3-row SUV.\r\nThe two captain seats… [+2323 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "latimes.com",
            "title": "Recent lawsuits put Tesla's self-driving technology on trial",
            "description": "Recent lawsuits put Tesla’s self-driving technology on trial\n- With vehicle sales falling, Tesla’s future rests largely on its robotaxi launch and other advancements in artificial intelligence.\n- Multiple lawsuits accuse Tesla and Musk of overexaggerating the…",
            "url": "https://biztoc.com/x/899d9974e976c141",
            "urlToImage": "https://biztoc.com/cdn/899d9974e976c141_s.webp",
            "publishedAt": "2025-08-19T10:22:21Z",
            "content": "Recent lawsuits put Teslas self-driving technology on trial- With vehicle sales falling, Teslas future rests largely on its robotaxi launch and other advancements in artificial intelligence.- Multipl… [+136 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Lloyd Lee",
            "title": "I started one of the largest Tesla clubs in the US. Here's why I believe in Elon Musk and his vision.",
            "description": "This as-told-to essay is based on a conversation with John Stringer, a Bay Area resident who founded Tesla Owners of Silicon Valley.",
            "url": "https://www.businessinsider.com/tesla-owners-of-silicon-valley-why-fans-support-elon-musk-2025-8",
            "urlToImage": "https://i.insider.com/689e8ce9194a2d49b8ae9be8?width=480&format=jpeg",
            "publishedAt": "2025-08-19T10:22:01Z",
            "content": "John Stringer started Tesla Owners of Silicon Valley in 2018 and grew the club to 6,000 members and 1.2 million X followers.Courtesy John Stringer\r\n<ul><li>John Stringer, a Bay Area resident, started… [+6185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Murtuza J Merchant",
            "title": "Bitcoin To $200,000 Is Bernstein's 'Highest Conviction,' But Solana, Ethereum Will Outperform Elsewhere",
            "description": "Brokerage firm Bernstein on Tuesday reaffirmed its most bullish outlook on digital assets, projecting Bitcoin (CRYPTO: BTC) to reach $200,000 while...",
            "url": "https://finance.yahoo.com/news/bitcoin-200-000-bernsteins-highest-101834844.html",
            "urlToImage": "https://media.zenfs.com/en/Benzinga/fd9b4843cb49bab78f32c4880ef7758a",
            "publishedAt": "2025-08-19T10:18:34Z",
            "content": "Brokerage firm Bernstein on Tuesday reaffirmed its most bullish outlook on digital assets, projecting Bitcoin (CRYPTO: BTC) to reach $200,000 while identifying Solana (CRYPTO: SOL) and Ethereum (CRYP… [+2253 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Tobias Költzsch",
            "title": "Model 3: Tesla bietet Blinkerhebel zum Nachrüsten an",
            "description": "Dass Tesla beim Model 3 nach 2023 den Blinkerhebel durch Buttons ersetzte, fanden viele nicht gut. Nun gibt es den Hebel in China zum Nachrüsten. (Tesla Model 3, Elektroauto)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fmodel-3-tesla-bietet-blinkerhebel-zum-nachruesten-an-2508-199309.html&referer=https%3A%2F%2Ft.co%2Ff5e706bc3f",
            "urlToImage": null,
            "publishedAt": "2025-08-19T10:15:01Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
    ];

    return (
        <>
            <div className="container mt-4 mb-4 g-3">
                <div className="row">
                    {articles.map((ele, index) => (
                        <div className="col-4 border border-grey py-2 mb-2" key={index}>

                            <div className="row">
                                <div className="col-6">
                                    <small>
                                        Author : <span className="badge bg-secondary">{ele.author ? ele.author.slice(0, 18) : "Coders"}</span>
                                    </small>
                                </div>
                                <div className="col-6 ">
                                    <small>
                                        Published at :{" "}
                                        <span className="badge bg-secondary">{ele.publishedAt}</span>
                                    </small>
                                </div>
                            </div>
                            <h3 className="mt-2 fs-4">{ele.title.slice(0, 28)}...</h3>
                            <hr />
                            <div className="d-flex gap-2 justify-content-evenly ">
                                <img
                                    src={ele.urlToImage ? ele.urlToImage : "https://media.istockphoto.com/id/1924137135/photo/online-blog-search-learning-work-internet-freelance-business-post-website-online-homepage.jpg?s=612x612&w=0&k=20&c=kzmDarljUaSpYSxO4MzDbqRWTT-3qVcVtthJDYzy6qo="}
                                    alt=""
                                    className="img-fluid"
                                />
                                <small>
                                    {ele.description.slice(0, 120)}...
                                </small>
                            </div>
                            <small>
                                {ele.content.slice(0, 200)}...
                            </small>
                            <br />
                            <a href={ele.url} className="btn  btn-outline-secondary btn-light mt-2 ">
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
