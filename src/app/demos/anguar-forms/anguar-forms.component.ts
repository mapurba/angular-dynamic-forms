import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CheckBox, Dropdown, MultiValue, Radio, TextArea, Textbox, TypeAhead } from '@netiq/dynamic-forms';
@Component({
  selector: 'app-anguar-forms',
  templateUrl: './anguar-forms.component.html',
  styleUrls: ['./anguar-forms.component.scss']
})
export class AnguarFormsComponent implements OnInit {

  type: string = ''
  formValue = {};
  constructor(private route: ActivatedRoute) {

  }

  inputfields: any[] = [
    new Textbox({
      key: "TestSuiteName",
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


  complexForm: any[] = [
    new Textbox({
      key: "Name",
      label: "Name",
      type: "text",
      value: '',
      required: true,
    }),
    new Textbox({
      key: "Email",
      label: "My Email",
      type: "email",
      value: '',
      validator: [Validators.email]
    }),
    new Textbox({
      key: "Date",
      label: "Today's DAte",
      type: "date",
      value: '',
    }),
    new Textbox({
      key: "Time",
      label: "Time",
      type: "Time",
      value: '',
    }),
    new Textbox({
      key: "Month",
      label: "This Month",
      type: "month",
      value: '',
    }),
    new Textbox({
      key: "pass",
      label: "Don't share Pss",
      type: "password",
      value: '',
      required: true,

    }),
    new TextArea({
      key: "TestSuiteDiscription",
      label: "Description",
      type: "text",
      value: '',
      required: true,

    }),
    new Dropdown({
      key: 'cities',
      label: "Best",
      value: { id: "hyd", name: 'Hydrabad' },
      type: 'dropdown',
      options: [{ id: "blr", 'name': 'Bangalore' }, { id: "hyd", name: 'Hydrabad' }],
      required: true,
      multiValue: false
    }),
    new Dropdown({
      key: 'visitedCities',
      label: "My Visited Cities",
      value: [{ id: "hyd", name: 'Hydrabad' }],
      type: 'dropdown',
      options: [{ id: "blr", 'name': 'Bangalore' }, { id: "hyd", name: 'Hydrabad' }, { id: "ccu", name: 'Kolkata' }],
      required: false,
      multiValue: true
    }),
    new Radio({
      key: 'gender',
      label: "Gender",
      options: [{ id: "blr", 'name': 'Bangalore' }, { id: "hyd", name: 'Hydrabad' }, { id: "ccu", name: 'Kolkata' }],
      required: true,
    }),
    new CheckBox({
      key: 'iltdo',
      label: "Things i like to do",
      required: true,
    })
  ];

  multiValueForm: any[] = [
    new Textbox({
      key: "Url",
      label: "Url",
      type: "url",
      value: '',
      required: true,
    }),
    new MultiValue({
      key: 'multiValue',
      label: 'Http Headers',
      value: [{ headerkey: 'Authorization', headervalue: 'basis' }],
      required: false,
      form: [
        new Textbox({
          key: 'headerkey',
          label: 'Header',
          labelHidden: true,// important to align the form properly in table
          type: 'text',
          required: true,
          value: '',
        }),
        new Textbox({
          key: 'headervalue',
          label: 'Header Value',
          labelHidden: true, // important to align the form properly in table
          type: 'text',
          required: false,
          value: '',
        })
      ]
    })
  ];

  typeAheadForm: any[] = [
    new Textbox({
      key: "TestSuiteName",
      label: "Name",
      type: "text",
      value: '',
      required: true,
    }),
    new TypeAhead({
      key: "SearchForBooks",
      label: "Search For Books",
      type: "text",
      required: true,
      value: 'World greated short stories',
      options: [{ id: "wib", name: 'World is big', }, { id: "2kluts", name: '20000 leages under the sea' }, { id: "ngs", name: 'Nagas' }],
    })
  ]

  simpleFormTs = `

  import { Component, OnInit } from '@angular/core';
  import { TextArea, Textbox } from '@netiq/dynamic-forms';
  
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
    `
  simpleFormHtml = `<dynamic-forms [inputFields]="inputfields" (submit)="submit($event)">
  <div class=" btn-container m-t-md">
    <button type="submit" class="btn-primary btn">
      Save
    </button>
    <button type="button" class="js-details-target btn">
      Cancel
    </button>
  </div>
</dynamic-forms>`

  modulesToImport = `
  import { DynamicFormModule } from '@netiq/dynamic-forms';

  imports: [
    DynamicFormModule 
  ],`

  consoleLog = `{TestSuiteName: 'aa', TestSuiteDiscription: 'a'}
  TestSuiteDiscription: "a"
  TestSuiteName: "aa"`

  complexFormTs = `
  import { Component, OnInit } from '@angular/core';
  import { TextArea, Textbox } from '@netiq/dynamic-forms';
  
  export class FormsComponent implements OnInit {

  inputfields: any[] = [
    new Textbox({
      key: "Name",
      label: "Name",
      type: "text",
      value: '',
      required: true,
    }),
    new Textbox({
      key: "Email",
      label: "My Email",
      type: "email",
      value: '',
      validator: [Validators.email]
    }),
    new Textbox({
      key: "Date",
      label: "Today's DAte",
      type: "date",
      value: '',
    }),
    new Textbox({
      key: "Time",
      label: "Time",
      type: "Time",
      value: '',
    }),
    new Textbox({
      key: "Month",
      label: "This Month",
      type: "month",
      value: '',
    }),
    new Textbox({
      key: "pass",
      label: "Don't share Pss",
      type: "password",
      value: '',
      required: true,

    }),
    new TextArea({
      key: "TestSuiteDiscription",
      label: "Description",
      type: "text",
      value: '',
      required: true,

    }),
    new Dropdown({
      key: 'cities',
      label: "Best",
      value: { id: "hyd", name: 'Hydrabad' },
      type: 'dropdown',
      options: [{ id: "blr", 'name': 'Bangalore' }, { id: "hyd", name: 'Hydrabad' }],
      required: true,
      multiValue: false
    }),
    new Dropdown({
      key: 'visitedCities',
      label: "My Visited Cities",
      value: [{ id: "hyd", name: 'Hydrabad' }],
      type: 'dropdown',
      options: [{ id: "blr", 'name': 'Bangalore' }, { id: "hyd", name: 'Hydrabad' }, { id: "ccu", name: 'Kolkata' }],
      required: false,
      multiValue: true
    }),
    new Radio({
      key: 'gender',
      label: "Gender",
      options: [{ id: "blr", 'name': 'Bangalore' }, { id: "hyd", name: 'Hydrabad' }, { id: "ccu", name: 'Kolkata' }],
      required: true,
    }),
    new CheckBox({
      key: 'iltdo',
      label: "Things i like to do",
      required: true,
    })
  ];

  submit(value:string) {
    console.log(JSON.parse(value));
  }
}
  `;

  multiValueFormTs = `
  import { Component, OnInit } from '@angular/core';
  import { TextArea, Textbox } from '@netiq/dynamic-forms';
  
  export class FormsComponent implements OnInit {

    inputfields: any[] = [
      new MultiValue({
        key: 'multiValue',
        label: 'Http Headers',
        value: [{ headerkey: 'Authorization', headervalue: 'basis' }],
        selected: false,
        required: false,
        multiValue: true,
        form: [
          new Textbox({
            key: 'headerkey',
            label: 'Header',
            labelHidden: true,// important to align the form properly in table
            type: 'text',
            required: true,
            value: '',
          }),
          new Textbox({
            key: 'headervalue',
            label: 'Header Value',
            labelHidden: true, // important to align the form properly in table
            type: 'text',
            required: false,
            value: '',
          })
        ]
      })
    ];

    submit(value:string) {
      console.log(JSON.parse(value));
    }
  } 
  `

  typeAheadFormTs = `

  import { Component, OnInit } from '@angular/core';
  import { TextArea, Textbox } from '@netiq/dynamic-forms';
  
  export class FormsComponent implements OnInit {

    inputfields: any[] = [
      new Textbox({
        key: "TestSuiteName",
        label: "Name",
        type: "text",
        value: '',
        required: true,
      }),
      new TypeAhead({
        key: "SearchForBooks",
        label: "Search For Books",
        type: "text",
        required: true,
        value: 'World greated short stories',
        options: [{ id: "wib", name: 'World is big', }, { id: "2kluts", name: '20000 leages under the sea' }, { id: "ngs", name: 'Nagas' }],
      })
    ];
    
    submit(value: string) {
      console.log(JSON.parse(value));
    }
  }
    `

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = this.route.snapshot.paramMap.get('type') || '';
    })
  }


  submit(value: string) {
    this.formValue = JSON.parse(value);
  }
}
