(() => {
  "use strict";

  const groupsEnglish = [
    {
      id: "antipasti",
      title: "Antipasti",
      note: "Italian cold cuts, cheeses and bruschette to begin at the table.",
      items: [
        ["Bruschetta al Pomodoro", "Toasted bread with ripe tomatoes, extra virgin olive oil and fresh basil.", "120", "vegetarian"],
        ["Bruschetta Mortadella e Ricotta", "Creamy ricotta, mortadella sliced to order, extra virgin olive oil, fresh rosemary leaves and black pepper.", "160"],
        ["Bruschetta Crudo di Parma e Tartufo", "Toasted bread with Prosciutto di Parma sliced to order, black truffle cream, extra virgin olive oil and black pepper.", "220"],
        ["Bruschetta ’Nduja e Ricotta", "Creamy ricotta with ’nduja, a soft spicy Calabrian pork sausage, on toasted bread.", "160"],
        ["Italian Cold Cuts Board", "Prosciutto cotto, Prosciutto di Parma, Spianata Romana and mortadella, all sliced to order. Perfect for two or more guests.", "400"],
        ["Italian Cold Cuts & Cheese Board", "Italian cured meats sliced to order, a selection of cheeses and Piedmontese grissini. Perfect for two or more guests.", "500"],
        ["Prosciutto di Parma", "Prosciutto di Parma sliced to order, served with Piedmontese grissini. Add burrata +฿180 or fior di latte mozzarella +฿120.", "380"],
        ["Caprese Salad", "Tomatoes and fior di latte mozzarella, extra virgin olive oil, fresh basil, oregano and drops of house-made Genovese pesto.", "230", "vegetarian"]
      ]
    },
    {
      id: "roman-classics",
      title: "Roman Classics",
      note: "Pasta Liguori di Gragnano IGP, bronze-drawn and slowly dried. The Roman recipes are kept exactly where they belong.",
      items: [
        ["Carbonara", "Crisp guanciale, egg yolks, Pecorino Romano DOP, pasta water and black pepper, worked off the heat into a silky sauce. No cream.", "320"],
        ["Bucatini all’Amatriciana", "Guanciale, white wine, tomato and Pecorino Romano DOP.", "320"],
        ["Rigatoni Cacio e Pepe", "Pecorino Romano DOP and pasta water emulsified into a glossy cream, finished with freshly cracked black pepper.", "320", "vegetarian"]
      ]
    },
    {
      id: "seafood-pasta",
      title: "Seafood Pasta",
      note: "Pasta Liguori di Gragnano IGP with seafood, white wine, extra virgin olive oil and the flavours of the Italian coast.",
      items: [
        ["Paccheri con Moscardini", "Baby octopus in a Neapolitan-style tomato sauce with capers, garlic, white wine and extra virgin olive oil.", "380"],
        ["Spaghettoni Cozze e Pomodorini Gialli", "Mussels with sweet yellow tomatoes, garlic, white wine and fresh parsley.", "390"],
        ["Spaghettoni alle Vongole", "Clams, garlic, white wine, extra virgin olive oil and parsley. Add bottarga +฿60.", "390"],
        ["Linguine al Nero di Seppia e Bottarga", "Linguine in a rich cuttlefish ink sauce, finished with freshly grated bottarga: cured and salted fish roe, prized for its savoury taste of the sea.", "460"]
      ]
    },
    {
      id: "pesto",
      title: "Pesto",
      note: "Pasta Liguori di Gragnano IGP with pesto made in our kitchen.",
      items: [
        ["Linguine al Pesto Genovese", "House-made to the traditional Genovese recipe with Italian basil grown by us. The cheese is already in the pesto; extra Parmigiano on request.", "330", "vegetarian"],
        ["Fusilloni al Pesto di Rucola", "House-made rocket pesto with semi-dried tomatoes, made with rocket and Italian basil. Extra Parmigiano on request.", "350", "vegetarian"]
      ]
    },
    {
      id: "ragu",
      title: "Ragù",
      note: "Slow-cooked Italian ragù, paired with the pasta shape that carries it best.",
      items: [
        ["Rigatoni al Ragù Bolognese", "Beef and pork ragù, slowly cooked until full-bodied and finished with Parmigiano Reggiano.", "300"],
        ["Tagliatelle all’Uovo al Ragù Bolognese", "Egg tagliatelle with beef and pork ragù, slowly cooked until full-bodied and finished with Parmigiano Reggiano.", "320"],
        ["Rigatoni al Ragù Napoletano", "Pork rib and pork shoulder slowly simmered in tomato for a deep Neapolitan ragù, finished with Parmigiano Reggiano.", "300"]
      ]
    },
    {
      id: "italian-table",
      title: "The Italian Table",
      note: "Everyday Italian pasta, made properly with Pasta Liguori di Gragnano IGP.",
      items: [
        ["Spaghettoni Aglio, Olio e Peperoncino", "Garlic and chilli in extra virgin olive oil, with anchovies melted into the sauce and toasted breadcrumbs.", "200"],
        ["Spaghettoni Pomodoro e Basilico", "Bright tomato sauce, extra virgin olive oil and basil, finished with Parmigiano Reggiano.", "230", "vegetarian"],
        ["Penne all’Arrabbiata", "Garlic and chilli in extra virgin olive oil, with tomato for a clean, fiery sauce.", "260", "vegetarian"],
        ["Linguine alla Puttanesca", "Tomato, anchovies, olives, capers and garlic in a southern Italian classic.", "300"],
        ["Penne alla Caponata Siciliana", "Eggplant, tomato, celery and capers in the sweet-and-sour style of Sicily.", "300", "vegetarian"],
        ["Fusilloni ai Porcini", "Sautéed porcini finished with butter, Parmigiano Reggiano and pasta water for a deep woodland sauce.", "360", "vegetarian"],
        ["Penne ai Carciofi, Timo e Pecorino", "Artichokes cooked into a smooth cream, then finished with Pecorino Romano and fresh thyme.", "310", "vegetarian"],
        ["Spaghettoni al Tartufo Nero", "Black truffle folded with butter, Parmigiano Reggiano and pasta water, finished with black pepper.", "380", "vegetarian"]
      ]
    },
    {
      id: "stuffed-pasta",
      title: "Stuffed Pasta",
      note: "Filled pasta finished simply with butter, sage and the right cheese.",
      items: [
        ["Ravioli Ricotta e Spinaci", "Ravioli filled with ricotta and spinach, tossed with butter, sage and Parmigiano Reggiano.", "300", "vegetarian"],
        ["Lunette al Tartufo Nero", "Ricotta and black truffle stuffed pasta, finished with butter, sage and Parmigiano Reggiano.", "350", "vegetarian"],
        ["Tortelli ’Nduja e Pecorino", "Pasta filled with spicy Calabrian ’nduja and pecorino, finished with butter, sage and Pecorino Romano DOP.", "320"]
      ]
    },
    {
      id: "desserts",
      title: "Desserts",
      note: "Italian classics and a small Thai finish.",
      items: [
        ["Traditional Italian Tiramisu", "Mascarpone, egg yolks and espresso coffee in the classic Italian style.", "200"],
        ["Classic Italian Panna Cotta", "Silky Italian panna cotta, served plain or with chocolate.", "190", "vegetarian"],
        ["Thai Banana Chocolate Roti", "Crisp Thai roti with banana and chocolate.", "140"],
        ["Espresso Affogato", "Vanilla gelato drowned in a shot of espresso.", "140", "vegetarian"]
      ]
    },
    {
      id: "wine-glass",
      title: "Italian Wine — By the Glass",
      note: "All wines by the glass are imported from Italy and poured fresh.",
      items: [
        ["Merlot — Le Contesse", "Veneto. Ripe cherry, plum and a gentle herbal note, with smooth tannins.", "200"],
        ["Cabernet — Le Contesse", "Veneto. Raspberry, red fruit and a characteristic leafy note; lively and gently structured.", "200"],
        ["Chardonnay — Le Contesse", "Veneto. Yellow apple, pear and delicate white flowers, fresh and rounded.", "200"],
        ["Pinot Grigio — Le Contesse", "Delle Venezie DOC. Pear, citrus peel and subtle white blossom; crisp and delicate.", "200"]
      ]
    },
    {
      id: "wine-bottle",
      title: "Italian Wine — By the Bottle",
      note: "Every bottle is imported directly from Italy and selected for the table.",
      items: [
        ["Falanghina “Campania Antica”", "Campania · white. Lively citrus and white flowers, with fresh minerality.", "1850"],
        ["Vermentino “Probabbu” Tre Biddas", "Sardinia · white. Aromatic and fruity, with light herbaceous touches.", "2600"],
        ["Gewürztraminer “Bosco Albano”", "Friuli Venezia Giulia · white. Aromatic florals, lychee and tropical fruit, soft and lingering.", "1450"],
        ["Montepulciano d’Abruzzo “Magnolia”", "Abruzzo · red. Ripe red and black fruits, framed by gentle oak spice.", "1850"],
        ["Chianti DOCG “Poggio dei Salici”", "Tuscany · red. Cherry and red-fruit aromas with balanced tannins and a savoury finish.", "1850"],
        ["Conte Rosso Piceno “Villa Prandone”", "Marche · red. Fresh red fruits, soft texture and an elegant palate.", "2100"]
      ]
    },
    {
      id: "drinks",
      title: "Drinks & Coffee",
      note: "Water, soft drinks, beer, coffee and tea.",
      items: [
        ["Singha Water 600 ml", "Still water.", "25"],
        ["Singha Water 1500 ml", "Still water.", "45"],
        ["San Pellegrino Sparkling Water", "750 ml bottle.", "180"],
        ["Soft Drinks", "Coke, Coke Zero, Fanta, Singha Lemon, Lipton Ice Tea and Schweppes Tonic.", "45"],
        ["Beers", "Leo ฿80/120 · Chang ฿80/120 · Singha ฿90/130 · Tiger ฿90 · Heineken ฿100.", ""],
        ["Coffees & Teas", "Espresso ฿60 · Macchiato ฿70 · Cappuccino ฿80 · Americano, Latte, Thai Tea, Green Tea and English Tea ฿60.", ""]
      ]
    }
  ];

  const thaiMenu = {
    titles: { antipasti: "แอนติพาสตี้", "roman-classics": "เมนูคลาสสิกจากโรม", "seafood-pasta": "พาสต้าซีฟู้ด", pesto: "เพสโต้", ragu: "รากู", "italian-table": "โต๊ะอาหารอิตาเลียน", "stuffed-pasta": "พาสต้าสอดไส้", desserts: "ของหวาน", "wine-glass": "ไวน์อิตาเลียน — แบบแก้ว", "wine-bottle": "ไวน์อิตาเลียน — แบบขวด", drinks: "เครื่องดื่มและกาแฟ" },
    notes: {
      antipasti: "โคลด์คัท ชีส และบรูสเก็ตตาสไตล์อิตาเลียน สำหรับเริ่มต้นมื้ออาหาร",
      "roman-classics": "พาสต้า Liguori di Gragnano IGP รีดผ่านแม่พิมพ์บรอนซ์และอบแห้งช้า พร้อมสูตรคลาสสิกจากโรม",
      "seafood-pasta": "พาสต้า Liguori di Gragnano IGP กับอาหารทะเล ไวน์ขาว น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน และรสชาติจากชายฝั่งอิตาลี",
      pesto: "พาสต้า Liguori di Gragnano IGP กับเพสโต้ทำในครัวของเรา",
      ragu: "รากูอิตาเลียนเคี่ยวช้า จับคู่กับรูปทรงพาสต้าที่เหมาะที่สุด",
      "italian-table": "พาสต้าอิตาเลียนในทุกวัน ทำอย่างถูกวิธีด้วย Pasta Liguori di Gragnano IGP",
      "stuffed-pasta": "พาสต้าสอดไส้ เสิร์ฟอย่างเรียบง่ายกับเนย เสจ และชีสที่เหมาะสม",
      desserts: "ของหวานอิตาเลียนคลาสสิก พร้อมเมนูไทยเล็ก ๆ ปิดท้าย",
      "wine-glass": "ไวน์ทุกแก้วนำเข้าจากอิตาลีและรินสด",
      "wine-bottle": "ไวน์ทุกขวดนำเข้าจากอิตาลีโดยตรง คัดเลือกมาเพื่ออาหารบนโต๊ะ",
      drinks: "น้ำดื่ม น้ำอัดลม เบียร์ กาแฟ และชา"
    },
    descriptions: {
      "Bruschetta al Pomodoro": "ขนมปังปิ้งกับมะเขือเทศสุก น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จินและโหระพาสด",
      "Bruschetta Mortadella e Ricotta": "ริคอตต้าครีมมี่ มอร์ทาเดลลาหั่นสด น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน ใบโรสแมรี่และพริกไทยดำ",
      "Bruschetta Crudo di Parma e Tartufo": "ขนมปังปิ้งพร้อมพาร์มาแฮมหั่นสด ครีมทรัฟเฟิลดำ น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จินและพริกไทยดำ",
      "Bruschetta ’Nduja e Ricotta": "ริคอตต้าครีมมี่กับเอ็นดูยา ไส้กรอกหมูนุ่มรสเผ็ดจากคาลาเบรีย บนขนมปังปิ้ง",
      "Italian Cold Cuts Board": "แฮมสุก พาร์มาแฮม สเปียนาตา โรมานา และมอร์ทาเดลลา หั่นสดทุกอย่าง เหมาะสำหรับแบ่งปัน 2 ท่านขึ้นไป",
      "Italian Cold Cuts & Cheese Board": "โคลด์คัทอิตาเลียนหั่นสด ชีสคัดสรร และกริสสินีจากพีดมอนต์ เหมาะสำหรับแบ่งปัน 2 ท่านขึ้นไป",
      "Prosciutto di Parma": "พาร์มาแฮมหั่นสด เสิร์ฟพร้อมกริสสินีจากพีดมอนต์ เพิ่มบูราต้า +฿180 หรือฟิออร์ดิลาเต้ +฿120",
      "Caprese Salad": "มะเขือเทศและมอสซาเรลล่าฟิออร์ดิลาเต้ น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน โหระพาสด ออริกาโน และเพสโต้เจโนเวเซ่ทำเอง",
      "Carbonara": "คาร์โบนาราแบบโรมันแท้ กวานชาเล่กรอบ ไข่แดง เปโคริโน โรมาโน DOP น้ำต้มพาสต้าและพริกไทยดำ คลุกนอกเตาเป็นซอสเนียนนุ่ม ไม่มีครีม",
      "Bucatini all’Amatriciana": "กวานชาเล่เจียวช้า ๆ เติมไวน์ขาวและเคี่ยวกับซอสมะเขือเทศ ก่อนจบด้วยเปโคริโน โรมาโน DOP",
      "Rigatoni Cacio e Pepe": "เปโคริโน โรมาโน DOP และน้ำต้มพาสต้าตีเป็นครีมเนียน ก่อนจบด้วยพริกไทยดำบดสด",
      "Paccheri con Moscardini": "หมึกสายเล็กในซอสมะเขือเทศสไตล์นาโปลี พร้อมเคเปอร์ กระเทียม ไวน์ขาวและน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน",
      "Spaghettoni Cozze e Pomodorini Gialli": "หอยแมลงภู่กับมะเขือเทศเหลืองรสหวาน กระเทียม ไวน์ขาวและพาร์สลีย์สด",
      "Spaghettoni alle Vongole": "หอยลาย กระเทียม ไวน์ขาว น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จินและพาร์สลีย์ เพิ่มบอตตาร์กา +฿60",
      "Linguine al Nero di Seppia e Bottarga": "ลิงกวินีผัดซอสหมึกปลาหมึกเข้มข้น จบด้วยบอตตาร์กาขูดสด — ไข่ปลาหมักเกลือและบ่ม ให้รสเข้มข้น หอมเค็มและมีกลิ่นอายของทะเล",
      "Linguine al Pesto Genovese": "เพสโต้ทำเองตามสูตรเจโนเวเซ่ดั้งเดิม ใช้โหระพาอิตาเลียนที่เราปลูกเอง ชีสอยู่ในเพสโต้แล้ว เพิ่มพาร์มิจาโนได้ตามขอ",
      "Fusilloni al Pesto di Rucola": "เพสโต้ร็อกเก็ตทำเองกับมะเขือเทศกึ่งแห้ง ใช้ร็อกเก็ตและโหระพาอิตาเลียน เพิ่มพาร์มิจาโนได้ตามขอ",
      "Rigatoni al Ragù Bolognese": "ราเกูเนื้อและหมู เคี่ยวช้าจนรสชาติเข้มข้น จบด้วยพาร์มิจาโน เรจจาโน",
      "Tagliatelle all’Uovo al Ragù Bolognese": "ตายาตาเลลเล่ไข่กับราเกูเนื้อและหมู เคี่ยวช้าจนรสชาติเข้มข้น จบด้วยพาร์มิจาโน เรจจาโน",
      "Rigatoni al Ragù Napoletano": "ซี่โครงหมูและหัวไหล่หมูเคี่ยวช้ากับมะเขือเทศ เป็นราเกูสไตล์นาโปลีเข้มข้น จบด้วยพาร์มิจาโน เรจจาโน",
      "Spaghettoni Aglio, Olio e Peperoncino": "กระเทียมและพริกในน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน พร้อมแอนโชวีละลายในซอสและเกล็ดขนมปังปิ้ง",
      "Spaghettoni Pomodoro e Basilico": "ซอสมะเขือเทศรสสด น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จินและโหระพา จบด้วยพาร์มิจาโน เรจจาโน",
      "Penne all’Arrabbiata": "กระเทียมและพริกผัดกับน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน ก่อนเติมมะเขือเทศเป็นซอสเผ็ดใสแบบดั้งเดิม",
      "Linguine alla Puttanesca": "มะเขือเทศ แอนโชวี มะกอก เคเปอร์และกระเทียม รวมเป็นพาสต้าอิตาเลียนใต้แบบดั้งเดิม",
      "Penne alla Caponata Siciliana": "มะเขือยาว มะเขือเทศ เซเลอรี่และเคเปอร์ ปรุงรสเปรี้ยวหวานสไตล์ซิซิลี",
      "Fusilloni ai Porcini": "เห็ดพอร์ชินีผัดแล้วคลุกในกระทะกับเนย พาร์มิจาโน เรจจาโน และน้ำต้มพาสต้า เป็นซอสรสเห็ดเข้มข้น",
      "Penne ai Carciofi, Timo e Pecorino": "อาร์ติโชคเคี่ยวเป็นครีมเนียน ก่อนจบด้วยเปโคริโน โรมาโนและไทม์สด",
      "Spaghettoni al Tartufo Nero": "ทรัฟเฟิลดำคลุกกับเนย พาร์มิจาโน เรจจาโน และน้ำต้มพาสต้า ก่อนจบด้วยพริกไทยดำ",
      "Ravioli Ricotta e Spinaci": "ราวีโอลี่ไส้ริคอตต้าและผักโขม คลุกเนย เสจและพาร์มิจาโน เรจจาโน",
      "Lunette al Tartufo Nero": "พาสต้ายัดไส้ริคอตต้าและทรัฟเฟิลดำ จบด้วยเนย เสจและพาร์มิจาโน เรจจาโน",
      "Tortelli ’Nduja e Pecorino": "พาสต้ายัดไส้เอ็นดูยารสเผ็ดจากคาลาเบรียและเปโคริโน จบด้วยเนย เสจและเปโคริโน โรมาโน DOP",
      "Traditional Italian Tiramisu": "มาสคาร์โปเน่ ไข่แดงและเอสเปรสโซ่ ตามสไตล์อิตาเลียนดั้งเดิม",
      "Classic Italian Panna Cotta": "พานาคอตต้าเนื้อเนียนสไตล์อิตาเลียน เสิร์ฟแบบธรรมดาหรือกับช็อกโกแลต",
      "Thai Banana Chocolate Roti": "โรตีไทยกรอบกับกล้วยและช็อกโกแลต",
      "Espresso Affogato": "เจลาโต้รสวนิลลาเสิร์ฟกับเอสเปรสโซ่ร้อน",
      "Merlot — Le Contesse": "เวเนโต กลิ่นเชอร์รี พลัม และสมุนไพรอ่อน ๆ พร้อมแทนนินนุ่ม",
      "Cabernet — Le Contesse": "เวเนโต ราสป์เบอร์รี ผลไม้แดง และกลิ่นใบไม้บาง ๆ สดใสและมีโครงสร้างนุ่มนวล",
      "Chardonnay — Le Contesse": "เวเนโต แอปเปิลเหลือง ลูกแพร์ และดอกไม้ขาว เนื้อสัมผัสสดชื่นและกลมกล่อม",
      "Pinot Grigio — Le Contesse": "Delle Venezie DOC ลูกแพร์ เปลือกส้ม และดอกไม้ขาวบาง ๆ สดชื่นและละเอียดอ่อน",
      "Falanghina “Campania Antica”": "กัมปาเนีย ไวน์ขาว ซิตรัสและดอกไม้ขาว มีความแร่ธาตุสดชื่น",
      "Vermentino “Probabbu” Tre Biddas": "ซาร์ดิเนีย ไวน์ขาว หอมสดใส มีผลไม้และกลิ่นสมุนไพรอ่อน ๆ",
      "Gewürztraminer “Bosco Albano”": "ฟริอูลี เวเนเซีย จูเลีย ไวน์ขาว กลิ่นดอกไม้ ลิ้นจี่ และผลไม้เมืองร้อน ปลายรสนุ่มยาว",
      "Montepulciano d’Abruzzo “Magnolia”": "อาบรุซโซ ไวน์แดง กลิ่นผลไม้แดงและดำสุกเด่น เสริมด้วยเครื่องเทศจากไม้โอ๊ก",
      "Chianti DOCG “Poggio dei Salici”": "ทัสกานี ไวน์แดง กลิ่นเชอร์รีและผลไม้แดง แทนนินสมดุล ปลายรสกลมกล่อม",
      "Conte Rosso Piceno “Villa Prandone”": "มาร์เค ไวน์แดง ผลไม้แดงสด เนื้อนุ่ม และสง่างาม",
      "Singha Water 600 ml": "น้ำดื่ม", "Singha Water 1500 ml": "น้ำดื่ม", "San Pellegrino Sparkling Water": "ขวด 750 มล.",
      "Soft Drinks": "Coke, Coke Zero, Fanta, Singha Lemon, Lipton Ice Tea และ Schweppes Tonic",
      "Beers": "Leo ฿80/120 · Chang ฿80/120 · Singha ฿90/130 · Tiger ฿90 · Heineken ฿100",
      "Coffees & Teas": "Espresso ฿60 · Macchiato ฿70 · Cappuccino ฿80 · Americano, Latte, Thai Tea, Green Tea และ English Tea ฿60"
    }
  };

  const isThai = document.documentElement.lang.toLowerCase().startsWith("th");
  const groups = isThai ? groupsEnglish.map((group) => ({
    ...group,
    title: thaiMenu.titles[group.id],
    note: thaiMenu.notes[group.id],
    items: group.items.map(([title, description, price, tag]) => [title, thaiMenu.descriptions[title] || description, price, tag === "vegetarian" ? "มังสวิรัติ" : tag])
  })) : groupsEnglish;

  const menuRoot = document.querySelector("[data-restaurant-menu]");
  const navigationRoot = document.querySelector("[data-restaurant-menu-nav]");
  if (!menuRoot || !navigationRoot) return;

  navigationRoot.innerHTML = groups.map((group) => `<a href="#${group.id}">${group.title}</a>`).join("");
  menuRoot.innerHTML = groups.map((group) => `
    <section class="restaurant-menu-group" id="${group.id}" aria-labelledby="${group.id}-title">
      <div class="restaurant-menu-group__header">
        <h2 id="${group.id}-title">${group.title}</h2>
        <p>${group.note}</p>
      </div>
      <div class="restaurant-menu-grid">
        ${group.items.map(([title, description, price, tag]) => `
          <article class="restaurant-menu-item">
            <div>
              <h3>${title}</h3>
              ${description ? `<p>${description}</p>` : ""}
              ${tag ? `<span class="restaurant-menu-item__tag">${tag}</span>` : ""}
            </div>
            ${price ? `<strong class="restaurant-menu-item__price">฿${price}</strong>` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
})();
