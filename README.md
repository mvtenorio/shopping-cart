# Shopping Cart

> A simple web app made with Vue, Vuex and Tailwind CSS

## Motivation

I built this app so I could learn a few things and experiment with others. Below I explain why I chose this stack.

### Vue

I identify with Vue's minimalistic approach to component based apps.They've made a great job at making a tool that is simple and enjoyable to use. Plus, [Single File components](https://vuejs.org/v2/guide/single-file-components.html) are awesome!

I used [Vue PWA template](https://github.com/vuejs-templates/pwa) as a starting point.

### Vuex

Initially, I just used Vue's simplest form of managing state using a one-way data flow: passing data down to child components through props and notifying parents of changes through events. But that's a little tedious once you have more than two layers of components. I then moved all my state to a store, which led me to Vuex since it integrates seamlessly with Vue. You only need to declare it once in the root instance and it makes testing very easy because its state is reactive.

### Tailwind CSS

I came across [Tailwind](https://tailwindcss.com) while building this app. I was not familiar with this utility class based approach to CSS (called Atomic or Functional CSS). At first, I felt the HTML was too cluttered but after getting familiar with the concepts and naming conventions I started to enjoy it. It makes styling your applications a breeze and way faster since you don't need to come up with class names for everything. I almost didn't need to open my CSS file!


## Testing

The template I used comes preconfigured with Karma, Mocha and Chai for unit testing. It works very well. The only change I needed to make was dropping PhantomJS for Chrome Headless because then I could use promises and async/await syntax in my tests without a pollyfill.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests and watch for changes
npm run unit

# run all tests once
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## TODO

- [ ] Create input number compontent
- [ ] Improve visual feedback when adding items to the cart
- [ ] Add option to change the quantity of an item inside the cart
