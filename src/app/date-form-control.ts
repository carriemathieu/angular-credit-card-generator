import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {
    setValue(value: string | null, options: any) {

        if (!value) {
            super.setValue('', {...options, emitModelToViewChange: true})
            return;
        }
        // regex: if user inputs anything that is *not* 0-9 OR a '/', revert to current value, then break/return
        if (value.match(/[^0-9]|\/]/gi)) {
            super.setValue(this.value, {...options, emitModelToViewChange: true})
            return;
        }

        if (value.length > 5) {
            super.setValue(this.value, {...options, emitModelToViewChange: true})
            return;
        }

        // if whatever user is trying to change value to is 2, & current length is 3, allow user to delete/ go back & removes '/'
        if (value.length === 2 && this.value.length === 3) {
            super.setValue(value, {...options, emitModelToViewChange: true})
            return;
        }

        if (value.length === 2) {
            super.setValue(value + '/', {...options, emitModelToViewChange: true})
        }
        // super.setValue(value, {...options, emitModelToViewChange: true}) // "super.setValue(value,options)" makes form work as normal w/ reg FormControl
        // emitModelToViewChange: true -> after every key press, view updated value (i.e "value + *", would show * after each key press/character. if false, would just show at end of entire input/value)
    }
}
