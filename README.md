# ion-sticky
**ion-sticky** is a lightweight Angular directive for Ionic framework to have sticky list headers

Directive requires no additional dependencies. Just Ionic and Angular. 

***Simple to use***

## Demo

[http://codepen.io/Poordeveloper/pen/BNpxrm](http://codepen.io/Poordeveloper/pen/BNpxrm)

## Usage

```bash
bower install ion-sticky --save
```

```javascript
angular.module('ion-sticky-demo', ['ion-sticky']);
```

```html
<ion-content ion-sticky>
    <ion-list>
        <ion-item class="item-divider"> A </ion-item>
        <ion-item> A1 </ion-item>
        <ion-item> A2 </ion-item>
        ...
        <ion-item class="item-divider"> B </ion-item>
        ....
    </ion-list>
</ion-content>
```
