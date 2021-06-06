class Form{
    constructor(){
    }
    display(){
    var title=createElement('h2')
    title.html('Car Racing Game')
    title.position(200,0)
    var input=createInput("name");
    input.position(345,160)
    var button=createButton("play")
    button.position(345,200);
    button.mousePressed(function(){
       input.hide();
       button.hide();
       var name=input.value();
       var greeting=createElement('h3');
       greeting.html("hello"+name);
       greeting.position(345,160);
    })

    }
}