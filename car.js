AFRAME.registerComponent('log', {
    schema: {
        message:{type:"string",default:"This is a log"}
    },

    init: function () {
        console.log(this.data.message);
    },
});
