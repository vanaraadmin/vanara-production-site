(() => {
  "use strict";

  const groupsEnglish = [
    {
      id: "antipasti",
      title: "Antipasti",
      note: "Italian cold cuts, cheeses and bruschette to begin at the table.",
      items: [
        ["Bruschetta al Pomodoro", "Crispy bread with chopped tomatoes, garlic, Italian basil and extra virgin olive oil.", "100", "vegetarian"],
        ["Bruschetta Mortadella & Ricotta", "Crispy bread with Italian ricotta, mortadella with pistachio, black pepper and Italian extra virgin olive oil.", "160"],
        ["Bruschetta Crudo di Parma & Tartufo", "Crispy bread with Parma ham and black truffle cream.", "200"],
        ["Bruschetta ’Nduja & Ricotta", "Crispy bread with creamy Italian ricotta and spicy Calabrian ’nduja.", "160"],
        ["Crudo di Parma & Burrata", "Thinly sliced Parma ham, fresh burrata and crispy Piedmontese grissini.", "380"],
        ["Crudo di Parma & Mozzarella Fiordilatte", "Parma ham, fresh fiordilatte mozzarella and crispy Piedmontese grissini.", "300"],
        ["Tagliere di Salumi Italiani", "Imported Parma ham, mortadella, cooked ham and salami, served with Piedmontese grissini.", "350"],
        ["Tagliere di Salumi e Formaggi DOP", "Imported Italian cold cuts, a selection of cheeses and Piedmontese grissini.", "400"],
        ["Caprese Salad", "Fiordilatte mozzarella, tomatoes, extra virgin olive oil, oregano and basil sauce.", "180", "vegetarian"]
      ]
    },
    {
      id: "pasta",
      title: "Pasta",
      note: "Gragnano IGP pasta, Roman classics, regional recipes and fresh stuffed pasta.",
      items: [
        ["Spaghettoni Aglio, Olio e Peperoncino", "Gragnano IGP pasta with garlic, chilli, anchovies and bread crumble.", "180"],
        ["Spaghettoni Pomodoro e Basilico", "Gragnano IGP pasta with Italian tomato, basil, extra virgin olive oil and Parmigiano Reggiano.", "200", "vegetarian"],
        ["Rigatoni al Ragù Napoletano", "Slow-cooked pork rib and pork shoulder ragù, finished with extra virgin olive oil and Parmigiano Reggiano.", "280"],
        ["Rigatoni al Ragù Bolognese", "Beef and pork ragù, slowly cooked for six hours and finished with Parmigiano Reggiano.", "290"],
        ["Linguine al Pesto Genovese", "Homemade pesto prepared with Italian basil we grow ourselves, Pecorino Romano DOP and extra virgin olive oil, following the official Genovese recipe.", "320", "vegetarian"],
        ["Paccheri alla Carbonara", "Gragnano IGP pasta with guanciale, Pecorino Romano DOP and eggs. Traditional Roman method, with no cream.", "280"],
        ["Bucatini all’Amatriciana", "Gragnano IGP pasta with Italian guanciale, white wine, slow-cooked tomato sauce and Pecorino Romano DOP.", "280"],
        ["Spaghettoni al Tartufo Nero", "Gragnano IGP pasta in a silky black truffle cream and butter sauce, finished with black pepper.", "370", "vegetarian"],
        ["Penne alla Crema di Carciofi, Timo e Pecorino", "Penne in a smooth artichoke cream with Pecorino and fresh thyme.", "290", "vegetarian"],
        ["Fusilloni ai Porcini", "Fusilloni with butter, Parmigiano and a creamy porcini mushroom sauce with sautéed porcini.", "380", "vegetarian"],
        ["Fusilloni al Pesto di Rucola e Pomodorini Semisecchi", "Gragnano IGP fusilloni with rocket pesto, semi-dried cherry tomatoes and Parmigiano Reggiano.", "340", "vegetarian"],
        ["Spaghettoni Cacio e Pepe", "Traditional Roman pasta with Pecorino Romano DOP and freshly cracked black pepper. No cream.", "300", "vegetarian"],
        ["Penne all’Arrabbiata", "Classic Roman-style tomato sauce, garlic, chilli and extra virgin olive oil.", "220", "vegetarian"],
        ["Linguine alla Puttanesca", "Tomato sauce with anchovies, olives, capers, garlic and extra virgin olive oil.", "280"],
        ["Rigatoni ai Peperoni Arrostiti e Pomodori Secchi", "Rigatoni with roasted bell peppers, sun-dried tomatoes, olive oil and Pecorino Romano DOP.", "320", "vegetarian"],
        ["Paccheri ai Moscardini", "Paccheri in a rich Neapolitan-style sauce with baby octopus, ripe tomatoes, garlic, olive oil and white wine.", "350"],
        ["Spaghettoni alle Vongole", "Spaghetti with tender clams, garlic, chilli, extra virgin olive oil, white wine and parsley. Add bottarga +60.", "390"],
        ["Spaghettoni alle Cozze e Datterini Gialli", "Spaghettoni with mussels, sweet yellow cherry tomatoes, white wine, garlic and fresh parsley.", "370"],
        ["Linguine al Nero di Seppia e Bottarga Fresca", "Linguine sautéed in a rich cuttlefish ink sauce, finished with freshly grated bottarga.", "430"],
        ["Tortelli Ricotta e Spinaci", "Fresh stuffed pasta with ricotta and spinach, tossed with melted butter, sage and Parmigiano Reggiano.", "280", "vegetarian"],
        ["Lunette al Tartufo Nero", "Fresh stuffed ravioli with ricotta and black truffle, tossed with melted butter, sage and Parmigiano Reggiano.", "320", "vegetarian"],
        ["Tortellacci ’Nduja e Pecorino", "Fresh stuffed pasta with spicy Calabrian ’nduja and Pecorino, tossed with melted butter, sage and Pecorino Romano DOP.", "300"]
      ]
    },
    {
      id: "desserts",
      title: "Desserts",
      note: "Italian classics and a small Thai finish.",
      items: [
        ["Homemade Traditional Italian Tiramisu", "Mascarpone, egg yolks and espresso coffee.", "200"],
        ["Thai Roti Banana Chocolate", "Golden crispy roti with sweet banana and chocolate, a tribute to the flavours of our host country.", "120"],
        ["Panna Cotta alla Vaniglia Naturale di Khao Yai", "Silky Italian panna cotta infused with natural Khao Yai vanilla and served with fruit coulis.", "180", "vegetarian"]
      ]
    },
    {
      id: "wine-glass",
      title: "Italian Wine — By the Glass",
      note: "A concise selection of Italian wines served by the glass.",
      items: [
        ["Merlot “Le Contesse” — Veneto", "Red fruits and delicate spice.", "220"],
        ["Cabernet Sauvignon “Le Contesse” — Veneto", "Blackcurrant, dark cherry and a hint of spice.", "220"],
        ["Pinot Grigio “Le Contesse” — Veneto", "Fresh and fruity, with green apple and pineapple notes.", "220"],
        ["Chardonnay “Le Contesse” — Veneto", "A soft, harmonious white for delicate dishes.", "220"]
      ]
    },
    {
      id: "wine-bottle",
      title: "Italian Wine — By the Bottle",
      note: "A selection of Italian bottles chosen to sit naturally alongside the food.",
      items: [
        ["Falanghina “Campania Antica” (white)", "Lively citrus and white flowers, with fresh minerality.", "1850"],
        ["Vermentino “Probabbu” Tre Biddas (white)", "Aromatic and fruity, with light herbaceous touches.", "2600"],
        ["Gewürztraminer “Bosco Albano” (white)", "Aromatic florals, lychee and tropical fruit, finishing soft and lingering.", "1450"],
        ["Montepulciano d’Abruzzo “Magnolia” (red)", "Producer: Cantina Magnolia — Abruzzo, Italy. Ripe red and black fruits, framed by gentle oak spice.", "1850"],
        ["Chianti DOCG “Poggio dei Salici” (red)", "Producer: Cantina Poggio dei Salici — Tuscany, Italy. Cherry and red-fruit aromas with balanced tannins and a savoury Tuscan finish.", "1850"],
        ["Conte Rosso Piceno “Villa Prandone” (red)", "Producer: Il Conte Villa Prandone — Marche, Italy. From the Piceno hills above the Adriatic: fresh red fruits, soft texture and an elegant palate.", "2100"]
      ]
    },
    {
      id: "drinks",
      title: "Drinks & Coffee",
      note: "Water, soft drinks, beer, smoothies, coffee and tea.",
      items: [
        ["Singha Water 600ml", "Water", "20"],
        ["Singha Water 1500ml", "Water", "45"],
        ["Singha Soda Water", "Water", "35"],
        ["Soft Drinks", "Coke, Coke Zero, Fanta Orange, Singha Lemon Soda, Sprite, Lipton Ice Tea and Schweppes Tonic.", "35"],
        ["Leo — small bottle", "Beer", "80"],
        ["Leo — big bottle", "Beer", "120"],
        ["Chang — small bottle", "Beer", "80"],
        ["Chang — big bottle", "Beer", "120"],
        ["Singha — small bottle", "Beer", "90"],
        ["Singha — big bottle", "Beer", "130"],
        ["Tiger — small bottle", "Beer", "90"],
        ["Heineken — small bottle", "Beer", "100"],
        ["Smoothies", "Coconut, mango, banana, watermelon, dragon fruit and pineapple ฿60. Mixed fruits ฿70.", "60–70"],
        ["Coffees & Teas", "Espresso, Americano, Latte, Thai Tea and Green Tea ฿60. Espresso Macchiato and Cappuccino ฿70. English Tea ฿50.", "50–70"]
      ]
    }
  ];

  const thaiMenu = {
    titles: { antipasti: "แอนติพาสตี้", pasta: "พาสต้า", desserts: "ของหวาน", "wine-glass": "ไวน์อิตาเลียน — แบบแก้ว", "wine-bottle": "ไวน์อิตาเลียน — แบบขวด", drinks: "เครื่องดื่มและกาแฟ" },
    notes: {
      antipasti: "โคลด์คัท ชีส และบรูสเก็ตตาสไตล์อิตาเลียน สำหรับเริ่มต้นมื้ออาหาร",
      pasta: "พาสต้า Gragnano IGP เมนูคลาสสิกจากโรม สูตรประจำภูมิภาค และพาสต้าสอดไส้สด",
      desserts: "ของหวานอิตาเลียนคลาสสิก พร้อมเมนูไทยเล็ก ๆ ปิดท้าย",
      "wine-glass": "ไวน์อิตาเลียนที่คัดสรร เสิร์ฟแบบแก้ว",
      "wine-bottle": "ไวน์อิตาเลียนแบบขวดที่คัดสรรให้เข้ากับอาหาร",
      drinks: "น้ำดื่ม น้ำอัดลม เบียร์ สมูทตี้ กาแฟ และชา"
    },
    descriptions: {
      "Bruschetta al Pomodoro": "ขนมปังกรอบกับมะเขือเทศหั่น กระเทียม โหระพาอิตาเลียน และน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน",
      "Bruschetta Mortadella & Ricotta": "ขนมปังกรอบกับริคอตต้าอิตาเลียน มอร์ทาเดลลากับพิสตาชิโอ พริกไทยดำ และน้ำมันมะกอกอิตาเลียนเอ็กซ์ตร้าเวอร์จิน",
      "Bruschetta Crudo di Parma & Tartufo": "ขนมปังกรอบกับแฮมปาร์มาและครีมทรัฟเฟิลดำ",
      "Bruschetta ’Nduja & Ricotta": "ขนมปังกรอบกับริคอตต้าอิตาเลียนเนื้อครีมและ ’nduja ไส้กรอกรสเผ็ดจากแคว้นคาลาเบรีย",
      "Crudo di Parma & Burrata": "แฮมปาร์มาหั่นบาง เบอร์ราต้าสด และกริสซินีจากปิเอมอนเตกรอบ",
      "Crudo di Parma & Mozzarella Fiordilatte": "แฮมปาร์มา มอซซาเรลลา fiordilatte สด และกริสซินีจากปิเอมอนเตกรอบ",
      "Tagliere di Salumi Italiani": "แฮมปาร์มา มอร์ทาเดลลา แฮมสุก และซาลามีนำเข้าจากอิตาลี เสิร์ฟกับกริสซินีจากปิเอมอนเต",
      "Tagliere di Salumi e Formaggi DOP": "โคลด์คัทนำเข้าจากอิตาลี ชีสคัดสรร และกริสซินีจากปิเอมอนเต",
      "Caprese Salad": "มอซซาเรลลา fiordilatte มะเขือเทศ น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน ออริกาโน และซอสโหระพา",
      "Spaghettoni Aglio, Olio e Peperoncino": "พาสต้า Gragnano IGP กับกระเทียม พริก แอนโชวี และเกล็ดขนมปังกรอบ",
      "Spaghettoni Pomodoro e Basilico": "พาสต้า Gragnano IGP กับมะเขือเทศอิตาเลียน โหระพา น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน และ Parmigiano Reggiano",
      "Rigatoni al Ragù Napoletano": "รากูซี่โครงหมูและหัวไหล่หมูเคี่ยวนาน ปิดท้ายด้วยน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จินและ Parmigiano Reggiano",
      "Rigatoni al Ragù Bolognese": "รากูเนื้อวัวและหมูเคี่ยวนานหกชั่วโมง ปิดท้ายด้วย Parmigiano Reggiano",
      "Linguine al Pesto Genovese": "เพสโต้ทำเองจากโหระพาอิตาเลียนที่เราปลูกเอง Pecorino Romano DOP และน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน ตามสูตรเจนัวดั้งเดิม",
      "Paccheri alla Carbonara": "พาสต้า Gragnano IGP กับ guanciale, Pecorino Romano DOP และไข่ ตามวิธีดั้งเดิมแบบโรมันโดยไม่ใช้ครีม",
      "Bucatini all’Amatriciana": "พาสต้า Gragnano IGP กับ guanciale อิตาเลียน ไวน์ขาว ซอสมะเขือเทศเคี่ยวนาน และ Pecorino Romano DOP",
      "Spaghettoni al Tartufo Nero": "พาสต้า Gragnano IGP คลุกซอสครีมทรัฟเฟิลดำและเนย ปิดท้ายด้วยพริกไทยดำ",
      "Penne alla Crema di Carciofi, Timo e Pecorino": "เพนเน่กับครีมอาร์ติโชกเนื้อนุ่ม Pecorino และไทม์สด",
      "Fusilloni ai Porcini": "ฟูซิลโลนีกับเนย Parmigiano และซอสเห็ดพอร์ชินีเนื้อครีมพร้อมเห็ดพอร์ชินีผัด",
      "Fusilloni al Pesto di Rucola e Pomodorini Semisecchi": "ฟูซิลโลนี Gragnano IGP กับเพสโต้ร็อกเก็ต มะเขือเทศเชอร์รีกึ่งแห้ง และ Parmigiano Reggiano",
      "Spaghettoni Cacio e Pepe": "พาสต้าแบบโรมันดั้งเดิมกับ Pecorino Romano DOP และพริกไทยดำบดสด โดยไม่ใช้ครีม",
      "Penne all’Arrabbiata": "ซอสมะเขือเทศสไตล์โรมัน กระเทียม พริก และน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน",
      "Linguine alla Puttanesca": "ซอสมะเขือเทศกับแอนโชวี มะกอก เคเปอร์ กระเทียม และน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน",
      "Rigatoni ai Peperoni Arrostiti e Pomodori Secchi": "ริกาโตนีกับพริกหวานย่าง มะเขือเทศตากแห้ง น้ำมันมะกอก และ Pecorino Romano DOP",
      "Paccheri ai Moscardini": "ปัคเครีในซอสสไตล์เนเปิลส์เข้มข้นกับหมึกยักษ์อ่อน มะเขือเทศสุก กระเทียม น้ำมันมะกอก และไวน์ขาว",
      "Spaghettoni alle Vongole": "สปาเก็ตโทนีกับหอยลาย กระเทียม พริก น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน ไวน์ขาว และพาร์สลีย์ เพิ่มบอตตาร์กา ฿60",
      "Spaghettoni alle Cozze e Datterini Gialli": "สปาเก็ตโทนีกับหอยแมลงภู่ มะเขือเทศเชอร์รีสีเหลือง ไวน์ขาว กระเทียม และพาร์สลีย์สด",
      "Linguine al Nero di Seppia e Bottarga Fresca": "ลิงกวินีผัดซอสหมึกปลาหมึกเข้มข้น ปิดท้ายด้วยบอตตาร์กาขูดสด",
      "Tortelli Ricotta e Spinaci": "พาสต้าสดสอดไส้ริคอตต้าและผักโขม คลุกเนยละลาย เซจ และ Parmigiano Reggiano",
      "Lunette al Tartufo Nero": "ราวิโอลีสดสอดไส้ริคอตต้าและทรัฟเฟิลดำ คลุกเนยละลาย เซจ และ Parmigiano Reggiano",
      "Tortellacci ’Nduja e Pecorino": "พาสต้าสดสอดไส้ ’nduja รสเผ็ดจากคาลาเบรียและ Pecorino คลุกเนยละลาย เซจ และ Pecorino Romano DOP",
      "Homemade Traditional Italian Tiramisu": "ทีรามิสุอิตาเลียนทำเองด้วยมาสคาร์โปเน ไข่แดง และเอสเปรสโซ",
      "Thai Roti Banana Chocolate": "โรตีกรอบสไตล์ไทยกับกล้วยและช็อกโกแลต หวานละมุนเพื่อคารวะรสชาติของประเทศเจ้าบ้าน",
      "Panna Cotta alla Vaniglia Naturale di Khao Yai": "พานนาคอตต้าอิตาเลียนเนื้อเนียน ผสมวานิลลาธรรมชาติจากเขาใหญ่ เสิร์ฟพร้อมซอสผลไม้",
      "Merlot “Le Contesse” — Veneto": "กลิ่นผลไม้แดงและเครื่องเทศอ่อน ๆ เสิร์ฟเป็นแก้ว",
      "Cabernet Sauvignon “Le Contesse” — Veneto": "แบล็กเคอร์แรนต์ เชอร์รีดำ และกลิ่นเครื่องเทศเล็กน้อย เสิร์ฟเป็นแก้ว",
      "Pinot Grigio “Le Contesse” — Veneto": "สดชื่นและผลไม้เด่น มีกลิ่นแอปเปิลเขียวและสับปะรด เสิร์ฟเป็นแก้ว",
      "Chardonnay “Le Contesse” — Veneto": "ไวน์ขาวนุ่มนวล กลมกล่อม เหมาะกับอาหารรสละมุน เสิร์ฟเป็นแก้ว",
      "Falanghina “Campania Antica” (white)": "ซิตรัสและดอกไม้ขาว มีความแร่ธาตุสดชื่น เสิร์ฟเป็นขวด",
      "Vermentino “Probabbu” Tre Biddas (white)": "หอมสดใส มีผลไม้และกลิ่นสมุนไพรอ่อน ๆ เสิร์ฟเป็นขวด",
      "Gewürztraminer “Bosco Albano” (white)": "กลิ่นดอกไม้ ลิ้นจี่ และผลไม้เมืองร้อน ปลายรสนุ่มยาว เสิร์ฟเป็นขวด",
      "Montepulciano d’Abruzzo “Magnolia” (red)": "ไวน์แดงจากอาบรุซโซ กลิ่นผลไม้แดงและดำสุกเด่น เสริมด้วยกลิ่นเครื่องเทศจากไม้โอ๊ก",
      "Chianti DOCG “Poggio dei Salici” (red)": "ไวน์แดงจากทัสกานี กลิ่นเชอร์รีและผลไม้สีแดง พร้อมแทนนินสมดุลและรสสัมผัสแบบทัสกานี",
      "Conte Rosso Piceno “Villa Prandone” (red)": "ไวน์แดงจากแคว้นมาร์เค จากเนินเขาปีเชโนใกล้ทะเลเอเดรียติก มีผลไม้สีแดงสด เนื้อนุ่ม และสง่างาม",
      "Singha Water 600ml": "น้ำดื่ม",
      "Singha Water 1500ml": "น้ำดื่ม",
      "Singha Soda Water": "น้ำโซดา",
      "Soft Drinks": "Coke, Coke Zero, Fanta Orange, Singha Lemon Soda, Sprite, Lipton Ice Tea และ Schweppes Tonic",
      "Leo — small bottle": "เบียร์",
      "Leo — big bottle": "เบียร์",
      "Chang — small bottle": "เบียร์",
      "Chang — big bottle": "เบียร์",
      "Singha — small bottle": "เบียร์",
      "Singha — big bottle": "เบียร์",
      "Tiger — small bottle": "เบียร์",
      "Heineken — small bottle": "เบียร์",
      "Smoothies": "มะพร้าว มะม่วง กล้วย แตงโม แก้วมังกร และสับปะรด ฿60 ผลไม้รวม ฿70",
      "Coffees & Teas": "Espresso, Americano, Latte, Thai Tea และ Green Tea ฿60 Espresso Macchiato และ Cappuccino ฿70 English Tea ฿50"
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
            <strong class="restaurant-menu-item__price">฿${price}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
})();
