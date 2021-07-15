AFRAME.registerComponent('log', {
    schema: {
        message:{type:"string",default:"car.js"}
    },

    init: function () {
        console.log(this.data.message);
    },
});
