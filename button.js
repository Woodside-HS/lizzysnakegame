function Button(msg, l, w, h, img) { /////////////////////////////// Start Button
    // props
    this.txtMsg = msg;
    this.loc = l;
    this.width = w;
    this.height = h;
    this.img = img;
    // functions behavior

    this.render = function () {
        image(this.img, this.loc.x, this.loc.y, this.width, this.height);
        // fill(0)
        // textSize(32);
        // text(this.txtMsg, this.loc.x + 50, this.loc.y + 30);
    }

    //make the buttons respond when clicked
    this.mouseIsOver = function () {
        if (mouseX > this.loc.x &&
            mouseX < this.loc.x + this.width &&
            mouseY > this.loc.y &&
            mouseY < this.loc.y + this.height
        ) {
            return true;
        }
        return false;
    }

    
}//////////////////////////////////////////////////// End Buttons