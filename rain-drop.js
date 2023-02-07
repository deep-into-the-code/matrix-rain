class RainDrop {

    constructor(x, rainDropSize) {
        this.x = x;
        this.y = random(0, height * 4 / 3);
        this.chars = [];
        this.rainLength = 15;
        this.rainDropSize = rainDropSize;
        this.changeCharacterSpeed = round(random(5, 15));
        this.rainSpeed = random(3, 10);
    }

    rain = () => {

        textSize(this.rainDropSize);
        textStyle('bold');
        for (let i = 0; i < this.rainLength; i++) {
            if (i == 0) {
                fill(0, 255, 65);
            }
            else {
                fill(0, 255, 65, map((this.rainLength - i), this.rainLength - 1, 1, 70, 20));
            }
            this.generateRandomCharachter(i);
            text(this.chars[i], this.x, this.y - this.rainDropSize * i);
        }

        this.y += this.rainDropSize;
        if (this.y - this.rainDropSize * this.rainLength >= height) this.y = 0;

    }

    generateRandomCharachter = (i) => {
        // Generating katakana random symbol
        // this.character = String.fromCharCode(0x30A0 + Math.random() * (0x30FF - 0x30A0 - +1));
        if (!this.chars[i] || round(this.y - this.rainDropSize * i) % this.changeCharacterSpeed == 0) {
            this.chars[i] = String.fromCharCode(0x30A0 + Math.random() * (0x30FF - 0x30A0 - +1));
        }
        return this.chars[i];
    }
}