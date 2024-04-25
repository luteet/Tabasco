
export default function circleText() {

	
	const textElements = document.querySelectorAll(".main-background__text_element");
	//new CircleType(document.querySelector(".main-background__text_block"));

	

	// Set the radius to 150 pixels.
	

	textElements.forEach((element,index) => {

		element.innerHTML = "";
		const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
		element.append(canvas);
		canvas.width = 1000;
		canvas.height = 1000;
		const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const fontSize = 142;
        const font = "700 " + fontSize + "px Inter";
        const textColor = "white";
        const text = "SPICE UP YOUR CAREER WITH US! ";
        const padding = 60; // отступ от края canvas
        const textRadius = Math.min(canvas.width, canvas.height) / 2 - padding;

        ctx.font = font;
        ctx.fillStyle = textColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const angleStep = (2 * Math.PI) / text.length;
        let currentAngle = -Math.PI / 2; // начинаем с верхней части круга

        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            const x = centerX + textRadius * Math.cos(currentAngle);
            const y = centerY + textRadius * Math.sin(currentAngle);
            const rotationAngle = currentAngle + Math.PI / 2; // Поворачиваем буквы низом к краю круга
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotationAngle);
            ctx.fillText(letter, 0, 0);
            ctx.restore();
            currentAngle += angleStep;
        }


        /* ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke(); */

		/* setTimeout(() => {
			gsap.set(element, {
				"--scale": 1
			})
		},100) */

		/* const text = "Hello Hello Hello Hello";
		const words = text.split(" ");
		const centerX = element.offsetWidth / 2;
		const centerY = element.offsetHeight / 2;
		const totalWords = words.length;
		const maxCharWidth = 100; // Максимальная ширина символа (замените на фактическое значение)
		const maxCharHeight = 100; // Максимальная высота символа (замените на фактическое значение)
		const radius = element.offsetWidth / 2; // Радиус круга
		const angleStep = (2 * Math.PI) / totalWords;

		for (let i = 0; i < totalWords; i++) {
			const word = words[i];
			const wordLength = word.length;
			const wordAngleStep = angleStep / wordLength;
			
			for (let j = 0; j < wordLength; j++) {
				const letter = document.createElement('div');
				letter.classList.add('letter');
				letter.textContent = word[j];
				const angle = angleStep * i + wordAngleStep * j;
				const x = centerX + radius * Math.cos(angle);
				const y = centerY + radius * Math.sin(angle);
				letter.style.left = `${x}px`;
				letter.style.top = `${y}px`;
				letter.style.transform = `translate(-50%, -50%) rotate(${angle + Math.PI / 2}rad)`;
				element.appendChild(letter);
			}
			
			// Добавляем пробел после каждого слова, кроме последнего
			if (i < totalWords - 1) {
				const space = document.createElement('div');
				space.textContent = " ";
				element.appendChild(space);
			}
		} */

		
		/* const text = "SPICE UP YOUR CAREER WITH US! ";
		element.innerHTML = "";
		
		const centerX = element.offsetWidth / 2;
		const centerY = element.offsetHeight / 2;
		const totalChars = text.length;
		const maxCharWidth = 10; // Максимальная ширина символа (замените на фактическое значение)
		const maxCharHeight = 20; // Максимальная высота символа (замените на фактическое значение)
		const radius = Math.min(centerX, centerY) - Math.max(maxCharWidth, maxCharHeight) / 2; // Радиус круга

		const angleStep = (2 * Math.PI) / totalChars;
		

		for (let i = 0; i < totalChars; i++) {
			const letter = document.createElement('div');
			letter.classList.add('letter');
			letter.textContent = text[i];
			let angle;
			if(text[i-1] == " ") {
				angle = angleStep/2 * i;
			} else {
				angle = angleStep * i;
			}
			const x = centerX + radius * Math.cos(angle);
			const y = centerY + radius * Math.sin(angle);
			letter.style.left = `${x}px`;
			letter.style.top = `${y}px`;
			letter.style.transform = `translate(-50%, -50%) rotate(${angle + Math.PI / 2}rad)`;
			element.appendChild(letter);
		} */


		//element.innerHTML = "";
		//element.append(document.querySelector(".main-background__text_block > *").cloneNode(true));
		/* element.innerHTML = "";

		const canvas = document.createElement("canvas");
		element.append(canvas);
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;

		const ctx = canvas.getContext('2d');
		
		const text = 'SPICE UP YOUR CAREER WITH US! ';
		//var text = 'Text Around Circle';
		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;
		var radius = Math.min(canvas.width, canvas.height) / 2 - 50; // Радиус как половина минимальной стороны холста
		var fontSize = 82;
		var fontWeight = 700; // Установим толщину шрифта
		var spaceBetweenChars = 10; // Отступ между символами
		
		// Устанавливаем стиль текста
		var fontFamily = 'Inter';
		var font = fontWeight + ' ' + fontSize + 'px ' + fontFamily;
		ctx.font = font;
		ctx.fillStyle = 'white';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		
		// Отрисовываем каждую букву в верхнем регистре по кругу с учетом поворота и расстояния между буквами
		var angle = -Math.PI / 2; // Начало с верхней части круга
		for (var i = 0; i < text.length; i++) {
			var char = text.charAt(i).toUpperCase(); // Преобразуем в верхний регистр
			var charWidth = ctx.measureText(char).width; // Получаем ширину текущей буквы
			if(char == "I") {
				//console.log(charWidth)
				ctx.textAlign = 'right';
				charWidth=charWidth;
			} else if(char == " ") {
				ctx.textAlign = 'center';
				charWidth=charWidth/1.65;
			} else ctx.textAlign = 'center';
			var charAngle = angle + Math.PI / 2; // Угол поворота для текущей буквы
			var x = centerX + radius * Math.cos(angle);
			var y = centerY + radius * Math.sin(angle);
			ctx.save(); // Сохраняем текущее состояние контекста
			ctx.translate(x, y); // Переносим начало координат в точку (x, y)
			ctx.rotate(charAngle); // Поворачиваем букву на угол поворота
			ctx.fillText(char, 0, 0); // Отображаем букву
			ctx.restore(); // Восстанавливаем предыдущее состояние контекста
			angle += charWidth / radius + spaceBetweenChars / radius;
		} */
	})
}