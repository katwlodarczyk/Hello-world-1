var element = document.createElement('a');

// old vanilajs - there is only one event listener
element.click = function(event) {
}
// vanillajs events - there can be many event listeners

element.addEventListener('click', function(event) {

}, true)

var image = new Image();
var callback = function() {
	image.removeEventListener('load', callback);
};
image.addEventListener('load', callback);
image.src = 'obrazek';

// jquery
$(image).load(function() {});
$(element).click(function() {})

// pyramid of doom
someclass.load(function(){
	someotherclass.dothat(function() {
		someclass.anotherthing(function() {
			// ...
		})
	})
})

// promises - angular 1 or 2 documentation 

someclass.then(function() {
	// ...
}).then(function() {

}).then(function() {

});

// rxjs - watch netflix youtube introduction to observables
var myClicks = [event, event, event, event] // eventy jako tablica
myClicks.filer(function(event)  {
	return event.target.className = 'ladny-button' 
}).subscribe(function(event) {
	///
})


//// old angular binding - process observe if variable changed what is heavy
<input [(value)]="question"/>

/// new angular with rxjs - changes are triggered only when happen
<input [value]="question | async" (value)="question.next($event)"/>