import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isSubmitted = false;
  testDate = {
    allowedRules: [
      {
        id: "8vCu4Yn9",
        name: "Geo-Fence",
        desc: "Rules on Geo-Fence of the Queclink device",
        triggers: [
          {
            id: "b9abd3b6",
            name: "enter",
            desc: "Enters Geo-Fence region",
            mode: false,
            attributes: [
              {
                id: "23273fc1",
                name: "latitude",
                desc: "Latitude",
                type: "float",
                unit: "",
                explanation: "",
                order: 1,
                isRequired: true
              },
              {
                id: "23273fc0",
                name: "longitude",
                desc: "Longitude",
                type: "float",
                unit: "",
                explanation: "",
                order: 2,
                isRequired: true
              },
              {
                id: "23273fc2",
                name: "radius",
                desc: "Radius",
                type: "float",
                unit: "",
                explanation: "",
                order: 3,
                isRequired: true
              }
            ]
          },
          {
            id: "pC0OfwWi7",
            name: "leave",
            desc: "Leaves Geo-Fence region",
            mode: false,
            attributes: [
              {
                id: "7OgWvFO8k",
                name: "latitude",
                desc: "Latitude",
                type: "float",
                unit: "",
                explanation: "",
                order: 1,
                isRequired: true
              },
              {
                id: "Ofh2fGjJa",
                name: "longitude",
                desc: "Longitude",
                type: "float",
                unit: "",
                explanation: "",
                order: 2,
                isRequired: true
              },
              {
                id: "8fsxkcNH8",
                name: "radius",
                desc: "Radius",
                type: "float",
                unit: "",
                explanation: "",
                order: 3,
                isRequired: true
              }
            ]
          },
          {
            id: "tPNbHQIXx",
            name: "both",
            desc: "Enters or leaves Geo-Fence region",
            mode: false,
            attributes: [
              {
                id: "pGNENV0s0",
                name: "latitude",
                desc: "Latitude",
                type: "float",
                unit: "",
                explanation: "",
                order: 1,
                isRequired: true
              },
              {
                id: "VrK1PVvn1",
                name: "longitude",
                desc: "Longitude",
                type: "float",
                unit: "",
                explanation: "",
                order: 2,
                isRequired: true
              },
              {
                id: "zpfpXkVCb",
                name: "radius",
                desc: "Radius",
                type: "float",
                unit: "",
                explanation: "",
                order: 3,
                isRequired: true
              }
            ]
          }
        ],
        allowedActions: [
          {
            id: "Njij3YcX7",
            name: "Notification",
            actions: [
              {
                id: "Gg2Lg4FWXa",
                name: "Email",
                unit: "email"
              },
              {
                id: "qmWTp3AcXa",
                name: "SMS",
                unit: "phone"
              }
            ]
          }
        ]
      },
      {
        id: "Cnikbm5Y",
        name: "Light Tamper",
        desc: "Rules on Light Tamper for Queclink device",
        triggers: [
          {
            id: "646f31f9",
            name: "enable",
            desc: "Enable Light Tamper alert",
            mode: false,
            attributes: [
              {
                id: "GjXfj3MHa",
                name: "duration",
                desc: "Duration",
                type: "int",
                unit: "seconds",
                explanation:
                  "Duration the light sensitivity will maintain after which the alarm will be triggered",
                order: 1,
                isRequired: true
              }
            ]
          }
        ],
        allowedActions: [
          {
            id: "NgJmUEfI7",
            name: "Notification",
            actions: [
              {
                id: "Mmuug3AWX7",
                name: "Email",
                unit: "email"
              },
              {
                id: "MgkrjUAkCa",
                name: "SMS",
                unit: "phone"
              }
            ]
          }
        ]
      },
      {
        id: "uYXR3NzR",
        name: "Temperature & Humidity",
        desc: "Rules on Humidity for Queclink device",
        triggers: [
          {
            id: "19e7e20e",
            name: "temp_out_of_range",
            desc: "Temperature & Humidity out of range",
            mode: false,
            attributes: [
              {
                id: "c98ec19c",
                name: "check_interval",
                desc: "Check Interval",
                type: "int",
                unit: "minutes",
                explanation:
                  "The device will turn on the BLE module periodically according to this interval to sample temperature",
                order: 5,
                isRequired: true
              },
              {
                id: "bc1c1c9a",
                name: "max_humidity",
                desc: "Max Humidity",
                type: "float",
                unit: "%",
                explanation: "",
                order: 4,
                isRequired: true
              },
              {
                id: "6c321efa",
                name: "max_temperature",
                desc: "Max Temperature",
                type: "float",
                unit: "°C",
                explanation: "",
                order: 2,
                isRequired: true
              },
              {
                id: "dea58297",
                name: "min_humidity",
                desc: "Min Humidity",
                type: "float",
                unit: "%",
                explanation: "",
                order: 3,
                isRequired: true
              },
              {
                id: "6d1b967f",
                name: "min_temperature",
                desc: "Min Temperature",
                type: "float",
                unit: "°C",
                explanation: "",
                order: 1,
                isRequired: true
              }
            ]
          }
        ],
        allowedActions: [
          {
            id: "GpRTRFcBv",
            name: "Notification",
            actions: [
              {
                id: "Gj2QVQYcBy",
                name: "Email",
                unit: "email"
              },
              {
                id: "Mjf9i1YfCv",
                name: "SMS",
                unit: "phone"
              }
            ]
          }
        ]
      },
      {
        id: "vMJnQUPF",
        name: "Light Sensor",
        desc: "Rules on Light Sensor for Queclink device",
        triggers: [
          {
            id: "af0fee0b",
            name: "above",
            desc: "Light sensitivity higher than threshold",
            mode: false,
            attributes: [
              {
                id: "40001bd4",
                name: "duration",
                desc: "Duration",
                type: "int",
                unit: "seconds",
                explanation:
                  "Duration the light sensitivity will maintain after which the alarm will be triggered",
                order: 2,
                isRequired: true
              },
              {
                id: "8fceb800",
                name: "threshold",
                desc: "Sensitivity Threshold",
                type: "int",
                unit: "seconds",
                explanation: "Enter any value between 1-9",
                order: 1,
                isRequired: true
              }
            ]
          },
          {
            id: "c8dad971",
            name: "below",
            desc: "Light sensitivity lower than threshold",
            mode: false,
            attributes: [
              {
                id: "12c11c98",
                name: "duration",
                desc: "Duration",
                type: "int",
                unit: "seconds",
                explanation:
                  "Duration the light sensitivity will maintain after which the alarm will be triggered",
                order: 2,
                isRequired: true
              },
              {
                id: "ac2ed17d",
                name: "threshold",
                desc: "Sensitivity Threshold",
                type: "int",
                unit: "seconds",
                explanation: "Enter any value between 1-9",
                order: 1,
                isRequired: true
              }
            ]
          }
        ],
        allowedActions: [
          {
            id: "NpvW4AcBy",
            name: "Notification",
            actions: [
              {
                id: "Mm2yW6FcIv",
                name: "Email",
                unit: "email"
              },
              {
                id: "qgfvWUYkBy",
                name: "SMS",
                unit: "phone"
              }
            ]
          }
        ]
      }
    ]
  };
  // City Names
  City: any = ["Florida", "South Dakota", "Tennessee", "Michigan"];

  constructor(public fb: FormBuilder) {}

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    selectedRule: ["", [Validators.required]],
    selectedTrigger: ["", [Validators.required]]
  });

  TriggerData;
  // Choose city using select dropdown
  ruleChange(e) {
    console.log(this.registrationForm.get("selectedRule").value.triggers);
    this.TriggerData = this.registrationForm.get("selectedRule").value.triggers;
    this.registrationForm.get('selectedTrigger').setValue('');

    // this.selectedTrigger = this.testDate.allowedRules.filter(ts => ts.name = this.registrationForm.get('selectedRule').value);
    // this.registrationForm.setControl('selectedRule','');
    // this.selectedRule.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }

  triggerChange() {

  }
  // Getter method to access formcontrols
  get cityName() {
    return this.registrationForm.get("cityName");
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value));
    }
  }
}
