import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import WYDARZENIE_OBJECT from '@salesforce/schema/Wydarzenie__c';
import WYDARZENIE_DATA_FIELD from '@salesforce/schema/Wydarzenie__c.Data__c';
import WYDARZENIE_NAZWA_FIELD from '@salesforce/schema/Wydarzenie__c.Name';
import WYDARZENIE_MIEJSCE_FIELD from '@salesforce/schema/Wydarzenie__c.Miejsce__c';
import WYDARZENIE_OPIS_FIELD from '@salesforce/schema/Wydarzenie__c.Opis__c';

import UCZESTNIK_OBJECT from '@salesforce/schema/Uczestnik__c';
import UCZESTNIK_DATA_FIELD from '@salesforce/schema/Uczestnik__c.Data_ur__c';
import UCZESTNIK_IMIE_FIELD from '@salesforce/schema/Uczestnik__c.Imie__c';
import UCZESTNIK_NAZWISKO_FIELD from '@salesforce/schema/Uczestnik__c.Nazwisko__c';
import UCZESTNIK_EMAIL_FIELD from '@salesforce/schema/Uczestnik__c.Email__c';
export default class Formularz extends LightningElement {

    objectApiNameWydarzenia = WYDARZENIE_OBJECT;
    fieldsWydarzenia = [WYDARZENIE_DATA_FIELD, WYDARZENIE_NAZWA_FIELD, WYDARZENIE_MIEJSCE_FIELD, WYDARZENIE_OPIS_FIELD];

    objectApiNameUczestnicy = UCZESTNIK_OBJECT;
    fieldsUczestnicy = [UCZESTNIK_DATA_FIELD, UCZESTNIK_IMIE_FIELD, UCZESTNIK_NAZWISKO_FIELD, UCZESTNIK_EMAIL_FIELD];

    handleSuccessWydarzenia(event) {
        const toastEventWydarzenia = new ShowToastEvent({
            title: "Utworzono Wydarzenie",
            message: "ID Wydarzenia: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEventWydarzenia);
    }

    handleSuccessUczestnicy(event) {
        const toastEventUczestnicy = new ShowToastEvent({
            title: "Utworzono Uczestnika",
            message: "ID Uczestnika: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEventUczestnicy);
    }
}