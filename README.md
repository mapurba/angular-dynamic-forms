# Dynamic Form And Validation

Validation provides a means to ensure the user is inputting usable data into a form. Form validation can be expressed to a user initially by denoting required inputs with the required symbol; or, after a user enters invalid information into the form through warnings and invalid states.

## A Basic Form with Validation
#demo
https://dynamic-components.github.io/#/dynamic-forms/simple

#Simple Dynamic forms.

# Form json

 ```  import { Component, OnInit } from '@angular/core';
  import { TextArea, Textbox } from 'dynamic-forms';
  
  export class FormsComponent implements OnInit {

    inputfields: any[] = [
      new Textbox({
        key: "Name",
        label: "Name",
        type: "text",
        value: '',
        required: true,
      }),
      new TextArea({
        key: "Discription",
        label: "Description",
        type: "text",
        value: '',
        required: false,
      })
    ];
    
    submit(value: string) {
      console.log(JSON.parse(value));
    }
  }
``` 

 
  # Template
```
<dynamic-forms [inputFields]="inputfields" (submit)="submit($event)">
  <div class=" btn-container m-t-md">
    <button type="submit" class="btn-primary btn">
      Save
    </button>
    <button type="button" class="js-details-target btn">
      Cancel
    </button>
  </div>
</dynamic-forms>
```

#module 
```
import { DynamicFormModule } from 'dynamic-forms';

  imports: [
    DynamicFormModule 
  ],
```

## A Multi Value Form with Validation

Dynamic forms with multi value input in table

## A Type Ahead Form with Validation

few toxic input fields
