import {AbstractControl} from '@angular/forms';

export function StartEndDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const startDate = control.get('scStDate');
    const endDate = control.get('scEndDate');
    if(startDate.pristine || endDate.pristine) {
      return null;
    }
    return startDate && endDate && startDate.value > endDate.value ? { 'BeforeError' : true} : null;
}
