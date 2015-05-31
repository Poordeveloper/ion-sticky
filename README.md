# ion-sticky
***Super simple to use***

Just add ion-sticky to ion-content, it will detect dividers and make the active one sticky.

## Demo

[http://codepen.io/Poordeveloper/pen/BNpxrm](http://codepen.io/Poordeveloper/pen/BNpxrm)
## Install

```bash
bower install ion-sticky --save
```

## Usage

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
