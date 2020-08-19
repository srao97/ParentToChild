import { LightningElement } from 'lwc';

export default class ParentToChild extends LightningElement {
    percentage =50;

    percentageChangeHandler(event){
        this.percentage=event.target.value;
    }
}