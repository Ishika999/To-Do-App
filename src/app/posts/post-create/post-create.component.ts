import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

    //we created an event here..
    //@output means this event can be handled outside the component.
    //The Sequence to follow for custom event is below
    // PostCreateComponent will Raise the Event  and will send the data to AppComponent
    //AppComponent will Listen to the Event and Recieve the Data Sent by PostCreateComponent
    //Now App Component will Forward the Data Recieved from PostCreateComponent to PostListComponent
    //PostListComponent will Render the Data.

    @Output() postCreated = new EventEmitter();

    enteredTitle = "";
    enteredContent = "";

  newPost="No Content";
  // onAddPost(element:HTMLTextAreaElement){
  //     this.newPost=element.value;
  //     console.log(element.value);
  // }

  onAddPost(){
      const post = {title: this.enteredTitle, content: this.enteredContent};
      console.log(post);
      this.postCreated.emit(post);//emiting our own event....
  }

  constructor() { }

  ngOnInit() {
  }

}
